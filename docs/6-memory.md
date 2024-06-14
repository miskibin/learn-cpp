# Memory

## Heap
The heap is a region of your computer's memory that is not managed automatically for you, and is not as tightly managed by the CPU. It is a more free-floating region of memory (and is larger). To allocate memory on the heap, you must use `new` and to deallocate memory, you must use `delete`. Heap is more complex to use since you have to manage memory (allocate and deallocate) yourself, but it allows more flexibility as you can allocate and deallocate memory whenever you need to.

## Stack
The stack is a region of your computer's memory that stores temporary variables created by each function (including the `main()` function). The stack is a **"LIFO"** (last in, first out) data structure, that is managed and optimized by the CPU quite closely. Every time a function declares a new variable, it is "pushed" onto the stack. Then every time a function exits, all of the variables pushed onto the stack by that function, are freed (they are "popped" off the stack). Stack memory is automatically managed for you.

### Stack frame
A stack frame is a block of memory on the stack that stores the local variables, parameters, and return address of a function. When a function is called, a new stack frame is created and pushed onto the stack. When the function returns, the stack frame is popped off the stack.


```cpp

int* createArrayBad(int size) {
    int array[size]; // array is created on the stack
    return array; // returning the address of the array
}
int* createArrayOk(int size) {
    int* array = new int[size]; // array is created on the heap
    return array; // returning the address of the array
}

int main() {
    int* arrayBAD = createArrayBad(10); // it is a dangling pointer
    int* arrayOK = createArrayOk(10); // it is a dangling pointer
    delete[] arrayOK; // deallocate the memory
    // array is deallocated when createArray returns
    // array is now a dangling pointer
    return 0;
}
```

## Differences
- **Lifetime**: Variables on the stack are automatically deallocated when they go out of scope. On the other hand, objects on the heap need to be manually deallocated or else you risk memory leak.
- **Size Limit**: The stack has a size limit that is determined at the start of the program, based on your computer's configuration. The heap, on the other hand, is only limited by the size of addressable memory.
- **Allocation and Deallocation Speed**: Allocating memory on the stack is much faster than allocating memory on the heap. This is because allocating memory on the stack is as simple as moving the stack pointer, while allocating memory on the heap requires more complex bookkeeping.
- **Fragmentation**: The heap can become fragmented as blocks of memory are allocated and deallocated in an arbitrary order, which can lead to inefficient use of memory. The stack does not suffer from fragmentation as it always deallocates memory in a LIFO order.

![memory](https://media.geeksforgeeks.org/wp-content/uploads/20201210222125/Untitled4-660x361.png)

## `New` keyword
Finds block of memory that is big enough to hold the object and returns the address of that memory. It is used to allocate memory on the **heap**.
It also calls the constructor of the object.

```cpp
Entity *e = new Entity();
```
It is equivalent to:
```cpp
Entity *e = (Entity*)malloc(sizeof(Entity));//allocate memory
new(e) Entity();//call constructor
```
### Delete
```cpp
delete e;
```
It is equivalent to:
```cpp
e->~Entity();//call destructor
free(e);//deallocate memory
```


## Debugging

Why there are a lot of `CC` values when we debug the program?

`CC` is a register that holds the address of the next instruction to be executed. It is used by the debugger to show the current instruction.

:::tip Debbuging slow our program down
Debugger do extra work like setting `CC` values for us. It slows down the program.
:::