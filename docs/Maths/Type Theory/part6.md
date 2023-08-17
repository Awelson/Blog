# Part 6 - Universes

At the very beginning we mentioned that type theory is nothing more than a 2-level system. That was a lie. Things start to get complicated here (heck, even I'm confused) so I stalled this discussion, hiding you guys away from the ugly truth.

There is a culmulative hierarchy of universes

$$
\mathcal{U}_0:\mathcal{U}_1:\mathcal{U}_2:\cdots
$$

and what we *formally* mean when we say `A:Type` is that `A:U_i` for some `i:ℕ`. 

> In particular, every universe `U_i` is a type since `U_i:U_(i+1)`. This idea is very very important

We also have

- **Culmulativity:** If `A:U_i` then `A:U_(i+1)`
- **Closure:** If `A:U_i` and `B:U_v` then `A+B, A→B, etc..` are in `U_(max i v)`
    - more importantly `U_(max i v)` is the lowest universe level that contains these types

We usually avoid mentioning the level of the universe explicitly, simply writing `U`, and assume that the levels can be assigned in a consistent way. For example, although confusing, we can write `U:U`. To interpret `U:U` we'll need to assign the universe levels. For example, level `0` to the first instance of `U` and `1` to the second instance, giving `U_0:U_1`. Of course, there are many other valid interpretations of `U:U` based on alternative level assignments. We can think of any expression involving (the ambiguous) `U` as a superposition of all **valid** interpretations (universe level assignments) of that expression.

> We use this notation in cases where having the explicit universe level is not relevant, which is mostly the case anyway

Having universes means that everything now has a type. Previously, if `a:A` then type of `a` is `A` but, going one step higher, there is no answer to the question: "what is the type of `A`?". With universes, we know that since `A:Type` we have `A:U_i` for some `i:ℕ` so the type of `A` is `U_i`. 

> But also valid is `A:U_(i+1)`, meaning `U_(i+1)` is another answer to "what is the type of `A`?". So with universes the type of an object is no longer unique[^1].

### WHY????

Although this does make our system a lot more complicated to study, there are some benefits. First, it allows us to formalize the notion of a dependent type. 

> Definition. Let `A:Type`, a dependent type on `A` is a term of type `A→U`.



> Notice that since no explicit universe level is mentioned, what we mean by a term of type `A→U` is a term whose type comes from the following list:
>
> ```
> A→U_0,  A→U_1,  A→U_2,  ...
> ```
> In particular, `B:A→U_99, C:A→U_122, D:A→U_0, etc..` are all dependent types on `A`. Remember, we can think of the expression `A→U` as a superposition ranging across all universe levels.

Hang on! Before we can make that definition we need to make sure that `A→U` is a type. The formation rule for functions is given by

$$
\frac{\text{A:Type}, \quad \text{B:Type}}{\text{A}\to \text{B : Type}}
$$

but with universes we have

$$
\frac{\text{A: }\mathcal{U}, \quad \text{B: }\mathcal{U}}{\text{A}\to \text{B: }\mathcal{U}}
$$

There are many ways to interpret (assign universe levels to) the above rule, for example :

$$
\frac{\text{A: }\mathcal{U}_2, \quad \text{B: }\mathcal{U}_2}{\text{A}\to \text{B: }\mathcal{U}_2}
$$

Is a valid interpretation; or more generally for any `i:ℕ` we have,

$$
\frac{\text{A: }\mathcal{U}_i, \quad \text{B: }\mathcal{U}_i}{\text{A}\to \text{B: }\mathcal{U}_i}
$$

> This is the most common interpretation and we will adopt it as the default

But we cannot have the following interpretation,

$$
\frac{\text{A: }\mathcal{U}_2, \quad \text{B: }\mathcal{U}_2}{\text{A}\to \text{B: }\mathcal{U}_1}
$$

because that would break **closure**. Another valid interpretation is

$$
\frac{\text{A: }\mathcal{U}_i, \quad \text{B: }\mathcal{U}_j}{\text{A}\to \text{B: }\mathcal{U}_{(\text{max} \ i \ j)}}, \quad i,j:\mathbb{N} 
$$

If an interpretation is valid, it gives rise to a valid type formation rule. Thus, we can think of it as if there are many different copies (versions) of the type formation rule and we may use whichever one is appropriate. 

Now setting `B:=U` gives 
$$
\frac{\text{A: }\mathcal{U}_i, \quad \mathcal{U}:\mathcal{U}_i}{\text{A}\to \mathcal{U}:\mathcal{U}_i}, \quad i:\mathbb{N}
$$

Where, to make this valid it suffices to select a large enough `i` so that both `A:U_i` and `U:U_i`. For example if `A:Type` lives in universe level 42 and we want to form `A → U_73`, then we can use the `i=99` version of the type formation rule,

$$
\frac{\text{A: }\mathcal{U}_{99}, \quad \mathcal{U}_{73}:\mathcal{U}_{99}}{\text{A}\to \mathcal{U}_{73}:\mathcal{U}_{99}}
$$

Obtaining the statement `A→U_73:U_99` which confirms that `A→U_73` is a type (because it lives in some universe) Of course there is nothing special about level 99. Any level above 73 will do. For example, we can also obtain the statement `A→U_73:U_74`, but we don't care. The end result stays the same regardless: `A→U_73` lives in some universe, therefore `A→U_73` is a type.

Similarly, there is nothing special about `U_73` and we can repeat this argument for any universe `U`. Thus `A→U` is indeed a type. Check [here](https://cs.stackexchange.com/questions/13285/universes-in-dependent-type-theory) for more persepctives on this matter.

### Polymorphic Identity Function

If `A:Type` then an identity function on `A` is the function `Id_A:A→A` given by the lambda abstraction `λa:A, a`. For example, `Id_ℕ(5):=5, etc ...` But this means that each type needs to have its own identity function. With universes we can have a global identity function. A function `Id : ∏C:U C→C` which takes a type `C:U` as input and outputs a term of type `C→C`, that term being the identity function on `C`. For example, if we want an identity function on `ℕ` we simply feed `ℕ` into `Id` to get what we want.

First, let us show that `∏C:U C→C` is indeed a type. The dependent product formation rule was once

$$
\frac{\text{A}:\text{Type}, \quad x:\text{A} ⊢ \text{B}(x):\text{Type}}{\prod_{x:\text{A}}\text{B}(x):\text{Type}}
$$

but with universes,

$$
\frac{\text{A}:\mathcal{U}_i, \quad \text{B}:\text{A}\to \mathcal{U}_i}{\prod_{x:\text{A}}\text{B}(x):\mathcal{U}_i}, \quad i:\mathbb{N}
$$

> A reminder: this is just one of the many forms that the dependent product formation rule can take

To create the type we want, we set `A:=U` and `B:=λC:U, C→C`, meanwhile assuming a suitable `i` (which is always possible so we won't blab on about this anymore), giving

$$
\frac{\mathcal{U}:\mathcal{U}_i, \quad \lambda_{C:\mathcal{U}},C\to C:\mathcal{U}\to \mathcal{U}_i}{\prod_{C:\mathcal{U}}C\to C:\mathcal{U}_i}
$$

Thus `∏C:U C→C` is indeed a type and we can define the term 
```
Id := λC:U, (λx:C, x) : ∏C:U C→C
```
the polymorphic identity function. What we mean by polymorphic is that `Id:∏C:U C→C` is dynamic to whatever input it recieves. If `A:Type` with universe level 23 is fed into it, then `Id:∏C:U C→C` (whose type is a superposition/polymorphic) adopts a suitable form to accomodate the incoming `A:Type`, say `Id:∏C:U_24 C→C` or `Id:∏C:U_99 C→C`. This means that `Id` can accept a type from any universe level. 

> I will say polymorphic now instead of superposition as it is more mathematically accurate

### Some helpful links

- [https://cs.stackexchange.com/questions/13285/universes-in-dependent-type-theory](https://cs.stackexchange.com/questions/13285/universes-in-dependent-type-theory)

- [https://leanprover.github.io/theorem_proving_in_lean4/dependent_type_theory.html](https://leanprover.github.io/theorem_proving_in_lean4/dependent_type_theory.html)

- [https://leanprover.github.io/functional_programming_in_lean/functor-applicative-monad/universes.html](https://leanprover.github.io/functional_programming_in_lean/functor-applicative-monad/universes.html)

- [https://www.reddit.com/r/ProgrammingLanguages/comments/tjev87/type_theorys_type_universe_what_is_the_type_of/](https://www.reddit.com/r/ProgrammingLanguages/comments/tjev87/type_theorys_type_universe_what_is_the_type_of/)

[^1]: there is a way to fix this which I will not implement, and that is to introduce transport functions between universes. See [here](https://ncatlab.org/nlab/show/Tarski+universe).