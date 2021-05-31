import React from 'react'

import img1 from '../../images/f8.jpg'
import img2 from '../../images/f9.jpg'
import img3 from '../../images/f10.jpg'
import Carousel from 'react-elastic-carousel';
import './HomeComponents.css'
import PropTypes from 'prop-types'

function AgricultureNews({ agrinews }) {
    // alert(JSON.stringify(agrinews))
    var img1 = 'https://res.cloudinary.com/sachininstaclone/image/upload/v1620968576/f2_qxpx8m.jpg'
    return (
        <div className="agriculture">
            <div className="agriculture_header">
                <h4 className="agriculture_text">AgricultureNews</h4>
            </div>
            <div className="agriculture_carousel">
                <Carousel>
                    {
                        agrinews.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img className="agri_item" src={item.agri_image} alt="image" />
                                    <div className="agriculture_title">{item.agri_image_title}</div>
                                </li>
                            )
                        })
                    }
                </Carousel>
            </div>

        </div>
    )
}



AgricultureNews.propTypes = {
    agrinews: PropTypes.array.isRequired,
}
export default AgricultureNews
