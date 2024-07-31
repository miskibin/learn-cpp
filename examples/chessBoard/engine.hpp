#pragma once
#include "logger.hpp"
#include "board.hpp"
#include "include/chess.hpp"
#include <thread>
#include <chrono>
#include <algorithm>
#include <map>
#include <string>
#include <numeric>
#include <unordered_map>
#include <random>
#include <limits>
#include <stdexcept>
#include <cstdint>
#include "constants.hpp"

using namespace chess;

class Engine
{
private:
    Logger &logger = Logger::getInstance();

    std::unordered_map<std::uint64_t, int> transpositionTable;
    const std::unordered_map<char, int> pieceValue{
        {'p', -100}, {'n', -310}, {'b', -320}, {'r', -500}, {'q', -900}, {'k', 0}, {'P', 100}, {'N', 310}, {'B', 320}, {'R', 500}, {'Q', 900}, {'K', 0}};
    const int searchDepth;

public:
    Engine(int deep = 2) : searchDepth(deep) {
                           };
    ~Engine() = default;
    Move makeMove(DrawableBoard &board);
    int getBestEval(DrawableBoard &board, int depth = 0, float alpha = -1000, float beta = 1000);
    int evaluatePosition(const DrawableBoard &board) const;
    int scoreMoveForSorting(const Board &board, const Move &move);

    void sortMoves(const Board &board, Movelist &moves)
    {
        std::ranges::sort(moves,
                          [this, &board](const Move &a, const Move &b)
                          {
                              return scoreMoveForSorting(board, a) > scoreMoveForSorting(board, b);
                          });
    }

    int getPieceValue(char piece) const
    {
        auto it = pieceValue.find(piece);
        return (it != pieceValue.end()) ? it->second : 0;
    }
};
