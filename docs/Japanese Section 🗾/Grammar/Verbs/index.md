# Dictionary Form

When someone wants to learn verbs in English, we teach them the present tense of the verb. For example, we will teach them "walk" instead of "walked". The present tense serves as a base state for the verb, and certain modifications (e.g, adding an -ed) will convert the verb to a different tense.

In Japanese, what is known as the "dictionary form" of the verb serves as its base state, much like the present tense does in English. 

> There are alternative ways of teaching which instead use the "-ます form" of a verb as the base state. There really isn't a difference since the -ます form of a verb is simply a more polite version of the dictionary form.

The dictionary form can be used in multiple contexts, I will showcase these usages with the dictionary form of the verb "drink": 飲む. 

> If you look at more examples of verbs and their dictionary forms, you'll notice that all of them end with an -u. By that same token, any verb **not** ending with an -u is automatically **not** in its dictionary form.

### Habitual action

```
ビールを飲む - "I drink beer"
```

or more accurately "I habitually drink beer". Sort of like how "I play video games" more accurately means that playing video games is a habit/hobby, a thing that they regularly do, or a part of their life.

> The -て form of a verb can also be used to describe habitual action. The two forms are somewhat interchangable but with slight nuances: check [here](https://www.reddit.com/r/LearnJapanese/comments/enzbz0/difference_between_%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99_and_%E3%81%BE%E3%81%99_for_describing/) and [here](https://japanese.stackexchange.com/questions/11925/habitual-aspect).

### Future action

Does this mean that the example above can also be interpreted as "I will drink beer"? YES, but it is usually clear from context if a dictionary form is being used to describe a habitual or future action.

If you ask someone what they will be doing for the evening and they answer with "ビールを飲む", then it is clear that they are using the dictionary form to describe a future action: that they will be drinking later that evening. 

If instead you had asked "what do you usually do in the evenings?" or "what sort of drinks do you like?", then the same response is meant in a habitual sense.

You can also make your intentions clearer and dissolve any possible ambiguity by adding a time component to the sentence:

```
明晩ビールを飲む - "I will drink beer tomorrow evening"

毎晩ビールを飲む - "I drink beer every evening"
```

Or you can replace 毎晩 with たまには if you don't want to sound like an alcoholic. 

The dictionary form can also be used to express statements like "Will you / are you going to X?"

```
これを飲む？ - "Are you going to drink this?"
はい, 飲む - "Yes, I'll drink it"
```

Of course you have to make "これを飲む" sound like a question by intonating the む at the end, otherwise it will be interpreted as "I am going to drink this"

### Stating facts

```
人間は水を飲む - "People drink water"
```

To some extent it can be argued that "stating facts" can be classified under habitual action in a sense that drinking water is a natural property / habit that comes with being human. Here is another example:

```
水は百度で沸騰する - "Water boils at 100 degrees (celcius)"
```

Boiling at 100 degrees is a natural property of water, hence we use the dictionary form. Of course if a person believes that water boils at 50 degrees, then them saying "水は五十度で沸騰する" is still grammatically correct, even if what they say is not true.

> Perhaps it would have been better to say "stating beliefs/information" instead of "stating facts" ... but eh 


Some facts however involve a continuous action, like the Earth revolving around the Sun or ownership of an object. Of course, the Earth doesn't "habitually" revolve around the sun, it is a continuous action. Likewise, you don't "habitually" own a certain object, you are continuously owning it over a certain period of time. 

In situations like these it'd be more appropriate to use the -て form, though using the dictionary form wouldn't be considered much of a mistake

```
私はパソコンを持つ - "I own a computer" (passable)

私はパソコンを持っている - "I own a computer" (good)
```

### The Three Types of Verbs

The process of converting from a dictionary form to the many other available forms is known as verb conjugation. Verbs conjugate differently depending on their class, and in Japanese there are three: Class 1, 2, and 3 verbs. 

Given a dictionary form of a verb, one can employ the following algorithm to determine its class:

```coq
Let V := dictionary form verb

if V = "する" or V = "来る" then V is class 3
    else if V ends with -iru or -eru then V is class 2
    else V is class 1
```

Here are various inputs along with their outputs:

```coq
V = "食べる" => class 2
V = "飲む" => class 1
V = "来る" => class 3
```






