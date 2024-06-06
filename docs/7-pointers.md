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
