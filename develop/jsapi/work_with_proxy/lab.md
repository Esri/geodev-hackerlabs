### Working with proxy

This lab covers the basics for allowing public, _no-login-required_ access to secure ArcGIS Online services using a service proxy hosted on ArcGIS Online.

First we'll go thru the steps to designate a unique url to make requests to a premium service without passing a token. This ensures that the credit cost of routes calculated will be the responsibility of the account used to create the proxyied service.

1. Go to your ArcGIS Developers account, select [Dashboard](https://developers.arcgis.com/dashboard) and then select [Create New App](https://developers.arcgis.com/applications/#/new/).

2. Give your new application a title, fill in the appropriate tags and give it a description. When you are done click `Register New Application`.

3. Within the applications page select the `Authentication` tab at the top. Scroll down until you see the section titled `Configure New Service Proxy`.

4. Using the pulldown menu under `Service` select `route`. Then set `Request Limit` to `3` per second. Then click `Configure`.

5. Now copy the following code block to a new [jsbin.com](http://jsbin.com). We've created a few symbols that we'll use in just a minute. Note, we've also added a GraphicsLayer to the Map as a way to display a route once it's been created. 

  ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
      <title>Simple Routing - RouteTask - 4.3</title>
      <style>
        html,
        body,
        #viewDiv {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
        }
      </style>
    
      <link rel="stylesheet" href="https://js.arcgis.com/4.3/esri/css/main.css">
      <script src="https://js.arcgis.com/4.3/"></script>
    
      <script>
          require([
              "esri/Map",
              "esri/views/MapView",
              "esri/Graphic",
              "esri/layers/GraphicsLayer",
              "esri/tasks/RouteTask",
              "esri/tasks/support/RouteParameters",
              "esri/tasks/support/FeatureSet",
              "esri/symbols/SimpleMarkerSymbol",
              "esri/symbols/SimpleLineSymbol",
              "esri/Color",
              "dojo/on",
              "dojo/domReady!"
          ], function(
              Map, MapView, Graphic, GraphicsLayer, RouteTask, RouteParameters,
              FeatureSet, SimpleMarkerSymbol, SimpleLineSymbol, Color, on
          ) {
    
              // The stops and route result will be stored in this layer
              var routeLyr = new GraphicsLayer();
    
              // Define the symbology used to display the stops
              var stopSymbol = new SimpleMarkerSymbol({
                  style: "cross",
                  size: 15,
                  outline: { // autocasts as new SimpleLineSymbol()
                      width: 4
                  }
              });
    
              // Define the symbology used to display the route
              var routeSymbol = new SimpleLineSymbol({
                  color: [0, 0, 255, 0.5],
                  width: 5
              });
    
              var map = new Map({
                  basemap: "streets",
                  layers: [routeLyr] // Add the route GraphicsLayer to the map
              });
              var view = new MapView({
                  container: "viewDiv", 
                  map: map, 
                  center: [-117.195, 34.057],
                  zoom: 14
              });
    
    
          });
      </script>
    </head>
    <body>
        <div id="viewDiv"></div>
    </body>
    </html>    
    
  ```

6. Replace the `RouteTask.url` string in your jsbin app with the proxy url you created in Step 4. Also set up the `RouteParameters`, these provide configuration details for the `RouteTask`.

   ```javascript
    
      // Point the URL to a valid route service
      var routeTask = new RouteTask({
          url: "YOUR_NEW_SERVICE_PROXY_URL"
      });

      // Setup the route parameters
      var routeParams = new RouteParameters({
          stops: new FeatureSet(),
          outSpatialReference: { // autocasts as new SpatialReference()
              wkid: 3857
          }
      });    
        
   ```
        
7. Configure the MapView with a `click` listener. We'll use this to capture the route stops on the map. Once we have more than two stops then run the `RouteTask`.
    
    ```javascript

      // Adds a graphic when the user clicks the map. If 2 or more points exist, route is solved.
      on(view, "click", addStop);

      function addStop(event) {
          // Add a point at the location of the map click
          var stop = new Graphic({
              geometry: event.mapPoint,
              symbol: stopSymbol
          });
          routeLyr.add(stop);

          // Execute the route task if 2 or more stops are input
          routeParams.stops.features.push(stop);
          if (routeParams.stops.features.length >= 2) {
              routeTask.solve(routeParams).then(showRoute);
          }
      }

    ```

8. When the `RouteTask` has completed then display the results on the `routeLyr`.
 
    ```javascript
    
      // Adds the solved route to the map as a graphic
      function showRoute(data) {
          var routeResult = data.routeResults[0].route;
          routeResult.symbol = routeSymbol;
          routeLyr.add(routeResult);
      }

    ```
 
 Your app should look something like this:
  * [Code](index.html)
  * [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/work_with_proxy/index.html)
  
### Bonus
* Adjust the amount of direction information that is returned by tweaking the [`directionsOutputType`](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-RouteParameters.html#directionsOutputType) String.
