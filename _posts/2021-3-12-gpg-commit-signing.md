---
title: "My guide to Git GPG signing"
date: 2021-3-12
excerpt: It's a dangerous journey, but it's worth it!
---

Hello! Welcome again to another blog post. Today, I'll be guiding you about

***GPG COMMIT SIGNING***

## Wait... wha?

You're probably wondering *What in the world is that?* 🤔.

Never fear, younglings! Long story short, it makes my commits *verified*

![Epic, right?](../../assets/verified_gpg_yay.png)

**Woah, how do I do that?**

Well, first you-

**Wait, GitHub has [documentation](https://docs.github.com/en/github/authenticating-to-github/about-commit-signature-verification) on it!**

Alas, setting up GPG isn't so simple...

## Well then, Mr.smartypants, show me how!

That's what this blog is about 🤦‍♂️.

Anyways, you'll first need to

### Install GPG

For Linux, you should already have `gpg` or `gpg2`. If you don't have that, Ubuntu users can type in

```bash
sudo apt-get install gnupg
```

`apt-get` is the best 💪. Maybe you have [Debian](https://www.debian.org) or [Fedora](https://getfedora.org), so the package manager is different (e.g. `pacman` or `yum`). Well, try using *that*. If I had to list every Linux ~~copy~~ distribution, we'd be here *forever*.

Now, let's see the instructions for *other platforms*...

#### I'm on a Mac though

Same here! There's actually *2* ways you can install GPG: the easy, admin-begging way and the hard, *no-admin* way.

Choose your path, my friend

##### I hate admin perms! I hate sudo!

Ok. Assuming you installed [Homebrew](https://brew.sh) using the following *admin-less* command:

```bash
cd $HOME && mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```

and [added `$HOME/homebrew/bin` to your wonderful ✨ `$PATH`](https://gist.github.com/ThatXliner/8216e1e7e112e851764eeaa0cec85fbc). If not, then I sure hope you solved that permission mess 😬.

Next, use homebrew to install `gnupg` (GPG stands for **G**NU **P**rivacy **G**uard) and `pinentry-mac` (you'll see why later)

```bash
brew install gnupg pinentry-mac
```

Epic. Now go to the [use gpg](#use-gpg) section!

##### I know the admin password 😈

Oooh, you really shouldn't abuse it... whatever.

Anyways, click the fat red download button on this epic site: https://gpgtools.org. It's safe, I promise. Follow the instructions for the package installer, type in that admin password/username, and boom! You just got yourself a fresh working `gpg`!

Head over to the [use gpg](#use-gpg) section! I'll see you there!

#### I'm on stupid Windows

HAHAHAHAHA.

Well, just click download right here: https://gpg4win.org/download.html. I can not be sure that it's not malicious but Windows sucks anyway 😛.

### Use GPG

So you got yourself a copy of GPG (GPG stands for **G**NU **P**rivacy **G**uard). Great!

Let's test that you *really did have it*. Type the following in the command line:

**Linux**
```bash
which gpg || which gpg2
```
**Windows**
```bash
where gpg
```
**MacOS**
```bash
which gpg
```
If that command fails, then either my Windows-foo sucked (I was guessing the command for Windows, actually 😅) or you didn't install it successfully.

**Let's assume it worked**

And that you got GPG.

