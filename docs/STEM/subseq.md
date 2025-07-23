---
title : A technique for constructing subsequences
---

Say we are given a sequence $(a_n)$ from which we would like to construct a subsequence $(a_{n_k})$. We can think of each $a_n$ as a fish flowing down a river, and they do so in sequence; first comes the fish $a_1$, then $a_2$, and so on. The idea here is to set up a "fishing net". Depending on the net, some fish can easily swim through while others may get caught. As the sequence of fish $a_1, a_2, \ldots$ attempt to swim through the net, we note down each time a fish gets caught and that is how we construct our subsequence. Of course, in order for all of this to work we have to make sure that our "net" does not eventually run out of fish to catch. 

If $(a_n)$ is a sequence of points from some space $X$, we can formally think of a "net" as a subset $N\subseteq X$. A fish $x\in X$ is caught by $N$ if $x\in N$, otherwise the fish is able to swim past the net. The condition ensuring that $N$ does not eventually run out of fish to catch can be formally expressed as : $|\{n\in \mathbb{N} \ \vert \ a_n\in N\}| \geq \infty$, i.e. $a_n\in N$ for infinitely many $n\in \mathbb{N}$. Thus, a "net" is any subset of $X$ satisfying the above condition. 

> **Example.** For example, for the space $X=\mathbb{N}$ and the sequence $(1,2,3,\ldots)$, the subset $P$ of prime numbers is a valid "net". Let us run through, step-by-step, the construction of a subsequence using this net. First comes the fish "1"; it swims past the net since 1 is not prime. Next comes the fish "2"; it gets caught in the net since 2 is prime. Next comes the fish "3"; it also gets caught. Next comes the fish "4"; it swims past the net just like fish "1". Our sequence of caught fish so far is "2", then "3" and should we continue this process ad infinitum we would end up with the subsequence $(2,3,5,7,\ldots)$ of prime numbers.  

Instead of restricting ourselves to a single net, we can construct more complicated subsequences by preparing a sequence of nets, the idea being that we switch to the next net each time a fish is caught. If $N_1, N_2,\ldots$ is a sequence of valid nets for $(a_n)$, the resulting subsequence $(a_{n_k})$ satisfies $a_{n_k}\in N_k$ for each $k$ by construction. Here is an example of implementing this idea in practice :

> **Theorem.** There exists a sequence $(a_n)$ such that for every $L\in \mathbb{R}$, there is a subsequence of $(a_n)$ that converges to $L$.

**Proof.** Since the rational numbers are countable we can enumerate them. The idea is to treat this enumeration as a sequence of points in $\mathbb{R}$, let us call this sequence $(q_n)$.

For each $k=1,2,\ldots$ define $I_k := (L-1/k, L+1/k)$. Since $\mathbb{Q}$ is dense in $\mathbb{R}$, each $I_k$ is a valid net for $(q_n)$. Thus, there is a subsequence $(q_{n_k})$ of $(q_n)$ such that $L-1/k < q_{n_k} < L+1/k$ for each $k$. By the Squeeze Theorem, $(q_{n_k})\to L$ so we are done. <span style="float:right;"> $\Box$ </span>



