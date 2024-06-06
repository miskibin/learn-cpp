# Debugging

Why there are a lot of `CC` values when we debug the program?

`CC` is a register that holds the address of the next instruction to be executed. It is used by the debugger to show the current instruction.

:::tip Debbuging slow our program down
Debugger do extra work like setting `CC` values for us. It slows down the program.
:::