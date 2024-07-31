# STL functions

### `enable_if` and `enable_if_t`


The syntax typename `std::enable_if<condition, return_type>::type` is used as the return type of a function template. If the condition is true, it defines the return type; if false, the function is removed from the overload set.

```cpp
#include <iostream>
#include <type_traits>

// Function template that only accepts integral types
template<typename T>
typename std::enable_if<std::is_integral<T>::value, bool>::type
is_even(T number) {
    return number % 2 == 0;
}

// Function template that only accepts floating-point types
template<typename T>
typename std::enable_if<std::is_floating_point<T>::value, bool>::type
is_close_to_integer(T number, T epsilon = 0.001) {
    return std::abs(number - std::round(number)) < epsilon;
}

int main() {
    std::cout << "Is 4 even? " << is_even(4) << std::endl;
    std::cout << "Is 7 even? " << is_even(7) << std::endl;
    
    // This would cause a compilation error:
    // std::cout << "Is 3.14 even? " << is_even(3.14) << std::endl;
    
    std::cout << "Is 3.01 close to an integer? " << is_close_to_integer(3.01) << std::endl;
    std::cout << "Is 3.99 close to an integer? " << is_close_to_integer(3.99) << std::endl;
    
    // This would cause a compilation error:
    // std::cout << "Is 5 close to an integer? " << is_close_to_integer(5) << std::endl;
    
    return 0;
}
```

:::note enable_if_t
`std::enable_if_t` is a C++14 feature that simplifies the syntax by defining the return type directly. It is equivalent to `typename std::enable_if<condition, return_type>::type`. For example, `std::enable_if_t<std::is_integral<T>::value, bool>` is equivalent to `typename std::enable_if<std::is_integral<T>::value, bool>::type`.
:::


### `is_base_of` and `is_same`

The `std::is_base_of` and `std::is_same` type traits are used to check relationships between types.

- `std::is_base_of<Base, Derived>::value` is `true` if `Derived` is derived from `Base`, directly or indirectly.
- `std::is_same<T1, T2>::value` is `true` if `T1` and `T2` are the same type.

```cpp
#include <iostream>
#include <type_traits>

class Base {};
class Derived : public Base {};

int main() {
    std::cout << "Is Derived derived from Base? " << std::is_base_of<Base, Derived>::value << std::endl;
    std::cout << "Are int and double the same type? " << std::is_same<int, double>::value << std::endl;
    
    return 0;
}
```


### `future` and `promise`


```cpp
// C++ Program to illustrate the use of std::future 
#include <chrono> 
#include <future> 
#include <iostream> 
using namespace std; 
  
// A simple function that returns some integer value 
void foo(promise<int> p) { p.set_value(25); } 
  
// driver code 
int main() 
{ 
    // creating a future object and a thread that executes 
    // the function return two asynchronously 
  
    promise<int> p; 
    future<int> f = p.get_future(); 
    ; 
  
    // moving the task 
    thread t(foo, move(p)); 
  
    t.join(); 
    cout << f.get(); // you can call it only once
    cout << f.get(); //   what():  std::future_error: No associated state
    
    return 0; 
}
```

### `forward`

TBD

