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

$$
\text{Bob} \in \text{Alice's Crushes} \land \text{Alice} \in \text{Bob's Crushes}
$$

The catch is this: **privacy**. Nobody is allowed to know (or it is infeasible to know) that X has a crush on Y unless Y also has a crush on X; if so, only X and Y are allowed to know that they have a crush on each other. "Nobody" includes the server that runs the app, so this app might as well be decentralized.

In other words, here are the constraints:

1. Every user of the app only has one action: submitting a new crush name to the app (which we will call "posting the crush" or "announcing the crush" or simply "announcement"). This could mean submitting a message to the server 
2. It must be infeasible for everyone (and the server) to know that X has a crush on Y
3. Y cannot know that X has a crush on it unless Y has posted that it has a crush on X

From this, several more constraints may be derived

4. Posting the crush must be anonymous if the message posted has an indicated or derivable target (or else this violates constraint 2 or 3, respectively)
5. Any sort of protocol requiring individual participation (e.g. Bob has to go through some verification protocol requiring Alice's participation) is prohibited; it violates constrant number 3 since it indicates that Bob has a crush on Alice since there is no other reason why he would try to go through such a protocol.
6. In other words, all protocols must be made with everyone.

For now (since this problem was so hard), I won't consider the following constraints:

7. The protocol must work even with malicious clients or servers
8. Any type of brute forcing that violates constraint 2 or 3 is prohibited.

# Problem attempts

## Take 1: Hashes

The naive solution would be to tell the app $H(\text{Alice} + \text{Bob})$ (where $H$ is some hash function or some other one-way function, and the order of concatenation could be sorted/already decided) in order to tell the app that Alice has a crush on Bob.

Bob can just see $H(\text{Alice} + \text{Bob})$, see if it matches the message of him having a crush on Alice.

Note that in this protocol, the announcement cannot possibly be fully anonymous since you need to sign the hash to prove that you approved the message.

There are 2 problems with this:


# Partial solutions

## Constant sending

## Encrypt a random number

1. People will see that the messages (which we call X) are identical: and if Bob sent one and Alice sent one, then it means that they have a crush on each other.
