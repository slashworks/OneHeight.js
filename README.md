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

Keep in mind that your wrapper must completly wraps the child elements. If one of the childs are uses float: left the wrapper becomes hight: 0 because he has to float, too. To fix this isse give the wrapper an overflow: hidden or simular overflow propertys.

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
