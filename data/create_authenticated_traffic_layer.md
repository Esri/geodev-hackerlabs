###Create Authenticated Traffic Layer

ArcGIS Online provides a number of [ready-to-use maps, layers and services](http://www.arcgis.com/features/maps/index.html). You can use any of these services and layers to enhance your applications. Some of the services require user authentication to access them and others are credit-consuming.

In this lab we will look at how to pre-authenticate the traffic layer so it can be accessed without prompting the user for credentials. The traffic layer is non-credit consuming but does require authentication.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login. Check `Keep me signed in`.

2. Go to `My Content`.

3. Click `Add Items` > `From the Web` to access the traffic service.

	1. Set the following properties:

		```
		Type: ArcGIS Server web service
		URL: http://traffic.arcgis.com/arcgis/rest/services/World/Traffic/MapServer
		Username: <yourname>
		Password: <yourpassword>
		```
		```Check `Store credentials with service item. Do not prompt for authentication`.```

		```Title: My Traffic Layer```

	2. Click `Add Item`.

	This creates a new layer that points to the original Traffic layer.

4. Click `My Contents` > `My Traffic Layer` > `Advanced Options` select `Limit Usage` and set the checkbox to enable rate limiting to 1000 requests per second.

5. Click `My Contents` > `My Traffic Layer` > `My Contents` to identify the url. It should look something like this:

  ```
  http://utility.arcgis.com/usrsvcs/servers/<your id>/rest/services/World/Traffic/MapServer
  ```

6. Click `Open` > `Add to New Map`. Then zoom in to a city in North America e.g. `Portland, Oregon`.

7. Save the map.

###Bonus
* Make the layer accessible by Everyone and ensure the layer can be accessed by users without authentication. To do this you'll need `Share` the layer to `Everyone`. After doing so, log out of [arcgis.com](http://www.arcgis.com) and Click `Open` > `Add layer to new map`. It's best to use a different web browser that isn't logged in to [arcgis.com](http://www.arcgis.com). To add the layer, use the URL for your authenticated traffic layer (you copied eariler). If you don't have it, you can always find the URL on the item page in `My Contents`.
