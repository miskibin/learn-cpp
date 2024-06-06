# Enums

Enums, short for enumerations, are a way of defining a type in C++ that consists of named constants. Enums are used when we know all possible values a variable can have, and we want to restrict it to those values to avoid errors and make the code more readable.

Here's a basic example of an enum:

```cpp
enum Day {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};
```

In this example, `Day` is an enum type that can have one of seven values: `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, or `Saturday`.

We can declare a variable of this enum type and assign it a value like this:

```cpp
Day today = Monday;
```

By default, the first value in an enum (in this case, `Sunday`) has a value of 0, and each subsequent value is one greater than the value of the previous one. So in this example, `Sunday` is 0, `Monday` is 1, `Tuesday` is 2, and so on.

We can also specify the values of the enum members ourselves:

```cpp
enum Day {Sunday = 1, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};
```

In this example, `Sunday` is 1, `Monday` is 2, `Tuesday` is 3, and so on.

### Different types of enums

```cpp
enum Day : char {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};
```

In this example, `Day` is an enum type that uses `char` as its underlying type. This means that each enum member will be stored as a `char` value, which can be useful when you want to save memory or when you need to interact with APIs that expect `char` values.