#include"include/chess.hpp"
#include <unordered_map>
class DrawableBoard : public chess::Board 
{

    const std::unordered_map<char, std::string> piece{
        {'p', "♟"},
        {' ', " "},
        {'r', "♜"},
        {'n', "♞"},
        {'b', "♝"},
        {'q', "♛"},
        {'k', "♚"},
        {'P', "♙"},
        {'R', "♖"},
        {'N', "♘"},
        {'B', "♗"},
        {'Q', "♕"},
        {'K', "♔"}};
public:
public:
    DrawableBoard(std::string_view fen) : chess::Board(fen) {}  // This line uses chess::Board's constructor

    std::vector<char> resolveFen(const std::string fen) const;
    void draw() const;  
};

std::ostream& operator<<(std::ostream& os, const DrawableBoard& board);