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
3. Launch Web AppBuilder using the startup batch file. Create a New Default (2D) app. Give it a title `Custom Theme` and click `OK`.

4. Click the HackerlabTheme and click `Save`. Notice the default `Style` is light blue and contains one `Layout`, but the header controller is dark gray. Now you're going to style this theme using CSS.
 
5. Click the `HackerlabTheme\styles\default` folder and edit the style.css. The first thing we want to do is import a new font, change the background color and widgets background color and update the title and subtitle color.

```CSS
    @import url(//fonts.googleapis.com/css?family=Ubuntu);
    .jimu-main-font{
    font-family: 'Ubuntu';
    }
    .jimu-main-background{
    background-color: #fff;
    }
    .jimu-widget-homebutton,
    .jimu-widget-mylocation,
    .jimu-widget-zoomslider .zoom,
    .jimu-widget-homebutton .HomeButton .home,
    .jimu-widget-mylocation .place-holder{
    background-color: #2196f3;
    opacity: .9;
    }
    .jimu-title,
    .jimu-subtitle {
    color: #323232;
    }
```
