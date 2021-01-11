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
      ${name.slice(18)}
      </h4>
      <h3 className="white-monospace line-height-1 no-margin normal-font-weight">
          <b>${confirmedText}</b> 
      </h3>
  </div> `,{
      sticky: true,
      direction: "auto"});
  
      layer.on({
        mouseover: (event) => {
                      event.target.setStyle({
                      color: "#f8f8ff"
                        });
                                },
        mouseout: (event) => {
          event.target.setStyle({
          color: "#000000",
                });
                  },
      });

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
           <h2><font color="#f8f8ff">Active Cases <b>997</b> Updated: <b>10-01-2021</b></font></h2>        
         </Paper>
   </Control>
   <Control position="bottomright">
       <Paper style={{padding: '20px'},{backgroundColor: fade('#484848', 0.5)}}>
       <font color="#f8f8ff"><h5>Active 10 January 2021</h5></font>  
            <font color="#f8f8ff">
              <p><b>80</b><h6> Unknown Location</h6></p>
              <p><b>136</b><h6> New Cases</h6></p>
              <p><b>2354</b><h6> Passed Away</h6></p>
              <p><b>50041</b><h6> Recovered</h6></p></font>
         </Paper> 
          </Control>
    </Map>
  );
};

export default CovidMap;
