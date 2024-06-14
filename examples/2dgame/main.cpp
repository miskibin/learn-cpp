#include "circleWithPhisics.hpp"
#include "environment.hpp"
#include <SFML/Graphics.hpp>
#include <iostream>
#include <math.h>
#include <memory>
#include <spdlog/sinks/stdout_color_sinks.h>
#include <spdlog/spdlog.h>
#include <sstream>
int main() {
  // setup logger
  auto logger = spdlog::stdout_color_mt("main");
  logger->set_level(spdlog::level::debug); // Set level to debug
  sf::RenderWindow window(sf::VideoMode(800, 800), "Hello From SFML");
  window.setFramerateLimit(60);
  auto shape = std::make_unique<CircleWithPhysics>(33.f, window.getSize());
  // auto shape = std::make_unique<CircleWithPhysics>(33.f, window.getSize());
  sf::Event event;

  // Load a font
  sf::Font font;
  if (!font.loadFromFile("../resources/arial.ttf")) {
    logger->error("Could not load font");
  }
  sf::Text text;
  text.setFont(font);
  text.setCharacterSize(24); // in pixels
  text.setFillColor(sf::Color::White);
  text.setPosition(10, 10); // top-left corner
  sf::Clock clock;
  Environment *env = Environment::getInstance();
  env->addShape(shape.get());

  while (window.isOpen()) {
    std::stringstream ss;
    ss << "   Shape: " << shape->getPosition().x << " "
       << shape->getPosition().y;
    text.setString(ss.str());

    window.clear();
    window.draw(*shape);
    window.draw(text); // draw the FPS text
    window.display();
    while (window.pollEvent(event)) {
      shape->handleEvent(event);
    }
    env->update(60);
  }

  return 0;
}