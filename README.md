OneHeight.js
============

A Javascript height equalizer

## Arguments:

@param querySelector to define parent wrapper | {String}
@param (Optional) querySelector to find childs in parent wrapper | {String}

## Methods:

### setHeight
Sets the height of an instance.

### removeHeight
Removes the height of an instance.

## Example Usage:

### Height by wrapper

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