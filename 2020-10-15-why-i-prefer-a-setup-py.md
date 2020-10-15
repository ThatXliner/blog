---
title: "Why I prefer a setup.py based project"
date: 2020-10-15
---

We all know what a `setup.py` is. Well, if you made a pypi packages, that is. Wait, you don't know what a setup.py is?

## What is a setup.py?

When making a python package, you, obviously, need to create a folder with an `__init__.py` and the actual code. That should be obvious if you know the difference between a python module (basically any python file) and a package (a folder with modules/other packages and an `__init__.py` to show that it is a package).


Most people would want to upload their packages to the Python Package Index so everyone can use it.

That's great! It's simple! It shouldn't be complicated; all you need now is a setup.py...

## Problem 1: defining the packages

Ok, so we need to tell
