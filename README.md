# geodev-hackerlabs

A place to learn how to build geo apps with ArcGIS.

## Welcome

Welcome to the Geodev Hackerlabs. This respository contains short labs that step you through the process of developing applications with [ArcGIS](http://www.arcgis.com). This process focuses mostly on using online accounts and services and does not require the installation or use of desktop software for most labs.

The process generally involves three steps and the labs are broken down into the following sections:

1. Data - prepare data for your apps with [ArcGIS Online](http://www.arcgis.com)
2. Design - style layers and maps for your apps [ArcGIS Online Map and Scene Viewer](http://www.arcgis.com)
3. Develop - consume layers and maps in your apps [ArcGIS Templates, Builders and APIs](http://developers.arcgis.com)

![Process](./arcgis-process.png)

## Getting Started

Here's how to get started:

1. **Sign up for a free [ArcGIS Developer subscription](https://developers.arcgis.com/en/sign-up/)** - With the subscription you can download software, register apps, import data, create new services, store maps and other content, perform spatial analysis and more. If you have an ArcGIS Organizational account, you can use that as well, but please note that [Free public accounts](https://geonet.esri.com/groups/geodev/blog/2014/10/15/help-i-cant-get-into-developersarcgiscom) cannot be used.

2. **Start the labs** - The labs are divided into three sections that you can complete at your own pace. You can follow them in order or just choose the ones you want to complete. You can use the data we provide or use your own. If you want to code, dig into APIs and SDKs from Esri and compatible open source libraries. If not, you can still build highly customized production-ready apps using Esri's templates and builders. You might also find it helpful to follow along with the [Hackerlab Slides](http://slides.com/alaframboise/geodev-hackerlabs).  

3. **Share your work** - This is 100% optional, but as you are going through, feel free to [share your work](#want-to-share-your-work) with others participants!

## Resources
If you're brand new to ArcGIS, we recommend that you use your **new developer account** to sign into to [ArcGIS.com](https://www.arcgis.com) to learn how to [make your first map](http://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-map.htm), and [developers.arcgis.com](http://developers.arcgis.com) to learn how to manage apps. Here are a few important links:

* [ArcGIS for Developers](http://developers.arcgis.com)
* [ArcGIS Online Maps and Apps](http://arcgis.com)
* [ArcGIS Online Help](http://doc.arcgis.com/en/arcgis-online/)
* [Esri Open Source Projects](http://esri.github.io)

## Labs

To get started, feel free to follow along with the [Hackerlab Slides](http://slides.com/alaframboise/geodev-hackerlabs) or just jump in and get started. The labs use three open datasets from the City of Portland: 1) Rail Stops, 2) Rail Lines, and 3) Neighboorhoods, but feel free to use your own data too.

The goal is to build a Portland Neighborhoods explorer app.

![Steps](./geodev-hackerlabs-apps.png)

### 1. Data

These labs show you how to use ArcGIS Online to manage all of your data in the cloud. All maps, layers and services referred to as `items`. All items contain metadata. With ArcGIS Online you can import datasets, share them, explore the REST API, enrich your data with social-economic information, perform spatial analyses and much, much more.

* [Import Data](./data/import_data.md)
* [Create and Edit Data](./data/create_and_edit_data.md)
* [Share Data](./data/share_data.md)
* [View via REST](./data/view_via_rest.md)
* [View in a Map](./data/view_in_a_map.md)
* [GeoEnrich Data](./data/geoenrich_data.md)
* [Create Buffers](/data/create_buffers.md)
* [Create Walk Areas](./data/create_walk_areas.md)
* [Filter Data](/data/filter_data.md)
* [Create Authenticated Traffic Layer](./data/create_authenticated_traffic_layer.md)
* [CODE: Add a layer to an app](./develop/add_feature_layer_jsapi.md)

### 2. Design

These labs illustrate how to use the Map viewer to create and style web maps. You can create new maps, select different basemaps, search for layers, use smart mapping to change symbol styles, style popups, label data, show/hide fields, filter data, save layers, create new layers and more. Creating a web map with great cartography is important as it serves as the foundation for building better mapping applications.

* [Create a New Map](./design/create_a_new_map.md)
* [Style a Map](./design/style_a_map.md)
* [Style Popups](./design/style_popups.md)
* [Smart Mapping - Proportional Styling](./design/smart_mapping_proportional.md)
* [Save a Layer](./design/save_a_layer.md)
* [Vector Basemaps](./design/vector_basemaps.md)
* [Customize Vector Basemap](./design/customize_vector_map.md)
* [Create a new 3D Scene](./design/create_a_new_3d_scene.md)
* [CODE: Add a styled layer to an app - Bonus](./develop/add_feature_layer_jsapi.md)
* [CODE: Style a layer with JSON](./develop/style_feature_layers_json_jsapi.md)

### 3. Develop

These labs illustrate how to use ArcGIS app builders, templates and APIs to build custom mapping apps. You can use your web maps with the Web AppBuilder to create an HTML5 responsive app or AppStudio to build and deploy a native app for iOS and Android. Or you can just build a custom app from the ground up with the ArcGIS JS API, Esri-Leaflet or the ArcGIS Runtime APIs.

* Web Map Apps
 * [Create a Template App](./develop/create_a_template_app.md)
 * [Create a Web AppBuilder App](./develop/create_a_wab_app.md)
 * [Create a Web Map JS API App](./develop/create_a_web_map_app.md)
 * [Create an AppStudio App](./develop/create_an_appstudio_app.md)

* JS API
 * [Build a Starter Map](./develop/build_starter_map_jsapi.md)
 * [Add Feature Layer](./develop/add_feature_layer_jsapi.md)
 * [Add Feature Layers](./develop/add_feature_layers_jsapi.md)
 * [Add Vector Tile Basemap](./develop/add_vector_tile_basemap_jsapi.md)
 * [Style Feature Layers](./develop/style_feature_layers_jsapi.md)
 * [Style Feature Layers with JSON](./develop/style_feature_layers_json_jsapi.md)
 * [Add GeoJSON Layer](./develop/add_geojson_layer_jsapi.md)
 * [Simple Search](./develop/simple_search_jsapi.md)
 * [Feature Layer Search](./develop/feature_layer_search_jsapi.md)
 * [Client-side Buffering](./develop/geometry_engine_buffer_jsapi.md)
 * [Smart Mapping](./develop/smartmapping_color_renderer_jsapi.md)
 * [Using HTML5 to Query](./develop/html5_query.md)

* JS API 4 Beta 3
 * [Build a Starter 3D Map](./develop/build_starter_3Dmap_jsapi4b3.md)

* Esri-Leaflet
 * [Build a Starter Map](./develop/build_starter_map_leaflet.md)
 * [Add Feature Layers](./develop/add_feature_layers_leaflet.md)
 * [GeoEnrich address searches](./develop/enrich_address_search_leaflet.md)
 * [Add Geolocation](./develop/add_geolocation_leaflet.md)
 * [Use Geolocation to Query](./develop/locate_query_leaflet.md)
 * [Use Geolocation (and turf) to Query](./develop/locate_turf_leaflet.md)

* Bootstrap
 * [Build a Starter Bootstrap Map](./develop/build_starter_map_bootstrap.md)
 * [Add Navbar and Menu](./develop/add_navbar_menu_bootstrap.md)

* Web AppBuilder Developer Edition
 * [Setup Development Environment](./develop/wab_ide_install.md)
 * [Add a Custom Widget](./develop/wab_custom_widget.md)
 * [Add a Custom Configurable Widget](./develop/wab_config_widget.md)
 * [Deploy to ArcGIS Online](./develop/wab_deploy.md)

## Want to share your work?

1. Login to [ArcGIS Online](http://arcgis.com).
 * Search for `Geodev Hackerlabs Share` > `Search Groups`.
 * Uncheck `Only search in my account/organization`.
 * Join the group.
 * Share your own items.

## Want to help?

1. [Sign up](https://github.com/join) for a GitHub account (if you don't already have one).
2. Let us know what works for you and what doesn't in [an issue](https://github.com/Esri/geodev-hackerlabs/issues/new)
3. If you're already savvy with [git](https://git-scm.com/) (or want an excuse to start learning), feel free to fork the repo and send us a pull request!  There is lots on the web to help you get started, but we especially like the stuff [here](https://guides.github.com/).

## Data and Terms of Use

Please see [www.civicapps.org](http://www.civicapps.org/), [developer.trimet.org/gis](developer.trimet.org/gis) and [http://www.portlandoregon.gov/bts](http://www.portlandoregon.gov/bts) for the data terms of use.

## Licensing
Copyright 2015 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./license.txt) file.

[](Esri Tags: ArcGIS Web Mapping Leaflet AppBuilder Hackerlabs Labs JavaScript)
[](Esri Language: JavaScript)
