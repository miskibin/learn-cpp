#include "board.cpp"
#include <format>

#include <algorithm>
#include "include/chess.hpp"

using namespace chess;

void playGame(DrawableBoard *board){
    std::string move;
    while (true){
        board->draw();
        Movelist moves;
        movegen::legalmoves(moves, *board);
        int counter = 0;
        for (const auto &m : moves) {
            std::cout << uci::moveToUci(m) << std::endl;
            counter++;
            if (counter == 3) {
                break;
            }
        }
        std::cout << "Enter move: ";
        std::cin >> move;
        auto moveObj = uci::uciToMove(*board, move);
        if (move == "q"){
            break;
        }
        board->makeMove(moveObj);
        board->draw();
        std::cout<<std::endl;
    }
}


int main () {
    DrawableBoard board = DrawableBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    playGame(&board);
    return 0;
}