### Web AppBuilder Custom Theme

In this lab you will add a custom Theme to Web AppBuilder.

1. Download the [Hackerlab Theme](HackerlabTheme.zip?raw=true) unzip it and copy the folder to the themes directory for Web AppBuilder(e.g., webappbuilder\client\stemapp\themes).

2. Click the HackerlabTheme folder and edit the manifest.json to describe the theme's content as below(e.g., styles, panels, and layouts). This informs Web AppBuilder which files to load for the theme.
 
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
3.  Launch Web AppBuilder using the startup batch file. Create a New Default (2D) app. Give it a title `Custom Theme` and click `OK`.

4.  Click the HackerlabTheme and click `Save`. Notice the default `Style` is light blue and contains one `Layout`, but the header controller is dark gray. We are going change this to match our theme using CSS.
 
5.  Click the `HackerlabTheme\styles\default` folder and edit the style.css. The first thing we want to do is add some CSS to import a new font, change the background color, add a border, and update the title and subtitle color. Save these changes and refresh the page. 
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
      .jimu-widget-header-controller{
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      border-bottom: 2px solid #323232;
    }
```

6.   Now that we have modified the default style the widget icons in the header controller are not visible, they need to be resized, and need margin properties to allign the icons. Add the CSS to implement these changes.    

```CSS
    .jimu-widget-header-controller .icon-node{
    opacity: 1;
    background: #323232;
    border-right: 0;
    height: 30px !important;
    width: 30px !important;
    margin-top: 4px;
    margin-right: 10px;
    -moz-box-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    }
    .jimu-widget-header-controller .icon-node img{
    height: 14px;
    width: 14px;
    }
```

7.  WebAppBuilder has state classes which don't have any CSS rules. Add selected state styles to match the current theme of blue when an icon is selected. 

```CSS
    .jimu-widget-header-controller .icon-node.jimu-state-selected{
    border-top: 0;
    background-color: #2196f3;
    }
```

8.  Widgets can be grouped when the group display mode is `show in Dropdown Menu` in the HeaderController widget. To align the drop-down caret correctly, place the drop-down caret at the bottom of the icon node.

```CSS
   .jimu-widget-header-controller .drop-triangle{
   bottom: 5px;
   margin-left: -5px;
   } 
```
    Change the background color of the drop-down menu to dark gray.

```CSS
   .jimu-widget-header-controller .jimu-drop-menu {
   background-color: #323232;
   }
````
    Make the widget icons in the drop-down menu the same size as other widget icons and align them correctly.

```CSS
   .jimu-widget-header-controller .jimu-drop-menu .menu-item img{
   width: 14px;
   height: 14px;
   margin-top: 13px;
   }

    Make the text labels in the drop-down menu smaller and change the link color in the header to gray.

```CSS
   .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{
   font-size: 12px;
   }
   .jimu-link:link, .jimu-link:visited{
   color: #848484;
   }    
