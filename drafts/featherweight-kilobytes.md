---
title: "How to convert bytes to grams"
description: "A response to 'light-as-a-feather' JavaScript libraries"
pubDatetime: 2023-06-01T17:30:24Z
---

In the JavaScript world, you've probably seen something like this:

!["light as a feather"](../../assets/light-as-a-feather.png)

(from the [PrismJS](https://prismjs.com/) website)

Sure, it's just an idiom to say that the JavaScript library won't add much to your bundle size, which is something people care very much.

The problem I have with these claims is that you can't convert bytes or kilobytes (a unit of data) to grams or pounds (units of weight).

...Or can you?

## The experiment

Suppose we can convert data into grams. But how would we even start?

Here's my idea: What's the most standard format of data? It's books. Specifically paper. So what if we covered an entire sheet of MLA-formatted paper with the capital letter `M`? The amount of `M` in there could be the data in bytes that

