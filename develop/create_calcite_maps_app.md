###Create an ArcGIS JS 4.x - Calcite Maps App with Bootstrap

You can easily build apps with frameworks like Bootstrap with the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/jsapi/). This example uses [Calcite Maps](http://github.com/esri/calcite-maps), a custom map app theme for Bootstrap, and the new [ArcGIS JS 4.x API (currently in Beta)](https://developers.arcgis.com/javascript/beta/) to load layers that were built with the Map Viewer. 

To learn more about the Calcite Maps framework visit [this site](http://github.com/esri/calcite-maps).

1. Click [starter_calcite_maps_app.html](src/starter_calcite_maps_app.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, add the html for the `navbar`, `map container` and `panels`:

  	```html
  	<body class="calcite-maps map-position-absolute nav-position-top nav-space-none">

		  <!-- Navbar -->

		  <nav class="navbar navbar-fixed-top navbar-text-light calcite-dark-red-75">
		    <div class="container-fluid">
		      <div class="navbar-header">
		        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false">
		          <span class="sr-only">Toggle navigation</span>
		          <span class="icon-bar"></span>
		          <span class="icon-bar"></span>
		          <span class="icon-bar"></span>
		        </button>
		        <a class="navbar-brand">
		          <span class="esri-icon esri-icon-map-pin"></span>
		        </a>
		        <div class="navbar-info">
		          <div class="navbar-title text-overflow">2015 Portland Population Density - ArcGIS JS 4.0</div>
		          <div class="navbar-subtitle text-overflow">Explore were people are living in downtown neighborhoods</div> 
		        </div>
		      </div>
		      <!-- Navbar collapse -->
		      <div id="mainNav" class="collapse navbar-collapse" aria-expanded="false">
		        <ul class="nav navbar-nav navbar-right">                    
		         <!-- Primary Nav - Map and scene -->
		          <li><form id="searchNav" class="navbar-form navbar-search hidden-xs visible-sm visible-md visible-lg"><div id="searchNavDiv"></div></form></li>
		          <!-- Secondary Nav - All other options -->
		          <li class="dropdown" role="presentation">
		            <a class="dropdown-toggle hidden-xs" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></a>
		            <ul class="dropdown-menu">
		              <li><a role="button" data-target="#panelInfo" aria-haspopup="true"><span class="glyphicon glyphicon-info-sign"></span> Population</a></li>
		              <li><a class="visible-xs" role="button" data-target="#panelSearch" aria-haspopup="true"><span class="glyphicon glyphicon-search"></span> Search</a></li>
		            </ul>
		          </li>      
		        </ul><!--/.nav -->
		      </div><!--/.nav-collapse -->
		    </div><!--/.container-fluid -->
		  </nav><!--/.navbar -->

		  <!-- Map Container  -->

		  <div class="map-container">
		    <div id="mapViewDiv" class="map-position-absolute"></div>
		  </div><!-- /.container -->

		  <!-- Panel -->

		  <div class="panel-container">
		    <div id="panelAccordion" class="panel-group"  role="tablist" aria-multiselectable="true">
		        
		      <!-- Info Panel -->
		      
		       <div id="panelInfo" class="panel panel-default collapse">
		          <div id="headingInfo" class="panel-heading" role="tab">
		              <div class="panel-title">
		                  <a class="panel-toggle" role="button" data-toggle="collapse" href="#collapseInfo" data-parent="#panelAccordion" aria-expanded="true" aria-controls="collapseInfo"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Population</a>
		                  <a class="panel-close" role="button" data-toggle="collapse" data-target="#panelInfo"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>  
		              </div>
		          </div>
		          <div id="collapseInfo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingInfo">
		              <div class="panel-body">
		                <!--p>Area / population</p-->
		                <div id="legendDiv"></div>
		              </div>
		          </div>
		      </div>
		      
		      <!-- Search Panel -->

		      <div id="panelSearch" class="panel panel-default collapse hidden-sm hidden-md hidden-lg">
		          <div id="headingSearch" class="panel-heading" role="tab">
		              <div class="panel-title">
		                  <a class="panel-toggle collapsed" role="button" data-toggle="collapse" href="#collapseSearch" data-parent="#panelAccordion" aria-expanded="false" aria-controls="collapseSearch"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> Search</a>
		                  <a class="panel-close" role="button" data-toggle="collapse" data-target="#panelSearch"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>        
		              </div>
		          </div>
		          <div id="collapseSearch" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSearch">
		              <div class="panel-body panel-overflow-visible"> 
		                  <div id="searchPanelDiv"></div>
		            </div>
		          </div>
		      </div>

		    </div> <!-- /.panel-group -->
		  </div> <!-- /.panel-container -->

  	```

3. Now add code to reference the required libraries. 

  	```javascript
		  </div> <!-- /.panel-group -->
		  </div> <!-- /.panel-container -->

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

		  <!-- ArcGIS JS 4.0 NOTE: This is a QA build. Use at own risk! -->
		  <script src="http://jsqa.arcgis.com/4.0/"></script>

  	```

4. Now add code to load the layers. 
	
	NOTE: Feel free to use your own layer IDs below!

  	```javascript

			<script>
			  var app, searchWidgetNav, searchWidgetPanel;
			  require(["esri/Map",
			    "esri/layers/FeatureLayer",
			    "esri/layers/VectorTileLayer",
			    "esri/PopupTemplate",
			    "esri/views/MapView",
			    "esri/widgets/Search",
			    "esri/widgets/Legend",
			    "dojo/query",

			    // Bootstrap
			    "bootstrap/Collapse", 
			    "bootstrap/Dropdown",
			    "bootstrap/Tab",
			    "bootstrap/Tooltip",
			    
			    // Calcite-maps
			    "calcite-maps/calcitemaps",
			    "dojo/domReady!"
			  ], function(Map, FeatureLayer, VectorTileLayer, PopupTemplate, MapView, Search, Legend, query) {
			      
			    // App
			    app = {
			      zoom: 11,
			      center: [-122.657, 45.533],
			      basemap: "", // use vector tile layer
			      featureLayer: null,
			      viewPadding: {
			          top: 64
			      },
			      uiPadding: {
			          top: 15
			      },
			      mapView: null
			    };
			    // Map 
			    var map = new Map({
			      //basemap: app.basemap
			    });

			    // Basemap
			    var urlVectorTileNight = "http://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json?f=json"
			    var lyr = new VectorTileLayer({
			        url: urlVectorTileNight
			      });
			    map.add(lyr);

			    // Layers
			    app.featureLayer = addLayer(map, "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Enriched_Styled/FeatureServer/0", null, 0.75, "{NAME}", "<b>Population:</b> {TOTPOP_CY}<br><b>Average Income:</b> {AVGHINC_CY}<br><b>Median Age:</b> {MEDAGE_CY}<br><b>Area:</b> {AREA} sq mi");
			    addLayer(map, "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines_Styled/FeatureServer/0", null, 1.0);
			    addLayer(map, "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0", null, 1.0);

			    app.mapView = new MapView({
			      container: "mapViewDiv",
			      map: map,
			      zoom: app.zoom,
			      center: app.center,
			      padding: app.viewPadding,
			      ui: {
			        components: ["zoom", "compass", "attribution"],
			        padding: app.uiPadding
			    }
			    });
			 
			    // Search
			    app.mapView.then( function() {
			      searchWidgetNav = createSearchWidget("searchNavDiv");
			      searchWidgetPanel = createSearchWidget("searchPanelDiv");
			    });

			    // Legend
			    app.mapView.then(function(){
			      createLegendWidget("legendDiv", app.featureLayer);
			    })

			    function createLegendWidget(parentId, featureLayer) {
			      var legend = new Legend({
			        viewModel: {
			          view: app.mapView,
			          layerInfos: [{
			             layer: featureLayer,
			             title: " "
			           }]
			        }
			        }, parentId);
			      legend.startup();
			      return legend;
			    }
			    
			    function createSearchWidget(parentId) {
			      var search = new Search({
			        viewModel: {
			          allPlaceholder: "Search by name",
			          view: app.mapView,
			          highlightEnabled: false,
			          popupEnabled: true,
			          showPopupOnSelect: true,
			          searchingAllEnabled: true
			        }
			        }, parentId);
			      
			      var sources = search.viewModel.sources.slice();

			      sources.push({
			        featureLayer: new FeatureLayer({
			          url: "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Enriched_Styled/FeatureServer/0",
			          outFields: ["*"]
			        }),
			        searchFields: ["NAME"],
			        displayField: "Neighborhoods",
			        exactMatch: false,
			        outFields: ["*"],
			        name: "Neighborhoods",
			        placeholder: "example: Old Town"
			      });
			      search.viewModel.sources = sources;
			      search.startup();
			      return search;
			    }
			    
			    function addLayer(map, url, renderer, opacity, popupTitle, popupContent) {
			      var lyr = new FeatureLayer({
			        url: url,
			        outFields: ["*"],
			        opacity: opacity,
			        renderer: renderer
			      });
			      lyr.then(function(e){
			        lyr.set({
			            popupTemplate: new PopupTemplate({
			                title: popupTitle,
			                content: popupContent //"{*}"
			            })
			        });
			      });
			      map.add(lyr);
			      return lyr;
			    }

			  });// dojo
			</script>
		
		</body>
		</html>
  	```

Your app should look something like this:
 * [Code](https://github.com/Esri/geodev-hackerlabs/blob/gh-pages/develop/src/calcite_maps_app.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/calcite_maps_app.html)

###Bonus
* Use Calcite Maps styles to change the look and feel of the application.
