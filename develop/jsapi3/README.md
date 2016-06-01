## JS API v3.x

It is important to understand that the 4.0 JS API does not yet cover all the functionality of the 3.x JS API. You can see a high-level overview of the differences [here](https://developers.arcgis.com/javascript/latest/guide/choose-version/index.html) and a much more detailed comparison [here](https://developers.arcgis.com/javascript/latest/guide/functionality-matrix/index.html).

With the release of the 4.0 JS API, the 3.x Develop labs are being replaced where possible. But below are links to those labs should you prefer to focus on them instead.

 * [Build a Starter Map](./develop/jsapi3/create_starter_map/lab.md)
 * [Add Feature Layer](./develop/jsapi3/add_feature_layer/lab.md)
 * [Add Vector Tile Layer](./develop/jsapi3/add_vector_tile_layer/lab.md)
 * [Style Feature Layer](./develop/jsapi3/style_feature_layer/lab.md)
 * [Style Feature Layer with JSON](./develop/jsapi3/style_feature_layer_with_json/lab.md)
 * [Style a layer popup](./develop/jsapi3/style_simple_popup/lab.md)
 * [Add GeoJSON Layer](./develop/jsapi3/add_geojson_layer/lab.md)
 * [Search with a Widget](./develop/jsapi3/search_with_widget/lab.md)
 * [Search with a Query Task](./develop/jsapi3/search_with_query_task/lab.md)
 * [Client-side Buffering](./develop/jsapi3/fixed_buffer_with_geometry_engine/lab.md)
 * [Client-side Buffering with UI](./develop/jsapi3/buffer_with_geometry_engine/lab.md)
 * [Smart Mapping](./develop/jsapi3/style_feature_layer_with_smart_mapping/lab.md)
 * [Search with HTML5 Location](./develop/jsapi3/search_with_html5_location/lab.md)
 * [Create a JS API 3.x App](./develop/webmap_apps/create_jsapi3_app/lab.md)

### What's missing from the 4.0 JS API?

These are some key parts of the 3.x API still to come in the 4.x API. Here are a few:

* Full WebMap support. Some WebMaps will not display properly in the 4.0 API because they make use of [layer types that have not yet been implemented](https://developers.arcgis.com/javascript/latest/guide/functionality-matrix/index.html#layers). This does not affect the WebMaps created in the Hackerlabs.
* Editing and Sketching
* Printing
* Time-based layers

Find out more [here](https://developers.arcgis.com/javascript/latest/guide/choose-version/index.html).

### What can 4.0 do that 3.x cannot?

* 3D
* Tight integration with ArcGIS Online and Portal.

However, there are additional benefits to using 4.0 as a developer

* Better consistency in the API.
* Modern coding patterns.
* Autocasting (which can simplify your `require` statements).
* Watch any object's property and have your app react to changes.
* Better widget styling options.
* Better compatibility with other JS frameworks.
* Maps and their display are separated (you use a MapView or a SceneView to display a Map).
* Widgets and their UI are separated.

### Should I use 4.x or 3.x in the "Real World"?

That depends.

If you're starting on a new project and the 4.x API does everything you need, use the 4.x API.

3.x will still be supported for some years, so you don't need to feel compelled to upgrade existing apps to 4.x yet.

3D support is not designed for mobile devices. Most mobile devices do not yet have good enough support for WebGL so while you might get a map displayed and working, it's likely that it won't perform well and that many of your users will have a bad experience. Moden desktop browsers generally have good support for 3D, but be aware of how modern a browser your user has access to.
