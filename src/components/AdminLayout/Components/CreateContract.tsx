import React, { useState } from 'react'
import './CreateContract.css'

import HorizontalLinearStepper from './StepperBar'
import { Container, Paper, Box, Typography, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldsOutlined } from '@material-ui/icons';
import {
    Form,
    Jumbotron,
    Row,
    Col,
    Button
} from "react-bootstrap";

// interface Props {
//     SubmitFrom:(values:Values)=>void;
// }


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: "green"
    }
}));



function CreateContract() {
    let styles = require("./newContract.css");
    const classes = useStyles();
    const [selectCommodity, setSelectCommodity] = useState("")
    const [commodityQuality, setCommodityQuality] = useState("")

    const handleSubmit = (e: any) => {

    }


    return (
        <div>
            <div className="createcontract_header">
                <div className="createcontract_header_heading">
                    <div className="createcontract_text">
                        <h3>Create Contract</h3>
                    </div>
                    <div className="createcontract_bottons">
                        <button className="createContract_purchase">
                            Purchase
                     </button>
                        <button className="createContract_sales">
                            Sales
                     </button>
                    </div>
                    <div className="createcontract_header_stepper">
                        <HorizontalLinearStepper />
                    </div>
                </div>
            </div>


            <div className="createcontract_form">
                <Form onSubmit={(e) => {
                    handleSubmit(e)
                }}
                >

                    <Row>
                        <Col>
                      
                                  <Col>
                                    <label className="pure-material-textfield-outlined" >
                                        <input placeholder=" " />
                                        <span>Textfield</span>
                                    </label>
                                </Col>
                           
                        </Col>
                    </Row>
                </Form>




                {/* <Container className={classes.root}>
                     <Paper component={Box}>
                         <Grid container>
                             <Grid item md={4}>
                                 <TextField
                                     label="name"
                                     placeholder="enter name here"
                                     variant="outlined"
                                 ></TextField>
                             </Grid>
                             <Grid item md={4}>
                                 <TextField
                                     label="Commodity Description"
                                     placeholder="Discription of the commodity will be displayed here"
                                     variant="outlined"
                                     
                                 > </TextField>
                             </Grid>
                             <Grid item md={4}>
                                 <TextField
                                     label="Origin"
                                     placeholder="Origin Details"
                                     variant="outlined"
                                 > </TextField>
                             </Grid>
                         </Grid>
                     </Paper>
                 </Container> */}
            </div>

            <div className="createcontract_footer">




            </div>


        </div >
    )
}

export default CreateContract
