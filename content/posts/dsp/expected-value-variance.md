Title: Expected Value and Variance 
Date: 2019-11-03 15:45
Modified: 2019-11-03 15:45
Category: digital signal processing
Tags: dsp, probability
Slug: expected-value-variance
Authors: Eric Macedo

### Expected value
The expected value of a random variable $X$ is defined as:

$$E[X]=\sum_{i=1}^{k} p_i\cdot x_i$$

where $p_i$ is the probability of $x_i$ occurring, and k the number o possible values for the variable $X$.
 
**Interpretations**:
- Center of gravity of PMF
- Average in large number of repetitions of the experiment.

**Properties**:

- $E[\alpha] = \alpha$
- $E[\alpha X] = \alpha E[X]$
- $E[\alpha X + \beta] = \alpha E[x] + E[\beta]$

### Variance

The variance of a random variable can be expressed in terms of the expected value:
$$var(X) = E[(X-E[X])^2]$$
$$= \sum_x (x-E[X])^2p_X(x)$$
$$=E[X^2]-(E[X])^2 $$

**Properties**:

- $var(X)\geq0$
- $var(\alpha X +\beta) = \alpha^2 var(X)$: Adding a constant to a random variable does not affect its variance.
