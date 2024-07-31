# RLvalues


```cpp
int getVal() { return 5; }
int main()
{
    int i = 5; // i is an lvalue, 5 is an rvalue
    int a = getVal(); // getVal() is an rvalue
    getVal() = 4; // Error: getVal() is an rvalue
}
```
> Rvalues are temporary values that do not persist beyond the expression that uses them. Lvalues are values that persist beyond the expression that uses them.



```cpp
int& getVal() { // this can be both lvalue and rvalue
     static int value = 5;
     return value;
      }
int main()
{
    int i = 5; // i is an lvalue, 5 is an rvalue
    int a = getVal(); // getVal() is an rvalue
    getVal() = 4; // getVal() is lvlaue 
}
```

You can't take lvalue reference from rvalue

```cpp
void setVal(int& value) { }


int main()
{
    int i = 5; // i is an lvalue, 5 is an rvalue
    int& a = 4; // Error: 4 is an rvalue
    setVal(4); // Error: 4 is an rvalue

}
```

:::{tip} assigning rvalue to reference 
```cpp
const int& a = 4; // a is an lvalue reference
```
What heppens under the hood: 
```cpp
int temp = 4;
const int& a = temp;
```
:::

### Writing functions that accept rvalues

```cpp
void processValue(int& value) {
    std::cout << "LValue processed: " << value << std::endl;
}

void processValue(int&& value) {
    std::cout << "RValue processed: " << value << std::endl;
}

int main() {
    int a = 5;
    processValue(a); // LValue processed: 5
    processValue(10); // RValue processed: 10
}
```

### `std::move`

```cpp
class String
{
public:
    String(const char* string){
        m_Size = strlen(string);
        m_Data = new char[m_Size];
        memcpy(m_Data, string, m_Size);
    }
    ~String(){
        delete m_Data;
    }
    String(String& other) 
        : m_Size(other.m_Size), m_Data(other.m_Data)
    {
        std::cout << "Copied!" << std::endl;
        memcpy(m_Data, other.m_Data, m_Size);
    }
   
    void Print(){
        for (uint32_t i = 0; i < m_Size; i++)
            std::cout << m_Data[i];
        std::cout << std::endl;
    }
};

Class Entity
{
public:
    Entity(const String& name)
        : m_Name(name) {}
    void PrintName(){
        std::cout << m_Name << std::endl;
    }
private:
    String m_Name;
};


int main()
{
    Entity entity(String("miskibin")); // Copied!  
    entity.PrintName();
}

```

What heppens is that the `String` object is copied to the `Entity` object. We can avoid this by using `std::move`:

```cpp
Entity entity(std::move(String("miskibin"))); // Copied!  
```