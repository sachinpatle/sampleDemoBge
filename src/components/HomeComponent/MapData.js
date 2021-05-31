import React, { useState, useEffect } from 'react'
import './HomeComponents.css'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'
import MoreVert from '@material-ui/icons/MoreVert'
import { MapContainer, LeafletMap, TileLayer } from 'react-leaflet';

import {
  Table
} from "react-bootstrap";


function MapData({ officeaddress }) {
    const [mapCenter, setMapCenter] = useState({ lat: 52.3676, lng: 4.9041 });
    const [mapZoom, setMapZoom] = useState(3);

    const officedata = officeaddress

    return (
        <div className="mapdata">
            <div className="mapdata_headers">
                <div>
                    information
                </div>
                <div>
                    Map
                </div>
                <div>
                    Staff
                </div>
                <div>
                    Marketing Options
                </div>
                <div>
                    <ZoomOutMapIcon />
                </div>
                <div>
                    <MoreVert />
                </div>
            </div>
            <hr></hr>
            <div className="mapdata_map_address">
                <div className="mapdata_map">
                    <MapContainer center={mapCenter} zoom={mapZoom}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

                    </MapContainer>
                </div>

                <div className="mapdata_address">
                    <div className="mapdata_address_photo">

                    </div>
                    <div className="mapdata_address_addressdata">
                        <h2>Bunge Building</h2>
                        <div className="mapdata_address_alladdress">
                            
                            {
                                officeaddress.map((item,index) => {

                                    return (<li key={index}>
                                
                                        <div>
                                            <b>Address</b>
                                            <br></br>
                                            {item.office_add}
                                        </div>
                                        <div>
                                            <b> Office Hours</b>
                                            <br></br>
                                            {item.office_hours}
                                           
                                        </div>


                                        <div>
                                            <b>  Receiving Hours</b>
                                            <br></br>
                                            {item.receiving_hrs}
                                        </div>
                                    </li>
                                    )
                                })

                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MapData
