###Create an application using a Configurable Template

You can use any of the [Configurable App Templates](http://www.arcgis.com/home/gallery.html#c=esri&t=apps&o=modified&f=configurable) to build differnt types of focused HTML, CSS, JS apps. All apps are developed on top of an existing web map and are shared out as a web application. By default, these apps are stored and hosted in ArcGIS Online, but you can also download all of the code locally and host and customize them yourself.

In this lab, you will build a simple Template app.


1. Click [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=27970d32436a446dabb3c71cf949115e) to open the map in the Map Viewer. If you have your own map, you can try to use that too.

2. Click `Share` > `Make a Web Application` > `Configurable Apps`.

3. Find and select `Public Information` and set the following properties:

 ```
 Title: Portland Neighborhoods Template App
 Tags: Portland, Map, Template App
 Summary: Portland neighborhood map built with the Public Information Template
 ```

 Click `Save and Publish` to launch the configuration page.

4. Change the following properties:

 ```
 Swipe Layer: Neighborhoods
 Enable Modal Dialog: True
  Dialog Title: Portland Neighborhoods
  Dialog Content: Welcome to Portland! Explore neighborhoods and where people live.
 Twitter Options
  Search Keyword: Food
 ```

 Click `Save` > `Done`.

6. Click `Open` > `View Application` to test-drive your app.

###Bonus
* Go back to the app and try to change and save some of the template settings.
