---
title : Solutions to Chapter 1
---

### Exercise 1.6

> Suppose $f:X\to Y$ and $A\subseteq X$ and $B\subseteq Y$. 
>
> - Prove that $f(f^{-1}(B))\subseteq B$
> - Give an example where $f(f^{-1}(B))\neq B$
> - Prove that $A\subseteq f^{-1}(f(A))$
> - Give an example where $A\neq f^{-1}(f(A))$

??? note "Answer"

    > Helpful things to know for this exercise :
    >
    > - $x\in A \Rightarrow f(x) \in f(A)$ and 
    > - $y\in f^{-1}(B) \iff f(y)\in B$

    **Part 1.** Suppose $x\in f(f^{-1}(B))$. This means there exists some $y\in f^{-1}(B)$ such that $f(y)=x$, and since <br> $y\in f^{-1}(B) \ \Longrightarrow \ f(y)\in B$, thus $x\in B$ as needed.

    **Part 2.** Consider $X=\{x_1\}$ and $Y=\{y_1,y_2\}$ with a function $f:X\to Y$ such that $f(x_1)=y_1$. Set $B$ to be the subset containing all of $Y$, then $f^{-1}(B)=\{x_1\}$ whose image contains just $y_1$ and is hence unequal to $B$.

    **Part 3.** Suppose $x\in A$, then $f(x)\in f(A)$ then $x\in f^{-1}(f(A))$ (reverse direction of point 2 in *helpful things to know*) as needed. 

    **Part 4.** Consider $X=\{x_1, x_2\}$ and $Y=\{y_1\}$ with a function $f:X\to Y$ such that $f(x_1)=f(x_2)=y_1$. Set $A$ to be the subset containing only $x_1$, then $f(A)=\{y_1\}$ and the inverse image of that contains both $x_1,x_2$ and is thus unequal to $A$.

    **Note.** In general, equality is achieved in $f(f^{-1}(B))\neq B$ iff $f$ is surjective, while equality is achieved in $A\subseteq f^{-1}(f(A))$ iff $f$ is injective.    

### Exercise 1.13

> Let $a,b,\epsilon$ be elements of an ordered field. 
>
> - Show that if $a<b+\epsilon$ for every $\epsilon>0$, then $a\leq b$.
> - Use the first part to show that if $|a-b|<\epsilon$ for all $\epsilon>0$, then $a=b$.

??? note "Answer"

    **Part 1.** Suppose $b<a$, thus there must exist some positive $x\in \mathbb{R}$ such that $a=b+x$. Since $a<b+\epsilon$ for every $\epsilon>0$, setting $\epsilon := x$ gives $a<a$ which is a contradiction.

    **Part 2.** This is equivalent to $-\epsilon < a-b < \epsilon$ for all $\epsilon$. We get two inequalities out of this :

    - $a<b+\epsilon$ for all $\epsilon>0$
    - $b<a+\epsilon$ for all $\epsilon>0$

    By part 1, we get both $a\leq b$ and $b\leq a$ from these inequalities. Thus $a=b$ as needed. 

### Exercise 1.14

> Prove that $|ab| = |a||b|$ for all real numbers $a,b$.

??? note "Answer"

    - Define a function $\text{sign}:\mathbb{R}\to \mathbb{R}$ which takes positive numbers to $1$, negative numbers to $-1$ and zero to itself. Then notice that :
        - $|a| = a\cdot \text{sign}(a)$ and 
        - $\text{sign}(ab) = \text{sign}(a)\cdot \text{sign}(b)$ for all real $a,b$.

    The proof is straightforward via the properties of the sign function : 

    $$|ab|=ab\cdot \text{sign}(ab)= ab \cdot \text{sign}(a)\cdot \text{sign}(b)= |a||b|$$

### Exercise 1.17

> Suppose $a,b\in \mathbb{R}$ and $0<a<b$. Prove that $a^n<b^n$ for all $n\in \mathbb{N}$.

