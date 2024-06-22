# 🛠️ Compilers Overview

A compiler translates source code into machine code. The process involves several stages:

## ⚙️ Preprocessing

- **Directives** (`#` symbol) instruct the compiler for initial processing.
- `#include`: Inserts another file's content.
- `#define`: Defines macros for code abbreviations.
- `#if`: Conditionally compiles code blocks.
- `#pragma`: Provides compiler-specific instructions, like `#pragma once` to prevent multiple inclusions.

## 🔧 Compilation to Object File

- **Translation Unit**: A single source file plus its included headers.
- **.i File**: Result of preprocessing, further compiled into assembly language.
- **.o File**: The assembly is then compiled into an object file, a step closer to executable machine code.

:::tip
Use `objdump -d -M intel -S file.o` to view an object file's assembly code in a readable format.
:::

### 📋 Examples of preprocessor directives:

```cpp
#define LOG(x) std::cout << x << std::endl; // Macro for printing to console

#define INTEGER int // Macro for using 'INTEGER' instead of 'int'

INTEGER add(INTEGER a, INTEGER b) {
  LOG(a); // Replaced with std::cout << a << std::endl;
  return a + b;
}
```

In this example, `LOG(x)` is a macro that expands to `std::cout << x << std::endl;`, providing a concise way to print messages to the console. Similarly, `INTEGER` is a macro that expands to `int`, making your code more readable.

```cpp
#if 1 // Always true in this case
int FunctionThatWillHideWhenConditionFails() {
  // Code here will be included during compilation
}
#endif
```