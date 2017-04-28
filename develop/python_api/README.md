Introduction and Installation Steps:

	You have numerous options for installing the ArcGIS API for Python. Refer to the Get Started documentation at https://developers.arcgis.com/python/guide/install-and-set-up/ to find out more on each option. GeoDev HackerLabs will use the Anaconda Distribution as its method of instruction.
 
	Continuum Analystics' Anaconda is a comprehensive Python (and R) package management system comprising more than 100 packages plus mechanisms for installing hundreds of open source packages accessed through repositories called Channels. Channels may be a default set of cloud locations, such as Anaconda Cloud, or private repositories created by individuals or organizations.

	       	1. Navigate to the Download page at https://www.continuum.io/downloads and proceed with installation of the appropriate software for your Operating System. 

	Once installed, interaction with the Anaconda installation primarily occurs through its command-line tool called conda. Conda manages packages and dependencies so they don't interfere with each other through a mechanism called an environment, which is a folder or directory with a specific collection of packages and their dependencies. Core python and other default packages are installed into the default environment, named root. You can choose to keep this core environment isolated and untouched, or install additional packages into the environment before creating environments of your own. Refer to the core conda documentation at https://conda.io/docs/intro.html for instructions on managing environments.

	Esri distributes the ArcGIS Python API in a conda package called arcgis accessible at Esri's channel named esri. 

		2. Install the arcgis package with the following command:
			'conda install -n <environment_name> -c esri arcgis' 
				*NOTE: if you do not enter an environment name, the package installs into the root environment.

	Environments much be activated in order to use them.
		3. Activate the environment into which you installed arcgis. See topic at https:/conda.io/docs/test-drive.html#managing-conda for specific commands based on your OS.

	The ArcGIS API for Python integrates with the Jupyter Notebook. See documentation at https://jupyter.org for more about the Jupyter suite of software and tools. The ArcGIS API contains a map widget for visualization and interaction. Browse to a directory containing Python notebooks to use the notebook front-end application to interact with the api. 
		4. 'jupyter notebook' 

	Full documentation including samples and an API Reference located at https://developers.arcgis.com/python.

