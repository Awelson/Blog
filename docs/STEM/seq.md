---
title : An "Almost Always" Approach to Sequences
---

## Introduction

A sequence in some space $X$ is usually represented by some function $a:\mathbb{N}\to X$ so that the first term of the sequence is $a(1)$, the second is $a(2)$ and so on. However, indices are often used to represent these terms, i.e. we usually write $a_n$ in place of $a(n)$. Keep in mind that we shall switch between these two conventions where appropriate.

Given a sequence $a_n$ of points in $X$, an interesting question to ask is whether or not this sequence converges to some $L\in X$. In order for this question to make sense there has to be some notion of distance on the space $X$, which we can do by specifying a [metric](https://en.wikipedia.org/wiki/Metric_space) (or more generally a [topology](https://en.wikipedia.org/wiki/Topological_space)) on $X$. Very briefly, a metric on $X$ is a function $d:X\times X\to \mathbb{R}$ that can be used as some sort of "ruler" on $X$. More precisely, for any $x,y\in X$ the real number $d(x,y)$ represents how far away these two points are from each other, the smaller $d(x,y)$ is the closer $x$ and $y$ are and vice-versa. 

> Of course, a metric has to "make sense". For example, we cannot have $d(x,x)=2$, or $d(x,y)<0$, and so on. There is a list of properties that a function $d:X\times X\to \mathbb{R}$ has to satisfy in order for it to "make sense" to be used as a metric. For example $d(x,y):= |x-y|$ is an example of a function that makes sense to be used as a metric on the space $\mathbb{R}$. I won't get into all of the details here since it suffices to just have an intuitive idea; you can of course look into it at your own time.

## Convergence as an Eventual Behavior

Intuitively speaking, convergence is an *eventual behavior* of a sequence. For example, if $a_n\to L$ then any modification of $a_n$ that does not alter its eventual behavior (for example, randomizing the first 100 terms) will not affect its convergence. Thus, to understand sequence convergence it is paramount that we understand what is exactly meant by *eventual behavior*. To that end, consider the following definition :

> **Definition**. Given a sequence $a_n$ of points in $X$ and some predicate/property $P$ on $X$, we say that $P$ is an *eventual behavior* of $a_n$ (or alternatively, $a_n$ eventually satisfies $P$) if we can find an $N\in \mathbb{N}$ such that for all $n>N$, $a_n$ satisfies $P$. 

!!! note "Example"

    Let $X:=\mathbb{N}$ and $P$ be the property "is equal to 1". Then the sequence 

    $$ 5,4,3,2,1,1,1,1,\ldots $$

    eventually satisfies $P$ since $a_n = 1$ for all $n>4$.

The following definition will also be useful towards defining convergence :

> **Definition.** For any $\epsilon>0$ and $L\in X$ we define $B_\epsilon(L):=\{x\in X \ \vert \ d(L,x)<\epsilon\}$. This can be thought of as the collection of points that are close to $L$. Thinking of $\epsilon>0$ as a parameter, we can control exactly how close the points in $B_\epsilon(L)$ are to $L$.  

!!! note "Example"

    In the space $\mathbb{R}$ with the metric $d(x,y):=|x-y|$, the set $B_1(0)$ is exactly the open interval $(-1,1)$.

Fix some $L\in X$. It makes sense to say that a sequence $a_n\to L$ if it is eventually "close to $L$". To be more precise, we can replace "close to $L$" with "contained in $B_\epsilon(L)$" where $\epsilon>0$ can be controlled to specify the desired level of "closeness". For example, to say that $a_n$ is eventually contained in $B_1(L)$ means that the terms of $a_n$ will eventually be at a distance of at most 1 away from $L$. With this in mind, we come up with the following definition :

> **Definition**. In a metric space $X$, a sequence $a_n$ is said to converge to an $L\in X$ if for any $\epsilon>0$ the sequence $a_n$ is *eventually* contained in $B_\epsilon(L)$

## Convergence as an "Almost Always" Behavior

While the definition above is standard and used widely throughout the mathematical community, there is an equivalent definition which I like better : We introduce the idea of "good" and "bad" indices. 

> **Definition**. Given a sequence $a_n$ of points from $X$ and a predicate $P$ on $X$, the index $m\in \mathbb{N}$ is said to be "good" if $a_m$ satisfies $P$ and "bad" otherwise. We say that a sequence $a_n$ *almost always* satisfies $P$ if there are finitely many bad indices.

We now prove the following theorem :

> **Theorem**. If $a_n$ is a sequence and $P$ is a predicate on some space $X$, then $a_n$ **eventually** satisfies $P$ iff $a_n$ **almost always** satisfies $P$. 

??? note "Proof"

    For the forward direction, we know that there is an $N$ such that $n$ is good for all $n>N$, thus $N$ is an upper bound for the number of bad indices that can exist. For the reverse direction, if there are finitely many bad indices we can take the maximum of this and any index beyond that will necessarily have to satisfy $P$. 

Thus, to prove that a sequence $a_n$ converges to $L$, we can either show :

- for any $\epsilon>0$, $a_n$ is *eventually* contained in $B_\epsilon(L)$, or
- for any $\epsilon>0$, $a_n$ is *almost always* contained in $B_\epsilon(L)$

As previously mentioned, the second definition is more appealing to me and this is because it makes some results super obvious. For example, given a sequence $a_n$ that almost always satisfies a predicate $P$, taking a subsequence or rearranging the terms of $a_n$ does not increase the number of bad indices and hence the resulting sequence will also almost always satisfy $P$. As a consequence, since convergence is an "almost always" behavior, this means that if $a_n\to L$ then any subsequence or rearrangement of $a_n$ should also retain this behavior and converge to $L$ as well.

!!! note "Note"

    It is more accurate to say that convergence is a family/collection of "almost always" (eventual) properties indexed by $\epsilon>0$. However, if every "almost always" property is preserved by some transformation, then that transformation should necessarily preserve convergence, which is by definition simply a collection of these properties.    

## Divergence as an "Almost Always" Behavior

If there is no point $L\in X$ for which $a_n\to L$ then we say that $a_n$ is divergent. In the space $\mathbb{R}$, there are three ways in which a sequence can diverge : either $a_n\to \infty$, $a_n\to -\infty$, or $a_n$ oscillates around. Divergence to $\infty$ or $-\infty$ can be framed as an "almost always" (or equivalently eventual) behavior :

> $a_n\to \infty$ := for any real $M>0$, $a_n$ is almost always greater than $M$
> $a_n\to -\infty$ := for any real $M<0$, $a_n$ is almost always lesser than $M$

However, oscillation is not an "almost always" behavior since if that were to be the case then any subsequence of $(1,-1,1,-1,\ldots)$ should also oscillate (since taking subsequences preserves "almost always" behaviors), but the subsequence $(1,1,1,1,\ldots)$ clearly does not oscillate. 

## Cofinite : Larger than Infinity?

Recall that given a sequence $a_n$ and a predicate $P$, we can determine if $a_n$ almost always satisfies $P$ by making sure that there are finitely many bad indices. Alternatively, we can try to figure out if the set of good indices is "large enough" for $P$ to almost always hold. The issue is that even if the set of good indices are infinite, it is not necessarily true that $P$ almost always holds. For example if the good indices are $2,4,6,8,\ldots$ then this implies the existence of an infinite amount of bad indices, namely $1,3,5,7,\ldots$ Thus, we need a better notion of "large enough" :

> **Definition**. Let $A$ be some subset of a space $X$. We say that $A$ is cofinite if $A^c := X\setminus A$ is finite. Clearly, cofinite sets are "large enough" and won't cause any problems.

!!! note "Example"

    - In the space $\mathbb{N}$, the subset $E$ of even numbers is not cofinite since $E^c$, the subset of odd numbers, is not finite.
    - In the space $\mathbb{N}$, the subset $\{5,6,7,8,\ldots\}$ is cofinite since its complement is $\{1,2,3,4\}$. However, it is not cofinite in the space $\mathbb{Z}$.

> **Definition**. Let $Fr$ be the collection of all cofinite subsets of $\mathbb{N}$, we call $Fr$ the [Fréchet filter](https://en.wikipedia.org/wiki/Fr%C3%A9chet_filter). Thus, to check if a subset $A\subseteq \mathbb{N}$ is large enough amounts to asking if $A$ is in the Fréchet filter.

With the Fréchet filter in hand, we can provide an alternative definition for what it means for a property $P$ to almost always hold. 

> **Definition**. Let $a_n$ be a sequence of points from $X$ and $P$ be a predicate on $X$. Then $a_n$ almost always satisfies $P$ if $A\in Fr$ where $A$ is the set of good indices. 

!!! note "Note"

    There is a one-to-one correspondance between predicates and subsets of a space $X$. For example, in the space $\mathbb{N}$, the predicate "is equal to 1" corresponds to the subset $\{1\}\subseteq \mathbb{N}$. Thus, formally speaking, given a sequence $a_n$ and a predicate $P$ on $X$, the set of good indices can be represented by $a^{-1}[P]$, where we consider sequences and predicates as functions and subsets respectively.   

## Pushforward

In this section it will be helpful to view sequences as functions. Given a sequence $a:\mathbb{N}\to X$ and a function $f:\mathbb{N}\to\mathbb{N}$, we can define a new sequence by composition : $a\circ f$. An interesting question to ask is : for any predicate $P$ on $X$ that is almost always satisfied by $a$, which functions ensure that $P$ is also almost always satisfied by $a\circ f$? 

We shall call a function that satisfies this property a "pushforward" since the predicate $P$ gets *pushed forward* into the new sequence. For example, the identity function is a trivial example of a pushforward. Given a predicate $P$, let $A, A_f$ denote the set of good indices for $a$ and $a\circ f$ respectively. Notice that 

<div align="center"> $m\in A_f$ $\quad \Longleftrightarrow \quad$ $a(f(m))$ satisfies $P$ $\quad \Longleftrightarrow \quad $ $f(m)\in A$ </div>

In other words, $A_f = f^{-1}[A]$. Thus, by definition $f$ is a pushforward iff for any subset $A\subseteq \mathbb{N}$, $A \in Fr \Rightarrow f^{-1}[A]\in Fr$. For those that are familiar with topology, this condition looks awfully similar to the definition of a [continuous function](https://en.wikipedia.org/wiki/Continuous_function#Continuous_functions_between_topological_spaces). In fact, the definitions match when we consider the space $\mathbb{N}$ with the [cofinite topology](https://en.wikipedia.org/wiki/Cofiniteness#Cofinite_topology). Alas I am not knowledgeable enough to quote on why this connection exists.

A more useful characterization of pushforwards can be obtained by noticing that the condition : 

<div align="center"> $\forall \ A\subseteq \mathbb{N}$, $ \ A \in Fr \quad \Longrightarrow \quad f^{-1}[A]\in Fr$ <span style="float:right;">(1)</span></div>

is equivalent to

<div align="center"> $\forall \ A\subseteq \mathbb{N}$, $ \ A$ is finite $\quad \Longrightarrow \quad$ $f^{-1}[A]$ is finite <span style="float:right;">(2)</span></div>

Proving this is not too hard once you recall that for any $f:X\to Y$ and $A\subseteq Y$ we have $(f^{-1}[A])^c =  f^{-1}[A^c]$. Another equivalent condition is :

<div align="center"> $\forall m\in \mathbb{N}$, $ \ f^{-1}[\{m\}]$ is finite <span style="float:right;">(3)</span></div>

The relevant hint here is that inverse images distribute under unions : $f^{-1}[A\cup B] = f^{-1}[A] \cup f^{-1}[B]$. Finally, we have another equivalence :

<div align="center"> The sequence $f(n)$ diverges to $\infty$ <span style="float:right;">(4)</span></div>

To prove this, I would suggest using the contrapositive, i.e. to show that $\neg(3)\to \neg(4)$ and that $\neg(4)\to \neg(3)$, but I will leave it up to you to fill in the details.

## Pullback

Naturally, we should also ask the question : which functions can serve as "pullbacks"? These functions are dual to the pushforwards. Pullbacks are the answer to the dual question : for any predicate $P$ on $X$ that is almost always satisfied by $a\circ f$, which functions ensure that $P$ is also almost always satisfied by $a$? 

In such a case, the predicate $P$ gets *pulled back* into the original sequence. Similar to pushforwards, $f$ is a pullback iff

<div align="center"> $\forall \ A\subseteq \mathbb{N}$, $ \ f^{-1}[A] \in Fr \quad \Longrightarrow \quad A\in Fr$ <span style="float:right;">(5)</span></div>

which is equivalent to the range/image of $f$ being cofinite. We will prove a more general result :

> **Theorem**. Let $F = \{f_1, f_2, \dots, f_k\}$ be a finite collection of functions $f_i: \mathbb{N} \to \mathbb{N}$ and $Im(F) = \bigcup_{i=1}^{k} f_i[\mathbb{N}]$ be the union of their ranges. Then the condition
>
> $$\forall \ A \subseteq \mathbb{N}, \quad \left( \forall i \in \{1,..,k\}, \ f_i^{-1}[A] \in Fr \right) \quad \Longrightarrow \quad A\in Fr \tag{5'}$$
>
> is equivalent to $Im(F)\in Fr$. 

??? note "Proof : $Im(F)\in Fr \ \Rightarrow 5'$"

    Let $A\subseteq\mathbb{N}$ and assume that for each $i=1,2,\ldots,k$ the preimage $f_i^{-1}[A]$ is cofinite, i.e. for each $i=1,2,\ldots,k$, $f_i^{-1}[A]^c$ is finite. Our goal is to show that $A^c$ is finite.

    $A^c$ can be decomposed into two disjoint parts based on whether its elements are in the combined range $Im(F)$:

    $$ A^c = \underbrace{\left(A^c \cap Im(F)\right)}_{\text{Part 1}} \cup \underbrace{\left(A^c \setminus Im(F)\right)}_{\text{Part 2}}$$

    For Part 2, notice that $A^c \setminus Im(F) = A^c \cap Im(F)^c \subseteq Im(F)^c$. By assumption $Im(F)^c$ is finite so we are done. 
    
    Part 1 will be harder and we need to introduce some terminology : 
    
    - Recall that we have a finite collection of functions $f_1,f_2,\ldots f_k$.
    - Let $i\in \{1,2,\ldots,k\}$. 
    - An input $x$ for a function $f_i$ is said to be bad if $f_i(x)\notin A$. 
    - The set of bad inputs for $f_i$ can be represented by $Bad_i := f_i^{-1}[A]^c$ which is finite by assumption. 
    - $f_i[Bad_i]$ (which is also finite) can be thought of as the set of values obtained from feeding bad inputs into $f_i$.
    
    An element $y$ is in Part 1 if $y \notin A$ and $y$ is in the range of at least one function $f_i$. This means that there must exist some $j \in \{1, ..., k\}$ and some input $x \in \mathbb{N}$ such that $f_j(x) = y$. Since $y \notin A$, $x$ a bad input for $f_j$ and so $y\in f_j[Bad_j]$. In other words :
    
    <div align="center"> Part 1 $ \ \subseteq \ $ $f_1[Bad_1] \cup f_2[Bad_2] \cup \cdots \cup f_k[Bad_k]$ </div>

    i.e. Part 1 is contained in a finite union of finite subsets, so Part 1 is finite as needed.

??? note "Proof : $5' \Rightarrow$ $Im(F)\in Fr$"

    Let $A = Im(F) = \bigcup_{i=1}^{k} f_i(\mathbb{N})$. Using this specific $A$ in 5' yields :

    <div align="center"> (for each $i=1,2,\ldots k$, $ \ f_i^{-1}[Im(F)]\in Fr$) $\quad \Rightarrow \quad$ $Im(F)\in Fr$ </div>

    Thus our goal can be proven by showing that $f_i^{-1}[Im(F)]\in Fr$ for each $i=1,2,\ldots k$. Let $j\in \{1,2,\ldots,k\}$ be arbitrary. By definition, for any input $x \in \mathbb{N}$, $f_j(x)\in f_j[\mathbb{N}]$. The set $f_j[\mathbb{N}]$ is, by construction, a part of the union $Im(F) = \bigcup_{i=1}^{k} f_i[\mathbb{N}]$. Therefore, for any $x \in \mathbb{N}$, the output $f_j(x)$ is guaranteed to be in $Im(F)$, i.e. $\mathbb{N}\subseteq f_j^{-1}[Im(F)]$ so that obviously $f_j^{-1}[Im(F)]$ is cofinite as required.

For example, let $f_1(n) := 2n$ and $f_2(n) := 2n-1$. Then, a property $P$ that is almost always satisfied by $a\circ f_1 = a_{2n}$ fails to be pulled back completely by $f_1$ into the original sequence since $Im(f_1)$ is not cofinite. However, if it turns out that $P$ is almost always satisfied by $a\circ f_2= a_{2n-1}$ as well, then $f_2$ can cover for whatever was missed by $f_1$. That is to say while individually $f_1$ and $f_2$ fails to pull $P$ back into the original sequence, their combined power succeeds in doing so, letting us conclude that the original sequence $a_n$ almost always satisfies $P$. 