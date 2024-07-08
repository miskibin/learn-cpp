# Copying and Moving 

When you are writing `=` you are always copying the value. 
- when copying pointers, you are copying the address, not the value.
- when copying arrays, you are copying the values, not the address.
```markdown

### Custom Copy Constructor Necessity

A custom copy constructor is crucial for classes that manage dynamic memory. The default copy constructor only performs a **shallow copy**, which can lead to memory leaks and double free errors when objects are copied. A **deep copy**, achieved through a custom copy constructor, ensures each object has its own memory allocation, preventing these issues.

###  Custom String Class Example

```cpp
#include <cstring>
#include <iostream>

class CustomString {
    char* data;
public:
    CustomString(const char* str = "") {
        data = new char[std::strlen(str) + 1];
        std::strcpy(data, str);
    }

    // Deep copy constructor
    CustomString(const CustomString& other) {
        data = new char[std::strlen(other.data) + 1];
        std::strcpy(data, other.data);
    }

    ~CustomString() {
        delete[] data;
    }

    // Deep copy assignment
    CustomString& operator=(const CustomString& other) {
        if (this != &other) {
            delete[] data;
            data = new char[std::strlen(other.data) + 1];
            std::strcpy(data, other.data);
        }
        return *this;
    }

    void print() const {
        std::cout << data << std::endl;
    }
};

int main() {
    CustomString str1("Hello");
    CustomString str2 = str1; // Uses deep copy constructor

    str1.print();
    str2.print();
}
```

### Key Points

- **Custom Copy Constructor**: Ensures deep copy to prevent memory leaks and double free errors.
- **Destructor**: Releases allocated memory to avoid leaks.
- **Copy Assignment Operator**: Handles deep copying for object assignments.