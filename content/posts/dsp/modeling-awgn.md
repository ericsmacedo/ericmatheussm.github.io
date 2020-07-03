Title: Modeling awgn using python
Date: 2019-11-03 17:08
Modified: 2019-11-03 17:08
Category: digital signal processing
Tags: dsp, python
Slug: modeling-awgn
Authors: Eric Macedo

It is possible to model additive white gaussian noise using the 
[np.random.normal](https://numpy.org/doc/stable/reference/random/generated/numpy.random.normal.html)
python function. You just need to set the distribution center to 0, and specify
the standard deviation according to the desired noise energy.


```python
import numpy as np
import matplotlib.pyplot as plt

# mean and standard deviation
mu = 0
sigma = 0.1
n_samples = 1000 

s = np.random.normal(mu,sigma, n_samples)

plt.plot(s,'.',markersize=3)
plt.title('White Gaussian Noise')
plt.grid()
plt.show()
```

![](images/modeling_awgn.png)
