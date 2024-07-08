#pragma once
#include "PhysicsObject.hpp"
#include <spdlog/spdlog.h>
class ControllablePhysicsObject : public PhysicsObject
{
    friend class Engine;


public:
    using PhysicsObject::PhysicsObject;

    void handleInput(sf::Event event)
    {
        if (event.type == sf::Event::KeyPressed)
        {
            if (event.key.code == sf::Keyboard::Left)
            {
                applyImpulse(sf::Vector2f(-2.f, 0.f));
            }
            else if (event.key.code == sf::Keyboard::Right)
            {
                applyImpulse(sf::Vector2f(2.f, 0.f));
            }
            else if (event.key.code == sf::Keyboard::Up)
            {
                applyImpulse(sf::Vector2f(0.f, -2.f));
            }
            else if (event.key.code == sf::Keyboard::Down)
            {
                applyImpulse(sf::Vector2f(0.f, 2.f));
            }
        }
    }
};
