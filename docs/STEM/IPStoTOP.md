---
title : From Inner Product Space to Topology
---

For this post I will assume that you know (just the definitions) of a field, a vector space, a metric space, and a topological space.

## Inner Products

> **Definition 1**. Let $V$ be a vector space over the field $\mathbb{R}$. A (real) inner product is any function $\langle \cdot, \cdot \rangle : V\to V\to \mathbb{R}$ satisting : for all $x,y,z\in V$ and $a,b\in \mathbb{R}$,
> 
> - <p style="text-align:left;">
        $\langle x,y \rangle = \langle y,x\rangle$ 
    <span style="float:right;">
        Symmetry
    </span>
    </p>
> - <p style="text-align:left;">
        $\langle ax + by, z \rangle = a \langle x,z \rangle + b\langle y,z \rangle$
    <span style="float:right;">
        Linearity
    </span>
    </p>
> - <p style="text-align:left;">
        $x\neq 0 \ \Longrightarrow \ \langle x,x \rangle > 0$
    <span style="float:right;">
        Positive-definiteness
    </span>
    </p>
>
> We shall say : "Let $V$ be a (real) inner product space" to mean that $V$ is a vector space over $\mathbb{R}$ that is equipped with a (real) inner product.

!!! note "Complex Inner Product Space?"

    We emphasize "real" because inner products can also be defined over a complex vector space (a vector space $V$ over $\mathbb{C}$). In particular, a *complex* inner product is a function $\langle \cdot, \cdot \rangle: V\to V\to \mathbb{C}$ satisfying a slightly different set of properties. A complex inner product space is a complex vector space equipped with a complex inner product. While both real and complex inner product spaces are largely equal in terms of their behavior, there are some differences here and there. In this post, we shall ignore $\mathbb{C}$ such that any mention of a vector/inner product space shall only refer to *real* vector/inner product spaces.

!!! note "Additional (quickfire) properties of inner product spaces :"

    It is easy to see that linearity is equivalent to the following two, simpler conditions :

    - $\langle ax,z \rangle = a \langle x,z\rangle$
    - $\langle x+y,z \rangle = \langle x,z \rangle + \langle y,z \rangle$

    Combining symmetry and linearity, we obtain linearity in the second argument :

    - $\langle x, ay+bz \rangle = a \langle x,y \rangle + b\langle x,z \rangle$

    By using linearity twice to break down the inner product :

    - $\langle x+y, x+y \rangle = \langle x,x\rangle + 2\langle x,y\rangle + \langle y,y\rangle$

    By setting $a:=0$ in $\langle ax,z \rangle = a \langle x,z\rangle$ and using symmetry we get :

    - $\langle 0,z \rangle = \langle z,0 \rangle = 0$

    As a corollary, we have :

    - $\langle x,x \rangle = 0 \iff x=0$

    Proof. The backwards direction is immediate from the previous line. For the forward direction, consider the contrapositive of positive-definiteness : $\langle x,x \rangle \leq 0 \ \Longrightarrow \ x=0$. <span style="float:right;"> $\Box$ </span>

    In other words, $\langle x,x \rangle \geq 0$ for all $x\in V$ with equality if and only if $x=0$.

## Norms

> **Definition 2**. In an inner product space, the "norm" of a vector $x\in V$ is defined as the real number $\sqrt{\langle x,x \rangle}$ and is denoted $\Vert x \Vert$. Note that $\langle x,x\rangle$ is always non-negative so we don't have to worry about negative values in the square root.

It is easy to check (apart from the last property) that the norm satisfies the following properties : for all $x\in V$ and $a\in \mathbb{R}$,

- <p style="text-align:left;">
        $\Vert x \Vert \geq 0$
    <span style="float:right;">
        Non-negativity
    </span>
    </p>
- <p style="text-align:left;">
        $\Vert x \Vert = 0 \ \iff x=0$
    <span style="float:right;">
        Positive-definiteness
    </span>
    </p>
- <p style="text-align:left;">
        $\Vert ax \Vert = |a|\Vert x \Vert$
    <span style="float:right;">
        Absolute homogeneity
    </span>
    </p>
- <p style="text-align:left;">
        $\lVert x+y \rVert \leq \lVert x\rVert + \lVert y\rVert$
    <span style="float:right;">
        Triangle inequality
    </span>
    </p>

Proving the triangle inequality is not straightforward and some prior machinery is needed, namely we would first have to prove the Cauchy-Schwarz inequality.

## The Cauchy-Schwartz Inequality

> **Lemma 1**. In an inner product space, for any $x,y\in V$
>
> $$ \langle w,w\rangle = \langle x,x\rangle(\langle x,x\rangle \langle y,y\rangle - \langle x,y\rangle^2) $$
>
> where $w:= \langle x,y\rangle x - \langle x,x\rangle y$.

