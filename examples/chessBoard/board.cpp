#include "board.hpp"
#include <algorithm>

std::ostream &operator<<(std::ostream &os, const Board &board)
{
    os << "  a b c d e f g h\n";
    return os;
}
const static std::unordered_map<char, char> piece{
    {'p', '♟'},
    {'r', '♜'},
    {'n', '♞'},
    {'b', '♝'},
    {'q', '♛'},
    {'k', '♚'},
    {'P', '♙'},
    {'R', '♖'},
    {'N', '♘'},
    {'B', '♗'},
    {'Q', '♕'},
    {'K', '♔'}};

void Board::draw(char (&pieces)[64])
{   
    for (auto i = 0; i < 8; i++)
    {
        for (auto j = 0; j < 8; j++)
        {
            std::cout<<" | "<<pieces[8*i+j];
        }
        std::cout<<" |"<<std::endl;
        
    }
    
}
void Board::draw()
{   
    // 64 spaces
    char pieces[64];
    std::fill_n(pieces, 64, ' ');
    this->draw(pieces);
}
