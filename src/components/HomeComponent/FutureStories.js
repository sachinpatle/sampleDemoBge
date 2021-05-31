import React, { useState } from 'react'
import './HomeComponents.css'
import Alerts from './Alerts'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'
import MoreVert from '@material-ui/icons/MoreVert'
import {
    Table,
    Button
} from "react-bootstrap";

function FutureStories({ futures,topStories }) {

    const [heading, setHeading] = useState("Top Stories")
    return (
        <div className="futuresstories">
            <div className="weathercashbid_bid">
                <div className="weathercashbid_bid_header">
                    <h3>Futures</h3>
                    <ZoomOutMapIcon />
                    <ZoomOutMapIcon />
                    <ZoomOutMapIcon />
                </div>
                <div className="weathercashbid_bid_body">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Products</th>
                                <th>Last</th>
                                <th>Change</th>
                                <th>Graph</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                futures.map((item,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {item.futures_date}
                                                </td>
                                                <td>
                                                {item.futures_products}
                                                </td>
                                                <td>
                                                {item.last} $
                                                </td>
                                                <td>
                                                {item.change_val}
                                                </td>
                                                <td>
                                                </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="weathercashbid_bid_footer">
                 View More Futures

                  
                    </div>
            </div>
            <div className="future_topstories">
                <Alerts alerts={topStories} heading={heading} />
            </div>
        </div>


    )
}

export default FutureStories
