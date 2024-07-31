#include "logger.hpp"

void Logger::debug(const std::string &message)
{
    this->logMessage(message, Level::DEBUG);
}

void Logger::info(const std::string &message)
{
    this->logMessage(message, Level::INFO);
}

void Logger::warn(const std::string &message)
{
    this->logMessage(message, Level::WARNING);
}

void Logger::err(const std::string &message)
{
    this->logMessage(message, Level::ERROR);
}

void Logger::critical(const std::string &message)
{
    this->logMessage(message, Level::CRITICAL);
}

Logger *Logger::instance = nullptr;

const std::unordered_map<Level, fmt::color> Logger::colorMap = {
    {Level::DEBUG, fmt::color::cyan},
    {Level::INFO, fmt::color::green},
    {Level::WARNING, fmt::color::yellow},
    {Level::ERROR, fmt::color::red},
    {Level::CRITICAL, fmt::color::magenta}};

Logger::Logger(Level lvl) : level(lvl) {}

Logger &Logger::getInstance(Level level)
{
    if (instance == nullptr)
    {
        instance = new Logger(level);
    }
    return *instance;
}

void Logger::logMessage(const std::string &message, Level level)
{
    auto color = colorMap.at(level);
    fmt::print(fg(color), "{}\n", message);
}

Logger::~Logger()
{
    delete instance;
}