# A More Efficient Notation

As we move on to more complex concepts it is necessary to come up with a better notation system. The one I will use here bears a huge similarity to Lean's syntax. Before that, let's talk about pattern matching.

### Pattern Matching

is a way to define functions out of a `A:Type` with a case-by-case approach. Any term of `A:Type` will have to originate from its introduction rule, for example, if `n:ℕ` then we know that either `n=0` or `n=suc(m)` for some `m:ℕ`, and if `n:𝟙` then the only possibility is `n=⋆`. 

For example, to define a function `f:𝟙→A` one only needs to specify a term of `A:Type` which `⋆:𝟙` is supposed to be mapped to. To define a function `f:ℕ→A` one needs to specify where `f` has to send `0:ℕ` and subsequently where `f` has to send `suc(n)`. This is precisely what the elimination rules for `𝟙,ℕ:Type` accomplish, but we can make this more efficient.

For instance, to define the addition function we can write

```ocaml
Def Add : ℕ → ℕ → ℕ
| x 0 := x
| x (suc y) := suc (add x y)
```

instead of defining it traditionally with `ℕ` elimination. Say we want to calculate `Add 1 3`, the computer will check if `1 3` suits the `x 0` pattern or the `x (suc y)` pattern. 

Since the computer views `3` as `suc suc suc 0`, the computer matches `1 3` with the `x (suc y)` pattern and it infers that `x=1` and `y=2`. Hence `Add 1 3 := suc (Add 1 2)`. One may of course perform the calculation again until no further progress can be made, giving the equality chain

```haskell
Add 1 3 := suc (Add 1 2) 
        := suc suc (Add 1 1) 
        := suc suc suc (Add 1 0) 
        := suc suc suc 1
        := suc suc suc suc 0 
```

```ocaml
Def ite {B:Type} (A:Prop) (a,b:B) : B :=
match LEM(A) with
| inl _ := a
| inr _ := b
```

```ocaml
Def dite {B:Type} (A:Prop) (f:A→B) (g:¬A→B) : B :=
match LEM(A) with
| inl p := f p
| inr q := g q
```
