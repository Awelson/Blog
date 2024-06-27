# Continuity

## Def 1.1

> Definition. If $X$ and $Z$ are two metric spaces, then a function $f:X\to Z$ is continuous at a point $a:X$ if for every $\epsilon>0$ there exists a $\delta>0$ such that for any $x:X$,
>
> $$d(a,x)<\delta \Longrightarrow d(f(a),f(x))<\epsilon$$

If $f:X\to Z$ is continuous at all points of $X$ then we simply say that $f$ is continuous (on $X$).

An equivalent (arguably better) defintion is : $f$ is continuous at $a$ iff for every $\epsilon>0$ there exists a $\delta>0$ such that

> $$ f[B(a,\delta)] \subseteq B(f(a),\epsilon) $$

## Prop 1.2

> Proposition. If $X$ and $Z$ are metric spaces and $f:X\to Z$, then $f$ is continuous at a point $a:X$ iff for all sequences x:seq X such that x $\to$ a then we must have $f∘x\to f(a)$.

### Proof (Forwards)
<details>
<blockquote style="text-align: left; font-family: mononoki">
Context : <br>
<br>
X,Z : Type [metric_space X,Z] <br>
a : X, x : seq X [x $\to$ a] <br>
f : X $\to$ Z [is_cont f a] 
</blockquote>
<blockquote style="text-align: left; font-family: mononoki">
Goal : f$\circ$x $\to$ f(a)
</blockquote>

<div class="proof-container">
<div class="proof-steps">
    <div class="proof-step" data-step="1">Intro $\epsilon$</div>
    <div class="proof-step" data-step="2">Obtain ⟨$\delta$,hδ⟩ := f.1 $\epsilon$</div>
    <div class="proof-step" data-step="3">Obtain ⟨N,hN⟩ := x.1 $\delta$; use N</div>
    <div class="proof-step" data-step="4">Intros n hn; exact (hδ x n) (hN n hn)</div>
</div>
<div class="workspace">
        <!-- Workspace content will be dynamically loaded here -->
</div>
    <div class="workspace-contents" style="display: none;">
        <div class="workspace-content" data-step="1">
            <blockquote style="text-align: left; font-family: mononoki">
            $\epsilon:\mathbb{R}$ [$\epsilon$>0]
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\exists$N:$\mathbb{N}$,$\forall$n:$\mathbb{N}$, n$\geq$N $\Rightarrow$ d (f x n) (f a) < $\epsilon$ 
            </blockquote>
        </div>
        <div class="workspace-content" data-step="2">
            <blockquote style="text-align: left; font-family: mononoki">
            $\epsilon,\delta:\mathbb{R}$ [$\epsilon,\delta$>0] <br>
            hδ : $\forall$x:X, d a x < $\delta$ $\Rightarrow$ d (f a) (f x) < $\epsilon$
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\exists$N:$\mathbb{N}$,$\forall$n:$\mathbb{N}$, n$\geq$N $\Rightarrow$ d (f x n) (f a) < $\epsilon$ 
            </blockquote>
        </div>
        <div class="workspace-content" data-step="3">
        <blockquote style="text-align: left; font-family: mononoki">
            $\epsilon,\delta:\mathbb{R}$ [$\epsilon,\delta$>0], N:$\mathbb{N}$ <br>
            hδ : $\forall$x:X, d a x < $\delta$ $\Rightarrow$ d (f a) (f x) < $\epsilon$ <br>
            hN : $\forall$n:$\mathbb{N}$, n$\geq$N $\Rightarrow$ d (x n) a < $\delta$
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\forall$n:$\mathbb{N}$, n$\geq$N $\Rightarrow$ d (f x n) (f a) < $\epsilon$ 
            </blockquote>
        </div>
        <div class="workspace-content" data-step="4">
            SOLVED
        </div>
    </div>
<div class="controls">
    <button class="prev-step">Previous Step</button>
    <button class="next-step">Next Step</button>
</div>
</div>

</details>

