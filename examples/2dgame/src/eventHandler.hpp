#pragma once
#include <SFML/Graphics.hpp>
#include <vector>
#include <memory>
#include "engine.hpp"
#include "ControllablePhysicsObject.hpp"
#include "spdlog/spdlog.h"
class EventHandler {
private:
    sf::RenderWindow &window;

public:
    EventHandler(sf::RenderWindow &window) : window(window) {}

    void handleEvents(const std::vector<std::shared_ptr<ControllablePhysicsObject>>& objects) {
        sf::Event event;
        while (window.pollEvent(event)) {
            spdlog::debug("Handling event");
            if (event.type == sf::Event::Closed) {
                window.close();
            }
            for (auto &object : objects) {
                object->handleInput(event);
            }
        }
    }
};

