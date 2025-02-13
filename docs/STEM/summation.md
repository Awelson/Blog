---
title : Summation over arbitrary sets
---

## The Finite Case

The question of how to define summation over an arbitrary set $D$ is trivial if $D$ is finite. Supposing that it is, we can write $D=\{d_1,d_2,\ldots, d_n\}$ for some $n\in \mathbb{N}$. If $f:D\to \mathbb{R}$ then we define :

$$ \sum_{i\in D}f(i) := f(d_1) + f(d_2) + \cdots + f(d_n) $$

To pull this off, we had to represent the elements of $D$ with an index $d:\{1,2,\ldots,n\}\to D$ and of course there are many possible ways of choosing $d$. For example, if $D=\{\alpha,\beta,\gamma\}$ then $d_1=\alpha, d_2=\beta, d_3=\gamma$ is one possibility, and $d_1=\gamma, d_2=\beta, d_3=\alpha$ is another. The order of summation is affected by our choice of index, but for a finite sum the order does not matter. Hence, the definition is well-defined in so far as $D$ being finite.

## The Infinite Case

Consider the issue of summing over $\mathbb{N}$. Suppose $a:\mathbb{N}\to \mathbb{R}$, then it would be favorable if $\sum_{i\in \mathbb{N}}a_i$ were to not depend on the order in which the $a_n$'s are summed. With that in mind, defining :

$$ \sum_{i\in \mathbb{N}}a_i := \sum_{i=1}^\infty{a_i} := a_1 + a_2 + \cdots$$

??? note "Note"

    We define $\sum_{i=1}^\infty{a_i}$ as the limit of the partial sums $\sum_{i=1}^{K}{a_i}$ as $K\to \infty$ (if it exists).

would only make sense if : for any two bijections $f,g:\mathbb{N}\to \mathbb{N}$,

$$ \sum_{i=1}^\infty{a_{f(i)}} = \sum_{i=1}^\infty{a_{g(i)}} $$

Unfortunately, this turns out to be false.

### Example 1

Consider the infinite series :

$$ \sum_{i=1}^\infty{a_i} := 1-1+\frac{1}{2}-\frac{1}{2}+\frac{1}{3}-\frac{1}{3}+\cdots $$

its partial sums form the sequence $(1,0,1/2,0,1/3,0,\ldots)$ which obviously converges to $0$. Consider a rearrangement (bijection) of $\mathbb{N}$ defined as follows : take the first two odd numbers, then the first even number, take the next two odd numbers, then the next even number, and so on.. This rearrangement of $\mathbb{N}$ results in the sequence :

$$ 1,3,2,5,7,4,9,11,6,\ldots $$

In other words, our bijection $f:\mathbb{N}\to\mathbb{N}$ is given by $f(1)=1, f(2)=3, f(3)=2, f(4)=5, \ldots$. Now observe that

$$ \sum_{i=1}^\infty{a_i} \neq \sum_{i=1}^\infty{a_{f(i)}} $$

That both series do not agree, you may verify for yourself experimentally (by drawing a graph of the partial sums). You will find that the LHS converges to zero (as we have already discussed) but the RHS converges to $\ln{2}$.

## The Solution

Consider the following definition :

### Definition 1

> Let $a:\mathbb{N}\to [0,\infty)$. Then we define
>
> $$ \sum_{i\in \mathbb{N}}a_i := \sup{\left\{  \sum_{i\in F}a_i \ \vert \ F\subset \mathbb{N} \ \text{is finite}   \right\}}$$

Remember that there are no issues with summation over a finite set. Also note that we are only allowing summation over non-negative real numbers. Supposing we allow negative terms, consider the following situation : The series,

$$ \sum_{i=1}^\infty{a_i}, \quad a_1 = 1, a_2 = -1, a_3 = 0, a_4 = 0, \ldots $$

clearly converges to $0$. However, $\sum_{i\in \mathbb{N}}a_n$ (following **Definition 1**) evaluates to $1$. We clearly do not want a disagreement between these two definitions. 

??? note "Note"

    There is nothing special with $\mathbb{N}$ in **Definition 1**. We could replace it with any arbitrary set $D$ and the definition will still make sense.

??? note "Note"

    Notice that if $A\subseteq B$ and $a:B\to [0,\infty)$ then $\sum_{i\in A}a_i \leq \sum_{i\in B}a_i$. This is a very useful property.

Restricting ourselves to the addition of non-negative terms, these definitions match. We can actually prove a stronger result :

### Theorem 1

> Let $a:\mathbb{N}\to [0,\infty)$, and $f:\mathbb{N}\to \mathbb{N}$ be a bijection. Then,
>
> $$ \sum_{i\in \mathbb{N}}{a_i} = \sum_{i=1}^\infty{a_{f(i)}} $$

Proof. We will separate this into two parts :

> **Part 1.** $\sum_{i=1}^\infty{a_{f(i)}}\leq \sum_{i\in \mathbb{N}}a_i$
> 
> We prove this by showing that $\sum_{i=1}^K{a_{f(i)}}\leq \sum_{i\in \mathbb{N}}a_i$ for all $K\in \mathbb{N}$. If $A := \{f(1), f(2), \ldots, f(K)\}$ then $\sum_{i=1}^K{a_{f(i)}} = \sum_{i\in A}a_i\leq \sum_{i\in \mathbb{N}}a_i$ so we are done.
---
> **Part 2.** $\sum_{i\in \mathbb{N}}a_i \leq \sum_{i=1}^\infty{a_{f(i)}}$
>
> We do this by showing that $\sum_{i\in K}a_i\leq \sum_{i=1}^\infty{a_{f(i)}}$ for every finite $K\subset \mathbb{N}$. We can clearly find an $M\in \mathbb{N}$ large enough so that $K\subseteq \{f(1), f(2), \ldots, f(M)\}$.
> 
> ??? note "Note"
>
>       To be more formal. Consider the largest number $M\in f^{-1}[K]$. Clearly $f^{-1}[K] \subseteq \{1, 2, \ldots, M\}$. Applying $f$ on both sides gives $K\subseteq \{f(1),f(2),\ldots, f(M)\}$ as desired.
> 
> Thus, $\sum_{i\in K}a_i \leq \sum_{i\in \{f(1), \ldots, f(M)\}}a_i = \sum_{i=1}^M{a_{f(i)}}\leq \sum_{i=1}^\infty{a_{f(i)}}$ as needed. $\Box$

## Infinite Sums on $\mathbb{N}^2$