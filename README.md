# jQuery Overflow Detector
This jQuery plugin can detect when a content overflow a block and return the overflow content.

## Installation

donwload the file to your project, and link after jquery
````html
<script type="text/javascript" src="overflow.jquery.js"></script>
````

##Usage
````javascript
$(function() {      
    $("#editor").overflow(function(overflowContent){
      console.log(overflowContent);
    });
````
### Version History

* **1.0.0** *2015-02-18*
    - First version
