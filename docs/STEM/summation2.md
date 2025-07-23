---
title : On Sums over Countable Spaces
---

## The Finite Case

Suppose I have a space $X$ with three elements, we can represent this space with a set $X:=\{\alpha, \beta, \gamma\}$. I want to be able to talk about sums over this space. Of course, $\alpha + \beta + \gamma$ doesn't make any sense. The elements of $X$ simply serve as placeholders for the values that we want to add, in other words, we are using the "three-ness" of the space $X$ to define a sum of three values. We can do this by assigning to each element $x\in X$ a real number $r\in \mathbb{R}$, i.e. by defining a weight function $f:X\to \mathbb{R}$. For example, if we define $f$ such that $f(\alpha) = f(\beta) = 3$ and $f(\gamma)=10$, then it makes sense to proceed as follows :

$$
\begin{align*}
  \sum_{x\in X}f(x) &= f(\alpha) + f(\beta) + f(\gamma) \\
  &= 3 + 3 + 10 \\
  &= 16 
\end{align*}
$$

This works fine for finite spaces, but if $X$ is countably infinite then we quickly run into some problems. For example, we can try to define the sum this way : Since $X$ is countably infinite, then there is a bijection $g:\mathbb{N}\to X$. Thus we can think of summation over $X$ in terms of the traditional infinite sum :

$$ \sum_{x\in X}f(x) = \sum_{n=1}^\infty{f(g(n))}, $$

defined by the limit of the partial sums, but this is not ideal due to convergence issues and it is also not entirely obvious if a different choice of $g$ (a different rearrangement of the sum) will change the evaluation of the sum[^1]. It turns out we can solve these issues by working in the space $[0,\infty]$. We can do this by declaring $f:X\to [0,\infty]$. Due to monotonicity our sum has to converge to some $x\in[0,\infty]$ (the sum can only ever increase, there is no oscillation). Monotonicity also means that the order of summation does not matter; as long as we continue to add terms together, we are always progressing closer towards the value of the overall sum. 

!!! note "The Space $[0,\infty]$"

    This space is constructed by adding a point "$\infty$" to the space $[0,\infty)$. We can think of $[0,\infty]$ as a linearly ordered topological space where the order on $[0,\infty)$ is extended by setting $x\leq \infty$ for all $x\in [0,\infty]$. In particular, this order is complete so any subset of $[0,\infty]$ has a supremum, and via the topology, we can talk about the convergence of sequences in $[0,\infty]$.. Furthermore, we extend addition on this space by setting $\infty + x = x+\infty = \infty$ for all $x\in [0,\infty]$. 

## The General Case

With all this in mind, we come up with the following "order-free" definition for the sum over a countable space $X$ by taking the supremum over all finite sub-sums :

> **Definition 1**. Let $X$ be a countable space and $w:X\to [0,\infty]$ be its weight function. We define the sum over a subset $A$ of $X$ as $\mu(A)$ where :
>
> $$\mu(A) := \sup\left\{\sum_{x\in F}w(x) \ \vert \ F\subseteq A, \ \text{finite }F \right\}, $$
>
> Note that the supremum (least upper bound) of a subset $A\subseteq [0,\infty]$ always exists since (at the very least) $\infty$ is an upper bound of $A$. In other words, $\mu$ is a map from $X$ to $[0,\infty]$.

Here are some notes that may be useful :

!!! note "Note 1"

    Since the only finite subset of $\varnothing$ is itself, we have $\mu(A) = \sum_{x\in \varnothing}w(x) = 0$ or at least we shall define it as such. Additionally, if $A$ is finite then $\mu(A)$ is simply equivalent to the finite sum $\sum_{x\in A}w(x)$.

!!! note "Note 2"

    For any $A\subseteq B$ we have $\mu(A)\leq \mu(B)$ purely because

    $$ \left\{\sum_{x\in F}w(x) \ \vert \ F\subseteq A, \ \text{finite }F \right\} \subseteq \left\{\sum_{x\in F}w(x) \ \vert \ F\subseteq B, \ \text{finite }F \right\} $$

!!! note "Note 3"

    To prove $\mu(A)\leq r$ it suffices to show that $r$ is an upper bound of $\{\sum_{x\in F}w(x) \ \vert \  F\subseteq A, \ \text{finite }F\}$, i.e. that for any finite $F\subseteq A$ we have $\sum_{x\in F}w(x)=\mu(F) \leq r$. On the other hand, to show that $r\leq \mu(A)$ it suffices to show that there exists a finite $F\subseteq A$ such that $r\leq \sum_{x\in F}w(x) = \mu(F)$.

## Increasing Sequences of Subsets

