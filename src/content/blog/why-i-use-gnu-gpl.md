---
title: "Why I use GNU GPL (v3+)"
description: Because it's great.
pubDatetime: 2020-11-12
---

Because it's great.

<!--END EXCERPT-->

No seriously: I've seen [LGPL](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License), [MIT](https://en.wikipedia.org/wiki/MIT_License) (and [BSD](https://en.wikipedia.org/wiki/BSD_licenses)), [AGPL](https://en.wikipedia.org/wiki/Affero_General_Public_License), [Apache](https://en.wikipedia.org/wiki/Apache_License) (which are pretty great, not gonna lie), but [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License) seems like the way to go!

### Why licenses (skip this if you know what licenses are)

Being a developer, proprietary or not, you need to tell the user (or client) how they can use the software. Some (bad) people would want to leak your secret code.
Others may want to steal credit from your [open source](https://en.wikipedia.org/wiki/Open_source) (read: _free_) code. A software license is a file that inform the client what permissions they have over your software.

Basically, it's a buncha text saying what you can do with this _epic code_.

### TL;DR

Here's a rundown on the licenses:

- MIT (or BSD)-like licenses are just saying "Do anything you want with the software and/or code. Just don't get me in legal trouble."

- Apache License says "Do what you want, just don't get me in legal trouble. Also, you can't patent this baby."

- GNU GPL (or just GPL): "Yo, you proprietary companies want to use this boy? Come and get it 'cause you're gonna have to **_risk open source-ing your proprietary code_** (and some other conditions). But, I've must give everyone the rights to view (the source code), modify, and distribute... sigh: that's a lot of permissions I need to promise."

- GNU LGPL (or just LGPL): "I'm just GNU GPL like but y'all proprietary people can use this code. You don't have to share it to the world. And you still get the other benefits." (useful for small libraries)

- GNU AGPL (or just AGPL): "I'm also like GNU GPL but all modified copies must release the source code." Useful for servers: it **prevents people from milking your code _over a network._** So they can't exactly milk your HTML or JavaScript... HAHA PROPRIETARY COMPANIES!!! 😝

### My choice

Now you've seen the options, here's my choice (drumroll please)....

**GNU GPL v3+** 😱

### Why

When I write code (usually open source and hosted with ❤️ by [GitHub](https://github.com/)), I don't want proprietary companies benefiting (and profiting) from my code when I don't.

When you license code as GNU GPL, you're basically saying

> Haha! Get rekt, proprietary hogs! You can't use my code while other people can! And if you do, ya might as well go open source!

I believe that software should be free.... **as in freedom**. You are free to distibute, use, and modify. Although if you want to fork any project licensed with the GPL (and make the forked code public), it must be ~~open source~~ GNU GPL (v3). Meaning you still have to do what I did. That's one of the conditions.

In other words, I do not want proprietary companies having an advantage. They can't use my library without making their app GNU GPL. 😝

Even if these licenses seems like there will be no cost, you technically _can_ use it for commercial purposes ([GPL at least](https://www.gnu.org/licenses/gpl-faq.en.html#DoesTheGPLAllowMoney)). It's just that [it's quite useless to do that](https://www.gnu.org/licenses/gpl-faq.en.html#DoesTheGPLRequireAvailabilityToPublic): you have to make the code freely distributed where then some guy or girl _could_ (and it's totally allowed under GNU GPL) distibute a free copy with **zero changes**. Or as much changes as they like.

Like I said, any fork or copy also _has_ to be GNU GPL (v3 or the same version of GNU GPL). [I'm also pretty sure they're not allowed to steal credit](https://www.gnu.org/licenses/gpl-faq.en.html#IWantCredit).

GNU GPL is to code as America is to guns: free as in freedom.

### Conclusion

Currently, I have spent $0 dollars on the internet. I like that and want to keep it like that: we all benefit from free software. I want everyone to benefit from my code, but not in a way where I ~~won't get credit~~ get cheated on.

For a GNU (new) DAWN! For freedom!

[![xkcd: 225](https://imgs.xkcd.com/comics/open_source.png)](https://xkcd.com/225/)

Thanks for reading!
