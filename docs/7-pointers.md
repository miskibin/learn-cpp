# Raw pointers

> Pointer is just memory address of a variable.  

```cpp
int a = 5;
int* pointer = &a; // pointer is now pointing to a
void* voidPointer = &a; // void pointer can point to any type.

int b = *pointer; // b is now 5
```

```cpp
int a = 5;
void* pointer = &a; // pointer is now pointing to a
*pointer = 10; // error. void pointer can't be dereferenced.
```

```cpp

```

:::tip setting type of pointer
It is not needed to set the type of pointer. You can do it for better readability.
:::


```cpp
char* buffer = new char[8]; // buffer is now pointing to the first element of the array. (8 bytes)

memset(buffer, 0, 8); // set all 8 bytes to 0.

delete[] buffer; // delete the array.
```

:::warning Why do we need to delete the array?
If we don't delete the array, it will cause memory leak. 
It will take up memory until the program is closed.
:::

## Smart pointers


### Unique pointer

```cpp
#include <memory>

int main() {
    std::unique_ptr<int> pointer = std::make_unique<int>(5); // pointer is now pointing to an integer with value 5
    *pointer = 10; // pointer now points to 10
    auto pointer2 = pointer // error. unique pointer can't be copied
    auto pointer2 = std::move(pointer); // pointer2 now points to 10, pointer is now nullptr

} // pointer is automatically deleted when it goes out of scope
```

:::tip why use `make_unique` instead of `new`?
When constructor throws an exception, `new` will return a pointer to the object