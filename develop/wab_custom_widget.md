### Web AppBuilder Custom Widget

In this lab you will create a custom widget for Web AppBuilder.

1. Click the widgets folder (e.g., webappbuilder\server\apps\1) for your existing application.

2. [Download Simple Graphic zip] (wab/SimpleGraphic.zip?raw=true) unzip it and copy the folder to the widgets directory.

3. Click SimpleGraphic folder>click Widget.js, update the function definition and extend the BaseWidget class: 
 ```javascript
function(declare, BaseWidget, SimpleMarkerSymbol, Graphic) {
  var clazz = declare([BaseWidget], {
    templateString: '<div><input type="button" value="click me to add a graphic!" data-dojo-attach-event="click:_addGraphic"></div>',
	//Add a point at center of extent
    _addGraphic: function(){
      var centerPoint = this.map.extent.getCenter();
      var symbol = SimpleMarkerSymbol();

      var myGraphic = new Graphic(centerPoint, symbol);
      this.map.graphics.add(myGraphic);
    }
  });

  		
  ```
  
4. Click the config.json file associated with the application and add the uri
  to include the widget. You could simply replace the Scalebar widget with the JSON below. 
  ```json
  {
  "uri": "widgets/SimpleGraphic/Widget",
        "position": {
          "left": 55,
          "top": 45,
          "width": 250,
          "height": 210
   },
  ```
 
5. Now launch your application and your new widget appears. If not, do any errors appear in the developer tools?

 ![simple-graphic](./simple-graphic.PNG)