??? note "Proof"

    By direct computation $\langle w,w\rangle$ expands (and then simplifies) to :

    $$ \langle x,x\rangle^2 \langle y,y\rangle - \langle x,y\rangle^2 \langle x,x\rangle  $$

    Factoring $\langle x,x\rangle$ out :

    $$ \langle x,x\rangle (\langle x,x\rangle \langle y,y\rangle - \langle x,y\rangle^2) $$

    as needed. <span style="float:right;"> $\Box$ </span> 

> **Theorem 1.1** (Cauchy-Schwartz Inequality). In an inner product space, for any vectors $x,y\in V$ we have
>
> $$ \langle x,y\rangle^2 \leq \langle x,x\rangle \langle y,y\rangle $$ 

??? note "Proof"

    In the case that $x=0$ then the result is trivial, thus we may suppose that $x\neq 0$.

    By Lemma 1, 

    $$ 0\leq \langle w,w\rangle = \langle x,x\rangle(\langle x,x\rangle \langle y,y\rangle - \langle x,y\rangle^2) $$

    Since $x\neq 0$ we must have $\langle x,x\rangle > 0$. Thus \langle x,x\rangle \langle y,y\rangle - \langle x,y\rangle^2 has to be non-negative for the above to hold, but then

    $$ \langle x,y\rangle^2 \leq $\langle x,x\rangle \langle y,y\rangle $$

    as needed. <span style="float:right;"> $\Box$ </span> 

!!! note "Note 1"

    By taking the positive square-root in the CS inequality, we obtain the following equivalent form :

    $$ |\langle x,y\rangle| \leq \Vert x\Vert \Vert y\Vert $$

The following theorem answers what it exactly means when 2 vectors achieve equality in the CS inequality :
    
> **Theorem 1.2** (Cauchy-Schwartz Inequality). In an inner product space, for any vectors $x,y\in V$ the following are equivalent :
>
> - $\langle x,y\rangle^2 = \langle x,x\rangle \langle y,y\rangle$
> - $x=0$ OR $y=\frac{\langle x,y\rangle}{\langle x,x\rangle}x$
> - $x=0$ OR there exists a scalar $k\in \mathbb{R}$ such that $y=kx$

??? note "Proof"

    $(1)\to (2)$. We shall instead prove that $x\neq 0$ implies $y=\frac{\langle x,y\rangle}{\langle x,x\rangle}x$. By Lemma 1 : 

    $$ \langle w,w\rangle = \langle x,x\rangle(\langle x,x\rangle \langle y,y\rangle - \langle x,y\rangle^2) $$

    but (1) implies that $\langle w,w\rangle = 0$ which implies that $w=0$ which means $\langle x,y \rangle x = \langle x,x\rangle y$. It suffices to divide both sides by $\langle x,x\rangle$ which we are allowed to do since $x\neq 0$ was assumed.

    $(2)\to (3)$. Obvious

    $(3)\to (1)$. If $x=0$ then (1) is obvious. Otherwise, On the LHS : 
    
    $$\langle x,y\rangle^2 = \langle x, kx\rangle^2 = k^2\langle x,x\rangle^2 $$

    On the RHS :

    $$ \langle x,x\rangle \langle y,y\rangle = \langle x,x\rangle \langle kx,kx\rangle = k^2\langle x,x\rangle^2$$

    Thus both sides are equal as needed. <span style="float:right;"> $\Box$ </span> 

## Triangle Inequality

With the CS inequality, proving the triangle inequality is simple :

$$ \begin{align*}
    \Vert x+y \Vert^2 &= \Vert x\Vert^2 + \Vert y\Vert^2 + 2\langle x,y\rangle \\
    &\leq \Vert x\Vert^2 + \Vert y\Vert^2 + 2|\langle x,y\rangle| \\
    &\leq \Vert x\Vert^2 + \Vert y\Vert^2 + 2\Vert x\Vert \Vert y\Vert \\
    &= (\Vert x\Vert +\Vert y\Vert)^2
\end{align*} $$

> **Definition 3**. In general, given a vector space $V$, a norm refers to any function $\Vert \cdot \Vert : V\to \mathbb{R}$ satisfying the 4 properties listed shortly after Definition 2. A vector space equipped with a norm is known as a normed space.

Thus we have shown that in an inner product space, $\Vert x\Vert = \sqrt{\langle x,x\rangle}$ defines a norm. In other words, an inner product space is automatically equipped with a norm that is naturally defined by its inner product. 

## Norm to Metric

