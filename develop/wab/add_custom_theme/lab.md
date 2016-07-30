### Web AppBuilder Custom Theme

In this lab you will add a custom Theme to Web AppBuilder.

1. Download the [Hackerlab Theme](HackerlabTheme.zip?raw=true) unzip it and copy the folder to the themes directory for Web AppBuilder(e.g., webappbuilder\client\stemapp\themes).

2. Click the HackerlabTheme folder and edit the manifest.json to describe the theme's content(e.g., styles, panels, and layouts). This informs Web AppBuilder which files to load for the theme.
 
```json
 {
  "name": "HackerlabTheme",
  "platform": "HTML",
  "panels": [
    {
      "name": "FoldablePanel",
      "description": "This is foldable panel"
    }
  ],
  "styles": [
    {
      "name": "default",
      "description": "this is default style",
      "styleColor": "#2196f3"
    },
    {
      "name": "medium-grey",
      "description": "this is gray style",
      "styleColor": "#6E6E6E"
    },
    {
      "name": "black-grey",
      "description": "this is black grey style",
      "styleColor": "#2E3641"
    },
    {
      "name": "white",
      "description": "this is white with blue style",
      "styleColor": "#FFFFFF"
    }
  ],
  "layouts": [
    {
      "name": "default",
      "description": "this is default layout"
    }
  ],
  "widgets": [
    {
      "name": "HeaderController",
      "description": "this is theme widget controller"
    }
  ],
  "version": "2.1",
  "wabVersion": "2.1",
  "author": "Esri Inc",
  "description": "HackerlabTheme",
  "copyright": "",
  "license": "http://www.apache.org/licenses/LICENSE-2.0"
}
```  
3. .

4. 
