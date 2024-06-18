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
    <div><img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618214910.png" style="width: 70%; height: auto"></img></div>
    <div><img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618214910.png" style="width: 70%; height: auto"></img></div>
    <div><img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618223158.png" style="width: 70%; height: auto"></img></div>
    <div><img src="https://awelson.github.io/Proofs/Pasted%20image%2020240618223717.png"></img></div>
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>
