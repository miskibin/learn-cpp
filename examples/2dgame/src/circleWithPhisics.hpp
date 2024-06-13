#include "PhysicsShape.hpp"
#include <SFML/Graphics.hpp>

class CircleWithPhysics : public sf::CircleShape, public PhysicsShape {
public:
  CircleWithPhysics(float radius, sf::Vector2u windowSize)
      : sf::CircleShape(radius),
        PhysicsShape(1.0f, 0.5f, 0.5f, sf::Vector2f(0, 9.81), sf::Vector2f(0, 0),
                     windowSize) {
    setFillColor(sf::Color::Red);
  }

  void setFillColor(sf::Color color) { sf::CircleShape::setFillColor(color); }

  void update(float fps) {
    this->integrate(fps);
    this->move(this->velocity);
  }

  void checkBounds() override {
    if (this->getPosition().x > this->windowSize.x - 2 * this->getRadius() ||
        this->getPosition().x < 0) {
      this->velocity.x = -this->velocity.x;
    }
    if (this->getPosition().y > this->windowSize.y - 2 * this->getRadius() ||
        this->getPosition().y < 0) {
      this->velocity.y = -this->velocity.y;
    }
  }
  void handleEvent(const sf::Event &event) {
    switch (event.type) {
    case sf::Event::KeyPressed: {
      if (event.key.code == sf::Keyboard::Space) {
        applyImpulse(sf::Vector2f(0, -10));
      }
      if (event.key.code == sf::Keyboard::D &&
          getPosition().x < windowSize.x - 20) {
        velocity.x += 2;
      }
      if (event.key.code == sf::Keyboard::S &&
          getPosition().y < windowSize.y - 20) {
        setPosition(getPosition().x, getPosition().y + 10);
      }
      if (event.key.code == sf::Keyboard::A && getPosition().x > 0) {
        velocity.x -= 2;
      }
      if (event.key.code == sf::Keyboard::W && getPosition().y > 0) {
        setPosition(getPosition().x, getPosition().y - 10);
      }
    } break;
    default:
      break;
    }
  }
};