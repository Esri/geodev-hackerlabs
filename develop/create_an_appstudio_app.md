###Create an AppStudio App

[AppStudio for ArcGIS](http://www.esri.com/landing-pages/appstudio) allows you to easily build native apps from existing web maps and templates for Android, iOS, Window, Mac OS X and Linux. You can also build custom apps from scratch with Qt/QML. Visit the [help](http://doc.arcgis.com/en/appstudio/) for more information.

In this lab, you will use AppStudio to build an iOS and an Android native app from a single webmap.


__Install AppBuilder__


1. Click [this link](http://doc.arcgis.com/en/appstudio/) to go to the AppStudio download site. 

2. Sign in with your ArcGIS developer or Organization account.

3. Click `AppStudio for ArcGIS` > `Download Software` and install the software. Or better yet, install locally if you have access to the installation files.

 NOTE: The files are 250-500+ MB so please be patient for it to download.


__Build an App from the MapViewer Template__


1. Start the `AppStudio` application.

2. Click `Wizard` and double-click `MapViewer` to download the template.

3. Click `MapViewer` again to build a new app. Set the following properties:

 ```
 Title: Portland MapViewer
 Summary: Portland MapViewer
 Description: Portland MapViewer
 Map gallery query: id:<your web map id>

 NOTE: If you don't have a webmap, use id: 27970d32436a446dabb3c71cf949115e.
 ```
 * Click `Check Query` to ensure you are pointing at a valid map.
 
 * Click `Create App` > `Ok`.

4. Click `Player` or double-click `Portland MapViewer` to run the app locally.


__Upload to ArcGIS Online__


1. In AppStudio, click `Upload` at the top and then `Sign in`. Use your ArcGIS for Developers or Organization account.

2. Click `Add` > `OK`. This uploads the definition of your app to ArcGIS Online.

3. Close the `Upload` app.

3. In your Web Browser, log in to your organization.

4. Click `My Content` > `<your login>` > `Portland MapViewer` to verify your app was uploaded. 


__Test with the Player__


1. On your computer, start and run `Player` (outside of AppStudio). You should see the apps you have downloaded locally.

2. `Sign In` to your ArcGIS for Developers or Organization account. Now you should see your uploaded apps too.

3. `Double click` on the apps to run them. 

4. Use the gallery to select and run different apps. 


###Extras


__Explore the Sample Applications__


1. In AppStudio, login with your ArcGIS for Developers or Organization account.

2. Click `Search` > `All Apps` > `Groups` > `Sample Apps`.

3. Double click a few of the apps and download them locally.

4. Double click any of the apps to run them.

5. Explore the source code.


__Update App Settings__

1. Download [this image](http://esri.github.io/geodev-hackerlabs/resources/pdxbackground.jpeg) for the background.

2. In AppStudio, click `Portland MapViewer` > `Settings` > `Properties` and set the property:

 ```
 startBackground: assets/pdxbackground.jpeg
 ```

3. Click `Apply` > `Close` window.


__Explore the Project Source__


1. In AppStudio, click the `Portland MapViewer` and the `Folder` at the top. This should open your project files.

2. Explore the project files that were created.

3. Click `Qt` to bring up the Qt editor.

4. Explore the structure of the project.


__Make Native Apps__


1. In AppStudio, click `Make` > `Cloud`.

2. Select `Android` and `iOS`.

3. Click `Request Build` and login to your ArcGIS for Developers or Organization account.

4. Close the `Make` app.

Your build is being processed. You will be notified by email from `AppFactory` when the build has started and when it is finished. In the meantime, go to the next step to explore the project.


__Check the App Deployments__


When you receive the final build email, proceed with these steps.

1. In a Web Browser, login to your ArcGIS Developers or Organization account.

2. Click `My Content` > `My Apps` and you should see:
 * PortlandMapViewer.ipa
 * PortlandMapViewer.apk


