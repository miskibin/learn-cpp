import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vectors and arrays

A vector is a dynamic array that can grow or shrink in size. It is a sequence container that encapsulates dynamic size arrays. It is very similar to the `std::array` container, but it is resizable. Vectors are very efficient in terms of time complexity. They have constant time complexity for both insertion and deletion at the end of the vector. However, insertion and deletion at the beginning or in the middle of the vector have linear time complexity.

![](https://scaler.com/topics/images/Vector-in-C.webp)

<Tabs
  defaultValue="vector"
  values={[
    { label: 'Array Example', value: 'array', },
    { label: 'Vector Example', value: 'vector', },
  ]}>
  
  <TabItem value="array">

```cpp
#include <array>
#include <iostream>

int main() {
    std::array<int, 4> myArray = {1, 2, 3, 4};
    myArray[0] = 5; // Possible
    // can't add or remove elements
    return 0;
}
```

:::tip difference between C-style arrays and std::array
- `std::array` is a container that encapsulates fixed size arrays. It is a safer and more efficient alternative to C-style arrays.
- `std::array` knows its size, so you can use the `size()` method to get the size of the array.
- `std::array` is a class template, so you can use it with any data type.
:::

  </TabItem>
  <TabItem value="vector">

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> myVector = {1, 2, 3, 4};
    // Adding an element to the end
    myVector.push_back(5);
    // Removing the last element
    myVector.pop_back();
    return 0;
}
```

  </TabItem>
</Tabs>

## Storing elements as pointers or values

Example:

```cpp
struct Vertex {
    float x, y, z;
};

int main() {
    std::vector<Vertex> opt1;
    std::vector<Vertex*> opt2;
    opt1.push_back({4, 5, 6});
    opt2.push_back({4, 5, 6});
}
```

Usually, it is **better to store elements as values** because:
- elements are stored contiguously in memory. Iterating over the elements is faster.
- no need to manage memory manually. The elements are automatically destroyed when the vector goes out of scope.
Hovewer: **If you want to resize the vector often, it is better to store elements as pointers.** This way, you can avoid copying the elements every time the vector is resized.



### Optimizing vector capacity

When you know the number of elements that will be stored in the vector, you can reserve the memory in advance to avoid reallocation. This can improve performance by reducing the number of reallocations and copying of elements.

**bad**

```cpp
struct Vertex {
    float x, y, z;

    Vertex(const Vertex& vertex) : x(vertex.x), y(vertex.y), z(vertex.z) {
        std::cout << "Copied!" << std::endl;
    }

};

int main() {
    std::vector<Vertex> vertices;
    vertices.push_back(Vertex{1, 2, 3});// Copied! 
    //(We are constructing it in the current main function scope, and then copying it to the vector)
    vertices.push_back({4, 5, 6}); // Copied!
    vertices.push_back({7, 8, 9}); // Copied!, Copied!, Copied!, Copied!
    // Our vector is resized and all elements are copied to the new memory location
}


```

**good**

```cpp
int main() {
    std::vector<Vertex> vertices;
    vertices.reserve(3); //no need to resize the vector
    vertices.emplace_back(1, 2, 3); // no copy
    vertices.emplace_back(4, 5, 6); // no copy
    vertices.emplace_back(7, 8, 9); // no copy
}
```

:::note emplace_back vs push_back
- `emplace_back` constructs the object in place, while `push_back` constructs the object in the current scope and then copies it to the vector.
- `emplace_back` is more efficient because it avoids the extra copy.
:::