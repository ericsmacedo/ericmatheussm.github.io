Title: Creating X-Y axis plots using python
Date: 2019-12-14 21:17
Modified: 2019-12-14 21:17
Category: python
Tags: python, matplotlib
Slug: x-y-axis-using-python
Authors: Eric Macedo

Just a little example on how to create x/y axis graphs using python.

![xy_axis plot](images/xy_axis.png)

```python
# we import numpy to create our test signal
import numpy as np

# matplotlib is used to plot
import matplotlib.pyplot as plt
from mpl_toolkits.axisartist.axislines import SubplotZero

fig = plt.figure()
ax = SubplotZero(fig, 111)
fig.add_subplot(ax)

# we want to leave only the xzero and yzero axis visible
# to make the plot look like the ones we see in text books
for direction in ["left", "right", "bottom", "top"]:
    ax.axis[direction].set_visible(False)

for direction in ["xzero", "yzero"]:
    ax.axis[direction].set_axisline_style("-|>")
    ax.axis[direction].set_visible(True)

# if you want to invert the ticklabel direction, use
# follow the example bellow
ax.axis["yzero"].invert_ticklabel_direction()
    
# Changing the ticks
ax.set_yticks([-1,-0.5,0.5, 1])
ax.set_xticks(np.arange(-0.4,1.2,0.2))

# adding test signal
x = np.linspace(-0.5, 1., 100)
ax.plot(x, np.sin(x*np.pi))

# including grid
plt.grid()
plt.show()
```
More details can be found [here](https://matplotlib.org/devdocs/tutorials/toolkits/axisartist.html#axisartist-users-guide-index).
