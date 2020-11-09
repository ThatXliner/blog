---
title: "The modern editor war"
date: 2020-11-9
---

I've been using Atom ever since last summer. Now I see the alternatives, I still prefer Atom. This is an article on *why*, heavily inspired by [this dev.to discussion](https://dev.to/ben/is-there-a-future-for-the-atom-editor-5dno).

### The contestants

I have tried the following editors:

 - [Sublime Text 3](https://www.sublimetext.com/)
 - [Atom](https://atom.io/)
 - [Visual Studio Code](https://code.visualstudio.com/)
 - [Vim](https://www.vim.org/)

I'm going to compare them on these 4 points:

 - **Beauty** (eye pleasing)
 - **Customizability** (How much I can change the defaults)
 - **Productivity** (How fast it makes me work)
 - **Speed** (How fast it works)

Let's go!

### Vim

[Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) is an old editor: it was [first released in 1991][1]. It is a text-based, mode-based, text editor.

Being old, it means it has a lot of experience. However, it's getting more and more popular these days.

#### Beauty

Vim, by itself, looks *horrible*. Even with my **epic terminal configuration**, it (without plugins) would look like this:

![Vim without configuration](../assets/img/vim-no-config.png)

<center><sup><em>Vim without configuration (very ugly)</em></sup></center>

Ugly.

Of course, you can configure it. First off, we would want syntax highlighting. To do that, we would enter `:syntax enable`. Now, Vim looks like this:

![Vim with syntax highlighting](../assets/img/vim-syntax-enable.png)

<center><sup><em>Vim without with syntax highlighting (no monokai theme!)</em></sup></center>

Still kinda ugly, but it gets better.

#### Customizability

Vim boasts for being *super customizable*. At least, that's it's potential.

To customize vim, you'd ned to edit the `.vimrc` in your home directory. For me, it looks like this:

![My vimrc](../assets/images/my-vimrc.png)
<center><sup><em>Better</em></sup></center>

That's cool and all but here's the catch: Vim doesn't have a native package manager: you need to install some yourself.

Popular ones such as [Vim-plug](https://github.com/junegunn/vim-plug) and [Vundle](https://github.com/VundleVim/Vundle.vim) are some choices.

The second catch: in order to customize Vim, you need to learn *yet another language*. Yes, that piece of code in my .vimrc is actually a language called *Vimscript*. There is a [nice site where you can learn it](https://learnvimscriptthehardway.stevelosh.com/).

But, no one wants to learn yet another language! It kind of beats down on Vim's customizability.

#### Productivity

Vim users boasts being productive because when you use Vim, there is no need for the mouse.

You should learn to type before you learn to code. Vim expects you to be able to touch-type.

Personally, I don't think that not using the mouse would make you faster. It doesn't, at least for me.

#### Speed

Vim is mostly written in [native C](https://github.com/vim/vim/search?l=c).

![Vim is written in C, you numbskull](../assets/images/tabnine-is-funny.png)
<center><sup><em>Wonder why <a href="https://www.tabnine.com/">my autocomplete</a> thinks Vim is written in JavaScript.</em></sup></center>

In other words, it's blazingly fast. It's fast alright: to test performance, I open this 223 Kilobyte JSON file using Vim.

Vim opens it instantly and it syntax highlights the *entire file* instantaneously.

I suspect that it can open this file that fast due to the fact that it is **text based**.

### Atom

Atom, the text editor for the 21st century is my current editor of choice. I may be a little biased towards it in this section.


[1]: https://www.vim.org/#:~:text=29%20years%20ago%20the%20very%20first%20version%20of%20Vim%20was%20built%20and%20distributed
