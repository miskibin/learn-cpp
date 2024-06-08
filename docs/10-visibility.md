# Visibility in classes

In C++, classes have three types of visibility: `public`, `protected`, and `private`. These keywords determine how class members are accessible from outside the class.

Private members are only accessible from within the class itself. Protected members are accessible from within the class and its derived classes. Public members are accessible from anywhere.

:::tip Does visibility affect program performance?
No, visibility doesn't affect program performance. It's only a design choice to control access to class members.
:::


### Protected members

```cpp
class Entity {
    int privateInt; // Private member (by default)
protected:
        int x, y;
};

class Player : public Entity {
public:
        Player() {
                x = 2; // Accessible
                y = 3; // Accessible
        }
};

int main() {
        Player player;
        player.x = 5; // Error: x is protected
        player.y = 5; // Error: y is protected
}

```

#### Friend classes

Friend classes can access private and protected members of a class. Here's an example:

```cpp
class Entity {
private:
        int x, y;
        friend class Player;// it can access private members of Entity
};

class Player {
public:
        Entity e;
        void Print() {
                std::cout << e.x << ", " << e.y << std::endl; // Accessible
        }
};
```
