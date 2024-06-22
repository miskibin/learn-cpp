# 🔧 Functions

### 📦 Passing Class Objects to Functions

```cpp
void PrintString(std::string string) { // it takes a copy of the string
    string += " Doe";
    std::cout << string << std::endl;
}

int main() {
    std::string name = "John ";
    PrintString(name);  // John Doe
    std::cout << name << std::endl;  // John (original string is not changed)
    return 0;
}
```

A more efficient way is to pass by reference:

```cpp
void PrintString(std::string& string) { // it takes a reference to the string
    std::cout << string << std::endl;
}

int main() {
    std::string name = "John ";
    PrintString(name);  // John
}
```