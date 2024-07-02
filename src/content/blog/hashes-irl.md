---
title: "Hash functions applied in unexpected real life situations"
pubDatetime: 2022-05-21
description: "Who knew cryptographic hashes were so awesome?"
tags: [school, fun, programming, cryptography, "middle school"]
---

On May 18, my friend (let’s call him Bob) and I overheard some of the girls gossiping that a boy (we’ll call him X) liked one of them girls (call her Y). I’m going to keep the names anonymous for their sake.

Bob said he knew who that specific person was. Funny, because I was sure I knew who that person was. But we didn’t want to tell each other who it was for that person’s sake (in case I was wrong or Bob was wrong). But we wanted to make sure we were thinking of the same person.

In other words, Bob and I want to prove to each other that we both know the same knowledge (the name of X), without telling each other who X is. Because then, if one of us is wrong, the other won’t know the truth.

I thought for a bit. Then I had a plan! I told Bob to go search up “SHA256 online”. We both landed on [this site](https://emn178.github.io/online-tools/sha256.html). I told Bob to type in the name of X in the text box, all lower case. I did the same.

After he had done so, I told him to scroll down so I would only see the hash (more accurately, hex digest) of the name he had entered. We compared hashes.

## Wait what?

Before I go on, let me explain for a bit.

SHA-256 is part of the [SHA-2](https://en.wikipedia.org/wiki/SHA-2) family of [cryptographic hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function). SHA-256 specifically gives a 256-bit length hash output. What’s a cryptographic hash function?

A cryptographic hash function is a thingy, program, or method, of changing some input (e.g. text) to a different fixed-length output, deterministically (for the same input, give the same output every single time).

Cryptographic hashes _should_ have these properties (as most do):

1. [Hash collision](https://en.wikipedia.org/wiki/Hash_collision) resistance: it should be infeasible (but it’s theoretically possible) to have 2 inputs map to the same output.
2. [Avalanche effect](https://en.wikipedia.org/wiki/Avalanche_effect): when the input changes slightly, the output should be very different
3. [Pre-image](https://en.wikipedia.org/wiki/Preimage_attack) resistance: It should be impossible to figure out the input given the output (i.e impossible to reverse-engineer). The only way an attacker should be able to figure what you hashed is through [brute force](https://en.wikipedia.org/wiki/Brute-force_search) or hashing every input they can think of and comparing it to the given hash.

## Back to the story?

Well, **we got the same hashes**. As explained above, that means we both thought of the same name that X could’ve been. It couldn’t (or the chances were really low) have been a different person that Bob entered because of the hash collision property

## Conclusion

What I learned that day was

- Someone else knew that person X liked Y
- It wasn’t a zero knowledge proof

### Zero knowledge proof?

Yeah so I originally (mistakenly) thought that this ingenious scheme was a zero knowledge proof. The definition of zero knowledge proofs (from [Wikipedia](https://simple.wikipedia.org/wiki/Zero-knowledge_proof)) is:

> A **zero-knowledge proof** or **zero-knowledge protocol** is a [protocol](https://simple.wikipedia.org/wiki/Protocol) used in [cryptography](https://simple.wikipedia.org/wiki/Cryptography) …the task of one party is to convince the other that it knows some secret, but without revealing [any other information including] the secret.

And after googling a bit about zero knowledge proofs following the incident, I found this [StackExchange answer](https://crypto.stackexchange.com/questions/70877/is-a-hash-a-zero-knowledge-proof). The main part that shined was

> Consider the authentication protocol you suggest, with a hash function _𝐻_: here, given a secret value _𝑣_, you leak _𝐻_(_𝑣_). This is clearly not "no information", and you have no guarantee that this _𝐻_(_𝑣_) cannot be used to do something bad.

In other words, it **wasn’t zero knowledge** since I had revealed information: the hash.

### Possible improvements to the hash

What I could’ve done better was add a [“salt”](<https://en.wikipedia.org/wiki/Salt_(cryptography)>) to the hash. Why would do I need this? Otherwise, someone could’ve pre-computed all the hashes of all the names we knew. In cryptography, we call this the [rainbow table attack](https://en.wikipedia.org/wiki/Rainbow_table)[^1]. In practical situation, it’s applied to hashes of passwords and not possible crush names. The salt can protect against these attacks by forcing them to pre-compute every hash with the salt concatenated. Remember, because of the second property of cryptographic hash functions we had mention, the salted hash would look nothing like the unsalted ones.

The reason why I didn’t use a salt was because

1. Using a salt was overkill for such a dumb situation
2. I didn’t think of using a salt at the time
3. The chances of someone pre-computing all the names of the people we knew was pretty low, considering the amount programmers and/or people who knew about cryptography in our friend group.
4. They could just compute all hashes after I have given them the salt + hash. Salts are usually used in password-storing schemes to void any rainbow tables previously generated.

---

Next time you want to verify that the other person knew the same info as you do, try giving zero-knowledge proofs a shot. Maybe even get creative and use something else instead of hashes if hashes didn’t suit the situation.

---

[^1]: while a rainbow table is different from a brute force search, it’s essentially a brute force search with pre-computing hashes and storing the results in a smart way.
