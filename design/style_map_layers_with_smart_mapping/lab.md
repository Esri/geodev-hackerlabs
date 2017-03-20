### Smart Mapping - Proportional Styling

Smart Mapping provides some powerful ways to style your data on the map in a way that highlights the data's properties.

In this lab you will see how we can display population totals as a population density by dividing the totals by area.

### Steps

1. Go to [www.arcgis.com](https://www.arcgis.com) and login.  

2. Click [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=6f1f04e49536466fa4a631afcd0141c5) and open it in the Map Viewer. Or just continue using your own map from the last step.

3. Click `PDX Neighborhoods Enriched` > `Change Style`.

    1. 1. Choose to show `Total Population` in the drop-down. 

    Notice how the neighborhoods are automatically re-styled.
  
    2. 2. Click `Options` on `Counts and Amounts`.
  
    3. In the `Divided by` dropdown, select `Area`. 

    See how many of the neighborhoods that were previously highlighted fade slightly to maintain focus on densely populated neighborhoods. Note, the `Area` values are in Square Miles.
  
    4. Click `OK`.
  
    5. Click `DONE`.

Your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=6dd14f639f784ff692327d8f4b3eb00a).

### Bonus

* In the `Change Style` > `Counts and Amounts` > `Options` panel:
  * Drag the sliders up and down the color-ramp to see how the visualization changes to highlight extremes or just deviations from the mean.
  * Use the `Theme` dropdown and the `Symbols` panel to view the data in other ways:
    * Highlight high and low population densities with the `Extremes` theme and see how the distribution sliders change the focus of the map.
    * Select different color ramps in the `Symbols` panel.
    * Use the `Invert color ramp` icon in the `Symbols` panel.
  * Select `Classify Data` and play with the options to see how this alters the style.
    * Set the `Round Classes` option to `1000` to see how the classifications and classification legend changes.
    * Click on `Legend` and edit the lowest class to read `Under 2,000 per square mile` (assuming it previously read `0 to 2,000`).