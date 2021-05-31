import React, { useEffect, useState } from 'react'
import './HomeComponents.css'
import Notification from '@material-ui/icons/Notifications';
import MoreVert from '@material-ui/icons/MoreVert';
import {
    Table
} from "react-bootstrap";

function Alerts({ alerts,heading }) {
    return (
        <div className="alerts">
            <div className="alerts_heading">
                {heading  === "Alerts" && <Notification />}
                {heading}
                <div className="alerts_morevert"> <MoreVert />
                </div>
            </div>
            <hr>
            </hr>
            <div className="alerts_body">
                <Table>
                    <tbody className="table_body">
                        {
                            alerts.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {index}
                                        </td>
                                        <td>
                                            {item.story_title}
                                            <br></br>
                                            { heading  === "Top Stories" && <span>{item.stories_timestamp}</span>}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Alerts
