
# 🔄 Ternary Operators

## ✏️ Syntax

```cpp
condition ? value_if_true : value_if_false
```

For example:

```cpp
int age = 20;
std::string isAdult = (age >= 18) ? "Yes" : "No";
```

In this example, the variable `isAdult` will be assigned the value `"Yes"` if the condition `(age >= 18)` is true. Otherwise, it will be assigned `"No"`.

## 🔀 Nested Ternary Operators

You can also nest ternary operators for more complex conditions:

```cpp
int age = 20;
std::string isAdult = (age >= 18) ? "Yes" : (age == 17) ? "Almost" : "No";
```

Here, the variable `isAdult` will be assigned `"Yes"` if `age >= 18`, `"Almost"` if `age == 17`, and `"No"` otherwise.

## 🚀 Advantages of Ternary Operators

### 🌟 Concise Code

Ternary operators allow you to write concise, one-liner conditional statements, which can make your code more readable when used appropriately.

```cpp
int max = (a > b) ? a : b;
```

This assigns `max` the value of `a` if `a` is greater than `b`, otherwise, it assigns `b`.

### ⚡ Inline Initialization

They are useful for initializing variables in a single line, especially when the initialization depends on a condition.

```cpp
std::string result = (score > 50) ? "Pass" : "Fail";
```

### 💡 Readability in Simple Conditions

For simple conditions, ternary operators can enhance readability by reducing the amount of code needed to express the logic.

