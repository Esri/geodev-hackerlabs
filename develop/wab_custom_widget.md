### Web AppBuilder Custom Widget

In this lab you will create a custom widget and add a configurable widget to Web AppBuilder.

1. Click the widgets folder (e.g., webappbuilder\server\apps\1) for your existing application.

2. Download the SimpleGraphic.zip> unzip it and copy the folder to the widgets directory.

3. Click SimpleGraphic folder>click Widget.js, update the function definition and extend the BaseWidget class: 

function(declare, BaseWidget, SimpleMarkerSymbol, Graphic) {
  var clazz = declare([BaseWidget], {
    templateString: '<div><input type="button" value="click me to add a graphic!" data-dojo-attach-event="click:_addGraphic"></div>',

    _addGraphic: function(){
      var centerPoint = this.map.extent.getCenter();
      var symbol = SimpleMarkerSymbol();

      var myGraphic = new Graphic(centerPoint, symbol);
      this.map.graphics.add(myGraphic);
    }
  });