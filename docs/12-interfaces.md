# Interfaces in C++

In C++, interfaces are implemented using abstract classes, defined by having at least one pure virtual function. These classes cannot be instantiated directly and must be extended by other classes. Interfaces enforce that all derived classes implement specific behaviors.

:::note in python it would be
```python
from abc import ABC, abstractmethod

class Interface(ABC):
    @abstractmethod
    def method(self):
        pass
```
:::

## Simple Interface Example

Here's a straightforward example using a pure virtual function to define an interface in C++:

```cpp
class Entity {
public:
    virtual void getClassName() = 0;  // Pure virtual function
};

class Player : public Entity {
public:
    void getClassName() override {
        std::cout << "Player" << std::endl;
    }
};
```

In this setup, `Entity` serves as an interface, and `Player` is a concrete class that implements the interface.

## More Complex Interface

Interfaces can be used for more complex behaviors, such as enforcing a printable capability on various objects:

```cpp
class Printable {
public:
    virtual std::string print() = 0;  // Interface method
};

class Entity : public Printable {
public:
    std::string name;
    Entity(const std::string& name) : name(name) {}
    std::string print() override {
        return name;
    }
};

class Player : public Entity {
public:
    using Entity::Entity;  // Inherits constructor
};

void print(Printable* obj) {
    std::cout << obj->print() << std::endl;
}

int main() {
    Entity e("Entity");
    print(&e);
    print(new Player("Player"));  // Uses Entity's print as Player doesn't override it
    return 0;
}
```

### Key Points

- **Pure Virtual Functions**: Define a pure virtual function with `= 0` to make a class abstract.
- **Override**: Derived classes must override all pure virtual functions to be instantiated.
- **Memory Management**: Be cautious with raw pointers; use smart pointers like `std::unique_ptr` for safer memory management.
- **Polymorphism**: Abstract classes enable polymorphism, allowing methods to operate on objects of different classes through interface pointers.
