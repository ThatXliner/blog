---
title: "The hypothetical crush app"
description: "A rabbit hole of cryptography"
pubDatetime: 2023-04-17T03:56:21.967Z
featured: true
---

So I had an idea. At first, I thought it was quite dumb and simple. But the more I thought about it, the harder it seemed. It was a problem.

I shared it with a friend. We couldn't think of a good way to solve it. I [shared it with an AI](https://shareg.pt/EowiFo3). It basically gave up (without admitting it).

## The problem

Let's pretend that I was going to build an app. In this app, you input who you have a crush on, and if you and your crush have a crush on each other, then the app tells you that. Ignore all possibilities of someone lying that they have a crush on someone or someone impersonating another person IRL. This is a purely cryptographic/algorithmic problem.

Seems pretty simple, right? Alice tells the app she has a crush on Bob. When Bob tells the app that he has a crush on Alice, the server will tell them both that they have a crush on each other. Specifically, it realizes that

\text{Bob} \in \text{Alice's Crushes} \land \text{Alice} \in \text{Bob's Crushes}

The catch is this: **privacy**. Nobody are allowed to know (or it is infeasible) that X has a crush on Y unless Y also has a crush on X; if so, only X and Y are allowed to know that they have a crush on each other. "Nobody" includes the server that runs the app, so this might as well be decentralized.

## Take 1: Hashes

The naive solution would be to tell the app `H(Alice + Bob)` (where H is some hash function, and the order of concatenation could be sorted/already decided) in order to tell the app that Alice has a crush on Bob.

The announcement cannot possibly be fully anonymous since you need to sign the hash to prove that you approved the message.

Bob can just see `H(Alice + Bob)`, see if it matches the message of him having a crush on Alice.

There are 2 problems with this:

1. People will see that the messages (which we call X) are identical: and if Bob sent one and Alice sent one, then it means that they have a crush on each other.
