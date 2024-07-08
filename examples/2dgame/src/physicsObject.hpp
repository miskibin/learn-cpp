#pragma once
#include <spdlog/spdlog.h>
#include <SFML/Graphics.hpp>
#include "constants.hpp"
class PhysicsObject
{
    friend class Engine;

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

    void applyImpulse(sf::Vector2f impulse)
    {
        this->velocity += impulse;
    }
    void update(float dt, float windowWidth, float windowHeight)
    {
        this->velocity += this->acceleration * dt;
        this->shape->move(this->velocity);
        if (this->shape->getPosition().x < 0 || this->shape->getPosition().x + this->shape->getLocalBounds().width > windowWidth)
        {
            this->velocity.x *= -1;
        }
        if (this->shape->getPosition().y < 0 || this->shape->getPosition().y + this->shape->getLocalBounds().height > windowHeight)
        {
            this->velocity.y *= -1;
        }
    }
    virtual ~PhysicsObject() {}
    // ~PhysicsObject() = default;
};
std::ostream &operator<<(std::ostream &os, const PhysicsObject &obj)
{
    os << "PhysicsObject: " << " Mass: " << obj.mass << " Acceleration: " << obj.acceleration.x << ", " << obj.acceleration.y << std::endl;
    return os;
}
