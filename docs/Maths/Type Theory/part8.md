# Part 8 - Propositional Truncation

**Type Formation Rule**

$$\frac{\text{A}:\text{Type}}{\text{|A|}:\text{Type}}$$

For any type `A` we introduce the type `|A|`, called the propositional truncation of `A`. 

**Term Introduction Rule**

$$\frac{\text{A}:\text{Type}}{\text{inc}:\text{A}\to\text{|A|}}$$

There is a function `inc:A→|A|`, this ensures that we have the property `|A|` is inhabited whenever `A` is 

> because we can create an inhabitant of `|A|` by applying `inc` to an inhabitant of `A`. 

**Observational Equality**

$$\frac{a,b:\text{|A|}}{p:a=b}$$

Any two terms of the propositional truncation are equal. Obviously this means that `|A|:Prop` for any `A:Type`.

**Term Elimination Rule**

$$\frac{\text{A}:\text{Type}, \quad \text{B}:\text{Prop}, \quad f:\text{A}\to\text{B}}{g:\text{|A|}\to \text{B}}$$

> A dependent version of the above rule exists, but is not particularly useful

with the **computation rule** `g(|a|):=f(a)` for any `a:A`. The elimination rule basically means that when attempting to prove that a propositional truncation `|A|` implies a proposition `B`, then it suffices to prove (the often easier) `A` implies `B`. 

### The solution

to our problem in the previous part is to apply a propositional truncation whenever an operation between two propositions `A,B:Prop` results in a type that isn't a proposition. 

The only troublesome operations to worry about is `+` and `∑`. Therefore, if we want to translate `A∨B` into type theory, we use `|A+B|` instead of the usual `A+B`. 

> Again, `A∨B→A+B` is not an incorrect translation, rather `A+B` is a constructive version of `A∨B`. If we are working under the context of intuitionistic logic, then the translation would in fact be accurate.

Here is a full translation table given `P,Q:Prop` except the last two rows where `P:A→Prop`.

<figure markdown>
  ![Image title](Capture9.PNG){ width="640" }
</figure>

### Differences

To better understand propositional truncation, let us examine the differences between the types `∑x:A, P(x)` and `|∑x:A, P(x)|:=∃x:A, P(x)`.

Surely `∑x:A, P(x) → A` is inhabited. `π₁` for example is an inhabitant of that type. This means that we can extract an inhabitant of `A` given a term of `∑x:A, P(x) → A`, we can then use that inhabitant of `A` in a proof argument later on. Would the same thing work for `∃x:A, P(x)`?

According to the elimination rule, a function `g:∃x:A, P(x) → A` can be obtained from `π₁:∑x:A, P(x) → A`, but this is supposing that `A` is an h-proposition which is not always the case. What we can guarantee however is that `g:∃x:A, P(x) → |A|` is inhabited since we have `|A|:Prop` by definition. So we can extract an inhabitant of `|A|` instead of `A`. 

Whilst the judgement `a:A` demonstrates that `A` is inhabited, it also provides us access to a term of `A` that we can make use of. Meanwhile, the judgement `a:|A|` only has the benefit of demonstrating that `A` is inhabited.. and nothing else.

You may imagine that it will be troublesome to work with `∃x:A, P(x)`. For example, one can imagine a situation where the next step of a proof requires proving `B:Type` whilst having a `f:A→B` at hand. It is easy to do so starting from `q:∑x:A, P(x)` because `f(π₁(q)):B`. If instead we have `q:∃x:A, P(x)` then we can extract an `a:|A|` but we would be stuck since `a:|A|` can't be fed into `f:A→B`. 

Trouble as it may be, most statements in (classical) mathematics can be represented as h-propositions. That is to say, in most situations (like the one above), we'll have `B:Prop`, and since that's the case our `f:A→B` can be converted to a `g:|A|→B`, thus allowing us to continue the next step of the proof.

Even then, having to take this additional step every single time is arduous. In [Lean](https://leanprover-community.github.io/mathlib_docs/init/classical.html), there is an axiom should you wish to work under classical mathematics. It asserts that given any `A:Type` a function

```
classical.choice : |A| → A
```

exists. Although unnecessary, this basically allows us to sort of sweep under the rug the additional work and detail required when dealing with propositional truncations. In particular, we can treat `∃x:A, P(x)` as if it were (the more useful) `∑x:A, P(x)`. 
