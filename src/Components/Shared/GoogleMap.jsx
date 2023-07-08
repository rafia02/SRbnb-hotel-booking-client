import React from 'react';
import GoogleMapReact from 'google-map-react';


const GoogleMap = ({ center, zoom }) => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {/* Add any markers or components related to the map here */}
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;