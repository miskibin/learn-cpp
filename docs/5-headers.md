# Header files

## Why do we need header files?

If you try to run function from another file, compiler does not know that it exists. 
That is wht we can create only declaration of the function in the file that we want to use it.

## Declaration


```cpp
// main.cpp
void Log(const char* message);
{
    Log("Hello");
}

int main(){
    Log("Hello");
}

```

```cpp
// module.cpp
void initLog();
{
    Log("Hello");// This function is not defined in this file it will throw error
}
```

#### After adding declaration 
```cpp
void log(const char* message);
void initLog();
{
    Log("Hello");// Now it will work
}
```

## Header files

Instead of writing declaration in every file that we want to use the function we can create a header file.

```cpp
// Log.h
void Log(const char* message);
```

### When do we use `<>` and when `""`?

When we use `<>` we are telling the compiler to look for the file in the system directories. 
When we use `""` we are telling the compiler to look for the file in the current directory.

:::info Why some libraries have `.h` at the end?
In general libraries that have `.h` at the end are C libraries. Without `.h` are C++ libraries.
:::