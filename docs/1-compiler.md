# How compiler works? 

A compiler is a program that translates human-readable source code into computer-executable machine code. Here's a simplified overview of how it works:

## Preprocessed file `.i`

The preprocessing stage handles directives like `#include`, `#define`, and `#if`.


### Include
1. When including included content is pasted in the place. 



```cpp

void function(){
#include "EndBrace.h"
```

Will work.

For example `#include <iostream>` will add 50k lines.


### Define 

```cpp

#define LOG(x) std::cout << x << std::endl;

#define INTIGER int

INTIGER add(int a, int b){
    LOG(a);
    return a + b;
}
```

### IF

```cpp
#if 1
int FunctionThatWillHideWhenConditionFails()
#endif
```

### pragma

```cpp
#pragma once
```
Ensures the file is only included once in a single compilation. Etc. Prevents us to include 1 header file multiple times into 1 translation unit.

#### What is translation unit?

A translation unit is a single source file and all the files that it includes, either directly or indirectly.

## OBJ file

Create assembly output in hex. 

::: note
It is possible to show pretty assembly code 
`objdump -d -M intel -S file.o`
:::