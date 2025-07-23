---
title : Solutions to Chapter 3
---

### Exercise 3.6

> Consider the sequence
>
> $$ \frac{1}{2},\frac{1}{3},\frac{2}{3},\frac{1}{4},\frac{2}{4},\frac{3}{4}, \cdots $$
>
> For which numbers $L$ does the above have a subsequence converging to $L$? Furthermore, does there exist a sequence $(a_n)$ where for every $L\in \mathbb{R}$ there is a subsequence of $(a_n)$ which converges to $L$?

??? note "Answer"

    The second part has already been answered [here](../subseq.md). After reading the solution, the first part should be obvious. 

### Exercise 3.8

> Assume that $(a_n)$ converges to some $a\in \mathbb{R}$ and $(b_n)$ converges to some $b\in \mathbb{R}$. Also assume $c\in \mathbb{R}$.
>
> - Prove that $(a_n+b_n)$ converges to $a+b$
> - Prove that $(c\cdot a_n)$ converges to $ca$

??? note "Answer"

    > Recall that we proved $|ab| =|a||b|$ for any real $a,b$ in [Exercise 1.14](JC1.md#exercise-114). We will be relying on this without reference moving forward.

    **Part 1.** Let $\epsilon>0$, then there exists $N_1, N_2$ such that $|a_n-a|<\epsilon/2$ whenever $n> N_1$ and $|b_n-b|<\epsilon/2$ whenever $n> N_2$. Let $N:= \max\{N_1,N_2\}$, thus $|a_n-a| + |b_n-b| < \epsilon$ whenever $n\geq N$, and by triangle inequality :
    
    $$|(a_n+b_n) - (a+b)| = |(a_n-a) + (b_n-b)| \leq |a_n-a| + |b_n-b| < \epsilon$$
    
    whenever $n\geq N$ as needed.

    **Part 2.** The case when $c=0$ is obvious, so assume $c\neq 0$ and let $\epsilon>0$, then there exists an $N$ such that $|a_n-a|<\frac{\epsilon}{|c|}$ whenever $n\geq N$. Multiplying by $|c|$ on both sides gives

    $$ |c||a_n-a| = |ca_n - ca|  < \epsilon $$

    whenever $n\geq N$ as needed.

### Exercise 3.10

> Assuming that $(a_{2n})$ converges to $L$ and $(a_{2n-1})$ converges to $L$, show that $(a_n)$ also converges to $L$.

??? note "Answer"

    I answered this in ["An "Almost Always" Approach to Sequences](../seq.md)

    Let $\epsilon>0$. Then there is $N_1$ and $N_2$ such that $|a_{2n}-L|<\epsilon$ whenever $n>N_1$ and $|a_{2n-1}-L|<\epsilon$ whenever $n>N_2$. Let $N:=\max\{2N_1,2N_2-1\}$ and assume $m>N$. If $m$ is even then $m=2n$ for some $n$ which implies $n>N_1$ and hence $|a_m-L|=|a_{2n}-L|<\epsilon$. If $m$ is odd then $m=2n-1$ which implies $n>N_2$ and hence $|a_{2n-1}-L|=|a_m-L|<\epsilon$. Thus $(a_n)\to L$ as needed.

### Exercise 3.12

> Suppose $(a_n)$ is a sequence and $f:\mathbb{N}\to \mathbb{N}$ is a bijection. For each of the following, prove that the statement is true or find a counterexample showing that the statement is false. 
>
> - If $(a_n)$ diverges to $\infty$, then $(a_{f(n)})$ diverges to $\infty$
> - If $(a_n)$ converges to $L$, then $(a_{f(n)})$ converges to $L$.
> - If $(a_n)$'s limit does not exist, then $(a_{f(n)})$'s limit does not exist.

??? note "Answer"

    I will just prove the first two parts for which the property that $f$ is injective is sufficient so we shall assume that that is the case moving forward. We shall prove two lemmas, from which parts 1 and 2 should be immediately obvious 
    
    > **Lemma 1.** Suppose $(a_n)\to L$ where $L$ can be real or $\pm\infty$. For any sequence $(k_n)$ of natural numbers that diverges to $\infty$, we have $(a_{n_k})\to L$. 
    >
    > **Proof.** We prove the case for when $L\in \mathbb{R}$, the proof is similar for $L=\pm \infty$. Let $\epsilon>0$, then there is an $N$ such that $|a_n-L|<\epsilon$ whenever $n>N$. Since $(k_n)\to \infty$ there is an $N'$ such that $k_n>N$ whenever $n>N'$. The idea is that $n>N' \ \Rightarrow \ k_n>N \ \Rightarrow \ |a_{k_n}-L|<\epsilon$, thus $(a_{n_k})\to L$ as needed.    
    
    ---

    > **Lemma 2.** Let $f:\mathbb{N}\to \mathbb{N}$ be injective, then $f(n)\to \infty$, in other words : for any $M\in \mathbb{R}$ there exists an $N\in \mathbb{N}$ such that $f(n)>M$ whenever $n>N$. 
    
    > **Proof.** Set $A:=\{1,2,\ldots,M\}$ and consider $f^{-1}(A)$. The inverse image of a finite set is finite so $f^{-1}(A)$ is finite. This means that there is an $N$ large enough such that 
    >
    > $$f^{-1}(A)\subseteq \{n\in \mathbb{N} \ \vert \ n\leq N\} \quad \Longrightarrow \quad \{n\in \mathbb{N} \ \vert \ n\leq N\}^C \subseteq f^{-1}(A)^C$$
    >
    > Thus, $n\in f^{-1}(A)^C \ \Rightarrow \ f(n)\notin A \ \Rightarrow \ f(n) > M$ whenever $n>N$ as required.

### Exercise 3.18

> - Assume that $(a_n)$ is bounded and $(b_n)$ converges to 0. Prove that $(a_n\cdot b_n)$ also converges to 0.
>
> - Give an example of sequences $(a_n)$ and $(b_n)$ such that $b_n\to 0$ but $(a_n\cdot b_n)$ does not converge to zero.

??? note "Answer"

    **Part 1.** Since $(a_n)$ is bounded, there exists some positive $C\in \mathbb{R}$ such that $|a_n|<C$ for all $n$. Let $\epsilon>0$. Since $(b_n)\to 0$ there exists an $N$ such that $|b_n|<\epsilon / C$ whenever $n>N$. Combining both inequalities, we get :

    $$ |a_n||b_n| = |a_n\cdot b_n| < \epsilon $$

    whenever $n>N$, thus $(a_n\cdot b_n)\to 0$ as needed.

    **Part 2.** Consider $(a_n) = (1,2,3,\ldots)$ and $b_n = (1, 1/2, 1/3, \ldots)$. Then clearly $(b_n)\to 0$ but $(a_n\cdot b_n) = (1,1,1,\ldots)\to 1$. 

### Exercise 3.23

> - Prove that if $a_n\to L$, then $|a_n|\to |L|$
> - Give an example where $|a_n|\to |L|$ but $a_n\not\to L$

??? note "Answer"

    **Part 1.** By the reverse triangle inequality ||a_n|-|L||\leq |a_n-L|$ for all $n$. Thus, our task is equivalent to showing that for any $\epsilon>0$ there is an $N$ such that $|a_n-L|<\epsilon$ whenever $n>N$, but this is precisely what $a_n\to L$ means.

    **Part 2.** Let $(a_n):=(1,-1,1,-1,\ldots)$ and $L:=1$. Then clearly $|a_n|\to |L|$ but $a_n \not\to L$. 

### Exercise 3.28

> Prove that the sequence $(r^n)$ converges to 0 if $r\in(-1,1)$, converges to $1$ if $r=1$, and diverges otherwise. 

??? note "Lemma 1"

    > **Lemma 1.** (Bernoulli's Inequality). For any real $x>-1$ and integer $n\geq 1$ :
    >
    > $$ (1+x)^n \geq 1+nx $$

    **Proof.** It is easy to show by induction.

??? note "Lemma 2"

    > **Lemma 2.** $a_n\to 0 \ \Leftrightarrow \ |a_n|\to 0$. 
    
    **Proof.** The forward direction has already been shown by Exercise 3.23. The reverse direction is very easy to show.

??? note "Answer"

    > We split this into 6 cases, the first three are obvious :
    >
    > - Convergence to 1 when $r=1$
    > - Convergence to 0 when $r=0$
    > - Divergence when $r=-1$
    > - Convergence to 0 when $0<|r|<1$
    > - $r^n$ diverges when $r>1$
    > - $r^n$ diverges when $r<-1$

    **Case 4.** $r^n\to 0$ whenever $0<|r|<1$
    
    By Lemma 2, we can prove $|r^n|\to 0$ instead of $r^n\to 0$. Since $0<|r|<1$, taking the reciprocal we have $1<1/|r|$. This means we can write $1/|r|=1+h$ for some $h>0$. We use Bernoulli's Inequality with $x:=h$ to get

    $$ \frac{1}{|r|}^n\geq 1+nh \quad \Longrightarrow |r^n| \leq \frac{1}{1+nh} $$ 

    for any integer $n\geq 1$. Now 0 is a lower bound for $|r^n|$ and clearly $\frac{1}{1+nh}\to 0$ as $n\to \infty$, thus $|r^n|\to 0$ by the squeeze theorem.

    **Case 5.** $r^n$ diverges when $r>1$

    We can write $r=1+h$ for some $h>0$. We use Bernoulli's inequality with $x:=h$ to get

    $$ r^n \geq 1+nh $$

    The RHS grows without bound as $n\to \infty$ thus it is clear that $r^n\to \infty$ as well. 
    
    **Case 6.** $r^n$ diverges when $r<1$

    By the contrapositive of Exercise 3.23 : If $|r^n|$ diverges, then so does $r^n$. If $r<-1$ then $|r|>1$ so $|r|^n$ diverges by Case 5 and we are done.  

### Exercise 3.29

> Suppose $(a_n)$ is a sequence for which $a_n\to a$. Define a new sequence by
>
> $$ b_n := \frac{a_1+a_2+\cdots + a_n}{n} $$
>
> Prove that $b_n\to a$.

??? note "Answer"

    

### Exercise 3.30

### Exercise 3.33

### Exercise 3.36

### Exercise 3.39

### Exercise 3.41

### Exercise 3.43

### Exercise 3.44

## Misc 1 

> Suppose $(a_n)$ is a sequence and $a\in \mathbb{R}$. Prove that $a_n\to a$ iff $|a_n-a|\to 0$ 

??? note "Answer"

    $|a_n-a|\to 0$ means that for any $\epsilon>0$ there is an $N$ such that $||a_n-a|-0| = |a_n-a|<\epsilon$ whenever $n>N$ which is exactly what it means for $a_n\to a$. We can simply reverse this argument to obtain the other direction.

## Misc 2 

> Assume that $(a_n)$ converges to some $a\in \mathbb{R}$ and $(b_n)$ converges to some $b\in \mathbb{R}$. Prove that $(a_n\cdot b_n)\to ab$.

??? note "Answer"

    Although already proved in the book (Theorem 3.21), I would like to provide an alternative proof utilizing ideas from Misc 1, Exercise 3.18 and Exercise 3.8. To prove $(a_n\cdot b_n)\to ab$ is equivalent to proving $|a_nb_n - ab|\to 0$ by Misc 1. Notice that

    $$ \begin{align*}
    0\leq |a_nb_n-ab| &= |a_nb_n - ab_n + ab_n - ab| \\
    &\leq |a_nb_n - ab_n| + |ab_n - ab| \\
    &= |a_n-a|\cdot |b_n| + |a|\cdot |b_n-b|
    \end{align*}
    $$

    Thus, by the Squeeze Theorem it suffices to show that the expression $|a_n-a|\cdot |b_n| + |a|\cdot |b_n-b|$ converges to zero. By Exercise 3.8, this is equivalent to showing that $|a_n-a|\cdot |b_n|\to 0$ and $|a|\cdot |b_n-b|\to 0$ individually.
    
    1. Since $(a_n)\to a$ we have $|a_n-a|\to 0$. Furthermore, $|b_n|$ is bounded (since $b_n$ is convergent), thus $|a_n-a|\cdot |b_n|\to 0$ by Exercise 3.18.  

    2. Since $(b_n)\to b$ we have $|b_n-b|\to 0$ so that $|a||b_n-b|\to 0$ by Exercise 3.8. 