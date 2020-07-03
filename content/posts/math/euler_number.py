import numpy as np
import matplotlib.pyplot as plt

def euler_number(delta):
    return (1+delta)**(1/delta)

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
