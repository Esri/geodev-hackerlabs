###Add Geolocation to an Esri Leaflet map

In this lab, you will add basic geolocation functionality to an Esri Leaflet application.

1. Open the [starter map](../starter_map/index.html) HTML and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Add a function to get the current geolocation position from the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation):

  > because of security rules introduced in Chrome 50 (on [4/20/2016](https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only)), it is mandatory to configure https in order to take advantage of HTML5 location when you move your website into production.

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

* [Code](index.html)
* [Live App](https://esri.github.io/geodev-hackerlabs/develop/leaflet/add_geolocation/index.html)

###Bonus
* Modify the app so that it follows along on a mobile device using [`Geolocation.watchPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).
