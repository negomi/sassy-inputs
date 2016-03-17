sassy-inputs
============
**Minimal CSS3 cross-browser form input styles.**

Sassy Inputs is a Sass mixin library designed to bring simple, uniform, unobtrusive styles to form input fields.

It aims to smooth out the differences in native form styling across browsers, by customizing input fields as much as is currently possible with pure CSS.

Sassy Inputs are customizable, fully keyboard operable, and include a disabled state.

## Running the project locally

In the project directory, run:

```
npm install
gulp
```

Then go to [http://localhost:3000/](http://localhost:3000/) in a browser.

## Getting started

### Using npm

```
npm install sassy-inputs --save
```

At the top of your Sass file, before you use any of the mixins:

```
@import "node_modules/sassy-inputs/sass/main";
```

### Using Bower

```
bower install sassy-inputs --save
```

At the top of your Sass file, before you use any of the mixins:

```
@import "bower_components/sassy-inputs/sass/main";
```

## Mixins

*   `sassy-text`
*   `sassy-textarea`
*   `sassy-search`
*   `sassy-select`
*   `sassy-select-multiple`
*   `sassy-radio`
*   `sassy-checkbox`
*   `sassy-button`

## Usage

### Text fields

You can use the `sassy-text` mixin for most HTML5 plain single-line text fields, including text, email, password, number and URL.

``` scss
input[type=text],
input[type=url],
input[type=email],
input[type=password],
input[type=number] {
  @include sassy-text;
}
```

#### Text area

``` scss
textarea {
  @include sassy-textarea;
}
```

#### Search

``` scss
textarea {
  @include sassy-search;
}
```

### Dropdowns

#### Select

For select dropdowns, you will need to put your `<select>` element in a wrapper, and apply the mixin to the wrapper instead:

``` html
<div class="select-wrap">
  <select>
    <option value="option">Option 1</option>
    <option value="option">Option 2</option>
    <option value="option">Option 3</option>
  </select>
</div>
```

``` scss
.select-wrap {
  @include sassy-select;
}
```

#### Multiple select

``` scss
select[multiple] {
  @include sassy-select-multiple;
}
```

### Radio buttons

Make sure your `<input type="radio">` elements are written in this format, with the label after the input:

``` html
<input type="radio" id="radio1" name="groupname" value="thisvalue">
<label for="radio1">Radio button 1</label>
```

``` scss
input[type=radio] {
  @include sassy-radio;
}
```

### Checkboxes

Make sure your `<input type="checkbox">` elements are written in this format, with the label after the input:

``` html
<input type="checkbox" id="check1" name="groupname" value="thisvalue">
<label for="check1">Checkbox 1</label>
```

``` scss
input[type=checkbox] {
  @include sassy-checkbox;
}
```

### Buttons

``` scss
input[type=submit],
input[type=button],
button {
  @include sassy-button;
}
```

## Customization

Sassy Inputs use the following default variables:

``` scss
$sassy-base-color: #777 !default;
$sassy-accent-color: coral !default;
$sassy-disabled-color: #eee !default;
```

To change a color, simply assign the variable before importing Sassy Inputs:

``` scss
$sassy-accent-color: rgb(233, 206, 51);
@import "node_modules/sassy-inputs/sass/main";
```
