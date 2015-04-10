###Add Navbar and Menus

In this lab, you will add navbars and menus to a bootstrap map app to change basemaps. You will use jQuery to listen for menu item changes to change basemaps.

1. Click [build_starter_map_bootstrap.html](src/build_starter_map_bootstrap.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Add some CSS styling to add space for the fixed navbar.

	```
		...
		 <style>
	      /* Set the responsive map size here */
	      #mapDiv {
	        min-height:100%; 
	        max-height:100%; 
	      }

	      /* ADD */
	      body {
	        padding-top: 50px;
	      }

	    </style>
	```

3. Add the following code to add the navbar and menus to change basemaps.

	```
	...
	<body>
		<!-- ADD -->
	    <div class="navbar navbar-inverse navbar-fixed-top">
	      <div class="container">
	      <div class="navbar-header">
	        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        </button>
	        <a class="navbar-brand" href="#">Navbar - Menu</a>
	      </div>
	      <div class="collapse navbar-collapse">
	        <ul class="nav navbar-nav">
	        <li class="dropdown" id="basemapList">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Basemaps <b class="caret"></b></a>
	          <ul class="dropdown-menu" id="myDropdown">
	          <li><a href="#">Streets</a></li>
	          <li><a href="#">Imagery</a></li>
	          <li><a href="#">National Geographic</a></li>
	          <li><a href="#">Topographic</a></li>
	          <li><a href="#">Gray</a></li>
	          <li><a href="#">Dark Gray</a></li>
	          <li class="divider"></li>
	          <li><a href="#">Open Street Map</a></li>
	          </ul>
	        </li>
	        <li><a href="#about">About</a></li>
	        <li><a href="#contact">Contact</a></li>
	        </ul>
	      </div><!--/.nav-collapse -->
	      </div>
	    </div>

		<!-- Bootstrap-map-js -->
		<div id="mapDiv"></div>
	```

4. Add jQuery code to handle changing basemaps.

	```
	...

		<script src="//js.arcgis.com/3.13compact"></script>
	    <script>
	      require(["application/bootstrapmap", "dojo/domReady!"], 
	        function(BootstrapMap) {
	          // Get a reference to the ArcGIS Map class
	          var map = BootstrapMap.create("mapDiv",{
	            basemap:"national-geographic",
	            center:[-122.45,37.77],
	            zoom:12,
	            scrollWheelZoom: false
	          });

	    		<!-- ADD - Load the responsive map -->
	           $(document).ready(function () {
	              $("#basemapList li").click(function (e) {
	                switch (e.target.text) {
	                  case "Streets":
	                    map.setBasemap("streets");
	                    break;
	                  case "Imagery":
	                    map.setBasemap("hybrid");
	                    break;
	                  case "National Geographic":
	                    map.setBasemap("national-geographic");
	                    break;
	                  case "Topographic":
	                    map.setBasemap("topo");
	                    break;
	                  case "Gray":
	                    map.setBasemap("gray");
	                    break;
	                  case "Dark Gray":
                    	map.setBasemap("dark-gray");
                    	break;
	                  case "Open Street Map":
	                    map.setBasemap("osm");
	                    break;
	                }
	              });
	           });

	        });
	    </script>
	```

5. Now add the jQuery and required bootstrap library references.
	
	```
		...
		</script>

	    <!-- Bootstrap core JavaScript
	    ================================================== -->
	    <!-- Placed at the end of the document so the pages load faster -->
	    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

		</body>
	</html>
	```

6. Run the app and test the nav and menu items.

Your app should look something like this:
 * [Code](https://github.com/Esri/geodev-hackerlabs/blob/gh-pages/develop/src/add_navbar_menus_bootstrap.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/add_navbar_menus_bootstrap.html)

###Extras
* Explore [bootstrap](http://getbootstrap.com).
* Change the menu dropdown behavior/location.
