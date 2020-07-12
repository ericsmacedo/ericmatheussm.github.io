Title: Z transform
Date: 2019-11-03 16:07
Modified: 2019-11-03 16:07
Category: digital signal processing
Tags: dsp, transform
Slug: z-transform
Authors: Eric Macedo


The objective is to generalize the fourier transform.

### **Discrete Time Fourier Transform**

$$x[n] =  \sum_{n=-\infty}^{+\infty} x[n]e^{-j \Omega n}$$

There is a set of signals more general than the complex exponentials, wich are also eigenfunctions of LTI systems.

$$z = re^{j\Omega}$$

- r: the magnitude of the complex number
- $\Omega$: the angle of the complex number


### **Eigenfunctions definition**: 
An eigenfunction is a function for which the output of the operator is the same function, scaled by some constant.

We can prove that z is a eigenfunction of LTI system by:
$$
\sum_{k=-\infty}^{+\infty} x[k]z^{n-k} = \sum_{k=-\infty}^{+\infty} x[k]z^n z^{-k} = z^n \sum_{k=-\infty}^{+\infty} x[k]z^{-k} = z^n \cdot H(z)
$$

So $z^n$ is an eigenfunction of an LTI system because the system response is the same as the input times the constant $H(z)$.

### **z-transform definition**:
$$
\text{H}(z) = \sum_{n=-\infty}^{+\infty} x[n]z^{-n}
$$

### **The relations between the fourier transform and the z-transform**

The Z transform has a very close relation to the Fourier Transform. If we compare the fourier transform for a sequence and the z-transform for the same sequence, we can see that:
$$
X(z)\bigg\rvert_{z=e^{j\Omega}} = \mathscr{F}\{x[n]\}
$$
Therefore, for $r=1$ the z-transform corresponds to the fourier transform.

The z-transform for other values of z (other than $ e^{j\Omega}$) is equal to the fourier transform of the same sequence multiplied by $r^{-n}$:
$$
X(re^{j\Omega}) = \sum_{n=-\infty}^{+\infty} x[n](re^{j\Omega})^{-n} = \sum_{n=-\infty}^{+\infty} x[n]r^{-n}e^{-j\Omega n}
$$

$$
X(z) = \mathscr{F}\{x[n]r^{-n}\}
$$

- For $r>1$: $r^{-n}$ decreases exponentially as n increases.
- For $r<1$: $r^{-n}$ increases exponentially as n increases.
