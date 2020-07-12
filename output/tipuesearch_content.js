var tipuesearch = {"pages":[{"title":"e (Euler Number)","text":"Have you ever wondered what is the definition of e? Also known as the \"Euler Number\", the constant e is often used when working with complex numbers or some mathematical transforms (the Fourier transform, for example). \\(e\\) is a constant approximately equal to 2.71828, and can be defined as the value of \\(a\\) for which: \\(\\frac{da&#94;x}{dx}=a&#94;x\\) . Therefore, to obtain the value of \\(e\\) , we just need to find the value of \\(a\\) that satisfy that equation. $$ \\frac{da&#94;x}{dx} = \\lim_{\\delta \\to 0} \\frac{a&#94;{x+\\delta} - a&#94;x}{\\delta} = a&#94;x \\lim_{\\delta \\to 0} \\frac{a&#94;\\delta -1 }{\\delta} $$ Therefore, $$ \\lim_{\\delta \\to 0} \\frac{e&#94;\\delta-1}{\\delta} \\triangleq 1 $$ As \\(\\delta \\to 0\\) , $$ e&#94;\\delta -1 \\to \\delta $$ $$ e \\to (\\delta + 1)&#94;{(1/\\delta)} $$ $$ e \\triangleq \\lim_{\\delta \\to 0} (\\delta+1)&#94;{1/\\delta} $$ We can use Python to calculate this limit: import numpy as np def euler_number ( delta ): return ( 1 + delta ) ** ( 1 / delta ) # values used for delta delta_values = 1.0 / ( 10 ** np . arange ( 7 )) e_values = [ euler_number ( x ) for x in delta_values ] Delta value e values 1 2.0 0.1 2.59374 0.01 2.70481 0.001 2.71692 0.0001 2.71815 0.00001 2.71827 0.000001 2.71828 From the plot depicted below, we can see that \\(e\\) converges to 2.71828 as delta tends to 0. The plot was obtained using the Python code below: # values used for delta delta_values = 1.0 / ( 10 ** np . arange ( 0 , 7 , 0.1 )) e_values = [ euler_number ( x ) for x in delta_values ] plt . semilogy ( e_values , delta_values , label = r '$(1+\\delta)&#94;{1/\\delta}$' ) # title and labels plt . title ( r 'Values of $e$ as $\\delta$ tends to 0' ) plt . ylabel ( r '$\\delta$' ) plt . xlabel ( r '$(1+\\delta)&#94;{1/\\delta}$' ) # adding marker plt . autoscale ( False ) plt . plot ([ np . exp ( 1 ), np . exp ( 1 )], [ 1e-8 , 2 ], 'r--' , label = r '$\\lim_{\\delta \\to 0}(1+\\delta)&#94;{1/\\delta} \\approx 2.71828$' ) plt . grid ( which = 'Both' , linestyle = '--' ) plt . legend () plt . show () if (!document.getElementById('mathjaxscript_pelican_#%@#$@#')) { var align = \"center\", indent = \"0em\", linebreak = \"false\"; if (false) { align = (screen.width < 768) ? \"left\" : align; indent = (screen.width < 768) ? \"0em\" : indent; linebreak = (screen.width < 768) ? 'true' : linebreak; } var mathjaxscript = document.createElement('script'); mathjaxscript.id = 'mathjaxscript_pelican_#%@#$@#'; mathjaxscript.type = 'text/javascript'; mathjaxscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/latest.js?config=TeX-AMS-MML_HTMLorMML'; var configscript = document.createElement('script'); configscript.type = 'text/x-mathjax-config'; configscript[(window.opera ? \"innerHTML\" : \"text\")] = \"MathJax.Hub.Config({\" + \" config: ['MMLorHTML.js'],\" + \" TeX: { extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js'], equationNumbers: { autoNumber: 'none' } },\" + \" jax: ['input/TeX','input/MathML','output/HTML-CSS'],\" + \" extensions: ['tex2jax.js','mml2jax.js','MathMenu.js','MathZoom.js'],\" + \" displayAlign: '\"+ align +\"',\" + \" displayIndent: '\"+ indent +\"',\" + \" showMathMenu: true,\" + \" messageStyle: 'normal',\" + \" tex2jax: { \" + \" inlineMath: [ ['\\\\\\\\(','\\\\\\\\)'] ], \" + \" displayMath: [ ['$$','$$'] ],\" + \" processEscapes: true,\" + \" preview: 'TeX',\" + \" }, \" + \" 'HTML-CSS': { \" + \" availableFonts: ['STIX', 'TeX'],\" + \" preferredFont: 'STIX',\" + \" styles: { '.MathJax_Display, .MathJax .mo, .MathJax .mi, .MathJax .mn': {color: 'inherit ! important'} },\" + \" linebreaks: { automatic: \"+ linebreak +\", width: '90% container' },\" + \" }, \" + \"}); \" + \"if ('default' !== 'default') {\" + \"MathJax.Hub.Register.StartupHook('HTML-CSS Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax['HTML-CSS'].FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"MathJax.Hub.Register.StartupHook('SVG Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax.SVG.FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"}\"; (document.body || document.getElementsByTagName('head')[0]).appendChild(configscript); (document.body || document.getElementsByTagName('head')[0]).appendChild(mathjaxscript); }","tags":"math","url":"/euler-number.html","loc":"/euler-number.html"},{"title":"Creating X-Y axis plots using python","text":"Just a little example on how to create x/y axis graphs using python. # we import numpy to create our test signal import numpy as np # matplotlib is used to plot import matplotlib.pyplot as plt from mpl_toolkits.axisartist.axislines import SubplotZero fig = plt . figure () ax = SubplotZero ( fig , 111 ) fig . add_subplot ( ax ) # we want to leave only the xzero and yzero axis visible # to make the plot look like the ones we see in text books for direction in [ \"left\" , \"right\" , \"bottom\" , \"top\" ]: ax . axis [ direction ] . set_visible ( False ) for direction in [ \"xzero\" , \"yzero\" ]: ax . axis [ direction ] . set_axisline_style ( \"-|>\" ) ax . axis [ direction ] . set_visible ( True ) # if you want to invert the ticklabel direction, use # follow the example bellow ax . axis [ \"yzero\" ] . invert_ticklabel_direction () # Changing the ticks ax . set_yticks ([ - 1 , - 0.5 , 0.5 , 1 ]) ax . set_xticks ( np . arange ( - 0.4 , 1.2 , 0.2 )) # adding test signal x = np . linspace ( - 0.5 , 1. , 100 ) ax . plot ( x , np . sin ( x * np . pi )) # including grid plt . grid () plt . show () More details can be found here .","tags":"python","url":"/x-y-axis-using-python.html","loc":"/x-y-axis-using-python.html"},{"title":"Estimating the impulse response of an LTI system using AWGN.","text":"It is possible to estimate the impulse response of an LTI system using white gaussian noise. This can be done by using the similarity between the convolution sum and the cross correlation and the fact that the autocorrelation ( \\(p[k]\\) ) of an white gaussian noise is equal to \\(\\sigma&#94;2 \\cdot\\delta[k]\\) . Let's first remember some concepts: Cross Correlation Convolution Sum vs Cross Correlation Autocorrelation of white gaussian noise Cross Correlation Wikipedia: In signal processing, cross-correlation is a measure of similarity of two series as a function of the displacement of one relative to the other. This is also known as a sliding dot product or sliding inner-product. We can estimate the cross correlation between two sequences using the equation bellow: $$ p[k] = \\frac{1}{K}\\sum_{m=0}&#94;{K}r[m]w[m-k] $$ Convolution Sum vs Cross Correlation For a filter with impulse response \\(h[n]\\) , the output \\(y[n]\\) of the filter for an input \\(x[n]\\) is given by: $$ y[n] = \\sum_{-\\infty}&#94;{+\\infty}x[k]h[n-k] = x[n]*h[n] $$ For a filter with a response equal to \\(h[-n]\\) we have: $$ y[n] = \\sum_{-\\infty}&#94;{+\\infty}x[k]h[k-n] = x[n]*h[-n] $$ That is equal to the cross correlation between two sequences \\(x[n]\\) and \\(h[n]\\) scaled by K. Therefore, we can re-write the first equation the following way: $$ p[k] = \\frac{1}{K}\\sum_{m=0}&#94;{K}r[m]w[m-k] = \\frac{1}{K}\\cdot(r[k]*w[-k]) $$ Autocorrelation of White Gaussian Noise The autocorrelation \\(p[k]\\) of White Gaussian Noise \\(w[n]\\) is equal to its variance \\(\\sigma&#94;2\\) for \\(k=0\\) and \\(0\\) otherwise: $$ E[w[n]w[n-k]] = \\sigma&#94;2\\cdot \\delta[k] $$ Estimating the impulse response of an LTI system Now we are ready to estimate the impulse response. The process is described in the block diagram bellow: In which \\(w[n]\\) is a white gaussian noise with mean 0 and variance \\(\\sigma&#94;2\\) . We start by generating the impulse response we want to estimate and the white noise samples. import numpy as np import matplotlib.pyplot as plt from scipy.signal import convolve from scipy.signal import firwin # This is the response we are trying to estimate hn = firwin ( numtaps = 111 , cutoff = 0.3 ) # generating noise with unitary variance and zero mean. # The more noise samples we use, the better the estimation noise = np . random . normal ( 0 , 1 , 500000 ) Note that: $$y[n] = w[n]*h[n]$$ # LTI system output to noise lti_out = convolve ( hn , noise ) and: $$ \\tilde{h}[n] = y[n]*w[-n] = w[-n]*w[n]*h[n] $$ We know from the previous section that \\(w[-n]*w[n]\\) is equal to the autocorrelation of the white gaussian noise: \\(K\\cdot\\sigma&#94;2\\cdot\\delta[k]\\) . Therefore: $$ \\tilde{h}[n] = K\\cdot(\\sigma&#94;2\\cdot\\delta[n]) * h[n] $$ The generated noise has variance equal to 1, therefore $$ \\tilde{h}[n] = K\\cdot(\\delta[n] * h[n]) $$ # we then estimate the correlation of the output to the input est_resp = convolve ( lti_out , noise [:: - 1 ]) / noise . size # remove the extra samples added by the convolution est_resp = est_resp [ noise . size - 1 : noise . size - 1 + hn . size ] We can compare the Estimated impulse response to the actual response using Signal to Noise Ratio # Comparing the estimated response to the actual response using SNR snr = 10 * np . log10 ( np . var ( hn ) / np . var ( est_resp - hn )) print ( f 'SNR (dB): {snr} ' ) SNR (dB): 37.69468555107308 x = plt . subplots ( 2 , 1 , figsize = ( 10 , 10 )) ax [ 0 ] . plot ( est_resp , '.' , label = 'Estimated impulse response' ) ax [ 0 ] . plot ( hn , label = 'Impulse response' ) ax [ 0 ] . grid () ax [ 0 ] . legend () ax [ 1 ] . plot ( hn - est_resp ) ax [ 1 ] . set_title ( 'Estimation Error' ) plt . grid () if (!document.getElementById('mathjaxscript_pelican_#%@#$@#')) { var align = \"center\", indent = \"0em\", linebreak = \"false\"; if (false) { align = (screen.width < 768) ? \"left\" : align; indent = (screen.width < 768) ? \"0em\" : indent; linebreak = (screen.width < 768) ? 'true' : linebreak; } var mathjaxscript = document.createElement('script'); mathjaxscript.id = 'mathjaxscript_pelican_#%@#$@#'; mathjaxscript.type = 'text/javascript'; mathjaxscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/latest.js?config=TeX-AMS-MML_HTMLorMML'; var configscript = document.createElement('script'); configscript.type = 'text/x-mathjax-config'; configscript[(window.opera ? \"innerHTML\" : \"text\")] = \"MathJax.Hub.Config({\" + \" config: ['MMLorHTML.js'],\" + \" TeX: { extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js'], equationNumbers: { autoNumber: 'none' } },\" + \" jax: ['input/TeX','input/MathML','output/HTML-CSS'],\" + \" extensions: ['tex2jax.js','mml2jax.js','MathMenu.js','MathZoom.js'],\" + \" displayAlign: '\"+ align +\"',\" + \" displayIndent: '\"+ indent +\"',\" + \" showMathMenu: true,\" + \" messageStyle: 'normal',\" + \" tex2jax: { \" + \" inlineMath: [ ['\\\\\\\\(','\\\\\\\\)'] ], \" + \" displayMath: [ ['$$','$$'] ],\" + \" processEscapes: true,\" + \" preview: 'TeX',\" + \" }, \" + \" 'HTML-CSS': { \" + \" availableFonts: ['STIX', 'TeX'],\" + \" preferredFont: 'STIX',\" + \" styles: { '.MathJax_Display, .MathJax .mo, .MathJax .mi, .MathJax .mn': {color: 'inherit ! important'} },\" + \" linebreaks: { automatic: \"+ linebreak +\", width: '90% container' },\" + \" }, \" + \"}); \" + \"if ('default' !== 'default') {\" + \"MathJax.Hub.Register.StartupHook('HTML-CSS Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax['HTML-CSS'].FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"MathJax.Hub.Register.StartupHook('SVG Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax.SVG.FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"}\"; (document.body || document.getElementsByTagName('head')[0]).appendChild(configscript); (document.body || document.getElementsByTagName('head')[0]).appendChild(mathjaxscript); }","tags":"digital signal processing","url":"/estimating-ir-of-lti-using-noise.html","loc":"/estimating-ir-of-lti-using-noise.html"},{"title":"Modeling awgn using python","text":"It is possible to model additive white gaussian noise using the np.random.normal python function. You just need to set the distribution center to 0, and specify the standard deviation according to the desired noise energy. import numpy as np import matplotlib.pyplot as plt # mean and standard deviation mu = 0 sigma = 0.1 n_samples = 1000 s = np . random . normal ( mu , sigma , n_samples ) plt . plot ( s , '.' , markersize = 3 ) plt . title ( 'White Gaussian Noise' ) plt . grid () plt . show ()","tags":"digital signal processing","url":"/modeling-awgn.html","loc":"/modeling-awgn.html"},{"title":"Z transform","text":"The objective is to generalize the fourier transform. Discrete Time Fourier Transform $$x[n] = \\sum_{n=-\\infty}&#94;{+\\infty} x[n]e&#94;{-j \\Omega n}$$ There is a set of signals more general than the complex exponentials, wich are also eigenfunctions of LTI systems. $$z = re&#94;{j\\Omega}$$ r: the magnitude of the complex number \\(\\Omega\\) : the angle of the complex number Eigenfunctions definition : An eigenfunction is a function for which the output of the operator is the same function, scaled by some constant. We can prove that z is a eigenfunction of LTI system by: $$ \\sum_{k=-\\infty}&#94;{+\\infty} x[k]z&#94;{n-k} = \\sum_{k=-\\infty}&#94;{+\\infty} x[k]z&#94;n z&#94;{-k} = z&#94;n \\sum_{k=-\\infty}&#94;{+\\infty} x[k]z&#94;{-k} = z&#94;n \\cdot H(z) $$ So \\(z&#94;n\\) is an eigenfunction of an LTI system because the system response is the same as the input times the constant \\(H(z)\\) . z-transform definition : $$ \\text{H}(z) = \\sum_{n=-\\infty}&#94;{+\\infty} x[n]z&#94;{-n} $$ The relations between the fourier transform and the z-transform The Z transform has a very close relation to the Fourier Transform. If we compare the fourier transform for a sequence and the z-transform for the same sequence, we can see that: $$ X(z)\\bigg\\rvert_{z=e&#94;{j\\Omega}} = \\mathscr{F}\\{x[n]\\} $$ Therefore, for \\(r=1\\) the z-transform corresponds to the fourier transform. The z-transform for other values of z (other than \\( e&#94;{j\\Omega}\\) ) is equal to the fourier transform of the same sequence multiplied by \\(r&#94;{-n}\\) : $$ X(re&#94;{j\\Omega}) = \\sum_{n=-\\infty}&#94;{+\\infty} x[n](re&#94;{j\\Omega})&#94;{-n} = \\sum_{n=-\\infty}&#94;{+\\infty} x[n]r&#94;{-n}e&#94;{-j\\Omega n} $$ $$ X(z) = \\mathscr{F}\\{x[n]r&#94;{-n}\\} $$ For \\(r>1\\) : \\(r&#94;{-n}\\) decreases exponentially as n increases. For \\(r<1\\) : \\(r&#94;{-n}\\) increases exponentially as n increases. if (!document.getElementById('mathjaxscript_pelican_#%@#$@#')) { var align = \"center\", indent = \"0em\", linebreak = \"false\"; if (false) { align = (screen.width < 768) ? \"left\" : align; indent = (screen.width < 768) ? \"0em\" : indent; linebreak = (screen.width < 768) ? 'true' : linebreak; } var mathjaxscript = document.createElement('script'); mathjaxscript.id = 'mathjaxscript_pelican_#%@#$@#'; mathjaxscript.type = 'text/javascript'; mathjaxscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/latest.js?config=TeX-AMS-MML_HTMLorMML'; var configscript = document.createElement('script'); configscript.type = 'text/x-mathjax-config'; configscript[(window.opera ? \"innerHTML\" : \"text\")] = \"MathJax.Hub.Config({\" + \" config: ['MMLorHTML.js'],\" + \" TeX: { extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js'], equationNumbers: { autoNumber: 'none' } },\" + \" jax: ['input/TeX','input/MathML','output/HTML-CSS'],\" + \" extensions: ['tex2jax.js','mml2jax.js','MathMenu.js','MathZoom.js'],\" + \" displayAlign: '\"+ align +\"',\" + \" displayIndent: '\"+ indent +\"',\" + \" showMathMenu: true,\" + \" messageStyle: 'normal',\" + \" tex2jax: { \" + \" inlineMath: [ ['\\\\\\\\(','\\\\\\\\)'] ], \" + \" displayMath: [ ['$$','$$'] ],\" + \" processEscapes: true,\" + \" preview: 'TeX',\" + \" }, \" + \" 'HTML-CSS': { \" + \" availableFonts: ['STIX', 'TeX'],\" + \" preferredFont: 'STIX',\" + \" styles: { '.MathJax_Display, .MathJax .mo, .MathJax .mi, .MathJax .mn': {color: 'inherit ! important'} },\" + \" linebreaks: { automatic: \"+ linebreak +\", width: '90% container' },\" + \" }, \" + \"}); \" + \"if ('default' !== 'default') {\" + \"MathJax.Hub.Register.StartupHook('HTML-CSS Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax['HTML-CSS'].FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"MathJax.Hub.Register.StartupHook('SVG Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax.SVG.FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"}\"; (document.body || document.getElementsByTagName('head')[0]).appendChild(configscript); (document.body || document.getElementsByTagName('head')[0]).appendChild(mathjaxscript); }","tags":"digital signal processing","url":"/z-transform.html","loc":"/z-transform.html"},{"title":"Expected Value and Variance","text":"Expected value The expected value of a random variable \\(X\\) is defined as: $$E[X]=\\sum_{i=1}&#94;{k} p_i\\cdot x_i$$ where \\(p_i\\) is the probability of \\(x_i\\) occurring, and k the number o possible values for the variable \\(X\\) . Interpretations : - Center of gravity of PMF - Average in large number of repetitions of the experiment. Properties : \\(E[\\alpha] = \\alpha\\) \\(E[\\alpha X] = \\alpha E[X]\\) \\(E[\\alpha X + \\beta] = \\alpha E[x] + E[\\beta]\\) Variance The variance of a random variable can be expressed in terms of the expected value: $$var(X) = E[(X-E[X])&#94;2]$$ $$= \\sum_x (x-E[X])&#94;2p_X(x)$$ $$=E[X&#94;2]-(E[X])&#94;2 $$ Properties : \\(var(X)\\geq0\\) \\(var(\\alpha X +\\beta) = \\alpha&#94;2 var(X)\\) : Adding a constant to a random variable does not affect its variance. if (!document.getElementById('mathjaxscript_pelican_#%@#$@#')) { var align = \"center\", indent = \"0em\", linebreak = \"false\"; if (false) { align = (screen.width < 768) ? \"left\" : align; indent = (screen.width < 768) ? \"0em\" : indent; linebreak = (screen.width < 768) ? 'true' : linebreak; } var mathjaxscript = document.createElement('script'); mathjaxscript.id = 'mathjaxscript_pelican_#%@#$@#'; mathjaxscript.type = 'text/javascript'; mathjaxscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/latest.js?config=TeX-AMS-MML_HTMLorMML'; var configscript = document.createElement('script'); configscript.type = 'text/x-mathjax-config'; configscript[(window.opera ? \"innerHTML\" : \"text\")] = \"MathJax.Hub.Config({\" + \" config: ['MMLorHTML.js'],\" + \" TeX: { extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js'], equationNumbers: { autoNumber: 'none' } },\" + \" jax: ['input/TeX','input/MathML','output/HTML-CSS'],\" + \" extensions: ['tex2jax.js','mml2jax.js','MathMenu.js','MathZoom.js'],\" + \" displayAlign: '\"+ align +\"',\" + \" displayIndent: '\"+ indent +\"',\" + \" showMathMenu: true,\" + \" messageStyle: 'normal',\" + \" tex2jax: { \" + \" inlineMath: [ ['\\\\\\\\(','\\\\\\\\)'] ], \" + \" displayMath: [ ['$$','$$'] ],\" + \" processEscapes: true,\" + \" preview: 'TeX',\" + \" }, \" + \" 'HTML-CSS': { \" + \" availableFonts: ['STIX', 'TeX'],\" + \" preferredFont: 'STIX',\" + \" styles: { '.MathJax_Display, .MathJax .mo, .MathJax .mi, .MathJax .mn': {color: 'inherit ! important'} },\" + \" linebreaks: { automatic: \"+ linebreak +\", width: '90% container' },\" + \" }, \" + \"}); \" + \"if ('default' !== 'default') {\" + \"MathJax.Hub.Register.StartupHook('HTML-CSS Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax['HTML-CSS'].FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"MathJax.Hub.Register.StartupHook('SVG Jax Ready',function () {\" + \"var VARIANT = MathJax.OutputJax.SVG.FONTDATA.VARIANT;\" + \"VARIANT['normal'].fonts.unshift('MathJax_default');\" + \"VARIANT['bold'].fonts.unshift('MathJax_default-bold');\" + \"VARIANT['italic'].fonts.unshift('MathJax_default-italic');\" + \"VARIANT['-tex-mathit'].fonts.unshift('MathJax_default-italic');\" + \"});\" + \"}\"; (document.body || document.getElementsByTagName('head')[0]).appendChild(configscript); (document.body || document.getElementsByTagName('head')[0]).appendChild(mathjaxscript); }","tags":"digital signal processing","url":"/expected-value-variance.html","loc":"/expected-value-variance.html"},{"title":"Writing mathematical expressions in Matplotlib","text":"It is possible to render LaTeX in matplotlib titles, legends and labels. You just need to surround the math text with dollar signs ($) and use raw strings (precede the quotes with an 'r'). Example: # plain text plt . title ( 'alpha > pi/2' ) # math text plt . title ( r '$\\alpha > \\pi/2$' ) More details can be found here .","tags":"python","url":"/writing-mathematical-expressions-in-matplotlib.html","loc":"/writing-mathematical-expressions-in-matplotlib.html"}]};