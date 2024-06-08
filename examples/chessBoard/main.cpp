#include "board.cpp"
#include <format>
#include <thread>
#include <chrono>
#include <algorithm>
#include "include/chess.hpp"
        #include <cstdlib>  // for rand()

using namespace chess;
void playGame(DrawableBoard *board){
    std::string move;
    while (true){
        board->draw();
        std::cout<<"\n\n";
        Movelist moves;
        movegen::legalmoves(moves, *board);
        int randomIndex = rand() % moves.size();  // generate a random index
        Move move = moves[randomIndex];  // get the move at the random index
        board->makeMove(move);
        board->draw();
        std::cout<<"\n\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(200));

        // Check if the game is over
        auto [gameResultReason, gameResult] = board->isGameOver();
        if (gameResultReason != GameResultReason::NONE) {
            // The game is over, break the loop
            break;
        }
    }
}


int main () {
    DrawableBoard board = DrawableBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    playGame(&board);
    return 0;
}