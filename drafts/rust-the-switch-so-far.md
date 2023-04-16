---
title: "Rust: the switch so far"
pubDatetime: 2021-11-07
excerpt: "Coming from Python, JavaScript, and C++"
---

## Introduction

[Rust](https://www.rust-lang.org) is great. It's fast, it's great to develop in, and it's [great for the web](https://www.rust-lang.org/what/wasm). Like [C++](https://www.cplusplus.com), [Python](https://www.python.org) (with [static types](http://mypy-lang.org) of course), and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

I'm a Python programmer. I dabble in JavaScript and know a bit of C++. In this article, I'll try to show you the differences between Rust and the languages I know and all the *little gotchas* that you have to be aware of if you want to learn Rust.



### What is Rust

Rust is this new hotshot language made by Mozilla which has caught my eye because [so many people love it](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages
). Here's a little taste of it:

```rust
fn main() {
    println!("Hello world!");
}
```

I'm not going in to the glory details and history. Let's just dive in.

## Learning Rust

To convert to any new language, it's always great to start with a comparison, no? At least, that's how I learn best.

### Syntax

As you saw above, Rust is a curly-braced language. One thing I should point out is that the semicolons are required. *Kinda.* If you [download Rust](https://www.rust-lang.org/tools/install) for yourself (no admin permissions required :D) and try to run the hello world program above without the semicolon, the compiler **won't complain**.

*But* if you add an extra statement, it will complain, saying:
![Oops](https://raw.githubusercontent.com/ThatXliner/blog/main/images/rust-compiler-complaining.png)

So, let's just say semicolons are required.

But did you see that epic compiler? Not even Python's traceback is that beautiful :heart_eyes:. Colors, line numbers, error codes...

Did I say error codes? Well you didn't see any here but there are actually an [entire index of error codes](https://doc.rust-lang.org/error-index.html). Let's try a more complex example to show this:

```rust
fn main() {
    println!("{}", undeclared_variable);
}
```

Here, we use the `println` *macro* (which is exactly what it sounds like, C++ nerds) to print an **undeclared variable**. We never defined this before so

![Oops](https://raw.githubusercontent.com/ThatXliner/blog/main/images/rust-compiler-index-example.png)

### Memory

TK

## Some gotchas (at least for me)

### Strings

TK

https://www.brandons.me/blog/why-rust-strings-seem-hard

### Mutability
