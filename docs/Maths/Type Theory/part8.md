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

Here is a full translation table

<figure markdown>
  ![Image title](Capture9.PNG){ width="640" }
</figure>

