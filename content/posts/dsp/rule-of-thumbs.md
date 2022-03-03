Title: Rule of thumbs
Date: 2022-03-03 19:00
Modified: 2022-03-03 19:00
Category: digital signal processing
Tags: dsp
Slug: rule-of-thumbs
Authors: Eric Macedo

Having a way of obtaining quick estimates for some design parameter is very useful in engineering, especially during the early stages of a project/design. These estimates help you make quick design decision and adjust your design if your estimate indicates that a certain direction is too risky or will cost too much. 

I often hear these quick estimates being called **Rule of thumbs**. For example:

- If I decide to rent my property in Edinburgh/UK, how much should I ask for rent?

We can create a rule of thumbs for that! Let's say we have the following information about Edinburgh, UK:

- The average property value in Edinburgh is £303,416
- Average rent per calendar month is £1,191 (or 14,292 per year)

From this, we can create the following rule of thumbs: 
$$
\frac{£14,292}{£303,416}\cdot 100 = 4.71\% 
$$
Therefore, on average, the annual rent value is 4.7% of the property value. We can then say that a rule of thumb is to ask for approximately 5% of your property value (per year).

Let us apply this rule. If your property is worth £200,000 pounds, an average rent value to ask per month would be (4.71% of £200,000)/12 = £785. You can then start with this value as a reference and adjust it as you get more information and progresses with your plan of renting the house. 

## Number of FIR taps

Now, let’s say you are in the middle of a design meeting, and you want to know quickly if you could use a FIR filter in your data path to solve your problem. The key question is:

- How many taps will the FIR filter need to meet the specification?

When I was reading Richard Lyons book (Understanding Digital Signal Processing), I came across the following quick estimate formula for the number of taps of a FIR filter:
$$
N_{firtaps} \approx \frac{Atten}{22(f_{stop}-f_{pass})}
$$
Where:

- Atten is the attenuation in the stopband measured in dB
- Fstop and Fpass: Stopband and Passband frequencies normalised to the sample rate.

From this equation, given the specs, you can check very quickly if a FIR filter could be used or if you need to look for alternatives (if the number of taps is too high!).
