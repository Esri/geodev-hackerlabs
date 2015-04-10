###Build a Bootstrap Starter Map

In this lab, you will create a simple reponsive map that uses bootstrap-map-js.

1. Go to [jsbin.com](http://jsbin.com) and create a new bin.

2. Add the following code to build a basic HTML page and add the CSS references for Bootstrap, ArcGIS and Bootstrap-map-js and some styling for the map.

	```
   	<!DOCTYPE html>
	<html>
		<head>
			<title>Bootstrap Map Example</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

			<!-- CSS for Bootstrap, ArcGIS and Bootstrap-map-js -->
			<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
			<link rel="stylesheet" type="text/css" href="//js.arcgis.com/3.13/esri/css/esri.css">   
			<link rel="stylesheet" type="text/css" href="http://esri.github.io/bootstrap-map-js/src/css/bootstrapmap.css">   
			<style>
			  /* Set the responsive map size here */
			  #mapDiv {
			    min-height:100px; 
			    max-height:1000px; 
			</style>
		</head>
		<body>

		</body>
	</html>
	```

4. In the body, add HTML to define the layout of page and map. In this case we will define two horizontal rows and two columns.

	```
		...
		<body>

		    <!-- ADD Bootstrap Map -->
		    <div id="mapDiv"></div>
		  
		</body>
	```

5. Now write JavaScript code to load the map.
	
	```
			...
			<div id="mapDiv"></div>

		 	<!-- ADD code to Load the responsive map -->
		    <script type="text/javascript">
		        var package_path = "//esri.github.com/bootstrap-map-js/src/js";
		        var dojoConfig = {
		            packages: [{
		                name: "application",
		                location: package_path
		            }]
		        };
		    </script>
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
		      });
		    </script>

		</body>
	</html>
	```

6. Run the app and test resizing the browser to view the responsive map.

Your app should look something like this:
 * [Code](https://github.com/Esri/geodev-hackerlabs/blob/gh-pages/develop/src/starter_map_bootstrap.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/starter_map_bootstrap.html)

###Extras
* Explore [bootstrap](http://getbootstrap.com).
