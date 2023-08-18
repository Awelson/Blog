# Part 7 - Propositions

Across our type theory journey I've been showcasing some connections between type theory and logic. For example: `∏` can be seen as $\forall$, `∑` as $\exists$, `+` as $\lor$ and so on. In particular, we view types as propositions and propositions as types. This, I feel, is a very beautiful (and more importantly, powerful) interpretation. 

Unfortunately, things don't always work out perfectly and the proposition as types interpretation has some flaws which I've thus far hidden. We shall discuss them now and present a solution.

### The first flaw

If we want to do classical mathematics, it will be helpful to have something akin to the law of excluded middle (LEM). This is an axiom stating that for any proposition $P$ we have $P \lor \neg P$. Translating into type theory, this amounts to the existence of a term with the type

```
∏P:U (P + ¬P),      recall ¬P := P → 𝟘
```

So to introduce LEM into our type system, we just need to make it an axiom that there exists a term of the type above. Problem solved... or not because for reasons beyond my capabilities of understanding, asserting such a term makes the system inconsistent and creates a contradiction which we obviously don't want. 

### The second flaw

We want proof irrelevance, what that means is there should be no difference between two proofs `p,q:P` of the same proposition `P:Type`, i.e, `p=q`, obviously not all types satisfy this condition. 

In constructive mathematics, proofs can be different, for example a proof of `∑x:ℕ, x>0` can be either `1:ℕ` paired with a proof `p1:1>0` that 1 is greater than 0, or it can be `2:ℕ` paired with a proof `p2:2>0` that 2 is greater than 0. In classical mathematics this detail is not important. We can even, if we want to, provide a proof that there exists an `x:ℕ` such that `x>0` without supplying an `x:ℕ` and a proof of `x>0:Type`. Of course, what I'm implying is the use of proof by contradiction.

Alas, as it stands right now, a term of `∑x:ℕ, x>0` cannot be constructed via proof by contradiction. Let's imagine we try to do exactly just that. We'll assume the opposite, i.e, that we have a proof `p:¬(∑x:ℕ, x>0)` and see if we can generate a contradiction (a term of `𝟘`) from `p`. This way a proof by contradiction amounts to constructing a term with type

```
¬(∑x:ℕ, x>0) → 𝟘 := ¬¬(∑x:ℕ, x>0)
```

but constructing a term `q:¬¬(∑x:ℕ, x>0)` dosen't necessarily mean we have a term of `∑x:ℕ, x>0` unless there is a function

```
f : ¬¬(∑x:ℕ, x>0) → ∑x:ℕ, x>0
```

which is impossible to construct without LEM (and remember we can't assume LEM). 

### The solution

> Definition. Given `A:Type`, define
>
> $$ \text{IsProp}(\text{A}):=\prod_{x,y:\text{A}}x=y $$
>
> we say that `A:Type` is an h-proposition if `IsProp(A)` is inhabited. 

If `A:Type` is an h-proposition, this means that there is a proof `p:∏x,y:A, x=y` that any two terms of `A` are equal, this automatically gives us proof irrelevance. Another way to see this is that `A` has at most one term. 

It turns out also that if `A:Type` is an h-proposition, then LEM works on `A`, i.e, we can assume that the type

```
∏A:U, IsProp(A) → (A + ¬A)
```

is inhabited without generating any contradictions (I won't get into why). So, as for the solution... what if instead of having a correspondence between propositions and types, we have a correspondance between propositions and **some** types. By **some** we of course mean types that are h-propositions. 

### A Universe of Propositions

It will be helpful if there exists a universe, let's call it `Prop`, such that every single h-proposition type lives in `Prop`. That way, instead of writing

```
∏A:U, IsProp(A) → (A + ¬A)
```

we can simply write

```
∏A:Prop, A + ¬A
```

I think it is possible to give an explicit construction and rules for the universe `Prop`, but the details fly over my head so I'll leave it at that. I will say that `Prop` sits at the bottom of the hierarchy of universes, i.e,

```
Prop : U_0 : U_1 : U_2 : ...
```

### 𝟙 is an h-proposition 

`𝟙:Type` is clearly an h-proposition. Can we prove it though? To do so we need to show that the type

$$ \text{IsProp}(1) := \prod_{x:1}\prod_{y:1}, \ x=y $$

is inhabited. If we define the dependent type over `𝟙:Type`

$$ \text{B} := \lambda_{x:1}, \ \left[\prod_{y:1}, \ x=y\right] $$

then our problem simplifies to finding a term of type

$$ \prod_{x:1}, \  \text{B(x)} $$

and by the elimination / induction rule, it suffices to find a term of type

$$ \text{B}(\star) := \prod_{y:1}, \ \star=y $$

Repeating the induction once again, our problem simplifies to finding a term of `⋆=⋆:Type`. Now, I haven't formally defined identity types, and it is probably the case that we'll just use a learn-it-as-we-go approach, but it is clear that a term of `⋆=⋆` is a should-have by default.

> In general, for any `a:A`, the type `a=a` is equipped with the term `refl_A(a):a=a` or sometimes we just informally write `refl`.

This completes our proof that `IsProp(𝟙)` is inhabited. Obviously it is great that we have `𝟙:Prop` since `𝟙` represents the `TRUE` proposition, and of course we have `𝟘` for `FALSE`. 

> Try to prove that `IsProp(𝟘)` is inhabited as well

### Operations on Prop



