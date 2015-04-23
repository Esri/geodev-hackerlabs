### Web AppBuilder Custom Theme

In this lab you will add a custom theme to Web AppBuilder and style the Geocoder widget.

1. Download the Bright Theme unzip and copy the folder to the themes directory(e.g. webappbuilder\client\stemapp\themes)

2. Click the manifest.json to describe the theme's content and update the JSON:
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
  "author": "Dmartinez",
  "description": "",
  "copyright": "",
  "license": "http://www.apache.org/licenses/LICENSE-2.0"
}

```

