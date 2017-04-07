# jquery-take-a-tour


## HTML Code
```html
<div class="section tour-point" 
data-index="0" 
data-title="Page contents" 
data-desc="page contents here. A list of all the html tags and details">
some content</div>
```

#### HTML Code details
##### data-index: 
> > Index of the Tour Point. Tour modal will follow the sequence of it

> * ##### data-title: 
> Title text of the modal for the tour point

> * ##### data-desc: 
> Description text for the modal for the tour point

## JS Initialization
```javascript
$("#start-tour-button").takeTour({
        topOffset: 70,
        leftOffset: 30
    });
```

#### JS Plugin Options
##### overlay: 
jQuery selector for the _Overlay_ DOM element

##### tourBox: 
jQuery selector for the _Tour Modal_ DOM element

##### tourPoints: 
jQuery selector for the _Tour Points_ DOM element

##### buttons.close: 
jQuery selector for the _Tour Modal close_ DOM element

##### buttons.next: 
jQuery selector for the _Tour Modal Next Button_ DOM element

##### activeClass: 
CSS class name for the active tour point

##### topOffset: 
Top Offset value for the modal to be appeared from the tour point

##### leftOffset: 
Left Offset value for the modal to be appeared from the tour point

##### fadeSpeed: 
Fade Speed for the tour modal (at the time of start/end tour)
