#include "src/PhysicsObject.hpp"
#include "src/controllablePhysicsObject.hpp"

#include <SFML/Graphics.hpp>
#include <iostream>
#include <math.h>
#include <memory>
#include <spdlog/sinks/stdout_color_sinks.h>
#include <spdlog/spdlog.h>
#include <sstream>
#include "src/eventHandler.hpp"
#include "src/engine.hpp"
#include "src/uiRenderer.hpp"

std::shared_ptr<spdlog::logger> setupLogger()
{
    auto logger = spdlog::stdout_color_mt("main");
    logger->set_level(spdlog::level::debug); // Set level to debug
    return logger;
}

int main()
{
    sf::RenderWindow window(sf::VideoMode(800, 800), "Physics Engine");
    window.setFramerateLimit(122);
    UIRenderer uiRenderer(window);
    Engine *engine = Engine::getInstance(window);
    sf::RectangleShape rect(sf::Vector2f(50.f, 50.f));
    rect.setFillColor(sf::Color::Red);
    rect.setPosition(100.f, 100.f);
    sf::CircleShape circ(25.f);
    EventHandler eventHandler(window);
    circ.setFillColor(sf::Color::Green);
    ControllablePhysicsObject r{&rect, 1.0f, sf::Vector2f(0, Constants::G), sf::Vector2f(0, 0)};
    PhysicsObject obj = PhysicsObject(&circ, 1.0f, sf::Vector2f(0, Constants::G), sf::Vector2f(0, 0));
    engine->add(&r);
    engine->add(&obj);
    sf::Text fpsText = uiRenderer.configureText("FPS: ", 24, sf::Color::White, sf::Vector2f(10.f, 10.f));
    sf::Clock clock;
    sf::Event event;
    while (window.isOpen())
    {

        auto fps = 1.f / clock.restart().asSeconds();
        fpsText.setString("FPS: " + std::to_string(static_cast<int>(fps)));
        window.clear();
        engine->update(clock.restart().asSeconds());
        engine->draw();
        uiRenderer.drawText(fpsText);
        window.display();
        eventHandler.handleEvents(engine->getControllableObjects(), event);
    }

    return 0;
}
