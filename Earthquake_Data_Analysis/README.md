# **Data Visualization: Mapping Earthquakes with JavaScript & APIs**

## **Project Overview :-**
This analysis project consists of creation of interactive map which is easy to use and understand in order to make strategic decisions in relevance to the requirement. 

In this project, JavaScript and D3(Data Driven Documents) library has been used to build an interactive world map. Also, GeoJSON has been used. GeoJSON is a type of JSON file specifically designed to host geographical information. 

GeoJSON data can be found in many apps such as ride sharing, navigation and food and package delivery services and many more similar apps. Even the apps in a mobile phone that allow you to track your location, can use and store GeoJSON data. The GeoJSON format is the industry standard for representing simple geographical features and non-spatial attributes.


Furthermore, we have used the following geographical features: 
-	**Points:** which contain addresses and locations like latitude and longitude coordinates for earthquakes 
-	**Line strings:** which contain coordinates for the boundaries of tectonic plates 

Additionally, some non-spatial attributes have been accessed from the selected GeoJSON file. 

Non-spatial attributes are those which are independent of all geometric considerations and are packaged in a hierarchal structure in a GeoJSON file . Some examples of non-spatial attributes are elevation , temperature, rain accumulation, hail size, tornado / hurricane strength , magnitude of an earthquake .

Using JSON and D3 library, GeoJSON data and tectonic plate data have been traversed and retrieved to populate a geographical map . For this, **Leaflet.JS** library and **Mapbox API** have been used. 

### **Purpose of project**
The project may be used by a disaster reporting network company to tell data driven stories on disasters around the world. For example:-  earthquakes,  making earthquakes map informative and easy to use on desktop and mobile phones to generate positive buzz about the disaster reporting network. 

## **Results :-**
As a result to the objective of populating a geographical world map with earthquake and technology tectonic plates data, from a GeoJSON file, **each earthquake has been represented by a circle and a colour** where a higher magnitude has a larger diameter and is darker in colour than those which are lower in magnitude. 

When a user clicks on any circle, representing an earthquake on the map, it displays **a popup marker, that provides information about magnitude and location of selected earthquake**. 

Geographical Maps have been hosted by making API requests to a server using Mapbox API. 

Multiple map layers have been added using leaflet control plugins to add user interface controls that helps a user to see Maps in three styles namely **Street view, Satellite view and Dark view**.

## **Summary :-**
Latest earthquake data from a GeoJSON file has been retrieved from the US Geological Survey website where the data is traversed and retrieved using D3, JSON and Leaflet library. 

The retrieved data is plotted on a world geographical map using Mapbox API displaying magnitude and location of an earthquake in each popup marker where an earthquake is depicted in the form of circle. These circles are of different sizes and colors depending upon magnitude of earthquakes. 

It also displays a legend providing the context of the magnitude and colour of an earthquake data . Larger magnitude implies larger radius of the circle. 

Finally, to illustrate the relationship between location and frequency of seismic activity and electronic plates, fault lines on the map have been added. 

Thus, an interactive map which displays street, satellite and dark view to present tectonic plates, earthquakes and major earthquakes on the geographical world map for the past seven days have been plotted for data visualization to provide insights by the disaster reporting network to the concerned authorities in order to make future decisions .

**RESULTING MAPS**
![](https://github.com/kirtibhandari/Mapping_Earthquakes/blob/main/Earthquake_Data_Analysis/Resources/maps.png)


