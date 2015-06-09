### Web AppBuilder Custom Theme

In this lab you will add a custom theme to Web AppBuilder and style the Geocoder Widget.

1. [Download the Bright Theme] (wab/BrightTheme.zip?raw=true) unzip and copy the folder to the themes directory(e.g. webappbuilder\client\stemapp\themes)

2. Click the manifest.json to describe the theme's content by adding the following JSON:
	```json
	{
	  "name": "BrightTheme",
	  "platform": "HTML",
	  "panels": [
	    {
	      "name": "FoldablePanel",
	      "description": "This is foldable panel"
	    },
	    {
	      "name": "SimplePanel",
	      "description": "this is simple panel"
	    }
	  ],
	  "styles": [
	    {
	      "name": "default",
	      "description": "this is default style",
	      "styleColor": "#efa602"
	    },
	    {
	      "name": "yellow",
	      "description": "this is yellow style",
	      "styleColor": "#d8d00f"
	    },
	    {
	      "name": "blue",
	      "description": "this is light blue style",
	      "styleColor": "#27a4d2"
	    },
	    {
	      "name": "red",
	      "description": "this is red style",
	      "styleColor": "#c50143"
	    },
	    {
	      "name": "green",
	      "description": "this is green style",
	      "styleColor": "#93bf2c"
	    },
	    {
	      "name": "purple",
	      "description": "this is purple style",
	      "styleColor": "#660066"
	    }
	  ],
	  "layouts": [
	    {
	      "name": "default",
	      "description": "this is default layout"
	    },
	    {
	      "name": "layout1",
	      "description": "this is layout1"
	    }
	  ],
	  "widgets": [
	    {
	      "name": "HeaderController",
	      "description": "this is theme widget controller"
	    }
	  ],
	  "version": "1.3",
	  "wabVersion": "1.2",
	  "author": "enter your name",
	  "description": "",
	  "copyright": "",
	  "license": "http://www.apache.org/licenses/LICENSE-2.0"
	}
	```

3. Click the styles\blue\style.css and update the CSS classes below to add a light blue theme to the header controller widget, which is a theme based widget. 

	```CSS
	.jimu-main-bgcolor{
	/* #27a4d2 is color for this theme */ 
	  background-color: #27a4d2;
	}
	.jimu-widget-header-controller .jimu-drop-menu{
	  background-color: #27a4d2;
	}
	.jimu-widget-header-controller .jimu-drop-menu .menu-item {
		border-top: 1px solid #abcecf;
	}
	.jimu-header-more-popup {
		background-color: #abcecf;
	}
	.jimu-header-more-popup .icon-node {
		background-color: #27a4d2;
	}
	.jimu-header-more-popup .close {
		background-color: #abcecf;
	}
	.jimu-header-more-popup .close-inner {
		background-color: #27a4d2;
	}
	.jimu-preload-widget-icon-panel>.title,
	.jimu-foldable-panel>.title,
	.jimu-title-panel>.title{
	  background-color: #27a4d2;
	}
	
	.jimu-widget-header-controller .subtitle{
	  color: #ffffff;
	}
	
	.jimu-widget-header-controller .links .link{
	  color: #ffffff;
	}
	
	.jimu-widget-header-controller .signin-section .link{
	  color: #ffffff;
	}
	
	.jimu-widget-header-controller .icon-node{
	  border-right: 1px solid #27a4d2;
	}
	
	.jimu-widget-header-controller .icon-node.jimu-state-selected{
	  background-color: #8db8b9 !important;
	}
	```

4. [Download GeocoderCustom] (wab/GeocoderCustom.zip?raw=true) unzip and copy the folder to the widgets directory(e.g., webappbuilder\client\stemapp\widgets).

5. Click GeocoderCustom/css/style and update the CSS classes below to give the geocoder a white background with no border and a rounded edge.

	```CSS
	.jimu-widget-geocodercustom{
	  width: 225px !important;
	  height: 30px !important;
	  background: white;
	  opacity: .90;
	  border-radius: 30px;
	}
	
	.jimu-widget-geocodercustom .simpleGeocoder .esriGeocoder {
	  background: transparent;
	  border: none;
	
	}
	
	.esriPopup .titlePane {
		background-color: #5491B8
	  	border: none;
	}
	```
6. Click config.json in BrightTheme\layouts\default to add the Geocoder Custom Widget to the Header Controller. Modify the existing uri at titled "widgets/Geocoder/Widget at line 14. 

	```json
	{
	      "uri": "widgets/GeocoderCustom/Widget",
	      "positionRelativeTo": "browser",
	      "position": {
	        "right": 15,
	        "top": 5
	      },
	     "style":{"z-index":1000},
	     "version": "1.2"
	```

7. Click Widgets\HeaderController\Widget.js to add some space for the geocoder in the header controller. Find the _calcContainerAndEmptyWidth method and at the end of the if statement for (containerWidth < this.iconwidth * 2)
   add containerWidth -=280 (Line 678) . 

	```javascript
	containerWidth -= 280//280 width of the geocoder plus margin
	```

8. Create a new application in Web AppBuilder using with the Bright Theme and add the StreetView Widget to the Header Controller.
