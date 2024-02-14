# Compactness

> **Definition.** If $\mathcal{G}$ is a collection of subsets of a metric space $X$ and $E\subseteq X$ then $\mathcal{G}$ is a cover of $E$ if $E\subseteq \bigcup G$. Any subset of $\mathcal{G}$ that is still able to cover $E$ is known as a subcover. Additionally, a cover $\mathcal{G}$ is said to be open if every $G\in \mathcal{G}$ is open.

> **Definition.** A subset $E$ of a metric space $X$ is said to be compact if every open cover of $E$ has a finite subcover.

> **Example.** $\mathbb{R}$ is not compact. 
>
> Proof. $\mathcal{G}=\{(-n,n) | \ n\in \mathbb{N}\}$ is clearly an open cover of $\mathbb{R}$ but it does not have a finite subcover.

> **Example.** If $X$ is a metric space then any finite subset $E\subseteq X$ is compact.
>
> Proof. Let $\mathcal{G}$ be an open cover of $E$, then for each $p\in E$ there exists a $G\in \mathcal{G}$ such that $p\in G$. Since $E$ is finite, there is also a finite number of such $G$'s, together they form a finite subcover of $\mathcal{G}$.

> **Theorem.** If $E\subseteq X$ is compact, then $E$ is closed and bounded.

Proof. We'll prove that $E^C$ is open. Suppose $x\in E^C$, it is clear that we can construct a function $f:E\to \mathbb{R}^+$ such that $B(p,f(p)) \cap B(x,f(p)) = \varnothing$ for any $p\in E$. Obviously $\{B(p,f(p)) | \ p\in E\}$ is an open cover of $E$ and so there exists $p_1,p_2,\ldots,p_n\in E$ such that $\{B(p_i,f(p_i))|\ 1\leq i\leq n\}$ is an open cover of $E$. Let $r=\text{min}\{f(p_i)|\ 1\leq i\leq n\}$ then it is easy to show that $E\cap B(x,r) = \varnothing$, i.e, $B(x,r)\subseteq E^C$, hence $E^C$ is open as desired.

To show that $E$ is bounded, choose any point $x\in X$. Clearly $\{B(x,n)\vert \ n\in \mathbb{N}\}$ is clearly an open cover of $E$ and hence a finite subcover, say $\mathcal{G}$ exists. Clearly $\bigcup \mathcal{G}=B(x,N)$ for some $N\in \mathbb{N}$, i.e, $E\subseteq B(x,N)$ and hence $E$ is bounded.

> **Theorem.** If $E\subseteq X$ is compact and $F\subseteq E$ is closed then $F$ is compact

Proof. Suppose $\mathcal{G}$ is an open cover of $F$. Since $F^C$ is open, $\{F^C\} \cup \mathcal{G}$ is an open cover of $E$ so there is a finite subcover $\mathcal{F}$. Clearly $F\subseteq \bigcup \mathcal{F}$ and we can remove (if it's there) $F^C$ from $\mathcal{F}$ without affecting this property, giving the finite subcover that we need.

> **Theorem.** If $X.Y$ are metric spaces, $E\subseteq X$ is compact, and $f:X\to Y$ is a continuous function, then $f(E)$ is a compact subset of $Y$.

Proof. Let $\mathcal{G}$ be an open cover of $f(E)$ then since $f$ is continuous, $\mathcal{U}=\{f^{-1}(G) \vert \ G\in \mathcal{G}\}$ is an open cover of $E$. Thus there exists $G_1, G_2, \ldots, G_n\in \mathcal{G}$ such that $E\subseteq \bigcup_{i=1}^n f^{-1}(G_i)$ and hence $f(E)\subseteq \bigcup_{i=1}^n G_i$, i.e, $\{G_1,\ldots, G_n\}$ is the finite subcover we need.

> **Definition.** In the context of a metric space $X$ and a subset $K\subseteq X$. A collection of subsets $\mathcal{F}$ of $K$ has the finite intersection property (FIP) if for any finite subcollection $F\subseteq \mathcal{F}$, we have $\bigcap F\neq \varnothing$.

> If $X,Y:\text{Type}$ and $f:X\to Y$ then there exists a function $g:Y\to X$ such that: $\forall x\in f(\text{fullset}), f(g(x))=x$. 
>
> More generally, we can choose any set $K:\text{set }X$ and there will exist a function $g:Y\to X$ such that: $\forall x\in f(K), \ f(g(x))=x \land g(x)\in K$

```
FIP {X:Type}[Metric_Space X] {K:Set X} 
(F:Set Set X)[⋃F⊆E] : Prop := 
(f:Set Set X)[f⊆F][finite f] → ⋂f≠∅



Context : {X:Type}[Metric_Space X] {K:Set X}[Closed K]
---
WS -->
h1 : Compact K
h2 : ⋂F=∅ 
    → h2.1 : ⋃(F^C) = fullset
h3 : F^C open_cover_of K
h4 : ⋂f^C ⊆ K
        K^C ⊆ (⋂f^C)^C
        K ⊆ (⋂f^C)^C
        fullset ⊆ (⋂f^C)^C
        (⋂f^C)^C = fullset
        (⋂f^C) = ∅

-
F : Set Set X + [∀x∈F, closed x ∧ x⊆K][FIP F]
f : Set Set X + [f⊆F^C] + [K⊆⋃f=(⋂(f^C))^C] + [finite f]
FIP F f^C :  ⋂f^C≠∅


⋃f = (⋂(f^C))^C



---
Goal : contradiction
```


K⊆⋃(F^C)