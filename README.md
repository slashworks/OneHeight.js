OneHeight.js
============

A Javascript height equalizer. Every OneHeight call autocreates a new instance of OneHeight. So it`s possible to handle different instances. OneHeight also checks if there is a box-sizing border-box item or not.

## Arguments:

* @param querySelector to define parent wrapper | {String}
* @param (Optional) querySelector to find childs in parent wrapper | {String}

## Methods:

### setHeight
Sets the height of an instance.

### removeHeight
Removes the height of an instance.

## Example Usage:

### Height by wrapper

Keep in mind that your wrapper must completly wrap the child elements. If one of the childs are using float: left the wrapper becomes height: 0 because he has to float, too. To fix this problem, add an overflow: hidden to the wrapper.

```javascript
	window.addEventListener('DOMContentLoaded', function() {
            
       OneHeight('.boxwrapper');
            
    })
```

### Height by highest child

```javascript
	window.addEventListener('DOMContentLoaded', function() {
            
       OneHeight('.boxwrapper', '.box');
            
    })
```
