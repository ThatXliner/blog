---
title: "I had to change my GPG key"
description: And it wasn't my fault.
pubDatetime: 2021-07-03
---

And it wasn't my fault.

<!--END EXCERPT-->

Who's fault was it then? Apple's fault.

### Background

Just yesterday, when I logged on to my computer, I tried to commit [this commit](https://github.com/ThatXliner/poethepoet/commit/bc2985e8c1adfb5e90f09d65be03eebcdcf21f76) in my favorite editor (Atom, of course).

But this is when everything went wrong: the pop-up requesting my GPG key password appeared.

There's nothing wrong with it except that it shouldn't have popped up: I had the password saved to my [Keychain](https://support.apple.com/guide/keychain-access/what-is-keychain-access-kyca1083/mac). I never had to worry about the password for a _long_ time.

In fact, so long that I **forgot the password**.

Being the smart guy I am, I have set different passwords for different accounts. So that way when one account is compromised, others won't be.

What was my emergency plan? It was a simple, well-thought out, very comprehensive solution: **_panic_**.

And so I deleted my old key (since it was useless to me), deleted it from GitHub (later on, we'll see how I regret this particular step), created a new key, and uploaded that to GitHub.

The first commit signed with my new key was [the commit said before](https://github.com/ThatXliner/poethepoet/commit/bc2985e8c1adfb5e90f09d65be03eebcdcf21f76).

Now, remember the step where I said I regretted it? The one where I deleted the old key from my GitHub account? Well, how come my old commits, say [this one](https://github.com/ThatXliner/slashtilities/commit/60c28ac4f981444722ce7140069fad37a7e846b5) is still "verified"?

![](https://raw.githubusercontent.com/ThatXliner/blog/main/images/hey-its-still-verified.png)

That's because I **recovered it**.

### The adventure

Did you know I have 2 computers? One of them was an old one and the other is my current one. What I did was simply this:

1. Go to my old computer
2. Run `gpg --armor --export E3D27A8B9487AA0E` and copy the output (I could've done `gpg --armor --export E3D27A8B9487AA0E | pbcopy` but shush: this still works)
3. Paste that into a new GPG key to GitHub. In other words, [tell GitHub about it](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)

### Conclusion

In the future, I will need to remember my passwords better. At least I have an action plan now, better than "panic".

<small>Psst, I might make a blog post about how to sign <i>your</i> commits with GPG. Stay tuned, I guess</small>
