# 📂 Header Files

:::warning Why Do We Need Header Files?
If you try to run a function from another file, the compiler does not know that it exists. That's why we create only the declaration of the function in the file where we want to use it.
:::

## 📝 Declaration

```cpp
// main.cpp
void Log(const char* message);
{
    Log("Hello");
}

int main() {
    Log("Hello");
}
```

```cpp
// module.cpp
void initLog();
{
    Log("Hello"); // This function is not defined in this file; it will throw an error
}
```

### ✅ After Adding Declaration 

```cpp
void Log(const char* message);
void initLog();
{
    Log("Hello"); // Now it will work
}
```

## 📑 Header Files

Instead of writing the declaration in every file where we want to use the function, we can create a header file.

```cpp
// Log.h
void Log(const char* message);
```

### 📌 When Do We Use `<>` and When `""`?

When we use `<>`, we are telling the compiler to look for the file in the system directories. When we use `""`, we are telling the compiler to look for the file in the current directory.

:::info 💡 Why do some libraries have `.h` at the end?
In general, libraries that have `.h` at the end are C libraries. Those without `.h` are C++ libraries.
:::