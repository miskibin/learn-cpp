#pragma once
#include <unordered_map>
#include <fmt/color.h>
#include <fmt/core.h>

enum class Level
{
    DEBUG,
    INFO,
    WARNING,
    ERROR,
    CRITICAL
};

class Logger
{
private:
    static Logger* instance;
    Level level;
    Logger(Level lvl);

    static const std::unordered_map<Level, fmt::color> colorMap;

public:
    Logger(Logger &other) = delete;
    void operator=(const Logger &) = delete;
    void debug(const std::string &message);
    void info(const std::string &message);
    void warn(const std::string &message);
    void err(const std::string &message);
    void critical(const std::string &message);
    static Logger& getInstance(Level level = Level::INFO);
    void logMessage(const  std::string &message, Level level);
    ~Logger();
};
