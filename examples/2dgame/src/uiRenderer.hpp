#include <SFML/Graphics.hpp>
#include <spdlog/spdlog.h>

class UIRenderer
{
public:
    UIRenderer(sf::RenderWindow &window) : window(window)
    {
        if (!font.loadFromFile("../resources/arial.ttf"))
        { // Load the font
            spdlog::error("Could not load font");
            throw std::runtime_error("Failed to load font.");
        }
    }
    sf::Text configureText(const std::string &textContent, unsigned int charSize = 24, sf::Color color = sf::Color::White, sf::Vector2f position = sf::Vector2f(10.f, 10.f))
    {
        sf::Text text;
        text.setFont(font);
        text.setString(textContent);
        text.setCharacterSize(charSize); // in pixels, e.g., 24
        text.setFillColor(color);
        text.setPosition(position); // Set the initial position
        return text;
    }
    void drawText(const sf::Text &text)
    {
        window.draw(text);
    }

private:
    sf::RenderWindow &window;
    sf::Font font;
};
