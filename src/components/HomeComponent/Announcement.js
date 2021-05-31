import React from 'react'
import img1 from '../../images/f2.jpg'
import img2 from '../../images/f3.jpg'
import img3 from '../../images/f4.jpg'
import OwlCarousel from "react-owl-carousel"
import OwlCarousel1 from "react-owl-carousel"
import './HomeComponents.css'
function Announcement({ data }) {
    const img1 = 'https://res.cloudinary.com/sachininstaclone/image/upload/v1620968576/f2_qxpx8m.jpg'
    return (
        <div className="announcement">
            <div className="announcement_header">
                <h4 className="announcement_text">Announcement</h4>
            </div>
            <div className="announcement_carousel">
                    <OwlCarousel loop margin={10} nav>
                        {
                            data.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <img className="item" src={item.image} alt="image" />
                                        <div className="announcement_text">{item.title}</div>
                                    </li>
                                )
                            })
                        }
                    </OwlCarousel>
                {/* {
                    <OwlCarousel  loop margin={10} nav>
                        {
                            data.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <img src={img1}  />
                                        <div  className="announcement_text">{item.agri_image_title}</div>
                                        </li>
                                )
                            })
                        }

                    </OwlCarousel>

                } */}
            </div>

        </div>
    )
}

export default Announcement
