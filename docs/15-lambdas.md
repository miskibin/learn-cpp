# Lambdas

Just like in python, you can define lambdas in C++.

```cpp

auto add = [](int x, int y) -> int {
    return x + y;
};

LOG(add(5, 3)); // Outputs: 8

auto f = [=](int x) -> int {
    return x + 5; // error. X was captured by value
};
auto f = [=](int x) mutable -> int{
    return x + 5; // It won't change the value of x but it will work.
};
auto f = [&](int x) -> int {
    return x + 5; // ok. X was captured by reference
};

```
