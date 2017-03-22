### Working with proxy

This lab covers the basics for allowing public, _no-login-required_ access to secure ArcGIS Online services using a service proxy hosted on ArcGIS Online.

1. Click [work_with_proxy/index.html](../work_with_proxy/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Go to your ArcGIS Developers account, select [Dashboard](https://developers.arcgis.com/dashboard) and then select [Create New App](https://developers.arcgis.com/applications/#/new/).

3. Give your new application a title, fill in the appropriate tags and give it a description. When you are done click `Register New Application`.

4. Within the applications page select the `Authentication` tab at the top. Scroll down until you see the section titled `Configure New Service Proxy`.

5. Using the pulldown menu under `Service` select `route`. Then set `Request Limit` to `3` per second. Then click `Configure`.

6. Copy the `Proxy Url` and replace the `RouteTask.url` string in your jsbin app. The app should now be ready to use.