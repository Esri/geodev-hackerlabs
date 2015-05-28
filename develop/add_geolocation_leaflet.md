###Add Geolocation with Esri Leaflet

In this lab, you will add basic geolocation functionality to an Esri Leaflet application.

1. Click [starter_map_leaflet.html](src/starter_map_leaflet.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Add a function to get the current geolocation position from the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation):

  ```javascript
  
      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              alert("Geolocation is not supported by this browser.");
          }
      }
  
  ```
  
3. Add a function to pan and zoom the map to the coordinates we get back from [`getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition):

  ```javascript
  
      function showPosition(position) {
          map.setView([position.coords.latitude, position.coords.longitude], 14);
      }
  
  ```
  
4. Now let's tie it all together and have the geolocation function run every time the app loads:

  ```javascript
  
    getLocation();
  
  ```
  
Your app should run like this one:
* [Code](src/add_geolocation_leaflet.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/add_geolocation_leaflet.html)

###Extras
* Modify the app so that it follows along on a mobile device using [`Geolocation.watchPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).