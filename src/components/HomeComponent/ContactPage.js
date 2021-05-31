import React from 'react'
import './HomeComponents.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import img3 from '../../images/store.jpg'
import img4 from '../../images/bungetransp.png'


function ContactPage() {
    return (
        <div className="contactpage">
            <div className="contactpage_left">
                <div>
                    <h4>want a better experiance</h4>
                </div>
                <div>
                    <h4>Download the app</h4>
                </div>
                <div className="contactpage_image">
                    <img src={img3} />
                </div>

            </div>
            <div className="contactpage_right">
                <div className="contactpage_right_header">
                    <img className="contactpage_right_footer-img" src={img4} />
                </div>
                <hr></hr>
                <div className="contactpage_right_footer">
                    <div className="contact_footer_head">
                        About
                   <br></br>
                   Our Business
                   <br></br>
                   Careers
                   <br></br>
                   News
                    </div>

                    <div className="contact_footer">
                        Help
                    <br></br>
                    Contact Us
                    <br></br>
                    Mobile
                    <br></br>
                    Privacy Statement
                    </div>
                    <div className="contact_footer">
                        Contact Details
                    <br></br>
                        call :3783478-3487
                        <br></br>
                        Social Midia
                        <div className="social_media">
                            <FacebookIcon />
                            <LinkedInIcon />
                            <YouTubeIcon />

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContactPage
