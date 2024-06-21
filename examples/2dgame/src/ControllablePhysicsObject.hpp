#pragma once
#include "PhysicsObject.hpp"

class ControllablePhysicsObject : public PhysicsObject
{
    friend class Engine;

protected:
    bool isControllable = true;

public:
    using PhysicsObject::PhysicsObject;

    void handleInput(sf::Event event)
    {
        if (event.type == sf::Event::KeyPressed)
        {
            if (event.key.code == sf::Keyboard::Left)
            {
                applyForce(sf::Vector2f(-10.f, 0.f));
            }
            else if (event.key.code == sf::Keyboard::Right)
            {
                applyForce(sf::Vector2f(10.f, 0.f));
            }
            else if (event.key.code == sf::Keyboard::Up)
            {
                applyForce(sf::Vector2f(0.f, -10.f));
            }
            else if (event.key.code == sf::Keyboard::Down)
            {
                applyForce(sf::Vector2f(0.f, 10.f));
            }
        }
    }
};
