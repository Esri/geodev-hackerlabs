### Web AppBuilder Custom Widget

In this lab you will create a custom widget for Web AppBuilder.

1. Create a new app in Web App Builder. Give it a title Portland Neighborhoods WAB App and click Ok.

2. Click Map and choose Web Map. Select public and search for Portland Bike Map. Select OK and click save.

3. Click the widgets folder (e.g., webappbuilder\server\apps\1) for the application you just created.

4. [Download Simple Graphic zip] (wab/SimpleGraphic.zip?raw=true) unzip it and copy the folder to the widgets directory.

5. Click SimpleGraphic folder>click Widget.js, update the function definition and extend the BaseWidget class: 
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
6. Click the config.json file associated with the application and add the uri
  to include the widget on line 72.
  
  ```json
  {
  "uri": "widgets/SimpleGraphic/Widget",
    "position": {
      "left": 55,
      "top": 45,
      "width": 250,
      "height": 210
    }
  }
  ```
 
7. Now launch your application and your new widget appears. If not, do any errors appear in the developer tools?

 ![simple-graphic](./simple-graphic.PNG)
