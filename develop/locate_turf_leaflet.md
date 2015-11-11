# Use HTML5 location, esri leaflet and turf to query a feature service

In this lab we'll write a [Leaflet](https://leafletjs.com) application that uses [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) to glean a user's location and display the census block they happen to be inside.

> ### 1. First lets get our development environment set up.

Copy the example from our [starter map exercise](build_starter_map_leaflet.md) into a new `.html` file on your own machine and open it via `http://` protocol in your browser. (somewhere like http://0.0.0.0/myveryownmap.html)

> Do you have a local web server running?<br>
> If not, you can find information about setting one up [**here**](https://gist.github.com/jgravois/5e73b56fa7756fd00b89).

![step-1](./html5_query_step_1_leaflet.png)

> ### 2. Next we need to ask our end user where they are.

Use Leaflet's built in [method](http://leafletjs.com/reference.html#map-set-methods) to ask the user to share their location and make sure to get a reference to it [once it's available](http://leafletjs.com/reference.html#map-events).

![step-2](./html5_query_step_2.png)

> ### 3. Lets add census blocks to the map too (but not draw them *yet*).

Add [US Census Block Groups](http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/1) to the map in a [`L.esri.Layers.featureLayer`](http://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html) and make sure the symbology is transparent (for now).

> ### 4. Use [turf](http://turfjs.org/) to see which census block the user is inside.

first, create a turf [`point`](http://turfjs.org/static/docs/module-turf_point.html) object and pass it the users location.

next, loop through the polygons in the map and compare each one with the user location to see which one its [`inside`](http://turfjs.org/static/docs/module-turf_inside.html) (protip:copyright:: you'll need a `<script>` tag in your app pointing at turf's [cdn](http://turfjs.org/) for this).

> ### 5. Now we just need to draw the one we got back and pan the map.

Last, lets refresh the symbology of the features in the map to make sure the match is displayed [`feautreLayer.set()`](http://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html).

![step-4](./html5_query_step_4_leaflet.png)

In the end, hopefully your app will look *kinda, sorta* like:

> ##### [**this**](http://bl.ocks.org/jgravois/89a3781d01b2bf747cef)

---
### Resources

* [leaflet API reference](http://leafletjs.com/reference.html)
* [turf API reference](http://turfjs.org/static/docs/)
* [esri leaflet API reference](http://esri.github.io/esri-leaflet/api-reference/)
* [esri leaflet samples](http://esri.github.io/esri-leaflet/examples/)

### Extras
> are you thirsty for more?

* add some custom styling to the census block thats drawn
* display a popup with its ID when someone clicks on it
* symbolize the actual user location
* use [Geoenrichment](https://developers.arcgis.com/en/features/geo-enrichment/) and display the total population of the census block
