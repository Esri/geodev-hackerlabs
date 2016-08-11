###Style Layer Popups

With the Map Viewer, you can easily style popups for each layer. You can change fields, format data, add or remove information, or add charts, images or url links. These settings are stored with the map when it is saved and is accessible by all clients apps that reference the map. Learn more about configuring popups [here](https://doc.arcgis.com/en/arcgis-online/create-maps/configure-pop-ups.htm).

In this lab you will style popups by formatting fields and adding charts.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login.  

2. Click [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=b5fd4aa210ac42f6b86cf5f7a0c989cf) and open it in the Map Viewer. Or just continue using your own map from the last step.

3. Click `Save` > `Save As` to save your own copy of the map.

4. Click on the the map to explore the default popups and fields.

5. Click `Rail Stops` > `Configure Popup-up` and set following properties:

	1. Pop-up Title: Rail Stops

	2. Popup-Contents > `Configure Attributes`

		1. Change the fields to only display the ones below and change the Alias names to:
			* STATION
			* TYPE
			* LINE

		2. OK

	3. OK

6. Click `Rail Lines` > `Configure Popup-up` and set following properties:

	1. Pop-up Title: Rail Lines

	2. Popup-Contents > `Configure Attributes`

		1. Change the fields to only display the ones below and change the Alias names to:
			* TYPE
			* LINE

		2. OK

	3. OK

7. Click `Neighborhoods` > `Configure Popup-up` and set following properties:

	1. Pop-up Title: Neighborhoods

	2. Popup-Contents > `Configure Attributes`

		1. Change the fields to only display the ones below and change the Alias names to:
			
			* NAME
			* COALIT (rename to COALITION)
			* TOTPOP_CY (rename to TOTAL POPULATION, 0 decimals)
			* AVGHINC_CY (rename to AVERAGE INCOME, 0 decimals)
			* MEDAGE_CY (rename to MEDIAN AGE, 0 decimals)
			* AREA (rename to AREA (sq miles))

		2. OK

	3. Click Popup Media > `Add` > `Pie Chart` and set the properties:
		
		* Title: Demographics
		* Chart fields:
			* TOTAL POPULATION
			* AVERAGE INCOME
		* OK

	4. OK

8. Save your map and test the popups.

Your popups should look similar to the popups in [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=6f1f04e49536466fa4a631afcd0141c5).

###Bonus
* Try adding different types of charts to the Neighborhoods layer popups.
* Try changing the order of the fields.