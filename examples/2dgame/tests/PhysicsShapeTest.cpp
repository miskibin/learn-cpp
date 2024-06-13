#include "../src/PhysicsShape.hpp"
#include <SFML/System/Vector2.hpp>
#include <gtest/gtest.h>

class ConcretePhysicsShape : public PhysicsShape {
public:
  using PhysicsShape::PhysicsShape;
  void checkBounds() override {}
};

class PhysicsShapeTest : public ::testing::Test {
protected:
  std::unique_ptr<ConcretePhysicsShape> shape;

  void SetUp() override {
    shape = std::make_unique<ConcretePhysicsShape>(
        1.0f, 0.5f, 0.3f, sf::Vector2f(0, 0), sf::Vector2f(0, 0),
        sf::Vector2u(800, 600));
  }

  void TearDown() override { shape.reset(); }
};

TEST_F(PhysicsShapeTest, ConstructorTest) {
  EXPECT_EQ(shape->mass, 1.0f);
  EXPECT_EQ(shape->restitution, 0.5f);
  EXPECT_EQ(shape->friction, 0.3f);
  EXPECT_EQ(shape->acceleration, sf::Vector2f(0, 0));
  EXPECT_EQ(shape->velocity, sf::Vector2f(0, 0));
}

TEST_F(PhysicsShapeTest, ApplyForceTest) {
  shape->applyForce(sf::Vector2f(1, 1));
  EXPECT_EQ(shape->acceleration, sf::Vector2f(1, 1));
}

TEST_F(PhysicsShapeTest, ApplyImpulseTest) {
  shape->applyImpulse(sf::Vector2f(1, 1));
  EXPECT_EQ(shape->velocity, sf::Vector2f(1, 1));
}