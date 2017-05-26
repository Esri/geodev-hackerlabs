### Build an Esri-leaflet Starter App

This lab covers the basics for creating a basic starter Esri-Leaflet mapping application.
The starter map simply loads a default base map, centers and zooms it in.
If you are new to Esri-Leafet you can get the examples and API documentation [here](http://esri.github.io/esri-leaflet/examples/).

### Steps

1. Copy and paste the code below into [jsbin.com](http://jsbin.com). You can also click [here](index.html).

    ```html
    <html>
    <head>
      <meta charset=utf-8 />
      <title>Esri-Leaflet Starter App</title>
      <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />

      <!-- Load Leaflet from CDN-->
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.0.0/dist/leaflet-src.js"></script>

      <!-- Load Esri Leaflet from CDN -->
      <script src="https://unpkg.com/esri-leaflet@2.0.3"></script>

      <style>
        body {margin:0;padding:0;}
        #map {position: absolute;top:0;bottom:0;right:0;left:0;}
      </style>
    </head>
    <body>

    <div id="map"></div>

    <script type='text/javascript'>
      var map = L.map('map').setView([45.533, -122.657], 12);
      L.esri.basemapLayer('DarkGray').addTo(map);
    </script>

    </body>
    </html>
    ```

2. Run the app and you should see a dark gray map centered on Portland, Oregon.

### Bonus

* Experiment with different basemaps such as [`Topographic`](http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html) or [`Gray`](http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html).
* Run the code locally on your machine. Eventually if your app gets larger you'll want to migrate it from JSBin to your desktop.
