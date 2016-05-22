define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  'esri/symbols/SimpleMarkerSymbol',
  "esri/graphic"
],
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
//insert code above
  clazz.hasStyle = false;
  clazz.hasUIFile = false;
  clazz.hasLocale = false;
  clazz.hasConfig = false;
  return clazz;
});