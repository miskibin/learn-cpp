# 🔒 Const Keyword

## 🔢 Variables

The `const` keyword is used to declare a constant variable. A constant variable is a variable whose value cannot be changed after it has been assigned. The syntax for declaring a constant variable is as follows:

```cpp
const int x = 5;
```

```cpp
int main()
{
    const int AGE = 20;
    int* a = new int;
    *a = 10;
    a = &AGE; // a value of type "const int *" cannot be assigned to an entity of type "int *"
    // bypassing it
    a = (int*)&AGE; // just reassigning the pointer to the address of AGE
}
```

Keep in mind that if you create `const *int pointer` you can't change the value of the pointer, but you can change the value of the variable it points to.

:::note 📋 Order of const

```cpp
const int* x = 5; // x is a pointer to a constant integer
int const* x = 5; // same as above
int* const x = 5; // x is a constant pointer to an integer (you can't change the address of x)
const int* const x = 5; // x is a constant pointer to a constant integer
```
:::

## 🏷️ Classes and Declarations

The `const` keyword can also be used to declare that a function does not modify the object it is called on. This is known as a `const` member function. The syntax for declaring a `const` member function is as follows:

```cpp
class MyClass {
public:
    void foo() const {
        // Function body
    }
};
```

:::tip 💡 Why should you use const in member functions?
It allows the compiler to catch errors where the function modifies the object it is called on. It also allows the compiler to optimize the code by caching the result of the function call.
:::

### 🔍 Wild Example

```cpp
class MyClass {
    const int* const foo() const {
        return 5;
    }
};
```

What does this code do? It returns a constant pointer to a constant integer. The function `foo` is a `const` member function, which means it does not modify the object it is called on. The return type of the function is a constant pointer to a constant integer, which means that the pointer and the integer it points to cannot be modified.

### 🔄 Mutable Keyword

The `mutable` keyword can be used to declare that a member variable can be modified in a `const` member function. This is useful when you have a member variable that needs to be modified in a `const` member function, e.g., for debugging purposes.

```cpp
class MyClass {
private:
    mutable int x;
public:
    void foo() const {
        x = 5; // This is allowed because x is mutable
    }
};
```