Title: e (Euler Number)
Date:  2020-7-3 0:55
Modified: 2020-7-3 0:55 
Category: math
Tags: constants, DFT
Slug: euler-number
Authors: Eric Macedo


Have you ever wondered what is the definition of e? 
Also known as the “Euler Number”, the constant e is often used when working with
complex numbers or some mathematical transforms (the Fourier transform, for example).

$e$ is a constant approximately equal to 2.71828, and can be defined as 
the value of $a$ for which: $\frac{da^x}{dx}=a^x$. Therefore, to obtain the value
of $e$, we just need to find the value of $a$ that satisfy that equation.

$$
\frac{da^x}{dx} = \lim_{\delta \to 0} \frac{a^{x+\delta} - a^x}{\delta} =
a^x \lim_{\delta \to 0} \frac{a^\delta -1 }{\delta} 
$$
Therefore,
$$
\lim_{\delta \to 0} \frac{e^\delta-1}{\delta} \triangleq 1
$$

As $\delta \to 0$,

$$
e^\delta -1 \to \delta
$$
$$
e \to (\delta + 1)^{(1/\delta)}
$$
$$
e \triangleq \lim_{\delta \to 0} (\delta+1)^{1/\delta}
$$

We can use Python to calculate this limit:

```python
import numpy as np

def euler_number(delta):
    return (1+delta)**(1/delta)

# values used for delta
delta_values = 1.0/(10**np.arange(7))

e_values = [euler_number(x) for x in delta_values]
```

| Delta value | e values     |
|-------------|--------------|
| 1           | 2.0          |
| 0.1         | 2.59374      |
| 0.01        | 2.70481      |
| 0.001       | 2.71692      |
| 0.0001      | 2.71815      |
| 0.00001     | 2.71827      |
| 0.000001    | 2.71828      |  

  
From the plot depicted below, we can see that $e$ converges to 2.71828 as
delta tends to 0.  

![](images/e_as_delta_tends_to_0.png)  

The plot was obtained using the Python code below:
```python
# values used for delta
delta_values = 1.0/(10**np.arange(0,7,0.1))

e_values = [euler_number(x) for x in delta_values]

plt.semilogy(e_values, delta_values, label=r'$(1+\delta)^{1/\delta}$')

# title and labels
plt.title(r'Values of $e$ as $\delta$ tends to 0') 
plt.ylabel(r'$\delta$')
plt.xlabel(r'$(1+\delta)^{1/\delta}$')

# adding marker
plt.autoscale(False)   
plt.plot([np.exp(1), np.exp(1)], [1e-8,2], 'r--',label=r'$\lim_{\delta \to 0}(1+\delta)^{1/\delta} \approx 2.71828$')

plt.grid(which='Both', linestyle='--')
plt.legend()
plt.show()
```

