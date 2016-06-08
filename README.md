# ArcGIS Geodev Hackerlabs

A place to learn how to build geo apps with the ArcGIS platform.

## Welcome

This repository contains short labs that step you through the process of developing applications with [ArcGIS](http://www.arcgis.com). The process described here uses [ArcGIS Online](http://www.arcgis.com) and [ArcGIS for Developers](http://developers.arcgis.com) accounts, tools and services, and does not require the installation of desktop software for most labs.

The process involves three steps:

1. Data - Prepare data for your apps with [ArcGIS Online](http://www.arcgis.com).
2. Design - Style maps and layers for your apps with the [ArcGIS Online Map and Scene Viewer](http://www.arcgis.com).
3. Develop - Use maps and layers in your apps with [ArcGIS templates, builders and APIs](http://developers.arcgis.com).

![Process](./arcgis-process.png)

## Getting Started

Here's how to get started:

1. **Sign up for a free** [ArcGIS Developer subscription](https://developers.arcgis.com/en/sign-up/) - Your subscription allows you to download software, register apps, import data, create new services, store maps, perform spatial analysis and more. If you already have an [ArcGIS Organizational subscription](http://www.arcgis.com/features/plans/pricing.html) (with at least publisher level permission) you can use that too. Please note that [free public accounts](https://geonet.esri.com/groups/geodev/blog/2014/10/15/help-i-cant-get-into-developersarcgiscom) and Organizational 'User' accounts will not work.

2. **Start the labs** - You can complete the labs in order or just pick and choose the ones you want to do. It will be easiest to use the data provided (Portland open data), but you feel free to substitute with your own data and augment the steps where necessary. The labs marked with an `*` are the minimum labs you need to complete to build your own custom app from ground zero.

3. **Share your work** - This is 100% optional, but as you are going through, feel free to share your work with others in this [ArcGIS Online Group](#want-to-share-your-work)!

## Resources

Here are the resources you will use for the labs.

* [ArcGIS for Developers - Account, Documentation, Samples, Apps, Downloads](http://developers.arcgis.com)
* [Esri Open Source Projects - More source code](http://esri.github.io)
* [ArcGIS Online Maps and Apps - Map Viewer, My Content, Item Management](http://arcgis.com)
* [ArcGIS Online Help - Documentation and Tutorials](http://doc.arcgis.com/en/arcgis-online/)
* [JS Bin - Interactive JS coding](http://jsbin.com)

> NOTE: If you are brand new to ArcGIS, we recommend that you use your developer account to sign into [developers.arcgis.com](http://developers.arcgis.com) to familiarize yourself with the site and then sign into [ArcGIS.com](https://www.arcgis.com) to learn how to [create your first map](http://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-map.htm).

## Labs

The labs start from ground-zero and work through the Data - Design - Develop process. In this case we use Portland open data, but feel free to use your own data to work through and build your own custom solutions. You might find it helpful to follow along with the [Hackerlab Slides](http://slides.com/alaframboise/geodev-hackerlabs).

NOTE: Labs marked with an `*` are the minimum required to build your own app from ground zero. The others are optional.

Let's get started!

![Steps](./geodev-hackerlabs-apps.png)

### 1. Data

Creating and importing data interactively is a fast and effective way to prepare data for both prototype and production app development.

In these labs you will import, create and manage data using the [ArcGIS Online](http://arcgis.com) and [ArcGIS for Developers](http://developers.arcgis.com) website and tools. You will also use the map viewer to perform data enrichment, the process of adding social demographic information to a dataset, and spatial analyses, the process of creating new data based on spatial critria. You will also explore the feature service REST endpoints and use them in a simple web app to access and display spatial data.

ArcGIS Online and Developer Tools
* [Import Data](./data/import_data/lab.md)*
* [Create and Edit Data](./data/create_and_edit_data/lab.md)
* [Share Data](./data/share_data/lab.md)
* [View via REST](./data/view_via_rest/lab.md)
* [View in a Map](./data/view_in_a_map/lab.md)
* [GeoEnrich Data](./data/geoenrich_data/lab.md)*
* [Create Buffers](/data/create_buffers/lab.md)
* [Create Walk Areas](./data/create_walk_areas/lab.md)
* [Extract Walkable Neighborhoods](./data/extract_walkable_neighborhoods/lab.md)
* [Filter Data](./data/filter_data/lab.md)
* [Create Authenticated Traffic Layer](./data/create_authenticated_traffic_layer/lab.md)

Code
* [Add a layer to an app](./develop/jsapi/add_feature_layer/lab.md)
* [GeometryEngine Buffering](./develop/jsapi/buffer_with_geometry_engine/lab.md)
 
### 2. Design

Creating web maps with great cartography is one of the most important steps to building effective mapping applications. Styling maps interactively can also be huge time-saver in app development.

In these labs you will use [ArcGIS Online](http://arcgis.com) and the map viewer to create and style web maps. You will create new maps, explore basemaps, search for layers, use smart mapping to change symbol styles, style popups, label data, show/hide fields, filter data, and more. You will also learn how to save web maps and featurelayers and use the JSON to achieve the same rich cartographic and popup experiences in your own custom apps.

ArcGIS Online Tools
* [Create a New Web Map](./design/create_a_new_map/lab.md)*
* [Style a Web Map](./design/style_a_map/lab.md)*
* [Style Popups](./design/style_popups/lab.md)*
* [Smart Mapping - Proportional Styling](./design/style_map_layers_with_smart_mapping/lab.md)
* [Copy and save a Layer](./design/save_a_layer/lab.md)
* [Vector Basemaps](./design/apply_vector_basemap/lab.md)
* [Customize Vector Basemap](./design/customize_vector_map/lab.md)
* [Create a new 3D Scene](./design/create_a_new_3d_scene/lab.md)

Code
* [Add a styled layer to an app - Bonus section](./develop/jsapi/add_feature_layer/lab.md)
* [Style a layer with JSON](./develop/jsapi/style_feature_layer_with_json/lab.md)
* [Style a layer popup](./develop/jsapi/style_simple_popup/lab.md)
* [Style a layer with a renderer](./develop/jsapi/style_feature_layer/lab.md)
* [Add a vector tiled layer](./develop/jsapi/add_vector_tile_layer/lab.md)

### 3. Develop

One of the easiest ways to build an ArcGIS map app is to start with a web map.

In these labs you will use the Configurable App Templates, the ArcGIS Web App Builder, and the APIs to build custom mapping apps. You will use the web maps with the Web AppBuilder to create an HTML5 responsive app or AppStudio to build and deploy a native app for iOS and Android. Or you can just build a custom app from the ground up with the ArcGIS JS API, Esri-Leaflet or the ArcGIS Runtime APIs.

* Web Map Apps
 * [Create a Configurable App](./develop/webmap_apps/create_configurable_app/lab.md)*
 * [Create a Web AppBuilder App](./develop/webmap_apps/create_web_appbuilder_app/lab.md)
 * [Create a JS API App](./develop/webmap_apps/create_jsapi_app/lab.md)
 * [Create a Esri Leaflet App](./develop/leaflet/add_feature_layer/lab.md)
 * [Create a Calcite Maps - Bootstrap App](./develop/webmap_apps/create_calcite_maps_app/lab.md)
 * [Create an AppStudio App](./develop/webmap_apps/create_appstudio_app/lab.md)

* JS API
 * [Build a Starter Map](./develop/jsapi/create_starter_map/lab.md)
 * [Build a Starter 3D Map](./develop/jsapi/create_starter_map_3d/lab.md)
 * [Add Feature Layer](./develop/jsapi/add_feature_layer/lab.md)
 * [Add Vector Tile Layer](./develop/jsapi/add_vector_tile_layer/lab.md)
 * [Style Feature Layer](./develop/jsapi/style_feature_layer/lab.md)
 * [Style Feature Layer with JSON](./develop/jsapi/style_feature_layer_with_json/lab.md)
 * [Extrude data as Polygons in 3D](./develop/jsapi/extrude_polygon_3d/lab.md)
 * [Style a layer popup](./develop/jsapi/style_simple_popup/lab.md)
 * [Search with a Widget](./develop/jsapi/search_with_widget/lab.md)
 * [Search with a Query Task](./develop/jsapi/search_with_query_task/lab.md)
 * [Client-side Buffering](./develop/jsapi/buffer_with_geometry_engine/lab.md)
 * [Client-side Buffering with UI](./develop/jsapi/buffer_with_geometry_engine_and_slider/lab.md)

The above labs all use the 4.x JS API. If you would rather learn about the 3.x JS API, check [here](./develop/jsapi3/README.md).

* Esri-Leaflet
 * [Build a Starter Map](./develop/leaflet/create_starter_map/lab.md)
 * [Add Feature Layers](./develop/leaflet/add_feature_layer/lab.md)
 * [GeoEnrich address searches](./develop/leaflet/enrich_address_search/lab.md)
 * [Add Geolocation](./develop/leaflet/add_geolocation/lab.md)
 * [Use Geolocation to Query](./develop/leaflet/query_with_html5_location/lab.md)
 * [Use Geolocation (and turf) to Query](./develop/leaflet/query_with_html5_location_turf/lab.md)

* Web AppBuilder Developer Edition
 * [Setup Development Environment](./develop/wab/install_developer_edition_locally/lab.md)
 * [Add a Custom Widget](./develop/wab/add_custom_widget_to_app/lab.md)
 * [Add a Custom Configurable Widget](./develop/wab/add_configurable_widget/lab.md)
 * [Deploy to ArcGIS Online](./develop/wab/deploy_to_arcgis_online/lab.md)

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
Copyright 2016 Esri

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
