---
title: Ternary Operators in C++
---
# Ternary Operators 

## syntax:

```cpp
condition ? value_if_true : value_if_false
```

For example:

```cpp
int age = 20;
std::string isAdult = (age >= 18) ? "Yes" : "No";
```

And with nesting:

```cpp
int age = 20;
std::string isAdult = (age >= 18) ? "Yes" : (age == 17) ? "Almost" : "No";
```