> **Definition 2**. Let $A:\texttt{set }X$. We say that a sequence of sets $\{A_n\}_{n\in \mathbb{N}}$ **increases** to $A$ (denoted $A_n\nearrow A$) if : 
>
> - $A_1\subseteq A_2\subseteq \cdots \subseteq A$ and 
> - $\bigcup_{n=1}^\infty A_n = A$
>
> **Note.** The second condition is equivalent to : for every $x\in A$ there exists an $N:\mathbb{N}$ such that $x\in A_N$, which is more straightforward to show.

The following lemmas allow us to reframe our arguments in terms of sequences which should prove helpful later on :

> **Lemma 1**. For any $A:\texttt{set }X$ there exists finite $A_1, A_2, \ldots$ such that $A_n\nearrow A$. 

??? note "Proof" 

    If $A$ is finite, then this is trivial. Suppose $A$ is countably infinite, then there exists a bijection $g:\mathbb{N}\to A$. For each $n: \mathbb{N}$ define $A_n := \{g(i) : i\leq n\}$. It is pretty clear that $A_1\subseteq A_2\subseteq \cdots \subseteq A$ and that each $A_n$ is finite.
    
    Now suppose $x\in A$, then there exists an $N:\mathbb{N}$ such that $x = g(N)$, thus $x\in A_N$. Thus $A_n\nearrow A$ as needed. $\Box$

> **Lemma 2**. For any $A:\texttt{set }X$ and $A_n\nearrow A$, we have $\mu(A_n)\to \mu(A)$.

??? note "Proof"

    By Note 2 we have $\mu(A_1)\leq \mu(A_2)\leq \cdots \leq \mu(A)$, thus $\mu(A_n)$ converges to some $L\in [0,\infty]$ with $L\leq \mu(A)$ by the Monotone Convergence Theorem. Now it suffices to show that $\mu(A)\leq L$ (see Note 3). Suppose $F\subseteq A$ is finite then there is an $N:\mathbb{N}$ large enough so that $F\subseteq A_N$, thus :
  
    $$ \sum_{x\in F}w(x) = \mu(F) \leq \mu(A_N)\leq L $$

    so we are done. $\Box$

Combining these two lemmas, we get : for any $A:\texttt{set }X$ there exists a sequence $\{A_n\}_{n\in \mathbb{N}}$ (each $A_n$ finite) such that $\mu(A_n)\to \mu(A)$. 

## Countable Additivity

> **Lemma 3** (Finite Additivity). Let $A_1, A_2, \cdots, A_N : \texttt{set }X$ be a finite collection of pairwise disjoint sets, then :
>
>   $$ \mu\left(\bigcup_{n=1}^N A_n\right) = \sum_{n=1}^N \mu(A_n). $$

??? note "Proof"

    It suffices to show that for any disjoint $A,B : \texttt{set }X$ we have $\mu(A\cup B) = \mu(A) + \mu(B)$; the rest of the argument follows inductively. Also notice that the above identity is trivial for finite $A$ and $B$.

    **Part 1 :** $\mu(A\cup B)\leq \mu(A) + \mu(B)$. 
    
    Suppose $F\subseteq A\cup B$ is finite. Now define $F_1 = F\cap A, \ F_2 = F\cap B$. Notice that $F = F_1 \cup F_2$ and that $F_1, F_2$ are disjoint. Thus,
  
    $$ \mu(F) = \mu(F_1) + \mu(F_2) \leq \mu(A) + \mu(B).$$

    In other words, we have shown that $\mu(F)\leq \mu(A) + \mu(B)$ for any finite $F\subseteq A\cup B$ which is equivalent to our goal (see note 3).

    **Part 2 :** $\mu(A) + \mu(B)\leq \mu(A\cup B)$. 
    
    Suppose $F_1\subseteq A$ and $F_2\subseteq B$ are finite, then $F_1, F_2$ are disjoint so

    $$ \mu(F_1) + \mu(F_2) = \mu(F_1\cup F_2) \leq \mu(A\cup B).$$

    Now we use Lemmas 1 and 2 : There exists $\{A_n\}_{n\in \mathbb{N}}$ such that each $A_n$ is finite, $A_n\nearrow A$ and hence $\mu(A_n)\to \mu(A)$ (and the exact same for the case of $B$). Thus, for each $n:\mathbb{N}$, 

    $$ \mu(A_n) + \mu(B_n) \leq \mu(A\cup B).$$

    Taking the limit as $n\to \infty$ gives $\mu(A)+ \mu(B)\leq \mu(A\cup B)$ as desired. $\Box$

> **Theorem 1.** (Countable Additivity). Suppose $A=\bigcup_{n=1}^\infty{A_n} : \texttt{set }X$ and the $A_n$ are pairwise disjoint, i.e. $\{A_n\}_{n\in \mathbb{N}}$ is a partition of $A$, then
>
>   $$ \mu(A) = \sum_{n=1}^\infty \mu(A_n). $$

