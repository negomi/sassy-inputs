sassy-inputs
============

Flat, customisable CSS3 alternatives to radio buttons and checkboxes, built in Sass.

They won't interfere with the rest of your design - even the labels will be unstyled, or inherit from your existing CSS.

Getting started
------------
Grab either the [SCSS](https://raw.githubusercontent.com/negomi/sassy-inputs/master/sassy-inputs.scss) or [CSS](https://raw.githubusercontent.com/negomi/sassy-inputs/master/sassy-inputs.css) file and include it in your project. With CSS, the only difference is you won't get Sass variables to edit.

Make sure your `<input type="radio">` and `<input type="checkbox">` elements are written in this format, with the label after the input:

    <input type="radio" id="radio1" name="groupname" value="thisvalue">
    <label for="radio1">Radio button 1</label>

Sassy Inputs work by styling the label, so the order is important. Wrapping the input element between label tags won't work.

Now apply the class `sassy` to the radio button or checkbox elements you want to style. You can do this by adding it directly as a class on the element, but with Sass, I prefer to use `@extend .sassy` in the relevant places to keep it separate from my HTML.

Customisation
------------
The SCSS file includes the following variables:

    $sassy-fill-color: coral;
    $sassy-outer-color: #777;
    $sassy-display: inline-block;
    $sassy-fill-size-radio: 10px;
    $sassy-fill-size-check: 18px;
    $sassy-label-padding-left: 25px;
    $sassy-label-margin-right: 15px;

The defaults are quite plain but you can play around with colours, sizes etc. to get a different effect. If you're not using Sass, just edit the CSS directly. It's pretty small.

Browser support
------------
These work in [all browsers that support CSS3](http://caniuse.com/#search=checked) (specifically the `:checked` pseudo-class selector), but because the checkboxes use an HTML character for the content, these don't look the same across browsers.

If this visual consistency is important, you can use an image for the `content` property of the `:before` pseudo-element instead.
