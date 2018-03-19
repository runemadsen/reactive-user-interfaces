# Week 8

## Monday

### Midterm Feedback

I am really proud of the progress you all made in the first 6 weeks of this class. You have been coding React for only 5 weeks, and you all managed to make a functional UI that demonstrated the basic React functionality that we have learned so far.

In this class, I will highlight some of the recurring themes that popped up in most of your user interfaces, and how I would have solved it differently. This feedback will be both visual and technical, but will mostly focus on key relationships in your graphic layout:

* **Position**. Does the position of your elements make sense from the user's point of view? Are you _aligning_ your elements so the user can make sense of the layout? Do you have proper _whitespace_ to make it easier to quickly get a sense of the layout?

* **Size**. Are your elements sized correctly? Are the most important items larger than less important items?

* **Color**. Do you use color contrast to clarify the layout and distinguish groups of elements from others? Do you cut down on unnecessary use of color that distracts the user?

* **Typography**. Do you use different type style to signal differences between data points? Do you keep the amount of different typefaces to a minimum?

All in all, this boils down to whether your user interface signals the _intent_ of the elements by using the variables above. The first step towards a good interface is to think of these variables as functional rather than aesthetic. Now, let's take a look at some of your user interfaces and what I would change.

#### Example 1

[BEFORE](images/example1_before.png) / [AFTER](images/example1_after.png)

* Gray background takes less focus that green gradient. Background is not an important element.
* Images are made larger because they are most important concept.
* This also cleans up whitespace
* Green is now used to distinguish main image panel with search bar. Black name bars make this more apparent.
* Border-radius is used on entire contact element to unify the name and picture. Before it separated the name and picture.

#### Example 2

[BEFORE](images/example2_before.png) / [AFTER](images/example2_after.png)

* Unify use of color and type across the UI: All names are pink, labels are same size and color, etc.
* Tag now looks like a tag
* Use font color for same typeface rather than different typefaces.
* Use color to differentiate buttons with headings
* Clean up whitespace on search image

#### More Examples

* [Intent of search box is unclear](images/another_example1.png)
* [Too many typefaces](images/another_example2.png)
* [Intent of icons unclear](images/another_example3.png)
* ["Add Contact" box size and position problems](images/another_example4.png)
