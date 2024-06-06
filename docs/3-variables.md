## sizeof

```cpp
sizeof(int); // 4
sizeof(char); // 1
sizeof(float); // 4
sizeof(double); // 8
```
If you want to get length of the array you can use:
```cpp
int array[] = {1, 2, 3, 4, 5};
int length = sizeof(array) / sizeof(array[0]); // 20/4 = 5
```
