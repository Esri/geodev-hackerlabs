###Build a map with a vector tile layer
This lab covers the basics for creating a basic mapping application that consumes vector tiles. The map loads the map, centers and zooms in.

Vector tiles are significantly more powerful than static image caches. Each tile can store information about geometry, attributes and styles.

If you would like to read up on the details of how a vector tile layer works here is the [VectorTileLayer](https://developers.arcgis.com/javascript/jsapi/vectortilelayer-amd.html) doc.

1. Copy and paste the code below into a new [jsbin.com](http://jsbin.com).

  ```html 
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no"/>
    <title>VectorTileLayer sample</title>
    <link rel="stylesheet" href="https://js.arcgis.com/3.15/esri/css/esri.css">
    <style>
        html,
        body,
        #map {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
        }
    </style>
    <script src="https://js.arcgis.com/3.15/"></script>
    <script>
        require([
            "esri/map",
            "esri/layers/VectorTileLayer",
            "dojo/domReady!"
        ], function(Map, VectorTileLayer) {

            var map = new Map("map", {
                center: [2.3508, 48.8567], // longitude, latitude
                zoom: 10
            });

            //The URL referenced in the constructor may point to a style url JSON (as in this sample)
            //or directly to a vector tile service
            var vtlayer = new VectorTileLayer("https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json");
            map.addLayer(vtlayer);
        });
    </script>
</head>
<body>
<div id="map"></div>
</body>
</html>
 
   ```

2. The JSBin `Output` panel should show dark gray background with a light bluer road network overlayed on top.

###Extras

* Modify the opacity of the VectorTileLayer as an option in the constructor.
* Run the code locally on your machine. Eventually if your app gets larger you'll want to migrate it from JSBin to your desktop.