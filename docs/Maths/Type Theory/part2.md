# Part 2 - Type Creation
Just like how in set theory we need to get started by asserting the existence of the empty set $\varnothing$, we too need to populate our type system with some base types in order to start doing mathematics. The process for type creation involves specifying four rules:

- **Type formation rule** : assert the existence of the type you want to create
- **Term introduction rule** : specify how terms of the type are constructed
- **Term elimination rule** : specify how to convert terms of the type to terms of another
- **Computation rule** : specify equalities which aid in simplification

Let us use the empty type `𝟘:Type` as a case example. As you would have guessed the empty type is a type that contains no terms, we shall specify the four rules accordingly to allow for this property.

The rules are given in the following form:

$$
\frac{\text{[Premise]}}{\text{[Conclusion]}}
$$

This expression states that whenever the premises (which can be thought of as preconditions) have been obtained or satisfied, we may take the conclusion for granted.

### Type formation rule for `𝟘:Type`

$$
\frac{}{\text{0:Type}}
$$

[^1] The above expression means: "there is no need for any precondition to be satisified, we simply have `𝟘:Type`". By specifying this rule, we have asserted the existence of the empty type.

### Term introduction rule for `𝟘:Type`

$$
\text{- - none - -}
$$

Notice that since `𝟘:Type` is supposed to have no terms, we don't need to specify how its terms are constructed. 

### Term elimination rule for `𝟘:Type`

You may think that there should be no need for a term elimination rule as well, but it is helpful to introduce one so that we may model the principle of *ex falso quodlibet* into our type system.

> For those unaware, *ex falso quodlibet* is latin for "from falsehood, anything" it is more commonly referred to as the priniciple of explosion. In the context of logic, this means that whenever a contradiction is derived, any proposition can be inferred. 

With the proposition as types interpretation, we may transfer this principle into type theory. If we view `𝟘:Type` as a false proposition (of course there are no terms (proofs) for `𝟘:Type` so this makes sense), then observe that
```
whenever a contradiction is derived, any proposition can be inferred
```
can be interpreted as :
```
a proof of falsehood brings forth a proof of any propostion
```
then using the equivalences : 

- `falsehood ↔ 𝟘:Type`
- `proof ↔ term`
- `proposition ↔ Type`

we get :

```
a term of `𝟘:Type` generates a term of any type
```

The above statement tells us how to specify our term elimination rule. This can be done like so :

$$
\frac{x:0 \ , \quad \text{A : Type}}{\text{rec}_{\text{0}}(x):\text{A}}
$$

the above expression translates to: "given any `x:𝟘` and any `A:Type`, one may generate a term `rec₀(x)` of type `A`". The `rec` stands for recursion (induction). Later on we'll see that the term elimination rule for `ℕ:Type` corresponds to natural number induction. We can think of the term elimination rule as some form of generalized induction. 

### Computation rule for `𝟘:Type`

$$
\text{- - none - -}
$$

It is often the case that the computation rule specifies what happens if we apply the term elimination rule to the term introduction rule, but since we have no term introduction rule, there is no need for a computation rule as well.

### Conclusion

As an ending note let us compare the set $\varnothing$ with `𝟘:Type`. The *ex falso quodlibet* principle in set theory corresponds to the following :

$$
\forall x, \quad  x\in \varnothing \Longrightarrow P
$$

where $P$ can be any proposition. The above is simply a special form of the tautology :

$$
\neg A \Longrightarrow (A \Longrightarrow B)
$$

Thus *ex falso quodlibet*  is a consequence of the underlying first order logic that set theory is built off. On the other hand, the term elimination rule for `𝟘:Type` is not dependent on any sort of underlying system (in fact, type theory has no underlying system), but it is rather an intrinsic property of `𝟘:Type` itself which is true by construction.

The idea is that a type should not be thought of simply as a container for terms. Through its introduction, elimination, and computation rules, it represents a richer structure.

[**Previous Section**](part1.md)

[**Next Section**](part3.md)



[^1]: Since KaTeX cannot render `𝟘` we use the standard zero instead