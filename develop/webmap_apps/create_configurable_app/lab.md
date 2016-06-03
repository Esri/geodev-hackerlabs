###Create a Configurable App

You can use any of the [Configurable Apps](http://www.arcgis.com/home/gallery.html#c=esri&t=apps&o=modified&f=configurable) to build differnt types of focused HTML, CSS, JS apps. All apps are developed on top of an existing web map and are shared out as a web application. By default, these apps are stored and hosted in ArcGIS Online, but you can also download all of the code locally and host and customize them yourself.

In this lab, you will build a simple Template app.

1. Click [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=7186a92406194797aa518c06c189a71f) to open the map in the Map Viewer. If you have your own map, you can try to use that too.

2. Click `Share` > `Create a Web App` > `Configurable Apps`.

3. Search for the `Public Information` template and select `Create App`.

4. set the following properties:

 ```
 Title: 2015 Portland Population Density
 Tags: Portland, Map, Population, Density,Configurable App
 Summary: Portland population map built with the Public Information Configurable App
 ```

 Click `Done` to launch the configuration page.

4. Change the following properties:

 ```
 Choose Swipe Layer: Neighborhoods
 Details: 
  Application Title: 2015 Portland Population Density
  Application Summary: 2015 Portland Population Density
 Configuration Options:
  Uncheck Enable Basemap Toggle
 Splash Screen: 
  Check Enable Dialog Modal
  Dialog Title: 2015 Portland Population Density Map
  Dialog Content: Welcome to Portland! Explore neighborhoods and where people live.
 Twitter Options
  Check Enable Twitter Layer
  Search Keyword: train
 Webcams.travel Options
  Check Enable Webcams Layer
 NOTE: Disable other layers
 Search Settings:
  Enable the Neighborhoods layer
  Edit the Neighborhoods layer
  Name: Neighborhoods
  Check Enable Suggestions
  Display Field: Name
  Search Fields: Name
  Click save
 ```

 Click `Save and View` > `Close`.

6. Click `Open` > `View Application` to test-drive your app.

Your app should look something like [this](http://edn.maps.arcgis.com/apps/PublicInformation/index.html?appid=09ed800aca42450c89278c3c6a3815dc).

###Bonus
* Go back to the app and try to change and save some of the configuration settings.
* View the JSON for the web app by using the REST API to access the item in your account. Try formatting the JSON with try [this JSON Editor tool](http://www.jsoneditoronline.org/).

 ```
 https://www.arcgis.com/sharing/rest/content/items/09ed800aca42450c89278c3c6a3815dc/data
 ```

 NOTE: Replace the item ID above with yours.
* Get the source code for the public information configurable app [here](https://github.com/Esri/public-information-map-template-js).
