###Create and Edit Data

[ArcGIS for Developers](http://developers.arcgis.com) allows you to interactively create and publish hosted web services (feature services) to the cloud. All you need to do is specify the feature service name and fields (schema) and then save it. After it's created you can add data interactively with the [Map Viewer](http://doc.arcgis.com/en/arcgis-online/use-maps/view-maps.htm) or with other ArcGIS apps e.g. ArcGIS Collector or via custom apps.  

In this lab you will create a new point feature service and add data to it.

###Steps

1. Go to [developers.arcgis.com](http://developers.arcgis.com) and login. Check `Keep me signed in`.

2. Click the `Hosted Data` icon > `New Feature Service` to create a new dataset. 

 Specify the following:

 ```
 Title: PDX Points
 Description: PDX Points
 Type: Points
 Tags: Portland
 ```

3. Click `Continue` and then `Add` the following fields to `Field Alias`, `Field Name` and `Data Type`:
  
 ```
 Name, Name, (String)
 Type, Type, (String)
 Date, Date, (Date)
 ```

 NOTE: You can create as many fields you want.

4. Click `Continue`  then choose any symbol and `Publish Service`. 

5. Click `Edit in ArcGIS Online`. This should load the layer into the Map Viewer.

6. Zoom to Portland, USA.

7. Click `Edit` then select `New Feature` then hover your mouse over the map. Click on the map to add some points to the feature layer dataset. Make sure you add field values to the popup window.

###Bonus 
* Explore editing by moving some points and updating the field data.

