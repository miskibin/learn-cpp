#include "engine.hpp"
Move Engine::makeMove(DrawableBoard &board)
{
    transpositionTable.clear();
    Movelist moves;
    movegen::legalmoves<movegen::MoveGenType::ALL>(moves, board);
    // i want to sort moves here captures + other moves
    if (moves.empty())
    {
        throw std::runtime_error("No legal moves available.");
    }
    sortMoves(board, moves);

    std::pair<Move, float> bestMove = {moves.front(), (board.sideToMove() == Color::WHITE) ? std::numeric_limits<float>::lowest() : std::numeric_limits<float>::max()};

    float currentMultiplier = (board.sideToMove() == Color::WHITE) ? 1 : -1;

    for (const auto &m : moves)
    {
        board.makeMove(m);
        float e = getBestEval(board, searchDepth - 1);
        if (e * currentMultiplier > bestMove.second * currentMultiplier)
        {
            bestMove = {m, e};
        }
        board.unmakeMove(m);
    }

    logger.info("Current FEN: " + board.getFen() + " e: " + std::to_string(bestMove.second) + " curr: " + std::to_string(evaluatePosition(board)));
    // logger.debug("TranspositionTable size: " + std::to_string(transpositionTable.size()));
    return bestMove.first;
}

int Engine::getBestEval(DrawableBoard &board, int depth, float alpha, float beta)
{
    // std::uint64_t hash = board.zobrist();
    // if (transpositionTable.find(hash) != transpositionTable.end())
    // {
    //     return transpositionTable[hash];
    // }

    // if (depth == 0 || board.isRepetition())
    if (depth == 0 || board.isGameOver().second != GameResult::NONE)
    {
        // auto eval =  evaluatePosition(board);
        // transpositionTable[hash] = eval;
        return evaluatePosition(board);
    }

    Movelist moves;
    movegen::legalmoves(moves, board);
    if (moves.empty())
        return evaluatePosition(board);

    sortMoves(board, moves);

    float bestEval = (board.sideToMove() == Color::WHITE) ? -1000 : 1000;

    for (const auto &m : moves)
    {
        board.makeMove(m);
        float eval = getBestEval(board, depth - 1, alpha, beta);
        board.unmakeMove(m);

        if (board.sideToMove() == Color::WHITE)
        {
            bestEval = std::max(bestEval, eval);
            alpha = std::max(alpha, bestEval);
            if (beta <= alpha)
            {
                break; // Beta cutoff
            }
        }
        else
        {
            bestEval = std::min(bestEval, eval);
            beta = std::min(beta, bestEval);
            if (beta <= alpha)
            {
                break; // Alpha cutoff
            }
        }
    }

    // transpositionTable[hash] = bestEval;
    return bestEval;
}

int Engine::evaluatePosition(const DrawableBoard &board) const
{
    auto [reason, result] = board.isGameOver();
    if (result == GameResult::WIN)
        return board.sideToMove() == Color::WHITE ? 20000 : -20000;
    else if (result == GameResult::LOSE)
        return board.sideToMove() == Color::WHITE ? -20000 : 20000;
    else if (result == GameResult::DRAW)
    {
        return 0;
    }

    int score = 0;
    int whiteMaterial = 0, blackMaterial = 0;

    for (int i = 0; i < 64; ++i)
    {
        Square sq(i);
        Piece piece = board.at(sq);
        if (piece == Piece::NONE)
            continue;

        int pieceValue = 0;
        const std::array<int, 64> *pst = nullptr;

        switch (piece.type().internal())
        {
        case PieceType::underlying::PAWN:
            pieceValue = EvalConstants::PAWN_VALUE;
            pst = &EvalConstants::PAWN_PST;
            break;
        case PieceType::underlying::KNIGHT:
            pieceValue = EvalConstants::KNIGHT_VALUE;
            pst = &EvalConstants::KNIGHT_PST;
            break;
        case PieceType::underlying::BISHOP:
            pieceValue = EvalConstants::BISHOP_VALUE;
            pst = &EvalConstants::BISHOP_PST;
            break;
        case PieceType::underlying::ROOK:
            pieceValue = EvalConstants::ROOK_VALUE;
            pst = &EvalConstants::ROOK_PST;
            break;
        case PieceType::underlying::QUEEN:
            pieceValue = EvalConstants::QUEEN_VALUE;
            pst = &EvalConstants::QUEEN_PST;
            break;
        case PieceType::underlying::KING:
            pieceValue = EvalConstants::KING_VALUE;
            pst = &EvalConstants::KING_PST;
            break;
        default:
            continue;
        }

        int pstValue = (*pst)[piece.color() == Color::WHITE ? i : (63 - i)];

        if (piece.color() == Color::WHITE)
        {
            score += pieceValue + pstValue;
            whiteMaterial += pieceValue;
        }
        else
        {
            score -= pieceValue + pstValue;
            blackMaterial += pieceValue;
        }
    }

    // Bonus for having the right to move
    score += (board.sideToMove() == Color::WHITE) ? 10 : -10;

    // Penalize for being in check
    if (board.inCheck())
        score += (board.sideToMove() == Color::WHITE) ? -50 : 50;

    // Encourage development in the opening
    // if (whiteMaterial > 3000 && blackMaterial > 3000)
    // {
    Movelist moves;
    movegen::legalmoves(moves, board);
    score += (board.sideToMove() == Color::WHITE) ? moves.size() * 2 : -moves.size() * 2;
    // }

    return score;
}



int Engine::scoreMoveForSorting(const Board &board, const Move &move)
{
    int score = 0;
    if (board.isCapture(move))
    {
        char capturedPiece = static_cast<char>(board.at(move.to()));
        char movingPiece = static_cast<char>(board.at(move.from()));
        score = 10 * std::abs(getPieceValue(capturedPiece)) - std::abs(getPieceValue(movingPiece));
    }
    if (move.typeOf() == Move::PROMOTION)
    {
        char promotedPiece = static_cast<char>(Piece(move.promotionType(), board.sideToMove()));
        score += getPieceValue(promotedPiece);
    }
    return score;
}