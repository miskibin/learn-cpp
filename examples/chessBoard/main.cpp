#include <fmt/core.h>
#include <string_view>
#include <thread>
#include <chrono>
#include <algorithm>
#include "include/chess.hpp"
#include "board.hpp"
#include <iostream>
#include <iomanip>
#include <ctime>
#include <sstream>
#include <fstream>
#include <cstdlib> // for rand()
#include "logger.cpp"
#include "engine.cpp"
using namespace fmt;
using namespace chess;

// Function to convert GameResultReason to string

// Function to convert GameResult to string

const std::map<GameResultReason, std::string_view> gameReasonToStr{
    {GameResultReason::CHECKMATE, "CHECKMATE"},
    {GameResultReason::FIFTY_MOVE_RULE, "FIFTY_MOVE_RULE"},
    {GameResultReason::INSUFFICIENT_MATERIAL, "INSUFFICIENT_MATERIAL"},
    {GameResultReason::NONE, "NONE"},
    {GameResultReason::STALEMATE, "STALEMATE"},
    {GameResultReason::THREEFOLD_REPETITION, "THREEFOLD_REPETITION"},
};
const std::map<GameResult, std::string_view> gameResultToStr{
    {GameResult::NONE, "ongoing"},
    {GameResult::DRAW, "DRAW"},
    {GameResult::WIN, "WIN"},
    {GameResult::LOSE, "LOSE"},
};

double playGame(DrawableBoard *board, bool draw = true, int sleep = 0, int deep = 2)
{
    auto e = Engine(deep);
    std::string move;
    std::vector<double> moveTimes; // Vector to store move times

    while (true)
    {
        auto start = std::chrono::high_resolution_clock::now(); // Start time

        auto move = e.makeMove(*board);

        auto end = std::chrono::high_resolution_clock::now(); // End time
        std::chrono::duration<double> duration = end - start;
        moveTimes.push_back(duration.count()); // Store the move time

        // Sleep for the specified duration
        std::this_thread::sleep_for(std::chrono::seconds(sleep));

        board->makeMove(move);
        if (draw)
            board->draw();
        auto [gameResultReason, gameResult] = board->isGameOver();
        if (gameResultReason != GameResultReason::NONE)
        {
            std::cout << "MOVES " << board->fullMoveNumber() << " " << gameResultToStr.find(gameResult)->second << " " << gameReasonToStr.find(gameResultReason)->second << "\n";
            break;
        }
    }

    // Calculate the average move time
    double totalMoveTime = std::accumulate(moveTimes.begin(), moveTimes.end(), 0.0);
    double averageMoveTime = totalMoveTime / moveTimes.size();
    std::cout << "Average time per move: " << averageMoveTime << " seconds\n";
    return averageMoveTime;
}

void createReport(float averageMoveTime, int totalGames, int white, int draws, int depth)
{
    std::time_t now = std::time(nullptr);
    std::tm *ltm = std::localtime(&now);
    std::ostringstream timeStream;
    timeStream << std::put_time(ltm, "%Y-%m-%d %H:%M:%S");

    // Print to console
    std::cout << "============ depth: " << depth << "=====" << timeStream.str() << "\n";
    std::cout << "Average time per move: " << averageMoveTime << " seconds\n";
    std::cout << "Total games: " << totalGames << "\n";
    std::cout << "White wins: " << white << "\n";
    std::cout << "Draws: " << draws << "\n";
    std::cout << "Black wins: " << (totalGames - white - draws) << "\n\n";

    // Append to file
    std::ofstream stream("report.txt", std::ios::app);
    stream << "======== depth: " << depth << " DATE: " << timeStream.str() << " ========\n";
    stream << "Average time per move: " << averageMoveTime << " seconds\n";
    stream << "Total games: " << totalGames << "\n";
    stream << "White wins: " << white << "\n";
    stream << "Draws: " << draws << "\n";
    stream << "Black wins: " << (totalGames - white - draws) << "\n\n";
    stream.close();
}
int main()
{

    static constexpr std::array<std::string_view, 10> openings{
        "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "rnbqkb1r/pppppp1p/5np1/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
        "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
        "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
        "rnbqk1nr/pppp1ppp/8/4p3/1b2P3/3P4/PPP2PPP/RNBQKBNR w KQkq - 1 3",
        "rnbqkb1r/ppp1pppp/3p1n2/8/2P5/1P3N2/P2PPPPP/RNBQKB1R b KQkq c3 0 3",
        "rnbqkb1r/pppppppp/5n2/8/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq - 2 2",
        "rnbqkb1r/pppppppp/5n2/8/8/3P4/PPP1PPPP/RNBQKBNR w KQkq - 1 2"};
    std::vector<double> moveTimes; // Vector to store move times
    const int DEPTH = 3;
    int whiteWins = 0, draws = 0;
    for (auto i = 0; i < (int)openings.size(); i++)
    {
        DrawableBoard board = DrawableBoard(std::move(openings[i]));
        moveTimes.push_back(playGame(&board, false, 0, DEPTH));
        auto [gameResultReason, gameResult] = board.isGameOver();
        if (board.sideToMove() == Color::BLACK && gameResult == GameResult::LOSE)
            whiteWins++;
        else if (gameResult == GameResult::DRAW)
            draws++;
    }
    double totalMoveTime = std::accumulate(moveTimes.begin(), moveTimes.end(), 0.0);
    double averageMoveTime = totalMoveTime / moveTimes.size();
    createReport(averageMoveTime, openings.size(), whiteWins, draws, DEPTH);
    return 0;
}