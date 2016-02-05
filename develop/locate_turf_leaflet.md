# Use HTML5 location, esri leaflet and turf to query a feature service

In this lab we'll write a [Leaflet](https://leafletjs.com) application that uses [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) to glean a user's location and then take advantage of Turf to figure out what census block they happen to be inside.

> ### 1. First, lets get our [development environment](setup_dev_env.md) set up.

For this exercise, we'll use the complete example from the conclusion of our [starter map](build_starter_map_leaflet.md) exercise as our jumping off point.

![step-1](./html5_query_step_1_leaflet.png)

> ### 2. Next we need to ask our end user where they are.

Use Leaflet's built in [method](http://leafletjs.com/reference.html#map-set-methods) to ask the user to share their location and make sure to get a reference to it [once it's available](http://leafletjs.com/reference.html#map-events).

![step-2](./html5_query_step_2.png)

> ### 3. Lets add census blocks to the map too (but not draw them *yet*).

Add [US Census Block Groups](http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/1) to the map in a [`L.esri.featureLayer`](http://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html) and make sure the symbology is transparent (for now).

> ### 4. Use [turf](http://turfjs.org/) to see which census block the user is inside.

first, create a turf [`point`](http://turfjs.org/static/docs/module-turf_point.html) object and pass it the users location.

next, loop through the polygons in the map and compare each one with the user location to see which one its [`inside`](http://turfjs.org/static/docs/module-turf_inside.html) (protip:copyright:: you'll need a `<script>` tag in your app pointing at turf's [cdn](http://turfjs.org/) for this).

> ### 5. Now we just need to draw the one we got back and pan the map.

Last, lets refresh the symbology of the features in the map to make sure the match is displayed using [`featureLayer.setStyle()`](http://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html).

![step-4](./html5_query_step_4_leaflet.png)

In the end, hopefully your app will look *kinda, sorta* like [**this**](http://bl.ocks.org/jgravois/89a3781d01b2bf747cef).

---
### Resources

* [leaflet API reference](http://leafletjs.com/reference.html)
* [turf API reference](http://turfjs.org/static/docs/)
* [esri leaflet API reference](http://esri.github.io/esri-leaflet/api-reference/)
* [esri leaflet samples](http://esri.github.io/esri-leaflet/examples/)

### Bonus
> are you thirsty for more?

* add some custom styling to the census block thats drawn
* display a popup with information about the census block
* symbolize the actual user location on the map
* use [Geoenrichment](https://developers.arcgis.com/en/features/geo-enrichment/) to query/display the total population of the census block
