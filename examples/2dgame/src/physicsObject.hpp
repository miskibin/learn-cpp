#pragma once

#include <SFML/Graphics.hpp>
#include "constants.hpp"
class PhysicsObject
{
friend class Engine;
protected:
    bool isControllable = false;
public:
    sf::Vector2f velocity;
    sf::Vector2f acceleration;
    float mass;
    sf::Shape *shape;

public:
    PhysicsObject(sf::Shape *shape = nullptr, float mass = 1.0f, sf::Vector2f acceleration = sf::Vector2f(0, Constants::G), sf::Vector2f velocity = sf::Vector2f(0, 0))
            : shape(shape), mass(mass), acceleration(acceleration), velocity(velocity)
        {
        }

    void applyForce(sf::Vector2f force)
    {
        this->acceleration += force;
    }
    void update(float dt, float windowWidth, float windowHeight)
    {
        this->velocity += this->acceleration * dt;
        this->shape->move(this->velocity);
        if (this->shape->getPosition().x < 0 || this->shape->getPosition().x > windowWidth)
        {
            this->velocity.x *= -1;
        }
        if (this->shape->getPosition().y < 0 || this->shape->getPosition().y > windowHeight)
        {
            this->velocity.y *= -1;
        }
    }
    ~PhysicsObject() = default;
};
