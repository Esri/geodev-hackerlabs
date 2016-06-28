###Create a Calcite Maps - Bootstrap App

It is easiy to build webmap apps with the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/jsapi/) and frameworks such as [Calcite Maps](http://github.com/esri/calcite-maps). [Calcite Maps](http://github.com/esri/calcite-maps) is a framework that contains CSS classes and extensions that extend Bootstrap and are specifically for building map apps for web and mobile devices. To learn more, visit the Calcite Maps [site](http://github.com/esri/calcite-maps).

In this lab you will use Calcite Maps and Bootstrap to build an app that loads the Portland Demographics webmap. You will also wire up the UI and widgets so you can easily access popups, view the legend and perform searches on the underlying neighborhood data itself.

1. Click [start calcite HTML](step_1.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, let's get started by adding the HTML and classes for the `body` and `navbar`:
  
  ```
  <body class="calcite-maps calcite-nav-top">

    <!-- Navbar -->

    <nav class="navbar calcite-navbar navbar-fixed-top calcite-text-light calcite-bg-dark calcite-bgcolor-red-75">
      <!-- Dropdown -->
      <div class="dropdown calcite-dropdown calcite-bg-light calcite-text-dark" role="presentation">
        <a class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
          <div class="calcite-dropdown-toggle">
            <span class="sr-only">Toggle dropdown menu</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
        <ul class="dropdown-menu">
          <li><a class="visible-xs" data-target="#panelSearch" role="button" aria-haspopup="true"><span class="glyphicon glyphicon-search"></span> Search</a></li>
          <li><a role="button" data-target="#panelLegend" aria-haspopup="true"><span class="glyphicon glyphicon-list"></span> Legend</a></li>
          <li><a role="button" data-target="#panelBasemaps" aria-haspopup="true"><span class="glyphicon glyphicon-th-large"></span> Basemaps</a></li>
          <li><a role="button" id="calciteToggleNavbar" aria-haspopup="true"><span class="glyphicon glyphicon-fullscreen"></span> Toggle Title</a></li>
        </ul>
      </div>
      <!-- Title -->
      <div class="calcite-title calcite-overflow-hidden">
        <div class="calcite-title-main">2015 Portland Population Density</div>
        <span class="calcite-title-divider hidden-xs"></span>
        <div class="calcite-title-sub hidden-xs">Explore where people are living in downtown neighborhoods</div> 
      </div>
      <!-- Nav -->
      <ul class="nav navbar-nav calcite-nav">                    
        <li><div class="calcite-navbar-search hidden-xs"><div id="searchNavDiv"></div></div></li>
      </ul>
    </nav><!--/.calcite-navbar --> 

    ```

3. Now add a container for the map.

  ```
    <!-- Map Container  -->

    <div class="calcite-map map-position-absolute">
      <div id="mapViewDiv"></div>
    </div><!-- /.calcite-map -->

  ```

4. Next, let's add the HTML for the `panels` that link up to the menus above.

  ```
    <!-- Panels -->

    <div class="calcite-panels calcite-panels-right calcite-text-dark calcite-bg-light panel-group" role="tablist" aria-multiselectable="true">
          
      <!-- Legend Panel -->
      
       <div id="panelLegend" class="panel panel-default collapse">
          <div id="headingPanel" class="panel-heading" role="tab">
              <div class="panel-title">
                  <a class="panel-toggle" role="button" data-toggle="collapse" href="#collapseLegend" data-parent="#panelAccordion" aria-expanded="true" aria-controls="collapseLegend"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Legend</a>
                  <a class="panel-close" role="button" data-toggle="collapse" data-target="#panelLegend"><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>  
              </div>
          </div>
          <div id="collapseLegend" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingLegend">
              <div class="panel-body">
                <div id="legendDiv"></div>
              </div>
          </div>
      </div>

       <!-- Basemaps Panel -->
      
      <div id="panelBasemaps" class="panel collapse"> 
        <div id="headingBasemaps" class="panel-heading" role="tab">
          <div class="panel-title">
            <a class="panel-toggle collapsed" role="button" data-toggle="collapse" href="#collapseBasemaps" aria-expanded="false"   aria-controls="collapseBasemaps"><span class="glyphicon glyphicon-th-large" aria-hidden="true"></span> Basemaps</a>
            <a class="panel-close" role="button" data-toggle="collapse" data-target="#panelBasemaps"><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>  
          </div>
        </div>
        <div id="collapseBasemaps" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingBasemaps">
          <div class="panel-body">
            <select id="selectBasemapPanel" class="form-control">
              <option value="streets" data-vector="streets-vector">Streets</option>
              <option value="satellite" data-vector="satellite">Satellite</option>
              <option value="hybrid" data-vector="hybrid">Hybrid</option>
              <option value="national-geographic" data-vector="national-geographic">National Geographic</option>
              <option value="topo" data-vector="topo-vector">Topographic</option>
              <option value="gray" data-vector="gray-vector">Gray</option>
              <option value="dark-gray" data-vector="dark-gray-vector">Dark Gray</option>
              <option value="osm" data-vector="osm">Open Street Map</option>
              <option value="dark-gray" data-vector="streets-night-vector" selected>Streets Night</option>
              <option value="streets" data-vector="streets-navigation-vector">Streets Mobile</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Search Panel -->

      <div id="panelSearch" class="panel panel-default collapse hidden-sm hidden-md hidden-lg">
          <div id="headingSearch" class="panel-heading" role="tab">
              <div class="panel-title">
                  <a class="panel-toggle collapsed" role="button" data-toggle="collapse" href="#collapseSearch" data-parent="#panelAccordion" aria-expanded="false" aria-controls="collapseSearch"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> Search</a>
                  <a class="panel-close" role="button" data-toggle="collapse" data-target="#panelSearch"><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>        
              </div>
          </div>
          <div id="collapseSearch" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSearch">
              <div class="panel-body calcite-body-expander"> 
                  <div id="searchPanelDiv"></div>
            </div>
          </div>
      </div>

    </div> <!-- /.panel-group -->
  ```

5. Now add references to the Calcite Maps, Bootstrap and ArcGIS JS library.

  ```javascript
    <script type="text/javascript">
      var dojoConfig = {
        packages: [{
          name: "bootstrap",
          location: "https://esri.github.io/calcite-maps/dist/vendor/dojo-bootstrap"
        },
        {
          name: "calcite-maps",
          location: "https://esri.github.io/calcite-maps/dist/js/dojo"
        }]
      };
    </script>

    <script src="https://js.arcgis.com/4.0/"></script>
   ```

6. And lastly, add code to load the webmap and wire up the widgets to the UI controls. 
  
  NOTE: Feel free to use your own webmap ID below!

  ```javascript
    <script src="https://js.arcgis.com/4.0/"></script>

    <script>
      
      var app;

      require(["esri/Map",
        "esri/WebMap",
        "esri/layers/FeatureLayer",
        "esri/views/MapView",
        "esri/widgets/Search",
        "esri/widgets/Legend",
        "dojo/query",

        // Bootstrap
        "bootstrap/Collapse", 
        "bootstrap/Dropdown",
        "bootstrap/Tab",
        
        // Calcite-maps
        "calcite-maps/calcitemaps-v0.2",
        "dojo/domReady!"
      ], function(Map, WebMap, FeatureLayer, MapView, Search, Legend, query) {
          
        // App
        app = {
          initialExtent: null,
          mapView: null,
          viewPadding: {
            top: 50
          },
          searchWidgetNav: null,
          searchWidgetPanel: null
        };

        // Webmap
        var map = new WebMap({
          portalItem: {
            id: "7186a92406194797aa518c06c189a71f"
          }
        });

        // View
        app.mapView = new MapView({
          container: "mapViewDiv",
          map: map,
          padding: app.viewPadding,
          ui: { 
            components: ["zoom", "compass", "attribution"] 
          }
        });

        app.mapView.then(function(){

          // Set view properties
          app.initialExtent = app.mapView.extent.clone();
          app.mapView.popup.dockOptions = {
            breakpoint: {width: 768}
          }
          
          // Search
          app.searchWidgetNav = createSearchWidget("searchNavDiv");
          app.searchWidgetPanel = createSearchWidget("searchPanelDiv");

          // Legend
          createLegendWidget("legendDiv");

        });

        function createLegendWidget(parentId) {
          var legend = new Legend({
            viewModel: {
              view: app.mapView
            }
            }, parentId);
          legend.startup();
          return legend;
        }
        
        function createSearchWidget(parentId) {
          var search = new Search({
              view: app.mapView,
              allPlaceholder: "Find neighborhoods and places"
            }, parentId);
        
          var sources = [];

          // Add neighborhoods search
          sources.push({
            featureLayer: new FeatureLayer({
              url: "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Enriched_Styled/FeatureServer/0",
              outFields: ["*"]
            }),
            searchFields: ["NAME"],
            displayField: "NAME",
            exactMatch: false,
            outFields: ["*"],
            name: "Find a Neighborhood",
            placeholder: "e.g. old town",
            popupEnabled: true,
            popupOpenOnSelect: true,
            searchExtent: app.initialExtent,
            withinViewEnabled: false

          });

          // Add Esri geocoder search
          search.defaultSource.name = "Find an address or place";
          search.defaultSource.placeholder = "e.g. Starbucks";
          search.defaultSource.searchExtent = app.initialExtent;
          sources.push(search.defaultSource);
            
          // Set search sources
          search.sources = sources;

          search.startup();

          return search;
        }

        // Basemaps
        query("#selectBasemapPanel").on("change", function(e){
          app.mapView.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
        });  

        // Popup - undock
        query(".calcite-panels .panel").on("show.bs.collapse", function(e) {
          app.mapView.popup.dockEnabled = false;
        });

        // Panels - hide
        app.mapView.popup.watch("currentDockPosition", function(result) {
          if (result && query(".calcite-panels .panel.in").length > 0) {
            if (!(window.innerWidth > 544 && window.innerWidth < 768)) {
              query(".calcite-panels").addClass("invisible");
            }
          } else {
            query(".calcite-panels").removeClass("invisible");
          }
        });

      });
      
    </script>

  </body>
  </html>
  ```

7. Now go ahead and test-drive the app. Try viewing the legend and searching for different neighborhoods in Portland. Also try the app at different screen sizes or even try the app on your phone.

Your app should look something like this:
 * [Code](index.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/webmap_apps/create_calcite_maps_app/index.html)

###Bonus
Try applying different Calcite Maps classes to change the look and feel of the app:
* Layout - Add the `calcite-layout-medium-title` to the `<body>` element. You will also have to change the top padding to 60 to match the navbar height.
* Color - Apply different colors to the `nav` element. e.g. `calcite-bgcolor-dark-red`
* Theme - Apply different colors and theme classes to the `nav`, `dropdown-menu` and `panels` elements. e.g. `calcite-text-light`, `calcite-bg-dark`...

Visit the Calcite Maps [site](http://github.com/esri/calcite-maps) for documentation and examples. Use the [Styler](http://github.com/esri/calcite-maps) to explore the different app layouts and designs you can create.