---
title : Twice Colder than 0°C?
---

4 years ago, I uploaded a video titled ["What's twice colder than 0°C ??"](https://www.youtube.com/watch?v=sQbgKfNactI). I don't believe I explained things well enough in that video. I am hoping that this blog post may help rectify that issue, after all, it has been 4 years and I'd like to believe that I have somewhat improved over that period of time. 

You may watch the video beforehand, but the basic point that I wanted to deliver with that video is the following :

!!! note ""

    Assume that by "twice colder" we mean dividing the temperature by 2. Thus, twice colder than 0°C is 0/2 = 0°C. This doesn't appear to make sense since 0°C is cold, so we'd naturally expect something "twice colder" than that to have a temperature lesser than 0°C.

    If we apply the same approach to weights (grams), we do not encounter any problems : If an object weighs 0g, then an object that is twice lighter is also 0g; this makes more sense compared to when we were dealing with temperature.

    This brings us to the following questions: 
    
    1. Is twice colder than 0°C really just 0°C? Why is this answer so unacceptable? If it is indeed unacceptable then where did we go wrong with our logic?

    2. What is inherently different between °C and g as a unit of measure? Why is the question straightforward to answer with g but not with °C?

## Question 1

At the time, I tried [searching up question 1](https://www.google.com/search?q=twice+colder+than+0+degrees+celicus) on the internet. It turned out to be a very popular question. Lots of people from laymen to experts sharing their own, often conflicting opinions. Basically, all of these disagreements are due to the question being ill defined; what exactly do we mean by "cold" and is °C even an appropriate unit/scale to quantify "cold" with in the first place?

Because there are many differing opinions on the question posed above, a consensus cannot be reached. My personal approach, which I introduced in the video, was to create an artificial unit that measures "cold", that way there would no longer be any ambiguity when we talk about "cold".

The idea is, we, as humans tend to interpret anything below room temperature (which I will assume to be 25°C) as cold. In other words, the further away we are (in the negative direction) from room temperature the colder it is. Therefore, we shall assign a "coldness" score depending on how far a temperature is from 25°C, for example a temperature of 20°C has a "coldness" score of 5. 

With this approach, the answer to the question "What is twice colder than 0°C?" is given as follows : 0°C has a "coldness" score of 25, something twice colder would mean a "coldness" score of 50, and converting that back into °C gives -25°C as the final answer.

Of course, the "correctness" of my answer depends on whether or not you agree with this artificial "coldness" scale that I just conjured up. For example, you may not agree that room temperature is 25°C, or you could argue that wind and humidity should be taken into account as well when creating the scale. Again, the problem boils down to what different people mean when they say "cold". If the scientific community collectively agrees that my made-up scale is an appropriate way to quantify coldness, then the objective answer to the question is -25°C. There is nothing more to it.

## Question 2

The answer to question 2 is only something that I recently discovered while reading the book ["Biostatistics: The Bare Essentials"](https://books.google.co.uk/books/about/Biostatistics.html?id=iiw6zwEACAAJ&redir_esc=y) by Norman and Streiner. 

In the first chapter, they discussed the different types of variables. The key difference between °C and g is that the former is an interval variable while the latter is a ratio variable. To properly explain the difference between these two types of variables let us go through the basics :

### What is Data?

In the context of biostatistics, a piece of **data** (or observation) consists of information regarding a particular **individual** sorted into **variables**. 

- While **individual** usually refers to a particular person, in general it can refer to any object depending on the study. 

- A **variable** is a particular characteristic of an **individual**, for example their height, age, gender, etc...

- A **dataset** is a collection of **data** obtained from a particular experiment or scenario. This is most often represented in the form of a table.

![](https://bolt.mph.ufl.edu/files/2012/07/images-mod1-introduction1-680x348.gif)

/// caption
Example of a dataset with patients as individuals and gender, age, etc... as variables. It is standard to have each row represent an observation, with columns for each variable.
///

!!! note

    If we want to be mathematical, then we can say that a dataset $D$ is identified by a set of individuals $I$, along with variables $V_1,V_2,\cdots,V_n$. Each variable has a range of values which it can take. 
    
    For example, if $V_1$ is gender then its range is $\{\text{M}, \text{F}\}$ and we can think of $V_1$ as a function which maps individuals from $I$ to the set $\{\text{M}, \text{F}\}$. In the above example, we have $V(1)=\text{M}, \ V(2)=\text{F}, \ V(3)=\text{F}$ and so on.

    Another example : Consider the variable **Age**. Its range depends on how exactly we choose to measure age in the study. 
    
    - You could tally a person's age, adding one whenever their birthday is reached, in this context the range of **Age** is $\{0\} \cup \mathbb{N}$. 
    
    - On the other hand, you could choose to measure a person's exact age, e.g. by counting the days, hours, minutes, since the person was born, in this context the range of **Age** is $\mathbb{R}^+$. 

### Types of Variables

!!! note "Independent vs Dependent Variable"

    In studies where we are trying to predict a variable using one or more of the remaining variables, the variable we wish to predict is commonly called the **response** variable, the **outcome** variable, or the **dependent** variable.

    Any variable we are using to predict or explain differences in the outcome is commonly called an **explanatory** variable, an **independent** variable, a **predictor variable**, or a **covariate**.

!!! note "Continuous vs Discrete Variable"

    - A discrete variable is a variable $V$ whose range, $R$, can be injectively mapped into $\mathbb{N}$. In other words, $\vert R \vert \leq \vert \mathbb{N}\vert$
        - Example : Gender, Race, Eye color, Smoker (Yes/No), etc...

    - A continuous variable is a variable $V$ whose range, $R$, has the following property : For any $x,y\in R$ there must exist a $z\in R$ such that $x<z<y$. Most commonly, $R$ is an interval of $\mathbb{R}$.
        - Example : Height, Body mass, etc...
        - There is an interesting point to be made regarding the limitations of our measurement tools making all measurements discrete. In practice, we ignore these limitations. What's important is that a continuous variable can later be discretized (see the age example in the earlier note)

### Level of measurement

This refers to the different types of scales we measure our variables with. The most well known classification of these scales is that proposed by [Stanley Smith Stevens](https://en.wikipedia.org/wiki/Stanley_Smith_Stevens) which consists of "Nominal", "Ordinal", "Interval", and "Ratio" scales. 

> In mathematical terms, **measurement** of a variable $V$ refers to the process of assigning an individual $i\in I$ to the range $R$ of $V$.
>
> The "scale" used by $V$ for a measurement refers to the range of possible values that $i\in I$ can be assigned to, in other words, the "scale" used by $V$ is synonymous to $R$.

!!! note "Nominal Scale"

    A nominal scale consists only of a number of distinct classes or categories, for example: $\{\text{Cat, Dog, Rabbit}\}$ . No kind of relationship between the classes can be relied upon. Measuring with a nominal scale is thus equivalent to classification; you are classifying a particular individual $i\in I$ as either a cat, dog, or a rabbit.

!!! note "Ordinal Scale"

    An ordinal scale is similar to a nominal scale, but the categories have a natural ordering. For example, with letter grades in an exam there is a natural ordering : F $<$ E $<$ D $<$ C $<$ B $<$ A.

    Mathematically, the categories in an ordinal scale have a [total preorder](https://en.wikipedia.org/wiki/Weak_ordering#Total_preorders) structure. This means that there is a binary relation $\leq$ on $R$ (the set of categories in the ordinal scale) satisfying :

    - **Transitivity** : For all $x,y,z\in R$, $x\leq y$ and $y\leq z$ implies $x\leq z$
    - **Strong connectedness** : For all $x,y\in R$, either $x\leq y$ or $y\leq x$

    Of course, such a binary relation can be constructed for any set of categories, but it is important that the resulting ordering is meaningful. Measuring with an ordinal scale is equivalent to comparing different individuals, or assigning a "level" to each of them.

    There is no notion of distance on an ordinal scale. For example, if we have a set of horses with "rank in a race" as a variable, then we cannot say anything certain about the "distance" between first place and second place. The first place horse could have won by a few seconds or a few minutes. We know that this horse performed better than the second place horse, but the degree to which it performed better is unknown when we use the ordinal scale.

!!! note "Interval Scale"

    In interval scale is similar to an ordinal scale, but with an added notion of distance. What this means is that we can "subtract" categories on the scale and obtain a numerical value which represents the degree to which these categories differ.

    For example, the "difference" between 20°C and 30°C is represented by the numerical value 10 while for 20°C and 50°C it is 30. 
    
    - We can compare these differences : there is a greater degree of difference between 20°C and 50°C compared to between 20°C and 30°C (since 30 $>$ 10)

    - We can also talk about the ratios of differences : the difference between 20°C and 50°C is three times that of the difference between 20°C and 30°C (since 3 $\times$ 10 = 30)

    However, while we can take "differences" between categories, we cannot "divide" categories to obtain a ratio. That is to say, it doesn't make sense to say that 40°C is "twice hotter" than 20°C. The reason for this is that for ratios to make sense the "zero" on the scale has to properly represent a complete absence of whatever variable we are measuring. With °C, the "zero" was arbitrarily chosen as the freezing point of water. The "zero" doesn't represent an absolute lack of thermal energy, things can and do get colder than the freezing point of water. 
    
    The point is, if "zero" represents "something (i.e. not nothing)" on the scale, then multiplication and division are not permissible operations that can be performed on the scale. Multiplying "something" (by a value greater than one) increases the amount of that "something", but if that "something" is represented by 0 on the scale, then multiplying on the scale will, on the contrary, have no effect.

!!! note "Ratio Scale"

    A ratio scale is an interval scale with a "zero" that properly represents an absolute lack of whatever variable that is being measured. Having satisfied this property, multiplication and division are permissible operations when working on this scale. This means that we can properly talk about ratios between the categories of the scale. 

    Examples include weight, length, time, etc... 0 grams means an absence of any weight, 0 cm means an absence of any length, etc... It perfectly makes sense to say that twice the weight of 50kg is 100kg or half the length of 10cm is 5cm and so on.

> There are some valid criticisms to the "Nominal", "Ordinal", "Interval", "Ratio" classification of measurement scales proposed by Stevens and it remains a hot topic of debate to this day. If you are interested, you may read more about these criticisms [here](https://www.tandfonline.com/doi/abs/10.1080/00031305.1993.10475938)

## Back to Question 2

As a reminder :

> **Question 2.** What is inherently different between °C and g as a unit of measure? Why is the question straightforward to answer with g but not with °C?

Hopefully, the answer is clear now. °C is a variable measured with an interval scale, and g is measured with a ratio scale. The statement "twice colder" involves ratios which the °C scale, an interval scale, cannot handle and so the question is ill-formed in the first place.

## Back to Quesion 1

The solution I proposed in the video was to create a new (ratio) scale to measure coldness with, one where the "zero" represents the absence of coldness. Of course, my scale relies on the assumption that 25°C properly represents the absence of coldness, which some people may or may not agree with. 

No matter how the "zero" for this new scale is chosen, once we are satisfied that this "zero" represents the absence of coldness, we may then work with ratios and be free to answer the question : "What is twice colder than 0°C?"









