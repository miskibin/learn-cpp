#include <math.h>
#include <iostream>

#include <SFML/Graphics.hpp>
#include <sstream>

#include "circleWithPhisics.hpp"

int main(int argc, char const *argv[]) {
  sf::RenderWindow window(sf::VideoMode(600, 600), "Hello From SFML");
  window.setFramerateLimit(60);
  auto shape = CircleWithPhysics(33.f, window.getSize());
  shape.setFillColor(sf::Color::Magenta);
  sf::Event event;

  // Load a font
  sf::Font font;
  if (!font.loadFromFile("arial.ttf")) {
    // handle error
  }

  // Create a text object
  sf::Text text;
  text.setFont(font);
  text.setCharacterSize(24);  // in pixels
  text.setFillColor(sf::Color::White);
  text.setPosition(10, 10);  // top-left corner

  // Create a clock for measuring the time elapsed
  sf::Clock clock;

  while (window.isOpen()) {
    // Calculate FPS
    sf::Time elapsed = clock.restart();
    float fps = 1.f / elapsed.asSeconds();

    // Convert the fps to a string
    std::stringstream ss;
    // show only first 5 chars
    ss << "FPS: " << fps << "   Shape: " << shape.getPosition().x << " "
       << shape.getPosition().y;
    text.setString(ss.str());

    window.clear();
    window.draw(shape);
    window.draw(text);  // draw the FPS text
    window.display();
    std::cout<<"velocity "<<shape.velocity.x<<": "<<shape.velocity.y <<std::endl;
    std::cout<<"Position "<<shape.getPosition().x<<": "<<shape.getPosition().y <<std::endl;
    while (window.pollEvent(event)) {
      // check the type of the event...
      switch (event.type) {
        // window closed
        case sf::Event::Closed:
          window.close();
          break;

        // key pressed
        case sf::Event::KeyPressed: {
          if (event.key.code == sf::Keyboard::Space) {
            std::cout<<"setting velocity "<<shape.velocity.x<<": "<<shape.velocity.y <<std::endl;
            shape.throwUp(3.f);
          }
          if (event.key.code == sf::Keyboard::D &&
              shape.getPosition().x < window.getSize().x - 20) {
            shape.velocity.x += 2;
          }
          if (event.key.code == sf::Keyboard::S &&
              shape.getPosition().y < window.getSize().y - 20) {
            shape.setPosition(shape.getPosition().x,
                              shape.getPosition().y + 10);
          }
          if (event.key.code == sf::Keyboard::A && shape.getPosition().x > 0) {
            shape.velocity.x -= 2;
          }
          if (event.key.code == sf::Keyboard::W && shape.getPosition().y > 0) {
            shape.setPosition(shape.getPosition().x,
                              shape.getPosition().y - 10);
          }

        } break;

        // we don't process other types of events
        default:
          break;
      }
    }
      shape.updatePosition(60);
  }

  return 0;
}