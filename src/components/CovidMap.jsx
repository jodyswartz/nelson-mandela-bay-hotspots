import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
import Control from 'react-leaflet-control';
import Paper from '@material-ui/core/Paper';
import { fade } from '@material-ui/core/styles/colorManipulator';

const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.name;
    const confirmedText = country.properties.confirmedText;
    layer.bindTooltip( `<div>
      <h4 className="white-monospace line-height-1 normal-font-weight no-wrap our-tooltip-title-text">
      ${name}
      </h4>
      <h3 className="white-monospace line-height-1 no-margin normal-font-weight">
          <b>${confirmedText}</b> 
      </h3>
  </div> `,{
      sticky: true,
      direction: "auto"});

  };

  return (
    <Map style={{ height: "90vh" }} zoom={10} center={[ -33.96,  25.62]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
       <Control position="topright">
         <Paper style={{padding: '20px'},{backgroundColor: fade('#484848', 0.5)}}>
           <h2><font color="#f8f8ff">Active Cases <b>2193</b> Updated: <b>10-12-2020</b></font></h2>        
         </Paper>
   </Control>
   <Control position="bottomright">
       <Paper style={{padding: '20px'},{backgroundColor: fade('#484848', 0.5)}}>
       <font color="#f8f8ff"><h5>Active 09 December 2020</h5></font>  
            <font color="#f8f8ff">
              <p><b>237</b><h6> Unknown Location</h6></p>
              <p><b>466</b><h6> New Cases</h6></p>
              <p><b>2027</b><h6> Passed Away</h6></p>
              <p><b>43068</b><h6> Recovered</h6></p></font>
         </Paper> 
          </Control>
          <Control position="bottomleft">
       <Paper style={{padding: '10px'},{backgroundColor: fade('#484848', 0.5)}}>
       <font color="#f8f8ff">
          <p><h6> Nelson Mandela Bay Covid-19 Hotspots</h6></p>
        </font>
        </Paper>
        </Control>  
    </Map>
  );
};

export default CovidMap;
