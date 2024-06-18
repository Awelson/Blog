# Continuity

## Def 1.1

> Definition. If $X$ and $Z$ are two metric spaces, then a function $f:X\to Z$ is continuous at a point $a:X$ if for every $\epsilon>0$ there exists a $\delta>0$ such that for any $x:X$,
>
> $$d(a,x)<\delta \Longrightarrow d(f(a),f(x))<\epsilon$$

### Code

<img src="https://media.discordapp.net/attachments/830377799973994509/1252721078661419119/image.png?ex=66733eeb&is=6671ed6b&hm=5879aa5f5356ca9629642a13d3881501cd78794bbc1ef0dffb5597c062548620&=&format=webp&quality=lossless&width=925&height=93" alt="Paris" class="center">

If $f:X\to Z$ is continuous at all points of $X$, that is to say : `∀x:X, is_cont f x`, then we simply say that $f$ is continuous (on $X$).

## Prop 1.2

> Proposition. If $X$ and $Z$ are metric spaces and $f:X\to Z$, then $f$ is continuous at a point $a:X$ iff whenever $x:$ seq $X$, $[x\to a]$ then $f∘x\to f(a)$.

### Code 

<img src="https://media.discordapp.net/attachments/830377799973994509/1252723783324926082/image.png?ex=66734170&is=6671eff0&hm=c45c5bcd3cc7c2bc05c5125910280e172d7c20611de2f8be8abc76d8be29d819&=&format=webp&quality=lossless&width=780&height=90" alt="Paris" class="center">

### Proof

<!---
<div class="videoWrapper">
    <iframe width="560" height="349" src="https://awelson.github.io/Proofs/index.html" frameborder="0"></iframe>
</div>
--->

<div class="glider-contain">
  <div class="glider">
    <div><figure>
        <img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618214457.png"></img>
        <figcaption> Step 1 </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618214910.png"></img>
        <figcaption> Step 2 </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618220258.png"></img>
        <figcaption> Step 3 </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618223158.png"></img>
        <figcaption> Step 1 (reverse) </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618223717.png"></img>
        <figcaption> Step 2 </figcaption>
    </figure></div>
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

=== "Step 1"

    We prove the forward direction first. Intros $\epsilon$

=== "Step 2"

    Since $f$ is continuous at $a$, there exists a $\delta>0$ such that

    - $\forall x:X, d(x,a) < \delta \Rightarrow d(f(x),f(a)) < \epsilon$

=== "Step 3"

    Since $x \to a$ there is an $N:\mathbb{N}$ large enough so that $d((x n),a) < \delta$ for $n\geq N$. However, via `H` this translates to :

    - $d((f(x n)),f(a)) < \epsilon$ for $n\geq N$

    by the above. Hence we are done.

=== "Step 1 (reverse)"

    asd

=== "Step 2"

    asd