#pragma once
#include "PhysicsObject.hpp"
#include "ControllablePhysicsObject.hpp"
#include <SFML/Graphics.hpp>
#include <memory>
#include <spdlog/sinks/stdout_color_sinks.h>
#include <spdlog/spdlog.h>
class Engine
{
private:
    std::shared_ptr<spdlog::logger> logger;
    static Engine *instance;
    std::vector<PhysicsObject *> objects;
    sf::RenderWindow &window;

public:
    Engine(sf::RenderWindow &window) : window(window)
    {
        logger = spdlog::stdout_color_mt("Engine");
        logger->set_level(spdlog::level::debug);
        logger->debug("Initialized Engine");
    }

    Engine(const Engine &) = delete;
    Engine &operator=(const Engine &) = delete;
    static Engine *getInstance(sf::RenderWindow &window)
    {
        if (!instance)
            instance = new Engine(window);
        return instance;
    }

    const std::vector<ControllablePhysicsObject *> getControllableObjects()
    {
        std::vector<ControllablePhysicsObject *> controllableObjects;
        for (auto object : this->objects)
        {
            if (dynamic_cast<ControllablePhysicsObject*>(object)) 
            {
                controllableObjects.push_back(static_cast<ControllablePhysicsObject *>(object));
            }
        }
        return controllableObjects;
    }

    void add(PhysicsObject *const object)
    {
        objects.push_back(object);
    }
    std::vector<PhysicsObject *> getObjects()
    {
        return objects;
    }
    void draw()
    {
        for (auto object : this->objects)
        {
            window.draw(*object->shape);
        }
    }
    void update(float dt)
    {
        for (auto object : this->objects)
        {
            object->update(dt, window.getSize().x, window.getSize().y);
        }
    }
};

Engine *Engine::instance = 0;