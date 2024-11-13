# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript (JS for short) is a high-level programming language that executes at runtime and is mainly used in web development. Commonly used with HTML and CSS, it also follows the ECMAScript standard.
```

## About values

### What is a primitive value?

```
Primitive values are unmutuable, single value variables provided by JS. There are a few different primitive values in JS: Number, String, Undefined, Boolean, Null, BigInt, and Symbol.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
The primitive values that can be found in JS are the following:

-Number: Holds an integer number or a floating point one. 18
-String: Holds characters sourrounded by single or double quotes. "meow"
-Undefined: It means that the variable doesn't hold any value but has been declared. let variable;
-Boolean: It only holds one of two possible values, true or false. true
-Null: Represents the deliberate absence of a value. let variable = null;
-BigInt: Represents a very large number, specifically, numbers greater than 2**53-1. 53456783478587578345781234411444n
-Symbol: It allows you to store a unique value that won't collide. In other words, unique. Symbol("lol");
```

## About variables

### What is a variable in JS?

```
A variable is a named reference for a value stored in memory.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
Variables can be declared via the following ways:

- var
- let
- const

Var is not recommended nowdays because it got overshadowed by new variable implementations, like const and let, due to its limited scope.
```

### Which are the most used var naming conventions in JS?

```
The most used convention is the camelCase naming convention.
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
- == value equality 84 == "84" true, "cat" == "cat" true
- === value and type equality 84 === "84" false, 1914 === 1914 true
- != value inequality 84 != "84" false, "cat" != "leopard" true
- !== value and type inequality 84 !== "84" true, 42.2 !== "42.2" true
- < > <= >= numeric comparisons 1914 > 84 true, 18 <= 1914 true, 27 < 3 false
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
- && AND 84 > 18 && 84 < 1914 true, "a" === "a" && 10 === 10 true
- || OR 84 < 18 || 84 > 1914 false, "cat" === "chimp" || 1 < 5 true
- ?? nullish null ?? 84 84, undefined ?? "hehe" "hehe"
- ! NOT !(84.4 > 18.8) false, !true false
```