??? note "Answer"

    Notice that $1<b/a$, thus

    $$ 1<\frac{b}{a}<\left(\frac{b}{a}\right)^2<\left(\frac{b}{a}\right)^3<\cdots $$

    In particular $1<(b/a)^n$ for all $n$. Thus,

    $$ 1<\frac{b^n}{a^n} \ \Longrightarrow \ a^n<b^n $$

    for all $n$ as needed.

    > **Note.** The general idea is that for any positive $x\in \mathbb{R}$ we have $x<cx$ whenever $c>1$ and $cx<x$ whenever $c<1$ and obviously $cx=x$ when $c=1$. We prove this by cases.
    >
    > **Case 1.** $c>1$
    > 
    > We can write $c=1+y$ for some positive $y$. Thus $cx=(1+y)x=x+yx$. Note that $yx$ is positive so $cx$ is strictly greater than $x$ as required.
    >
    > **Case 2.** $c<1$ 
    >
    > We can write $1=c+y$ for some positive $y$. Thus $cx=(1-y)x=x-yx$. Note that $yx$ is positive so $cx$ is strictly less than $x$ as required.

### Exercise 1.21

> Let $f:X\to Y$ and suppose $A_1,A_2\subseteq X$. Show that 
>
> $$ f(A_1\cap A_2) \subseteq f(A_1)\cap f(A_2) $$

??? note "Answer"

    Suppose $x\in f(A_1\cap A_2)$, then there exists a $y\in A_1\cap A_2$ such that $f(y) = x$. In particular, $y\in A_1$ so that $x=f(y)\in f(A_1)$ and through similar reasoning $x\in f(A_2)$. Thus $x\in f(A_1)\cap f(A_2)$ as needed.

### Exercise 1.22

> Give an example of a function $f$ and a pair of sets $A,B$ for which 
>
> $$f(A\cap B) \neq f(A)\cap f(B)$$

??? note "Answer"

    Let $f:\mathbb{R}\to \mathbb{R}$ where $f(x)\mapsto x^2$ and $A=\{0,2\}$ and $B=\{0,-2\}$. Then the LHS computes to $\{0\}$ while the RHS computes to $\{0,4\}$.

    **Note.** In general, equality is achieved iff the function is injective.

### Exercise 1.23

> Assume that $A\subseteq B\subseteq \mathbb{R}$ and both are bounded above. Prove that $\sup(A)\leq \sup(B)$

??? note "Answer"

    The idea is to show that $\sup(B)$ is an upper bound of $A$, hence it should be greater than or equal to the least upper bound (sup) of $A$. Consider
    
    $$x\in A \Rightarrow x\in B \Rightarrow x\leq \sup(B)$$
    
    thus $\sup(B)$ is an upper bound of $A$ as required.

### Exercise 1.30

> Let $A,B\subseteq \mathbb{R}$ be nonempty and bounded above and assume that $\sup(A)<\sup(B)$
>
> - Show that there exists an element $b\in B$ that is an upper bound of $A$.
> - Show that this is not necessarily the case if $\sup(A)\leq \sup(B)$.

??? note "Answer"

    **Part 1.** By Theorem 1.24, we can choose an $\epsilon>0$ and guarantee the existence of a $b\in B$ such that $\sup(B)-\epsilon<b$. The idea is to choose an $\epsilon$ small enough so that $\sup(A)< \sup(B)-\epsilon < b$. Thus $b$ is an upper bound of $A$ as required.  

    **Part 2.** Consider $A=\{1\}$ and $B=(0,1)$ then $\sup(A)=\sup(B)=1$ but nothing in $B$ can be an upper bound of $A$.

### Exercise 1.32

> Suppose $A\subseteq \mathbb{R}$ is nonempty and bounded above and $c\in \mathbb{R}$. Define $c+A = \{c+a \ \vert \ a\in A\}$ and $cA = \{ca \ \vert \ a\in A\}$.
>
> - Prove that $\sup(c+A)=c+\sup(A)$.
> - Determine necessary and sufficient conditions on $c$ and $A$ for $\sup(cA)=c\sup(A)$. Give an example of a set $A$ and a number $c$ where $\sup(cA)\neq c\sup(A)$.

