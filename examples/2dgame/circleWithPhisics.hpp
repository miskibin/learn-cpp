#include <SFML/Graphics.hpp>
#include <numeric>
#include <vector>

class CircleWithPhysics : public sf::CircleShape {
 private:
  std::vector<sf::Vector2f> forces{sf::Vector2f(0, 9.81)};
  const float phi = 1013;
  const float pi = 3.14;
  const float C = 1.12;

 public:
  sf::Vector2f velocity{0, 0};
  float mass = 1;
  sf::Vector2u windowSize;

 public:
  CircleWithPhysics(float radius, sf::Vector2u windowSize)
      : sf::CircleShape(radius) {
    setFillColor(sf::Color::Red);
    this->windowSize = windowSize;
  }
  void setFillColor(sf::Color color) { sf::CircleShape::setFillColor(color); }
  sf::Vector2f resolveForces() {
    return std::accumulate(forces.begin(), forces.end(), sf::Vector2f(0, 0));
  }
  sf::Vector2f getAirResistanceF() {
    float speed = std::sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
    float dragMagnitude = 0.5 * C * phi * pi * (getRadius() * getRadius()) * speed * speed;
    sf::Vector2f dragForce = dragMagnitude * (velocity / speed); // Normalize velocity to get direction
    return -dragForce; 
  }

  void setVelocity(float fps) {
    sf::Vector2f forces = this->resolveForces();
    this->velocity.y += forces.y / fps;
    this->velocity.x += (forces.x - getAirResistanceF().x) / fps;
  }
  void bounce() {
    if (this->getPosition().x > this->windowSize.x - 2 * this->getRadius() ||
        this->getPosition().x < 0) {
      this->velocity.x = -this->velocity.x;
    } else if (this->getPosition().y >
                   this->windowSize.y - 2 * this->getRadius() ||
               this->getPosition().y < 0) {
      this->velocity.y = -this->velocity.y;
    }
  }
  void throwUp(int v0) { this->velocity.y = -v0; }

  void updatePosition(float time) {
    this->bounce();
    this->setVelocity(time);
    this->setPosition(this->getPosition().x + this->velocity.x,
                      this->getPosition().y + this->velocity.y);
  }
};