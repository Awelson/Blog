# Continuity

## Def 1.1

> Definition. If $X$ and $Z$ are two metric spaces, then a function $f:X\to Z$ is continuous at a point $a:X$ if for every $\epsilon>0$ there exists a $\delta>0$ such that for any $x:X$,
>
> $$d(a,x)<\delta \Longrightarrow d(f(a),f(x))<\epsilon$$

<img src="https://media.discordapp.net/attachments/830377799973994509/1252721078661419119/image.png?ex=66733eeb&is=6671ed6b&hm=5879aa5f5356ca9629642a13d3881501cd78794bbc1ef0dffb5597c062548620&=&format=webp&quality=lossless&width=925&height=93" alt="Paris" class="center">

If $f:X\to Z$ is continuous at all points of $X$, that is to say : `∀x:X, is_cont f x`, then we simply say that $f$ is continuous (on $X$).

An equivalent (arguably better) defintion is : $f$ is continuous at $a$ iff for every $\epsilon>0$ there exists a $\delta>0$ such that

> $$ f[B(a,\delta)] \subseteq B(f(a),\epsilon) $$

## Prop 1.2

> Proposition. If $X$ and $Z$ are metric spaces and $f:X\to Z$, then $f$ is continuous at a point $a:X$ iff whenever $x:$ seq $X$, $[x\to a]$ then $f∘x\to f(a)$.

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
        <img src="https://media.discordapp.net/attachments/830377799973994509/1253057102151155722/image.png?ex=667477dd&is=6673265d&hm=dba24d026dc696abb7f4ac8d0a1c1cc114fe91859080f6e8bcb739a659272271&=&format=webp&quality=lossless&width=911&height=651"></img>
        <figcaption> Step 1 </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://media.discordapp.net/attachments/830377799973994509/1253058194520150088/image.png?ex=667478e2&is=66732762&hm=01a629c068159c04bf132ae63d0865c8af66ebdd95f420d16a06d3d240ab781c&=&format=webp&quality=lossless&width=1081&height=666"></img>
        <figcaption> Step 2 </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://media.discordapp.net/attachments/830377799973994509/1253059498399105029/image.png?ex=66747a19&is=66732899&hm=2d7b42f51e85c47a7833535162f7563a555d1080cd018051662d06ae46f3bc53&=&format=webp&quality=lossless&width=1102&height=670"></img>
        <figcaption> Step 3 </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://media.discordapp.net/attachments/830377799973994509/1253060536963174451/image.png?ex=66747b10&is=66732990&hm=0a287fb6402f2a988c0cdc7b91303a8c8f21e927f4c75de1eac15f0131b19d4a&=&format=webp&quality=lossless&width=1043&height=620"></img>
        <figcaption> Step 1 (reverse) </figcaption>
    </figure></div>
    <div><figure>
        <img src="https://media.discordapp.net/attachments/830377799973994509/1253062694651822222/image.png?ex=66747d13&is=66732b93&hm=8275b0ce8e7da6dcef05e7cb4438a0a87e41b5df07a07f4b55da1411f5db2e68&=&format=webp&quality=lossless&width=1106&height=670"></img>
        <figcaption> Step 2 </figcaption>
    </figure></div>
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>