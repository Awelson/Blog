---
title : Summation over arbitrary sets
---

## The Finite Case

The question of how to define summation over an arbitrary set $D$ is trivial if $D$ is finite. Supposing that it is, we can write $D=\{d_1,d_2,\ldots, d_n\}$ for some $n\in \mathbb{N}$. If $f:D\to \mathbb{R}$ then we define :

$$ \sum_{i\in D}f(i) := f(d_1) + f(d_2) + \cdots + f(d_n) $$

To pull this off, we had to represent the elements of $D$ with an index $d:\{1,2,\ldots,n\}\to D$ and of course there are many possible ways of choosing $d$. For example, if $D=\{\alpha,\beta,\gamma\}$ then $d_1=\alpha, d_2=\beta, d_3=\gamma$ is one possibility, and $d_1=\gamma, d_2=\beta, d_3=\alpha$ is another. The order of summation is affected by our choice of index, but for a finite sum the order does not matter. Hence, the definition is well-defined in so far as $D$ being finite.

## The Infinite Case

Consider the issue of summing over $\mathbb{N}$. Suppose $a:\mathbb{N}\to \mathbb{R}$, then it would be favorable if $\sum_{i\in \mathbb{N}}a(i)$ <span class="latex-code">(we'll write $\sum_{i\in \mathbb{N}}a_i$ from now on to be more standard)</span> were to not depend on the order in which the $a_i$'s are summed. With that in mind, defining :

$$ \sum_{i\in \mathbb{N}}a_i := \sum_{i=1}^\infty{a_i} := a_1 + a_2 + \cdots$$

??? note "Note"

    We define $\sum_{i=1}^\infty{a_i}$ as the limit of the partial sums $\sum_{i=1}^{K}{a_i}$ as $K\to \infty$ (if it exists).

would only make sense if for any two bijections $f,g:\mathbb{N}\to \mathbb{N}$,

$$ \sum_{i=1}^\infty{a_{f(i)}} = \sum_{i=1}^\infty{a_{g(i)}} $$

Unfortunately, this turns out to be false.

### Example 1

Consider the infinite series :

$$ \sum_{i=1}^\infty{a_i} := 1-1+\frac{1}{2}-\frac{1}{2}+\frac{1}{3}-\frac{1}{3}+\cdots $$

its partial sums form the sequence $(1,0,1/2,0,1/3,0,\ldots)$ which obviously converges to $0$. Consider a rearrangement (bijection) of $\mathbb{N}$ defined as follows : take the first two odd numbers, then the first even number, take the next two odd numbers, then the next even number, and so on.. This rearrangement of $\mathbb{N}$ results in the sequence :

$$ 1,3,2,5,7,4,9,11,6,\ldots $$

In other words, our bijection $f:\mathbb{N}\to\mathbb{N}$ is given by $f(1)=1, f(2)=3, f(3)=2, f(4)=5$, and so on. Now observe that

$$ \sum_{i=1}^\infty{a_i} \neq \sum_{i=1}^\infty{a_{f(i)}} $$

This you could verify experimentally (by drawing a graph of the partial sums). You will find that the LHS converges to zero (as we have already discussed) but the RHS converges to $\ln{2}$.

## The Solution

Consider the following definition :

### Definition 1

> Let $a:\mathbb{N}\to [0,\infty]$. Then we define
>
> $$ \sum_{i\in \mathbb{N}}a_i := \sup{\left\{  \sum_{i\in F}a_i \ \vert \ F\subset \mathbb{N} \ \text{is finite}   \right\}}$$

Remember that there are no issues with summation over a finite set. Note that unlike the traditional sum over $\mathbb{N}$, this "new sum" is not dependent on order. That is to say, if we think of $a:\mathbb{N}\to [0,\infty]$ as a sequence, then rearranging it will not change its sum; more formally speaking, if $f:\mathbb{N}\to \mathbb{N}$ is a bijection, then $\sum_{i\in \mathbb{N}}a_i = \sum_{i\in \mathbb{N}}(a\circ f)_i$. 

Also note that we are only allowing summation over non-negative real numbers. Supposing we do allow negative terms, consider the following situation :

$$ \sum_{i=1}^\infty{a_i}, \quad a_1 = 1, a_2 = -1, a_n = 0, \quad n\geq 3 $$

This series converges (in the traditional sense) to $0$. However, $\sum_{i\in \mathbb{N}}a_n$ (following **Definition 1**) evaluates to $1$. We clearly do not want a disagreement between these two definitions. As we shall later prove, restricting ourselves to non-negative terms allows these definitions to match, but let us talk through a technical detail before proceeding :

---

By construction, $\sum_{i\in \mathbb{N}}a_i$ can possibly be infinite (indeed $a_i$ itself can be infinite). Similarly, when the partial sums of $\sum_{i=1}^\infty{a_i}$ diverge to infinity (which is the only possible way it can diverge given that the $a_n$'s are non-negative) we shall consider this as "converging" to infinity, i.e. $\sum_{i=1}^\infty{a_i}=\infty$.

More specifically, we can think of these two methods of summations as functions that map sequences with values in $[0,\infty]$ to a single value in the set $[0,\infty]$ of extended reals. Now the question of whether or not these two summations agree with each other can be reframed as asking whether or not these two functions are equal.

??? note "Note" 

    I am going to quote **Remark 0.0.1** from Terence Tao's "Introduction to Measure Theory" which gives a more in depth explanation as to what I am trying to convey :

    > Note that there is a tradeoff here: if one wants to keep as many useful laws of algebra as one can, then one can add in infinity, or have negative numbers, but it is difficult to have both at the same time. Because of this tradeoff, we will see two overlapping types of measure and integration theory: the *non-negative* theory, which involves quantities taking values in $[0, \infty]$, and the *absolute integrable* theory, which involves quantities taking values in $(-\infty,\infty)$ or $\mathbb{C}$. For instance, the fundamental convergence theorem for the former theory is the monotone convergence theorem, while the fundamental convergence theorem for the latter is the dominated convergence theorem.
    >
    > One important feature of the extended non-negative real axis is that all sums are convergent: given any sequence : $x_1, x_2, \ldots \in [0, \infty]$, we can always form the sum $\sum_{i=1}^\infty x_n \in [0, \infty]$ as the limit of the partial sums $\sum_{n=1}^N x_n$, which may be either finite or infinite.

    Thus, it appears that what we are trying to do by formalizing sums over arbitrary sets has to, necessarily, be part of the *non-negative* integration theory.

---

### Theorem 1

We shall prove the much stronger result that regardless of a rearrangement of terms in $\sum_{i=1}^\infty{a_i}$, the two methods of summation still agree. This amounts to the fact that $\sum_{i=1}^\infty{a_i}$ is "order independent" assuming $a_n\in [0, \infty]$.

> **Theorem.** Let $a:\mathbb{N}\to [0,\infty]$, and $f:\mathbb{N}\to \mathbb{N}$ be a bijection. Then,
>
> $$ \sum_{i\in \mathbb{N}}{a_i} = \sum_{i=1}^\infty{a_{f(i)}} $$

??? note "Proof" 

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

## A Short Excursion

Notice that we can generalize **Definition 1**. We can replace $\mathbb{N}$ with any other set (including uncountable sets) and obtain a perfectly valid definition for what it means to sum over that set.

### Definition 2

> Let $a:D\to [0,\infty]$. Then we define
>
> $$ \sum_{i\in D}a_i := \sup{\left\{  \sum_{i\in F}a_i \ \vert \ F\subseteq D \ \text{is finite}   \right\}}$$

In particular, this means that we can sum over uncountable sets! Unfortunately, as we will later find out, this does not result in anything "interesting". It is possible for $\sum_{i=1}^\infty a_n < \infty$ even if all the $a_n$ are strictly positive, we just need to make sure that the $a_n$ terms decrease fast enough. However, if we are summing over uncountably many strictly positive terms, the sum always diverges no matter what. This idea is encapsulated by the following theorem :

### Theorem 2

> **Theorem.** If $a:D\to [0,\infty]$ and $\sum_{i\in D}a_i < \infty$ then the set $S = \{i\in D \ \vert \ a_i\neq 0\}$ is at most countable. In other words, the largest set (not containing any zeroes) we can use to construct a finite sum is at most countable.

??? note "Proof"

    For each $n\in \mathbb{N}$, define $S_n = \{i \in D \ \vert \ a_i > 1/n \}$. Note that $S = \bigcup_{n=1}^\infty S_n$, this is easy to check. If we can show that each $S_n$ has to be finite, then $S$ is at most countable; as needed. Fix an $n\in \mathbb{N}$, for any finite subset $F\subseteq S_n$ we have :
     
    $$ \sum_{i\in F}a_i > \sum_{i\in F}\frac{1}{n} = \frac{|F|}{n} $$
    
    Thus :
    
    $$ \frac{|F|}{n} < \sum_{i\in F}a_i \leq \sum_{i\in D}a_i$$
    
    By assumption, $\sum_{i\in D}a_i$ is finite. Thus, we have proven that the size of any arbitrary finite subset of $S_n$ is bounded by a fixed value, that being $n\cdot \sum_{i\in D}a_i$. If $S_n$ were infinite, then this bound wouldn't exist. Since $n\in \mathbb{N}$ was arbitrary, we have proven that all of the $S_n$ has to be finite. $\Box$

## Infinite Sums on $\mathbb{N}^2$

Setting $D:=\mathbb{N}^2$ in **Definition 2**, we get a definition for what it means to sum over $\mathbb{N}^2$. However, we can also think about summing over $\mathbb{N}^2$ in the following way :

Think of an infinite 2-dimensional matrix with values in $[0,\infty]$. We denote the value in the $n^{th}$ row and $m^{th}$ column with the term $a_{n,m}$. Now consider a bijection $f:\mathbb{N}\to \mathbb{N}^2$, then $\sum_{i=1}^\infty a_{f(i)}$ sums over all possible $a_{n,m}$ terms in the matrix. 

We have turned a 2d problem into a 1d problem, cool! Notice that by **Theorem 1**, the value of $\sum_{i=1}^\infty a_{f(i)}$ is independent of our choice of $f$, in other words, the order in which we choose to sum the $a_{n,m}$ terms does not matter. As a corollary, this means that we can reshuffle the terms of the matrix without changing the value of its sum. The big question however is whether or not $\sum_{(n,m)\in \mathbb{N}^2}a_{n,m} = \sum_{i=1}^\infty a_{f(i)}$ for any bijection $f:\mathbb{N} \to \mathbb{N}^2$. 

### Theorem 3

> **Theorem.** If $a_{n,m}\in [0, \infty]$ are the terms of an infinite 2d matrix, then $\sum_{(n,m)\in \mathbb{N}^2}a_{n,m} = \sum_{i=1}^\infty a_{f(i)}$ for any bijection $f:\mathbb{N} \to \mathbb{N}^2$. 

??? note "Proof"

    > I am not joking, the proof of this is EXACTLY the same as for **Theorem 1** so I will leave it to you to fill in the details. $\Box$

### Tonelli's Theorem

Suppose you have an infinite 2d matrix indexed by $(a_{n,m})_{n,m\in \mathbb{N}}$ (with $a_{n,m}\in[0, \infty]$ for each $n,m$), then Tonelli's Theorem states that the value you obtain from summing over each row, then adding the results together :

$$ \lim_{N\to \infty}\sum_{n=1}^N\left(\lim_{M\to \infty}\sum_{m=1}^M a_{n,m}\right) := \sum_{n=1}^\infty\left(\sum_{m=1}^\infty a_{n,m}\right)$$

is equivalent to doing the same by column :

$$ \lim_{M\to \infty}\sum_{m=1}^M\left(\lim_{N\to \infty}\sum_{n=1}^N a_{n,m}\right) := \sum_{m=1}^\infty\left(\sum_{n=1}^\infty a_{n,m}\right)$$

Here is the sequence of ideas we are going to use to prove Tonelli's Theorem : 

- First, we show that the value we obtain by performing row-by-row summation is equivalent to $\sum_{(n,m)\in \mathbb{N}^2}a_{n,m}$ and hence $\sum_{i=1}^\infty a_{f(i)}$ for any bijection $f:\mathbb{N}\to \mathbb{N}^2$. 
- This means that whenever we reshuffle the terms of the matrix, the row-by-row sum does not change. 
- We can create a new matrix by pivoting the original matrix, i.e. the columns of the old matrix are now the rows of the new matrix. 
- Taking the row-by-row sum of the original matrix is equivalent to taking the row-by-row sum of the pivoted matrix which is in turn equivalent to taking the col-by-col sum of the original matrix.

We'll only elaborate on the first bullet point. As an exercise (should you wish), you could try to formalize the details of the other steps

### Theorem 4

> **Theorem.** $\sum_{n=1}^\infty\left(\sum_{m=1}^\infty a_{n,m}\right) = \sum_{(n,m)\in \mathbb{N}^2}a_{n,m}$.

??? note "Proof"

    > **Part 1.** $\sum_{(n,m)\in \mathbb{N}^2}a_{n,m} \leq \sum_{n=1}^\infty\left(\sum_{m=1}^\infty a_{n,m}\right)$
    >
    > It suffices to show that for any finite $F\subset \mathbb{N}^2$, $\sum_{(n,m)\in F}a_{n,m} \leq \sum_{n=1}^\infty\left(\sum_{m=1}^\infty a_{n,m}\right)$. For each $N\in \mathbb{N}$ let $S_N := \{ (n,m)\in \mathbb{N}^2 \ \vert \ n,m\leq N\}$ then clearly there exists an $N$ large enough so that $F\subseteq S_N$ and so 
    >
    > $$ \sum_{(n,m)\in F}a_{n,m} \leq \sum_{(n,m)\in S_N}a_{n,m} $$
    >
    > Notice that we can rewrite the RHS as $\sum_{n=1}^N(\sum_{m=1}^N a_{n,m})$. Thus,
    > 
    > $$ \sum_{(n,m)\in F}a_{n,m} \leq \sum_{n=1}^N\left(\sum_{m=1}^N a_{n,m}\right) \leq \sum_{n=1}^\infty\left(\sum_{m=1}^\infty a_{n,m}\right) $$
    >
    > as needed. $\Box$

    ---

    > **Part 2.** $\sum_{n=1}^\infty\left(\sum_{m=1}^\infty a_{n,m}\right) \leq \sum_{(n,m)\in \mathbb{N}^2}a_{n,m}$
    >
    > It suffices to show that $\sum_{n=1}^N\left(\sum_{m=1}^\infty a_{n,m}\right) \leq \sum_{(n,m)\in \mathbb{N}^2}a_{n,m}$ for any $N\in \mathbb{N}$. Fix $N\in \mathbb{N}$, now it suffices to show that $\sum_{n=1}^N\left(\sum_{m=1}^M a_{n,m}\right) \leq \sum_{(n,m)\in \mathbb{N}^2}a_{n,m}$ for any $M\in \mathbb{N}$. Let $N' := \text{max}(N,M)$ then notice that :
    > 
    > $$\sum_{n=1}^N\left(\sum_{m=1}^M a_{n,m}\right) \leq \sum_{(n,m)\in S_{N'}}a_{n,m}\leq \sum_{(n,m) \in \mathbb{N}^2} a_{n,m}$$
    >
    > Thus we are done. $\Box$

### Tonelli's Theorem

> **Theorem.** Let $(a_{n,m})_{n,m\in \mathbb{N}}$ be a doubly indexed infinite sequence where $a_{n,m}\in [0, \infty]$ for each $n$ and $m$. Then :
>
> $$\sum_{(n,m)\in \mathbb{N}^2}a_{n,m} = \sum_{n\in \mathbb{N}}\left(  \sum_{m\in \mathbb{N}} a_{n,m} \right) = \sum_{m\in \mathbb{N}}\left(  \sum_{n\in \mathbb{N}} a_{n,m} \right) $$

We state Tonelli's theorem here, but as I have already explained, we won't go further into detail. That is your job, should you wish. 

### General Tonelli's

Tonelli's theorem does not only work for $\mathbb{N}\times \mathbb{N}$, we can extend this idea to any general $A\times B$, even if $A$ and/or $B$ are uncountable :

> **Theorem.** For any two sets $A,B$, let $(a_{n,m})_{n\in A, m\in B}$ be a doubly indexed infinite sequence where $a_{n,m}\in [0, \infty]$ for each $n$ and $m$. Then :
>
> $$\sum_{(n,m)\in A\times B}a_{n,m} = \sum_{n\in A}\left(  \sum_{m\in B} a_{n,m} \right) = \sum_{m\in B}\left(  \sum_{n\in A} a_{n,m} \right) $$

It is helpful to first establish that for any finite sets $A, B$ we have $\sum_{(n,m)\in A\times B} a_{n,m} = \sum_{n\in A}\left( \sum_{m\in B} a_{n,m}\right) = \sum_{m\in B}\left(\sum_{n\in A} a_{n,m} \right)$. This does not really need any proof considering the sets involved are finite. 

??? note "Proof"

    Again, we'll only prove the first equality :

    > **Part 1.** $\sum_{(n,m)\in A\times B}a_{n,m} \leq \sum_{n\in A}\left( \sum_{m\in B} a_{n,m}\right)$
    > 
    > It suffices to show that $\sum_{(n,m)\in F}a_{n,m} \leq \sum_{n\in A}\left( \sum_{m\in B} a_{n,m}\right)$ for all finite $F\subseteq A\times B$. Suppose $F\subseteq A\times B$ is finite, then clearly there exists $F_A, F_B$ such that $F = F_A\times F_B$.
    >
    > ??? note "Note"
    >    
    >       If we want to be more explicit, then let $F_A = \{ \pi_1(x) \ \vert \ x\in F\}$ and $F_B = \{ \pi_2(x) \ \vert \ x\in F\}$ where $\pi_1:A\times B \to A$ and $\pi_2:A\times B \to B$ are the canonical projection functions. By construction, $F_A \times F_B = F$.
    >
    > Consider :
    >
    > $$ \sum_{(n,m)\in F}a_{n,m} = \sum_{n\in F_A}\left(\sum_{m\in F_B} a_{n,m}\right) \leq \sum_{n\in A}\left( \sum_{m\in B} a_{n,m}\right) $$
    > 
    > and we are done. $\Box$

    ---

    > **Part 2.** $\sum_{n\in A}\left( \sum_{m\in B} a_{n,m}\right) \leq \sum_{(n,m)\in A\times B}a_{n,m}$
    > 
    > This is equivalent to showing that $\sum_{n\in F_A}\left( \sum_{m\in F_B} a_{n,m} \right) \leq \sum_{(n,m)\in A\times B} a_{n,m}$ for all finite $F_A\subseteq A$ and $F_B\subseteq B$. Consider :
    >
    > $$\sum_{n\in F_A}\left( \sum_{m\in F_B} a_{n,m} \right) = \sum_{(n,m)\in F_A \times F_B}a_{n,m} \leq \sum_{(n,m) \in A\times B} a_{n,m} $$
    >
    > so we are done. $\Box$