#include <math.h>
#include <iostream>
#include <spdlog/spdlog.h>
#include <SFML/Graphics.hpp>
#include <sstream>
#include <spdlog/sinks/stdout_color_sinks.h>

class PhysicsShape
{
private:
    std::shared_ptr<spdlog::logger> logger;

public:
    virtual void move(sf::Vector2f velocity) = 0;
    float mass, restitution, friction;
    sf::Vector2f acceleration, velocity, windowSize;
    void applyForce(sf::Vector2f force)
    {
        this->acceleration += force;
    }

    void integrate(float fps)
    {
        this->checkBounds();
        this->velocity += this->acceleration / fps;
        logger->info("Velocity: x: {}, y: {}", this->velocity.x, this->velocity.y);
    }
    void calculateCollisionResponse(const PhysicsShape& other)
    {
        // Calculate the collision response
    }
    void applyImpulse(sf::Vector2f impulse)
    {
        this->velocity += impulse / this->mass;
    }

    virtual void checkBounds() = 0;
    PhysicsShape(float mass, float restitution, float friction, sf::Vector2f acceleration, sf::Vector2f velocity, sf::Vector2u windowSize)
        : mass(mass), restitution(restitution), friction(friction), acceleration(acceleration), velocity(velocity), windowSize(windowSize)
    {
        logger = spdlog::stdout_color_mt("console");
        logger->set_level(spdlog::level::debug); // Set level to debug
        logger->debug("PhysicsShape created");
    }
};