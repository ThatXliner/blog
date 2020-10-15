---
title: "Creating a python package"
date: 2020-10-15
---

We've all have done `pip install`. It is the *de facto* tool for getting tools and python libraries such as `requests` or `flask` or even `black`. But, have you ever wanted to make one?

## What is a python package

Wait, what *is* a python package? A python module is any importable python file (i.e. any python script). A python *package*, on the other hand, is a folder of modules or sub-packages, with a special `__init__.py` file telling python that this is an importable package.

## Creating an installable package

In order for our package to be distributed easily (a.k.a., all the necessary files, add it to $PYTHONPATH, etc), we need to use python's [`setuptools`](https://pypi.org/project/setuptools/)!

Well, setuptools is actually an *enhancement* of python's built-in [`disutils`](https://docs.python.org/3/library/distutils.html). Meaning, it's a third party package installable by `pip install setuptools`. But still, every single PyPi project will, at some point, use setuptools<sup name="a1">[1](#f1)</sup>. Without further ado, let's make a package!

### Finding the packages

First off, we need to *tell* setuptools where are packages are stored. In a project directory like this:

```
.
|
|\ README.md
|\ LICENSE
|\ setup.py
|\ requirements.txt
|\ src/
|    |\ package_name/
|                  |\ __init__.py
|                  |\ ...
|\ scripts/
|             |\ __init__.py
|             |\ ...
```

It can be confusing on where the actual package is located. That's why you need to specify the folder. We can do that in the setup.py which currently looks like this:

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""To setup."""
```

Very plain.

As I said before, setuptools is the primary way python developers use to create and specify python packages. In other words, we need it. So now, our `setup.py` should look like this:

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""To setup."""
import setuptools
```

Remember that **it is a third-party package**, maintained by the **python packaging authority**. It **doesn't** come bundled in python's standard library so you may need to `pip install setuptools` if you need to.

We can specify the python package, using the `setuptools.setup` function. This function has a lot of parameters, but for now we just need to use the `name` parameter and the `packages`.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""To setup."""
import setuptools

setuptools.setup(
    name="some_package_name_avalible_on_pypi",
    packages=setuptools.find_packages(exclude=["scripts"], include=["src"])
)
```
The `packages` paremeter tells `setuptools.setup` where are python packages are. Remember that packages are a folder of modules or other sub-packages. `setuptools.find_packages` will find folders that looks like packages and it will return a list of paths that it found.

We're telling it to including the `src` folder in the search and exclude the `scripts` folder.

Why does the `name` have to be available on PyPi? Because we're going to upload it to the PyPi later!

### Building

One would type in

```python
python3 setup.py sdist bdist_wheel
```

to "build" the project. In other words, telling `setup.py` to generate an `sdist` and `bdist_wheel` in a new directory named `dist`. What are these?

#### sdist

An `sdist` is just a Gziped tarball of the specified packages


#### bdist wheel

`bdist_wheel` python-specific binary file called a `wheel`. It has a `.whl` extension.



<b id="f1">1:</b> Unless you're using a tool like [poetry](https://github.com/python-poetry/poetry), or you're creating [PEP 517](https://www.python.org/dev/peps/pep-0517/) distribution files manually, you will need to use `setuptools` at some point. [↩](#a1)
