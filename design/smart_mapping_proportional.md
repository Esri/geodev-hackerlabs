###Smart Mapping - Proportional Styling

Smart Mapping provides some powerful ways to style your data on the map in a way that highlights the data's properties.

In this lab you will see how we can display population totals as a population density by dividing the totals by area.

###Steps

1. Go to [www.arcgis.com](https://www.arcgis.com) and login. Check `Keep me signed in`.

2. Use ArcGIS Online to find the `PDX_Neighborhoods_Styled` layer by `al_geodev` or just click [this link](http://www.arcgis.com/home/item.html?id=a77a0ed75b0245dea165c31be5906edc).

3. Click `Open` > `Add layer to new map`.

4. Click `PDX Neighborhoods Styled` > `Change Style`.

    1. Choose to show `TOTAL POPULATION` in the drop-down. 

    Notice how the neighborhoods are automatically re-styled.
  
    2. Click `Options` on `Counts and Amounts`.
  
    3. In the `Divided by` dropdown, select `AREA`. 

    See how many of the neighborhoods that were previously highlighted fade slightly to maintain focus on densely populated neighborhoods. Note, the `AREA` values are in Square Miles.
  
    4. Click `OK`.
  
    5. Click `DONE`.

Your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=138d5976b3874ffa9ae56c3c2a32fcd4).

###Extras

* In the `Change Style` > `Counts and Amounts` > `Options` panel:
  * Drag the sliders up and down the color-ramp to see how the visualization changes to highlight extremes or just deviations from the mean.
  * Use the `Theme` dropdown and the `Symbols` panel to view the data in other ways:
    * Highlight high and low population densities with the `Extremes` theme and see how the distribution sliders change the focus of the map.
    * Select different color ramps in the `Symbols` panel.
    * Use the `Invert color ramp` icon in the `Symbols` panel.
  * Select `Classify Data` and play with the options to see how this alters the style.
    * Set the `Round Classes` option to `1000` to see how the classifications and classification legend changes.
    * Click on `Legend` and edit the lowest class to read `Under 2,000 per square mile` (assuming it previously read `0 to 2,000`).