### Proof (Backwards)
<details>
<blockquote style="text-align: left; font-family: mononoki">
Context : <br>
<br>
X,Z : Type [metric_space X,Z] <br>
a : X, f : X $\to$ Z <br>
H : $\forall$x:seq X, x $\to$ a $\Rightarrow$ f$\circ$x $\to$ f a
</blockquote>
<blockquote style="text-align: left; font-family: mononoki">
Goal : is_cont f a 
</blockquote>

<div class="proof-container">
<div class="proof-steps">
    <div class="proof-step" data-step="1">By contradiction; obtain ⟨$\epsilon$,hϵ⟩ := con</div>
    <div class="proof-step" data-step="2">Have g := λn:ℕ, choose hϵ 1/n; hg := λn:ℕ, choose_spec hϵ 1/n</div>
    <div class="proof-step" data-step="3">"g converges to a, but f∘g does not converge to f a" by hg </div>
    <div class="proof-step" data-step="4">contradiction (H g hg1) hg2 </div>
</div>
<div class="workspace">
        <!-- Workspace content will be dynamically loaded here -->
</div>
    <div class="workspace-contents" style="display: none;">
        <div class="workspace-content" data-step="1">
            <blockquote style="text-align: left; font-family: mononoki">
            $\epsilon:\mathbb{R}$ [$\epsilon$>0] <br>
            hϵ : $\forall\delta:\mathbb{R}$ [$\delta$>0], $\exists$x:X, d x a < $\delta$ $\land$ d (f x) (f a) $\geq$ $\epsilon$
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\bot$
            </blockquote>
        </div>
        <div class="workspace-content" data-step="2">
            <blockquote style="text-align: left; font-family: mononoki">
            $\epsilon:\mathbb{R}$ [$\epsilon$>0] <br>
            hϵ : $\forall\delta:\mathbb{R}$ [$\delta$>0], $\exists$x:X, d x a < $\delta$ $\land$ d (f x) (f a) $\geq$ $\epsilon$ <br>
            g : $\mathbb{N}\to$ X := (seq X)<br>
            hg : $\forall$n:$\mathbb{N}$, d (g n) a < 1/n $\land$ d (f g n) (f a) $\geq$ $\epsilon$
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\bot$
            </blockquote>
        </div>
        <div class="workspace-content" data-step="3">
            <blockquote style="text-align: left; font-family: mononoki">
            $\epsilon:\mathbb{R}$ [$\epsilon$>0] <br>
            hϵ : $\forall\delta:\mathbb{R}$ [$\delta$>0], $\exists$x:X, d x a < $\delta$ $\land$ d (f x) (f a) $\geq$ $\epsilon$ <br>
            g : $\mathbb{N}\to$ X := (seq X)<br>
            hg1 : g $\to$ a, hg2 : f∘g $\not\to$ f a
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\bot$
            </blockquote>
        </div>
        <div class="workspace-content" data-step="4">
            SOLVED
        </div>
    </div>
<div class="controls">
    <button class="prev-step">Previous Step</button>
    <button class="next-step">Next Step</button>
</div>
</div>
</details>

## Prop 1.3

> Proposition. If $X,Z$ are metric spaces and $f:X\to Z$ then the following are equivalent :
>
> - $f$ is continuous on $X$
> - If $U$ is an open subset of $Z$, then $f^{-1}[U]$ is an open subset of $X$
> - If $D$ is a closed subset of $Z$, then $f^{-1}[U]$ is a closed subset of $X$

### Proof (2 ↔ 3)

<details>
2 → 3. Suppose $D$ is closed, then $D^C$ is open and hence $f^{-1}[D^C] = f^{-1}[D]^C$ is open, but this means that $f^{-1}[D]$ is closed as desired. The argument is similar for the reverse direction.
</details>


### Proof (1 → 2)

<details>
<blockquote style="text-align: left; font-family: mononoki">
Context : <br>
<br>
X,Z : Type [metric_space X,Z] <br>
f : X $\to$ Z [continuous f], U : set Z [is_open U]
</blockquote>
<blockquote style="text-align: left; font-family: mononoki">
Goal : is_open f$^{-1}$[U] 
</blockquote>

