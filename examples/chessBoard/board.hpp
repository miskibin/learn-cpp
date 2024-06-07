#include<iostream>
#include<unordered_map>

class Board
{
private:
    /* data */
public:
     const std::unordered_map<char,char> piece;
    std::string pdn;
    
    Board(std::string pdn): pdn(pdn){};
    void draw(char (&pieces)[64]);
    void draw();

};
std::ostream& operator<<(std::ostream& os, const Board& board);