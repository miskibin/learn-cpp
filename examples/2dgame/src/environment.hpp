#include "PhysicsShape.hpp"
#include <SFML/Graphics.hpp>

class Environment
{
private:
    std::shared_ptr<spdlog::logger> logger;
    static Environment* instance;
    std::vector<PhysicsShape*> shapes;
    Environment()
    {
        logger = spdlog::stdout_color_mt("environment");
        logger->set_level(spdlog::level::debug); // Set level to debug
        logger->debug("Environment created");
    }

public:
    Environment(const Environment&) = delete;
    Environment& operator=(const Environment&) = delete;
    static Environment* getInstance()
    {
        if (!instance)
            instance = new Environment;
        return instance;
    }
    void addShape(PhysicsShape* shape)
    {
        shapes.push_back(shape);
    }
    void update(float fps)
    {
        for (auto shape : shapes)
        {
            shape->integrate(fps);
            shape->move(shape->velocity);
        }
    }

};

// Initialize pointer to zero so that it can be initialized in first call to getInstance
Environment* Environment::instance = 0;