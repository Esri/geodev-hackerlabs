###Create an AppStudio App

[AppStudio for ArcGIS](http://www.esri.com/landing-pages/appstudio) allows you to easily build native apps from existing web maps and templates for Android, iOS, Window, Mac OS X and Linux. You can also build custom apps from scratch with Qt/QML. Visit the [help](http://doc.arcgis.com/en/appstudio/) for more information.

In this lab, you will use AppStudio to build a native app from a single webmap.


1. Click [this link](https://appstudio.arcgis.com/create.html) to go to the AppStudio website. 

2. Scroll down to the Map Viewer section and click `start with this template`. 

3. Sign in with your ArcGIS developer or Organization account.

4. Download [the images](https://onedrive.live.com/redir?resid=C6391DBDAAFC7209!29697&authkey=!ABHcU1LSk7LrIFw&ithint=folder%2c) you are going to use to build this app.

5. Enter in a title for your app. For the `Thumbail` image use the beerthumbail_200.png.

6. For the `Launch Image` use the beerbackground1024.jpg.

7. For the `App Icon` use the beer_glass_icon_256.png.

8. Click ` Map Viewer Settings` and for the `Start Background Image` use beerbackground1024.jpg. Click `Start Button` and use brewerybutton.png. 

9. Click `Choose Web Map(s)`, choose the `Public` tab, and in search type `geodev breweries colorado`. Click the `Breweries in Colorado` webmap. Click `OK` and `Save and Finish`.

10. To view your app before you build the binaries for your plaform of choice you can use AppStudio Player for ArcGIS. Players are available for Windows, Mac, Linux, iOS or Android [here](http://doc.arcgis.com/en/appstudio/download/). If you have a device that supports one of these operating systems go ahead and download it.

11. Open AppStudio Player and `Sign In` to view your apps. Select the app you just created and select `Yes` to download the selected app to your device. Once the download is complete click `OK`. Select the app again and you now have that app running in AppStudio Player.  

__You are now ready to deploy your native app__ 


1. Click [this link](https://appstudio.arcgis.com/) to go to the AppStudio website. 

2. Click `Sign In` > click `My Apps` > click your app > click `Build App` > select the plaforms you want to build your app for `(e.g., Windows x86(32 bit) or Mac OS)` > click `Build`.

3. Once the build is completed. Click `Download` to install your app.

* You can find all your app builds in your ArcGIS Developers or Organization account under `My Content` > `My Apps`.

### Bonus

* You can also further customize your apps using AppStudio for ArcGIS (Desktop Edition), available [here](http://doc.arcgis.com/en/appstudio/download/) for Windows, Mac and Linux. To deploy applications customized with Desktop Edition, you need to purchase a AppStudio for ArcGIS `Standard` license. However, you can still build and play these customized apps without a paid license. See [here](http://doc.arcgis.com/en/appstudio/extend-apps/extendapps.htm) for more details.