<div class="proof-container">
<div class="proof-steps">
    <div class="proof-step" data-step="1">intro a</div>
    <div class="proof-step" data-step="2">obtain ⟨ϵ,hϵ⟩ := U.1 f a</div>
    <div class="proof-step" data-step="3">obtain ⟨δ,hδ⟩ := f.1 a $\epsilon$; use $\delta$</div>
    <div class="proof-step" data-step="4">apply f at goal; exact hδ hϵ</div>
</div>
<div class="workspace">
        <!-- Workspace content will be dynamically loaded here -->
</div>
    <div class="workspace-contents" style="display: none;">
        <div class="workspace-content" data-step="1">
            <blockquote style="text-align: left; font-family: mononoki">
            a : X [a$\in$ f$^{-1}[U]]
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\exists r:\mathbb{R}$ [r>0], B a r $\subseteq$ f$^{-1}$[U]
            </blockquote>
        </div>
        <div class="workspace-content" data-step="2">
            <blockquote style="text-align: left; font-family: mononoki">
            a : X [a$\in$ f$^{-1}$[U]], $\epsilon:\mathbb{R}$ [$\epsilon$>0] <br>
            hϵ : B (f a) $\epsilon$ $\subseteq$ U
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\exists r:\mathbb{R}$ [r>0], B a r $\subseteq$ f$^{-1}$[U]
            </blockquote>
        </div>
        <div class="workspace-content" data-step="3">
            <blockquote style="text-align: left; font-family: mononoki">
            a : X [a$\in$ f$^{-1}$[U]], $\epsilon,\delta:\mathbb{R}$ [$\epsilon,\delta$>0] <br>
            hϵ : B (f a) $\epsilon$ $\subseteq$ U <br>
            hδ : f[B a $\delta$] $\subseteq$ B (f a) $\epsilon$
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : B a $\delta$ $\subseteq$ f$^{-1}$[U]
            </blockquote>
        </div>
        <div class="workspace-content" data-step="4">
            SOLVED
        </div>
    </div>
<div class="controls">
    <button class="prev-step">Previous Step</button>
    <button class="next-step">Next Step</button>
</div>
</div>
</details>

### Proof (2 → 1)

<details>
<blockquote style="text-align: left; font-family: mononoki">
Context : <br>
<br>
X,Z : Type [metric_space X,Z] <br>
f : X $\to$ Z <br>
H : $\forall$U:set Z [is_open U], is_open f$^{-1}$[U]
</blockquote>
<blockquote style="text-align: left; font-family: mononoki">
Goal : continuous f
</blockquote>

<div class="proof-container">
<div class="proof-steps">
    <div class="proof-step" data-step="1">intros a $\epsilon$</div>
    <div class="proof-step" data-step="2">obtain ⟨δ,hδ⟩ := H (B (f a) $\epsilon$) a; use $\delta$</div>
    <div class="proof-step" data-step="3">exact "apply f at hδ"</div>
</div>
<div class="workspace">
        <!-- Workspace content will be dynamically loaded here -->
</div>
    <div class="workspace-contents" style="display: none;">
        <div class="workspace-content" data-step="1">
            <blockquote style="text-align: left; font-family: mononoki">
            a : X, $\epsilon:\mathbb{R}$ [$\epsilon$>0]
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : $\exists\delta:\mathbb{R}$ [$\delta$>0], f[B a $\delta$] $\subseteq$ B (f a) $\epsilon$ 
            </blockquote>
        </div>
        <div class="workspace-content" data-step="2">
            <blockquote style="text-align: left; font-family: mononoki">
            a : X, $\epsilon,\delta:\mathbb{R}$ [$\epsilon,\delta$>0] <br>
            hδ : B a $\delta$ $\subseteq$ f$^{-1}$[B (f a) $\epsilon$]
            </blockquote>
            <blockquote style="text-align: left; font-family: mononoki">
            Goal : f[B a $\delta$] $\subseteq$ B (f a) $\epsilon$ 
            </blockquote>
        </div>
        <div class="workspace-content" data-step="3">
            SOLVED
        </div>
    </div>
<div class="controls">
    <button class="prev-step">Previous Step</button>
    <button class="next-step">Next Step</button>
</div>
</div>

</details>