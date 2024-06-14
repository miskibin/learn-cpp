
# Implicit and Explicit Conversion
## Implicit Conversion

In C++, implicit conversion allows us to use a value of one type where a value of another type is expected. This is done automatically by the compiler.

```cpp
class Entity {
    std::string m_Name;
    int m_Age;

public:
    Entity(const std::string& name)
        : m_Name(name), m_Age(-1) {}
    Entity(int age)
        : m_Name("Unknown"), m_Age(age) {}
};

int main(){
    Entity a = "Name"; // calling first constructor
    Entity b = 12; // calling second constructor (using implicit conversion)
}
```

In the above code, we're able to assign a string and an integer to an `Entity` object due to implicit conversion.

Let's consider a function that takes an `Entity` object as a parameter:

```cpp
void PrintEntity(const Entity& entity){
    //print entity
}

int main(){
    PrintEntity("Name"); // It won't work!!!
    PrintEntity(std::string("Name")); // implicit conversion 
    PrintEntity(12); // implicit conversion -> PrintEntity(Entity(12))
}
```
:::warning why it won't work?
we are passing a `char*` instead of `std::string`. Therefore, it would require two implicit conversions to convert `char*` to `std::string` and then to `Entity`. C++ doesn't allow more than one user-defined implicit conversion.
:::

## Explicit Conversion

Explicit conversion in C++ is a way to prevent implicit conversions for certain class types. This is done using the `explicit` keyword before the constructor that you want to prevent from being used in implicit conversions.

```cpp
class Entity {
    std::string m_Name;
    int m_Age;

public:
    explicit Entity(const std::string& name)
        : m_Name(name), m_Age(-1) {}
    explicit Entity(int age)
        : m_Name("Unknown"), m_Age(age) {}
};

int main(){
    Entity a = "Name"; // Error: no suitable conversion from "const char [5]" to "Entity"
    Entity b = 12; // Error: no suitable conversion from "int" to "Entity"
}
```
In the above code, we've marked the constructors as `explicit`, which prevents them from being used in implicit conversions. Now, we must explicitly convert the values to `Entity`:

```cpp
int main(){
    Entity a = Entity("Name"); // OK
    Entity b = Entity(12); // OK
}
```
