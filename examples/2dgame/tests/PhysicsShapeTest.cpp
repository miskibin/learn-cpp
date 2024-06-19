#include "gtest/gtest.h"
#include "PhysicsObject.hpp"
#include "engine.hpp"
#include <SFML/Graphics.hpp>

// Test for PhysicsObject
TEST(PhysicsObjectTest, ApplyForce) {
  sf::CircleShape shape(50.f);
  PhysicsObject obj(&shape);
  sf::Vector2f initialAcceleration = obj.acceleration;
  obj.applyForce(sf::Vector2f(10.f, 10.f));
  ASSERT_EQ(obj.acceleration, initialAcceleration + sf::Vector2f(10.f, 10.f));
}

// Test for Engine
TEST(EngineTest, Singleton) {
  sf::RenderWindow window(sf::VideoMode(800, 800), "Test Window");
  Engine* engine1 = Engine::getInstance(window);
  Engine* engine2 = Engine::getInstance(window);
  ASSERT_EQ(engine1, engine2);
}

TEST(EngineTest, AddObject) {
  sf::RenderWindow window(sf::VideoMode(800, 800), "Test Window");
  Engine* engine = Engine::getInstance(window);
  sf::CircleShape shape(50.f);
  PhysicsObject obj(&shape);
  engine->add(&obj);
  // Assuming you have a method to get the objects
  ASSERT_EQ(engine->getObjects().back(), &obj);
}
