###Create a simple search app

In this lab you will add a basic search widget to your app.

1. Click [starter_map/index.html](../starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

    ```javascript
    require(["esri/map",
            // Add Search module
            "esri/dijit/Search",
            "dojo/domReady!"],
      // Add Search alias
      function(Map,Search) {
        ... 
    ```

3. Add the search widget's div:
 
    ```html
    <body>
       <!-- ADD new div for the search widget -->
       <div id="searchDiv"></div>
       
       <div id="mapDiv"></div>
    </body>
    ``` 

4. At the top of the page, add the CSS to position `searchDiv`:

    ```CSS
    <style>
        html,body,#mapDiv {
            padding:0;
            margin:0;
            height:100%;
        }

      /* ADD search widget styling */ 
      #searchDiv {
         display: block;
         position: absolute;
         z-index: 2;
         top: 20px;
         left: 74px;
      }
    </style>
    ```

5. Finally, add the code to create the Search widget:

    ```javascript
    function(Map,Search) {
      map = new Map("mapDiv", {
        center: [-122.68, 45.52],
        zoom: 10,
        basemap: "dark-gray"
      });

      // ADD search widget 
      var search = new Search({
        map: map
      }, "searchDiv");
     
      search.startup();
    });
    ```
    
6. Test out the Search widget by typing "Portland metro" in the search box and select "Portland Metropolitan Expo Center" from the pull down.
    
Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/search/index.html)

###Bonus

* Change the number of search suggestions to `3` and type "Portland metro" in to the search box.  Hint: check the Search `options` in the [Search API reference](https://developers.arcgis.com/javascript/jsapi/search-amd.html).
* Listen for the `search-results` event and then clear the search box.