??? note "Proof"

    **Part 1 :** $\mu(A)\leq \sum_{n=1}^\infty \mu(A_n)$

    Suppose $F\subseteq A$ is finite then only a finite number of $A_n$'s are needed to cover $F$. Thus there is an $N:\mathbb{N}$ large enough so that $F\subseteq \bigcup_{n=1}^N A_{n}$ and by finite additivity
  
    $$ \mu(F) \leq \mu\left( \bigcup_{n=1}^N A_{n} \right) = \sum_{n=1}^N \mu(A_{n}) \leq \sum_{n=1}^\infty \mu(A_n). $$

    **Part 2 :** $\sum_{n=1}^\infty \mu(A_n)\leq \mu(A)$

    By finite additivity, for any $N:\mathbb{N}$

    $$ \sum_{n=1}^N \mu(A_n) = \mu\left( \bigcup_{n=1}^N A_n \right) \leq \mu(A).$$

    Taking $N\to \infty$ gives us the result we need. $\Box$

## Sum Partitions

Suppose we were to use $\mu$ to define sums over the space $\mathbb{N}$, would that be equivalent to the traditional infinite sum? In other words, with weight $w:\mathbb{N}\to [0,\infty]$, is $\mu(\mathbb{N}) = \sum_{n=1}^\infty w(n)$? The LHS is defined by a supremum over all finite sums whereas the RHS is defined by the limit of its partial sums so this is not immediately obvious, but countable additivity (Theorem 1) makes this almost trivial. 

We can partition $\mathbb{N}$ into the sets $A_1 = \{1\}, \ A_2 = \{2\}, \ \ldots$ Notice that $\mu(A_n) = w(n)$ for each $n:\mathbb{N}$ thus by countable additivity $\mu(\mathbb{N}) = \sum_{n=1}^\infty \mu(A_n) = \sum_{n=1}^\infty w(n)$. In a similar vein, if $g:\mathbb{N}\to \mathbb{N}$ is a bijection, then the sets $A_n = \{g(n)\}$ form a partition of $\mathbb{N}$ so $\mu(\mathbb{N}) = \sum_{n=1}^\infty w(g(n))$. In other words, infinite sums of non-negative terms are order-invariant. 

We can also partition $\mathbb{N}$ into its odd and even parts, further partition those into the sets $O_n = \{2n-1\}, \ E_n = \{2n\}$ for $n=1,2,\ldots$ and use countable additivity :

$$ \begin{align*}
\mu(\mathbb{N}) &= \mu(\mathbb{N}_{\text{odd}}) + \mu(\mathbb{N}_{\text{even}}) \\
&= \sum_{n=1}^\infty \mu(O_n) + \sum_{n=1}^\infty \mu(E_n) \\
&= \sum_{n=1}^\infty w(2n-1) + \sum_{n=1}^\infty w(2n) 
\end{align*} $$

The point is that infinite sums (with non-negative terms) can be broken down and summed piece by piece, and this may lead to some very nice simplifications.

## Tonelli's Theorem (Discrete)

The space $\mathbb{N}^2$ can be visualized as an infinite 2d matrix. Supposing we have a weight $w:\mathbb{N}^2\to [0,\infty]$, we can visualize this by setting the entry at the $n$-th row and $m$-th column of the matrix to equal $w(n,m)$. Summing over $\mathbb{N}^2$ is therefore summing over all entries of the corresponding matrix. Tonelli's Theorem states that if all entries are non-negative, then summing across all rows is equivalent to summing across all columns. More formally, we can define the subsets 

$$ R_n = \{(n,i) \ \vert \  i\in\mathbb{N}\}, \quad C_n = \{(i,n) \ \vert \ i\in\mathbb{N}\} $$

to specify the rows and columns of the matrix respectively. Thus :

$$ \sum_{n=1}^\infty \mu(R_n) = \sum_{n=1}^\infty \mu(C_n) $$

which is trivial by countable additivity. Note that $\mu(R_n) = \sum_{i=1}^\infty w(n,i)$ and $\mu(C_n) = \sum_{i=1}^\infty w(i,n)$, thus we can restate the above equaltiy as :

$$ \begin{align*}
\sum_{n=1}^\infty \sum_{i=1}^\infty w(n,i) &= \sum_{n=1}^\infty \sum_{i=1}^\infty w(i,n) \\
&= \sum_{i=1}^\infty \sum_{n=1}^\infty w(n,i), \quad \quad \text{(relabel/swap index)}
\end{align*} $$








[^1]: In fact the choice of $g$ does matter, see the [Riemann Rearrangement Theorem](https://en.wikipedia.org/wiki/Riemann_series_theorem)