Roughly speaking, a metric space is a space in which a notion of distance is defined, that is to say there is a way to take two points of the space and spit out an $r\in \mathbb{R}$ that represents the distance between them in a way that makes sense.

There is a way to define a notion of distance in a normed space by setting the distance between two points as $\Vert x-y\Vert$. For this to make sense we will have to prove, for all $x,y,z\in V$ that :

- $\Vert x-x\Vert =0$ <span style="float:right;"> The distance between two points is zero </span>
- $x\neq y \Longrightarrow \Vert x-y\Vert >0$  <span style="float:right;"> Positivity </span>
- $\Vert x-y\Vert = \Vert y-x\Vert$ <span style="float:right;"> Symmetry </span>    
- $\Vert x-z\Vert \leq \Vert x-y\Vert + \Vert y-z\Vert$ <span style="float:right;"> Triangle Inequality V2 </span>

Properties 1-3 are easy to show. Triangle inequality V2 is just a reformulation of the original triangle inequality :

$$ \Vert x-z \Vert = \Vert (x-y) + (y-z) \Vert \leq \Vert x-y \Vert + \Vert y-z \Vert $$

## Metric Space to Topology

> **Definition 4**. In a metric space $X$ we define the open ball with center $p\in X$ and radius $r\in \mathbb{R}$ to be the subset containing all points $x\in X$ such that $d(x,p)<r$. We write $B(p,r) := \{x\in X \ | \ d(x,p)<r\}$ to denote this subset.

> **Definition 5**. In a metric space $X$, a subset $A\subseteq X$ is said to be open iff for every $x\in A$ there exists a strictly positive $r\in \mathbb{R}$ such that $B(x,r)\subseteq A$. 

To equip a set with a topology it suffices to specify which subsets are open (which we have already done) and then prove that the collection of open subsets satisfy the necessary topological properties : Let $\tau$ denote the collection of open subsets in a metric space $X$, then we should show that

- $\varnothing, X \in \tau$
- For any $S\subseteq \tau, \bigcup S \in \tau$
- For any finite $S\subseteq \tau, \bigcap S\in \tau$

??? note "Proof"

    - For the first property, note that $\varnothing$ is trivially open. Similarly, $X$ is open because for every $p\in X$ it is trivial that $B(p,1)\subseteq X$.

    - For the second property, suppose that $x\in \bigcup S$, then $x\in S'$ for some $S'\in S$. Thus $S'$ is open so there exists an $r>0$ such that $B(x,r)\subseteq S'\subseteq \bigcup S$ so we are done.

    - For the third property, suppose that $x\in \bigcap S$, i.e. $x\in S'$ for every $S'\in S$. Each $S'$ is open and since $S$ is finite, we obtain a finite list of radii $r_1,r_2,\ldots,r_n>0$. Let $r_m$ be the minimum of these radii, then $B(r_m)\subseteq B(r_i)$ for all $i=1,2,\ldots,n$ meaning $B(r_m)\subseteq S'$ for every $S'\in S$ so that $B(r_m)\subseteq \bigcap S$ as needed.

## An Inner Product on $\mathbb{R}^n$

To "naturally" give the vector space $\mathbb{R}^n$ a topology, it suffices to equip it with a "natural" inner product, which naturally defines a norm, which naturally defines a distance, which naturally defines a topology.

Let $x= (x_1,x_2,\ldots,x_n)$ and $y=(y_1,y_2,\ldots y_n)$. We define the inner product $\langle x,y\rangle := \sum_{i=1}^n x_iy_i$ and declare this to be the natural/default inner product on $\mathbb{R}^n$. Of course, we would first have to prove that symmetry, linearity, and positive-definiteness are satisfied. 

??? note "Proof"

    Both symmetry and positive-definiteness are obvious. For linearity, we show first that $\langle ax,y\rangle =a\langle x,y\rangle$ and then $\langle x+y,z\rangle = \langle x,z\rangle + \langle y,z\rangle$. The former is obvious. As for the latter :

    $$ x+y=(x_1+y_1,x_2+y_2,\ldots x_n+y_n)$$

    so that 

    $$\langle x+y,z\rangle = \sum_{i=1}^n x_iz_i+y_iz_i = \sum_{i=1}^n x_iz_i + \sum_{i=1}^n y_iz_i = \langle x,z\rangle + \langle y,z\rangle \tag*{□}$$

Specializing the CS inequality to the inner product on $\mathbb{R}^n$ we get the following inequality for free:

$$ \left|\sum_{i=1}^n x_iy_i\right| \leq \sqrt{\sum_{i=1}^nx_i^2}\sqrt{\sum_{i=1}^ny_i^2} $$

for any $x_1,x_2,\ldots,x_n,y_1,y_2,\ldots,y_n\in \mathbb{R}$.