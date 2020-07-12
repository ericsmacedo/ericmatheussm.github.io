Title: Estimating the impulse response of an LTI system using AWGN.
Date: 2019-11-10 14:51
Modified: 2019-11-10 14:51
Category: digital signal processing
Tags: dsp, probability, ir
Slug: estimating-ir-of-lti-using-noise
Authors: Eric Macedo


It is possible to estimate the impulse response of an LTI system using white gaussian noise. This can be done by using the similarity between the convolution sum and the cross correlation and the fact that the autocorrelation ($p[k]$) of an white gaussian noise is equal to $\sigma^2 \cdot\delta[k]$.

Let's first remember some concepts:

- Cross Correlation
- Convolution Sum vs Cross Correlation
- Autocorrelation of white gaussian noise

### Cross Correlation

**Wikipedia:** In signal processing, cross-correlation is a measure of similarity of two series as a function of the displacement of one relative to the other. This is also known as a sliding dot product or sliding inner-product.

We can estimate the cross correlation between two sequences using the equation bellow:
$$
p[k] = \frac{1}{K}\sum_{m=0}^{K}r[m]w[m-k]
$$

### Convolution Sum vs Cross Correlation
For a filter with impulse response $h[n]$, the output $y[n]$ of the filter for an input $x[n]$ is given by:
$$
y[n] = \sum_{-\infty}^{+\infty}x[k]h[n-k] = x[n]*h[n]
$$
For a filter with a response equal to $h[-n]$ we have:
$$
y[n] = \sum_{-\infty}^{+\infty}x[k]h[k-n] = x[n]*h[-n]
$$
That is equal to the cross correlation between two sequences $x[n]$ and $h[n]$ scaled by K. 
Therefore, we can re-write the first equation the following way:
$$
p[k] = \frac{1}{K}\sum_{m=0}^{K}r[m]w[m-k] = \frac{1}{K}\cdot(r[k]*w[-k])
$$

### Autocorrelation of White Gaussian Noise

The autocorrelation $p[k]$ of White Gaussian Noise $w[n]$ is equal to its variance $\sigma^2$ for $k=0$ and $0$ otherwise:
$$
E[w[n]w[n-k]] = \sigma^2\cdot \delta[k]
$$

### Estimating the impulse response of an LTI system

Now we are ready to estimate the impulse response. The process is described in the block diagram bellow:

![Block diagram](images/est_ir_noise_bd.png)

In which $w[n]$ is a white gaussian noise with mean 0 and variance $\sigma^2$. We start by generating the impulse response we want to estimate and the white noise samples.


```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import convolve
from scipy.signal import firwin

# This is the response we are trying to estimate
hn = firwin(numtaps=111,cutoff=0.3)

# generating noise with unitary variance and zero mean.
# The more noise samples we use, the better the estimation
noise = np.random.normal(0,1, 500000)
```

Note that:
$$y[n] = w[n]*h[n]$$


```python
# LTI system output to noise
lti_out = convolve(hn,noise)
```

and:
$$
\tilde{h}[n] = y[n]*w[-n] =  w[-n]*w[n]*h[n]
$$
We know from the previous section that $w[-n]*w[n]$ is equal to the autocorrelation of the white gaussian noise: $K\cdot\sigma^2\cdot\delta[k]$. Therefore:
$$
\tilde{h}[n] = K\cdot(\sigma^2\cdot\delta[n]) * h[n]
$$
The generated noise has variance equal to 1, therefore
$$
\tilde{h}[n] = K\cdot(\delta[n] * h[n])
$$


```python
# we then estimate the correlation of the output to the input
est_resp = convolve(lti_out, noise[::-1])/noise.size

# remove the extra samples added by the convolution
est_resp = est_resp[noise.size-1:noise.size-1+hn.size]
```

We can compare the Estimated impulse response to the actual response using Signal to Noise Ratio

```python
# Comparing the estimated response to the actual response using SNR 
snr = 10*np.log10(np.var(hn)/np.var(est_resp-hn))
print(f'SNR (dB): {snr}')
```
SNR (dB): 37.69468555107308

```python
x = plt.subplots(2,1,figsize=(10,10))
ax[0].plot(est_resp,'.',label='Estimated impulse response')
ax[0].plot(hn, label='Impulse response')
ax[0].grid()
ax[0].legend()

ax[1].plot(hn-est_resp)
ax[1].set_title('Estimation Error')

plt.grid()
```

![Comparing_impulse_response](images/comparing_ir.png)
