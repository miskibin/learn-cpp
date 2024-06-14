# `=`, `new`, `delete`, `==`, `+=`, etc.

:::tip  It is just like dunder methods in Python
In C++, operators are implemented as functions. These functions can be overloaded to work with user-defined types. 
:::

```cpp
struct Vector2
{
    float x, y;
    Vector2(float x = 0, float y = 0)
        : x(x), y(y) {}

    // Arithmetic operators
    Vector2 operator+(const Vector2& rhs) const {
        return Vector2(x + rhs.x, y + rhs.y);
    }

    Vector2 operator-(const Vector2& rhs) const {
        return Vector2(x - rhs.x, y - rhs.y);
    }

    Vector2 operator*(const float scalar) const {
        return Vector2(x * scalar, y * scalar);
    }

    Vector2 operator/(const float scalar) const {
        return Vector2(x / scalar, y / scalar);
    }

    // Compound assignment operators
    Vector2& operator+=(const Vector2& rhs) {
        x += rhs.x;
        y += rhs.y;
        return *this;
    }

    Vector2& operator-=(const Vector2& rhs) {
        x -= rhs.x;
        y -= rhs.y;
        return *this;
    }

    Vector2& operator*=(const float scalar) {
        x *= scalar;
        y *= scalar;
        return *this;
    }

    Vector2& operator/=(const float scalar) {
        x /= scalar;
        y /= scalar;
        return *this;
    }

    // Comparison operators
    bool operator==(const Vector2& rhs) const {
        return x == rhs.x && y == rhs.y;
    }

    bool operator!=(const Vector2& rhs) const {
        return !(*this == rhs);
    }
};
```
Usage:
```cpp
Vector2 a(1.0f, 2.0f);
Vector2 b(2.0f, 3.0f);

Vector2 c = a + b; // c = (3.0f, 5.0f)
Vector2 d = a - b; // d = (-1.0f, -1.0f)
Vector2 e = a * 2.0f; // e = (2.0f, 4.0f)
Vector2 f = a / 2.0f; // f = (0.5f, 1.0f)
```