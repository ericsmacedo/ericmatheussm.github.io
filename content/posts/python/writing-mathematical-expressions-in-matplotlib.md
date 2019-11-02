Title: Writing mathematical expressions in Matplotlib
Date: 2019-11-02 16:54
Modified: 2019-11-02 16:55
Category: python
Tags: python, matplotlib, latex
Slug: writing-mathematical-expressions-in-matplotlib
Authors: Eric Macedo

It is possible to render LaTeX in matplotlib titles, legends and labels.
You just need to surround the math text with dollar signs ($) and use 
raw strings (precede the  quotes with an 'r'). Example:

```python
# plain text
plt.title('alpha > pi/2')
```

```python
# math text
plt.title(r'$\alpha > \pi/2$')
```
More details can be found [here](https://matplotlib.org/3.1.1/tutorials/text/mathtext.html).