??? note "Answer"

    **Part 1.** First, we show that $c+\sup(A)$ is an upper bound of $c+A$. Let $x\in c+A$, then $x=c+a$ for some $a\in A$. Then $a\leq \sup(A) \ \Rightarrow \ x = c+a\leq c+\sup(A)$. Thus, $c+\sup(A)$ is an upper bound of $c+A$. 
    
    Next, we show that for any $\epsilon>0$ there exists an $x\in c+A$ such that $c+\sup(A)-\epsilon<x$. Fix an $\epsilon>0$, then there exists an $a\in A$ such that $\sup(A)-\epsilon<a$. Adding $c$ gives $c+\sup(A)-\epsilon < a+c$. Since $a+c\in c+A$ we have achieved our goal.  

    **Part 2.** This only holds iff $c\geq 0$. We shall go case by case.

    **Case 1.** $c=0$. 
    
    No matter what $A$ is, the set $cA$ is just $\{0\}$ so $\sup(cA)=c\sup(A)=0$.

    **Case 2.** $c>0$.   

    We know that $a\leq \sup(A)$ for any $a\in A$. Multiplying by $c$ gives $ca\leq c\sup(A)$ for all $a\in A$, thus $c\sup(A)$ is an upper bound for $cA$. Next, suppose $y$ is an upper bound of $cA$, then $ca\leq y$ for all $a\in A$. Dividing by $c$ gives $a\leq y/c$ for all $a\in A$. Thus $y/c$ is an upper bound of $A$ so that $\sup(A)\leq y/c \ Rightarrow \ c\sup(A)\leq y$. Thus $c\sup(A)$ is the least upper bound for $cA$.

    **Case 3.** $c<0$.

    Let $A=\{1,2\}$ and $c=-1$. Then $cA = \{-1,-2\}$ so that $\sup(cA)=-1$ while $c\sup(A)=-2$. More generally, $\sup(cA)=cinf(A)$ whenever $c<0$. 

### Exercise 1.34

> For each $n\in \mathbb{N}$, assume we are given a closed interval $I_n = [a_n,b_n]$. Also assume that each $I_{n+1}$ is contained inside $I_n$. This gives a sequence of increasingly smaller intervals,
>
> $$ I_1\supseteq I_2\supseteq I_3 \supseteq \cdots $$
>
> Prove that $\bigcap_{n=1}^\infty{I_n}$ is nonempty. 

??? note "Answer"

    > This is obvious, but it is helpful to keep in mind that for any $n,m\in \mathbb{N}$ such that $n<m$  
    >
    > - $a_n\leq b_n$
    > - $a_n\leq a_m$
    > - $b_m\leq b_n$  

    Set $A=\{a_n \ \vert \ n\in \mathbb{N}\}$. We claim that $\sup(A)\in \bigcap_{n=1}^\infty{I_n}$. First, we have to show that $A$ is nonempty and bounded above (so that we know the supremum exists). $A$ is clearly nonempty. Next, we will show that for any $n,m\in \mathbb{N}$ we have $a_n\leq b_m$. Fix an $n\in \mathbb{N}$. We split by cases. For the case that $n<m$, consider $a_n\leq a_m\leq b_m$. For the case $m\leq n$, consider $a_n\leq b_n\leq b_m$. Thus every $b_n$ is an upper bound of $A$ so $A$ is bounded above as required.
    
    Next, showing that $\sup(A)\in \bigcap_{n=1}^\infty{I_n}$ is equivalent to showing that $a_n\leq \sup(A)\leq b_n$ for all $n$. The first half of the inequality is obvious. For the second half, recall that each $b_n$ is an upper bound of $A$ so that each $b_n$ has to be greater than or equal to $\sup(A)$. Thus, we are done. 

### Exercise 1.35

> Give an example showing that the conclusion of Exercise 1.34 need not hold if each $I_n$ is allowed to be an open interval.

??? note "Answer"

    Consider $I_n := (0, 1/n)$. To show that $\bigcap_{n=1}^\infty$ is empty amounts to showing that there is no $x\in \mathbb{R}$ such that $0<x<1/n$ for all $n$. Suppose there exists such an $x$. Recall the Archimedean Principle : For any $x\in \mathbb{R}$ there exists an $n\in \mathbb{N}$ such that $x<n$ (or equivalently $x\leq n$). Taking the inverse of this inequality gives $1/n<x$ for some $n$ and this contradicts our assumption.  