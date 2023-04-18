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

Seems pretty simple, right? Alice tells the app she has a crush on Bob. When Bob tells the app that he has a crush on Alice, the server will tell them both that they have a crush on each other. Specifically, they realize that

$$
\text{Bob} \in \text{Alice's Crushes} \land \text{Alice} \in \text{Bob's Crushes}
$$

The catch is this: **privacy**. Nobody is allowed to know (or it is infeasible to know) that **X has a crush on Y _unless_ Y also has a crush on X**; if so, **only X and Y are allowed to know** that **they have a crush on each other**. "Nobody" includes the server that runs the app, so this app might as well be decentralized (doesn't need to be though).

In other words, here are the constraints:

1. Every user of the app only has one action: submitting a new crush name to the app (which we will call "posting the crush" or "announcing the crush" or simply "announcement"). This could mean submitting a message to a server or adding a block anonymously in a blockchain like [Zerocoin/Zerocash](https://en.wikipedia.org/wiki/Zerocoin_protocol#Zerocash).
2. It must be infeasible for everyone (and the server) to know that X has a crush on Y
3. Y cannot know that X has a crush on it unless Y has posted that it has a crush on X

From this, several more constraints may be derived:

4. Posting the crush must be anonymous if the message posted has an indicated or derivable target (or else this violates constraint 2 or 3, respectively)
5. Any sort of protocol requiring individual participation (e.g. Bob has to go through some verification protocol requiring Alice's participation) is prohibited; it violates constrant number 3 since it indicates that Bob has a crush on Alice since there is no other reason why he would try to go through such a protocol.
6. In other words, all protocols must be made with everyone (and not to special individuals)

For now (since this problem was so hard), I won't consider the following constraints:

7. The protocol must work even with malicious clients or servers. Note that verification of identity is still required.
8. Any type of brute forcing that violates constraint 2 or 3 is prohibited.

## Take 1: Hashes

The naive solution would be to tell the app $H(\text{Alice} + \text{Bob})$ in order to announce that Alice has a crush on Bob. Here, $H$ is some one-way function like a cryptographic hash such as [SHA-2](https://en.wikipedia.org/wiki/SHA-2) or [BLAKE3](<https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE3>), and the order of concatenation could be sorted/already decided.

Bob can just see $H(\text{Alice} + \text{Bob})$, see if it matches the message of him having a crush on Alice (which in this case is also $H(\text{Alice} + \text{Bob})$).

Note that in this protocol, the announcement **cannot possibly be fully anonymous** since you need to _sign the hash_ to prove that you approved the message.

There are several problems with this:

1. Let's assume Alice and Bob have a crush on each other. So both Alice and Bob would publicly post $H(\text{Alice} + \text{Bob})$, which reveals to other users that they have a crush on each other. This **violates constraint number 2**.
2. Given a hash coming from Bob, we can brute force the hash in $O(\text{amount of users})$ time. This **violates constraint 8**, which we will ignore.
3. But from this, we can test $\text{Sender's message} = H(\text{Sender} + \text{Me})$ first, **violating constraint number 3**.

## Take 2: Hashes with encryption

Let $X$ = $H(\text{Alice} + \text{Bob})$

Instead of:

- Bob posts $X$
- Alice posts $X$
- Bob and Alice realize that the message the other person posted matches $X$, therefore they have a crush on each other.

We do:

- Bob posts $\text{Sign}(\text{Encrypt}(X, \text{Alice}_{pk}), \text{Bob})$ (meaning signed by Bob encrypted via Alice's public key)
- Alice posts $\text{Sign}(\text{Encrypt}(X, \text{Bob}_{pk}), \text{Alice})$
- Alice finds that she can decrypt Bob's message
- Bob finds that he can decrypt Alice's message

Actually, pause right here: **we don't even need $X$**. Additionally, this protocol _is already broken_: Alice realizes that Bob sent her a message that only she can decrypt. In this current scheme, it can only mean one thing: he has a crush on her. This **violates constraint number 3.**

Quote from my conversation with my friend:

> There is no reason why Bob would send a message to her, encrypted using her key, besides trying to tell her X. If Bob were to send X to everyone (encrypted individually), that defeats the purpose of encrypting in the first place.

## Take 3: Anonymous hashes

Finally, my friend thinks of the first solution that may work decently well. To quote:

> now, there would be the 2iq solution of making everyone sending a crush message like every day, with those who didnt send them send a fake one directed at like "eve", so you couldnt determine who is real.

For example:

> like if bob has a crush, the client doesnt send it right away, like it sends at midnight utc. all other clients also do the same thing except if they dont have a target crush(or already sent one) they send a message with the crush being "eve" or someone, making knowing who sent messages useles

So this actually satisfies the necessary constraints. The problem with it should be pretty obvious:

> But like you can’t force clients to be sending messages 24/7

But why do we need to? Although, I didn't think of this during the conversation (although I remembered Zerocoin and mentioned it), here's an idea: why do we need to constantly send messages? So you couldn't determine which messages were "real," or intended for Alice. That wouldn't matter if Alice didn't know who you were...

# Partial solutions

- [Anonymous hashes](#take-3-anonymous-hashes)

## Encrypt a random number

1. People will see that the messages (which we call X) are identical: and if Bob sent one and Alice sent one, then it means that they have a crush on each other.
