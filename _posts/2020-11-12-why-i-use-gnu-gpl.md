---
title: "Why I use GNU GPL (v3+)"
date: 2020-11-12
---

Because it's great.

No seriously: I've seen [LGPL](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License), [MIT](https://en.wikipedia.org/wiki/MIT_License) (and [BSD](https://en.wikipedia.org/wiki/BSD_licenses)), [AGPL](https://en.wikipedia.org/wiki/Affero_General_Public_License), [Apache](https://en.wikipedia.org/wiki/Apache_License) (which is pretty great, not gonna lie), but [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License) seems like the way to go!

### Why licenses

Being a developer, proprietary or not, you need to notify the user (or client) how they can use the software. Some (bad) people would want to leak your secret code. 
Others may want to steal credit from your [open source](https://en.wikipedia.org/wiki/Open_source) (read: *free*) code.

In short, you want to make sure the user is using your code as you want it to be.

### TL;DR

Here's a rundown on the licenses:

 - MIT (or BSD)-like licenses: "Do anything you want with the software and/or code as long as you give credit."

 - Apache License: Like the MIT license except that you *must* state your changes (if you forked and changed the original) and **you cannot patent the code**.
 
 - GNU GPL (or just GPL): Like the MIT license but all forks must be made GNU GPL licensed but you're still free to use it (and maybe modify it a bit) privately if you're not gonna distibute the new modified code. As the owner, you must make the source code public. It's helpful to **prevent proprietary companies from milking your code.**
 
 - GNU LGPL (or just LGPL): Like the GPL license except that proprietary companies can use it. Very helpful if you're building a library that **you just want everyone to *use* (even proprietary companies).**
 
 - GNU AGPL (or just AGPL): Like GNU GPL but all modified copies must release the source code. Useful for servers: it **prevents people from milking your code *over a network.***
 
### My choice
 
Now you've seen the options, here's my choice (drumroll please)....
 
**GNU GPL v3+** 😱 


### Why

When I write code (usually open source and hosted with ❤️  by [GitHub](https://github.com/)), I don't want proprietary companies benefiting (and profiting) from my code when I don't.

When you license code as GNU GPL, you're basically saying

> Haha! Get rekt, proprietary hoggers! You can't use my code while other people can!

I believe that software should be free.... **as in freedom**. You are free to distibute, use, and modify. If you want to fork this (and make the forked code public), it must be ~~open source~~ GNU GPL (v3).

In other words, I do not want proprietary companies having an advantage. They can't use my library without making it GNU GPL. 😝

Even if these licenses seem like there will be no cost, you technically *can* use it for commercial purposes.
It's just that it's quite useless to do that: you have to make the code freely distributed where then some guy or girl *could* (and it's totally allowed under GNU GPL) distibute a free copy with **zero changes**. Or as much changes as they like.

Like I said, the distributed fork or copy *has* to be GNU GPL (v3 or the same version of GNU GPL). I'm also pretty sure they're not allowed to steal credit.

GNU GPL is to code as America is to guns: free as in freedom.

### Conclusion

Currently, I have spent $0 dollars on the internet. I like that and want to keep it like that: we all benefit from free software. I want everyone to benefit from my code, but not in a way were I ~~won't get credit~~ cheated on.

For a GNU DAWN! For freedom!

[![xkcd comic: Open Source](https://imgs.xkcd.com/comics/open_source.png)](https://xkcd.com/225/)

Thanks for reading!
