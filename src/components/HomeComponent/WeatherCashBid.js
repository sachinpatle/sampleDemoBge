import React from 'react'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'
import MoreVert from '@material-ui/icons/MoreVert'
import {
    Table
} from "react-bootstrap";


function WeatherCashBid({ cashbid }) {
    return (
        <div className="weathercashbid">
            <div className="weathercashbid_weather">
                <div className="weathercashbid_weather-header">
                    <div>
                        Forecast
                        </div>
                    <div>
                        Radar
                        </div>
                    <div>
                        Current
                        </div>
                    <ZoomOutMapIcon />
                    <MoreVert />
                </div>
                <hr></hr>
                <div className="weathercashbid_weather-body">

                    <div>

                    </div>

                    <div>
                        <h4>Today</h4>
                        <h4>31 degree</h4>
                        <h4>17 </h4>
                        <h4>Sunny</h4>

                    </div>


                    <div>

                    </div>

                </div>
                <hr></hr>

                <div className="weathercashbid_weather-footer">
                    <div>
                        Sunrise
                        7.54AM
                        Feets Like
                        33f
                  </div>

                    <div>
                        Sunrise
                        7.54AM
                        Feets Like
                        33f

                  </div>
                  Sunrise
                  7.54AM
                  Feets Like
                  33f

                  <div>

                    </div>

                </div>

            </div>
            <div className="weathercashbid_bid">
                <div className="weathercashbid_bid_header">
                    <h3>CASH BID</h3>
                    <ZoomOutMapIcon />
                    <ZoomOutMapIcon />
                    <ZoomOutMapIcon />
                </div>
                <div className="weathercashbid_bid_body">
                    <Table> 
                        <thead>
                            <tr>
                                <th>Date </th>
                                <th>Products</th>
                                <th>Quote</th>
                                <th>Basis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cashbid.map((item,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {item.date}
                                            </td>
                                            <td>
                                                {item.products}
                                            </td>
                                            <td>
                                                {item.quote} $
                                            </td>
                                            <td>
                                                {item.basis}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>

                </div>
                <div className="weathercashbid_bid_footer">
                    Register
                    </div>

            </div>
        </div>
    )
}
export default WeatherCashBid
