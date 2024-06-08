#include "board.hpp"
#include <algorithm>
#include <vector>

std::ostream &operator<<(std::ostream &os, const DrawableBoard &board)
{
    os << "  a b c d e f g h\n";
    return os;
}

std::vector<char> DrawableBoard::resolveFen(const std::string fen) const
{
    std::vector<char> piecesVec;
    int rowIdx, colIdx = 0;
    for (auto c : fen)
    {
        if (c == '/')
            rowIdx++;
        else
        {
            if (isdigit(c)){
                piecesVec.insert(piecesVec.end(), c - '0', ' ');
                colIdx += c - '0';
            }
            else
            {
                piecesVec.push_back(c);
                colIdx++;
            }
        }
    }
    return piecesVec;
}


void DrawableBoard::draw() const
{
    auto fen = this->getFen();
    auto pieces = resolveFen(fen);
    for (auto i = 0; i < 8; i++)
    {
        for (auto j = 0; j < 8; j++)
        {
            char currentPiece = pieces[8 * i + j];
            // std::cout << " | " << pieces[8 * i + j];
            if (piece.count(currentPiece) > 0) {
                std::cout << " | " << piece.at(currentPiece);
            } else {
                std::cout << " | " << " ";  // Print a space if the piece is not in the map
            }
        }
        std::cout << " |" << std::endl;
    }
}