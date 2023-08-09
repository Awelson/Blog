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

We usually avoid mentioning the level of the universe explicitly, simply writing `A:U`, and assume that the levels can be assigned in a consistent way. For example, although confusing, we can write `U:U`. To interpret `U:U` we'll need to assign the universe levels, for example, level `0` to the first instance of `U` and `1` to the second instance, giving `U_0:U_1`. Of course, there are many other valid interpretations of `U:U` based on alternate level assignments. Thus, we use this notation in cases where having the explicit universe level is not relevant, which is mostly the case anyway.

Having universes means that everything now has a type. Previously, if `a:A` then type of `a` is `A` but there is no answer to the question: "what is the type of `A`?". With universes, we know that `A:U_i` so the type of `A` is `U_i`. 

> But also valid is `A:U_(i+1)`, meaning `U_(i+1)` is another answer to "what is the type of `A`?". So with this principle, the type of an object is no longer unique.

### WHY????

Although this does make our system a lot more complicated to study, there are some benefits. First, it allows us to formalize the notion of a dependent type. 

> Definition. Let `A:Type`, a dependent type on `A` is a term of type `A→U`.

<br> 

> Notice that since no explicit universe level is mentioned, what we mean by a term of type `A→U` is a term whose type comes from the following list:
>
> ```
> A→U_0,  A→U_1,  A→U_2,  ...
> ```
> In particular, `B:A→U_99, C:A→U_122, D:A→U_0, etc..` are all dependent types on `A`. We can think of `A→U` as a superposition ranging across all universe levels.

Hang on! How do we know that `A→U` is a type? The formation rule for functions is given by

$$
\frac{\text{A:Type}, \quad \text{B:Type}}{\text{A}\to \text{B : Type}}
$$

but with universes we have

$$
\frac{\text{A: }\mathcal{U}_i, \quad \text{B: }\mathcal{U}_i}{\text{A}\to \text{B: }\mathcal{U}_i}
$$

Where `i` is some universe level assumed large enough so that both `A:U_i` and `B:U_i`. 

> Choosing a large enough `i` is possible. Since `A,B:Types` there are exists  `x,y:ℕ` such that `A:U_x` and `B:U_y` so just select `i := max x y`. In general, you shouldn't really worry about whether or not selecting a large enough `i` is possible.. it most certainly always is.

Now setting `B := U` gives 
$$
\frac{\text{A: }\mathcal{U}_i, \quad \mathcal{U}:\mathcal{U}_i}{\text{A}\to \mathcal{U}:\mathcal{U}_i}
$$

where `i` can be any universe level higher than `A`'s or `U`'s. For example if `A:Type` lives in universe level 42 and we want to form `A → U_73`, then we can use the formation rule like so :

$$
\frac{\text{A: }\mathcal{U}_{99}, \quad \mathcal{U}_{73}:\mathcal{U}_{99}}{\text{A}\to \mathcal{U}_{73}:\mathcal{U}_{99}}
$$

Obtaining the statement `A→U_73:U_99` which confirms that `A→U_73` is a type (because it lives in some universe) Of course there is nothing special about the level 99, we can select whatever level as long as it is above 73. For example, we can also obtain the statement `A→U_73:U_74`, but we don't care. The end result is `A→U_73` lives in some universe, therefore `A→U_73` is a type.

Similarly, there is nothing special about `U_73` and we can repeat this argument for any universe `U`. Thus `A→U` is indeed a type. Check [here](https://cs.stackexchange.com/questions/13285/universes-in-dependent-type-theory) for more persepctives on this matter

### Some helpful links

- [https://cs.stackexchange.com/questions/13285/universes-in-dependent-type-theory](https://cs.stackexchange.com/questions/13285/universes-in-dependent-type-theory)

- [https://leanprover.github.io/theorem_proving_in_lean4/dependent_type_theory.html](https://leanprover.github.io/theorem_proving_in_lean4/dependent_type_theory.html)

- [https://leanprover.github.io/functional_programming_in_lean/functor-applicative-monad/universes.html](https://leanprover.github.io/functional_programming_in_lean/functor-applicative-monad/universes.html)

- [https://www.reddit.com/r/ProgrammingLanguages/comments/tjev87/type_theorys_type_universe_what_is_the_type_of/](https://www.reddit.com/r/ProgrammingLanguages/comments/tjev87/type_theorys_type_universe_what_is_the_type_of/)