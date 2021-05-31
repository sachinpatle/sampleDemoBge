import React, { useState, useEffect } from 'react'
import './Contracts.css'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Buttonmaterialui from '@material-ui/core/Button';
import { Row, Col, Form, Button, Table } from 'react-bootstrap'
import bootButton from 'react-bootstrap/Button'
import Select from 'react-select';
import { CONTRACTS_POST, CONTRACTS_GET } from '../../../api/api'
import { ToastContainer, toast } from 'react-toastify'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {arrangeDate} from '../../../utils/utils'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';
import { nativeTouchData } from 'react-dom/test-utils';

function Contracts() {
    const [todate, setToDatevalue] = useState("")
    const [fromdate, setFromDatevalue] = useState("")
    const [contractnumber, setContractNumber] = useState("")
    const [contractdata, setContractDate] = useState("")
    const [plant, setPlant] = useState("")
    const [pricetype, setPriceType] = useState("")
    const [commodityproduct, setCommodityProduct] = useState("")
    const [vehicletype, setVehicleType] = useState("")
    const [contractQuantity, setContractQuantity] = useState("")
    const [formvalue, setformvalue] = useState({
        "plant": "text of the image 1",
        "price_type": "cash",
        "commodity_product": "corn",
        "contract_quantity": "23",
        "vehicle_type": "by truck",
        "contract_date": "2021-05-25",
        "user_id": 265
    })

    const vehicleoption = [
        { value: 'Truck', label: 'Truck' },
        { value: 'Car', label: 'Car' },
        { value: 'Bike', label: 'Bike' }
    ];

    const columns = [
        { dataField: "contract_number", text: "Contract" },
        { dataField: "plant", text: "Plant" },
        { dataField: "contract_date", text: "Contract Date" },
        { dataField: "commodity_product", text: "Commodity Product" },
        { dataField: "price_type", text: "Price Type" },
        { dataField: "contract_quantity", text: "Contract Quantity  " },
        { dataField: "vehicle_type", text: "Vehicle Type" },
    ]


    const priceoption = [
        { value: 'FlatPrice', label: 'FlatPrice' },
        { value: 'CashPrice', label: 'CashPrice' },
        { value: 'Online', label: 'Online' },
        { value: 'Offline', label: 'Offline' }
    ];

    const paginationoptions = {
        sizePerPageList: [
            {
                text: "5",
                value: 5,
            },
            {
                text: "10",
                value: 10,
            },
        ],
    };

    const saveContract = (formvalue) => {
        fetch(CONTRACTS_POST, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formvalue)
        })
            .then(res => res.text())
            .then(res => {
                toast.success(res, { position: "top-center" });
                loaddata()
            })
            .catch((err) => {
                console.log(err)
            })


    }
    const SubmitForm = (e) => {
        e.preventDefault();
        formvalue.plant = plant
        formvalue.price_type = pricetype.value
        formvalue.commodity_product = commodityproduct
        formvalue.contract_quantity = contractQuantity
        formvalue.vehicle_type = vehicletype.value
        formvalue.contract_date = contractdata
        formvalue.user_id = 265
        setformvalue(formvalue)
        saveContract(formvalue)
    }

    const setClearAll = () => {
        setContractNumber("")
        setContractDate("")
        setPlant("")
        setPriceType("")
        setCommodityProduct("")
        setVehicleType("")
        setContractQuantity("")
        loaddata()
    }

    const setDate = (value) => {
        const formateddate = arrangeDate(value)
        setContractDate(formateddate)
    }

    const setToDate = (value)=>{
        const formateddate =  arrangeDate(value)
        setToDatevalue(formateddate)
    }

    const setFromDate = (value)=>{
        const formateddate =  arrangeDate(value)
        alert(formateddate)
        setFromDatevalue(formateddate)
    }

    const applyFilter = async (plant, contractnumber, commodityproduct) => {
        //1 st plant
        if (plant) {
            const allContractsNew = allContracts.filter(item =>
                item.plant.toLowerCase().includes(plant.toLowerCase())
            )
            await setallContracts(allContractsNew)
        }
        //2nd contractnumber
        if (contractnumber) {
            const allContractsNew = allContracts.filter(item =>
                item.contract_number.toString().toLowerCase().includes(contractnumber.toString().toLowerCase())
            )
            await setallContracts(allContractsNew)
        }
        //3rd commodityproduct
        if (commodityproduct) {
            const allContractsNew = allContracts.filter(item =>
                item.commodity_product.toLowerCase().includes(commodityproduct.toLowerCase())
            )
            await setallContracts(allContractsNew)
        }
        //4th DATE
        if (contractdata) {
            var finaldate = arrangeDate(contractdata)
            const allContractsNew = allContracts.filter(item =>
                item.contract_date.toLowerCase().includes(finaldate.toLowerCase())
            )
            await setallContracts(allContractsNew)
        }
    }
    const [toggle, settogglebutton] = useState(true)
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const settoggle = (value) => {
        settogglebutton(value)
    }

    const [allContracts, setallContracts] = useState([])
    const loaddata = () => {
        fetch(CONTRACTS_GET, {
            method: "get"
        })
            .then(res => res.json())
            .then(res => {
                setallContracts(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        loaddata()
    }, [])
    const classes = useStyles();
    return (
        <div className="contracts">
            <div className="contracts_header">
                <div className="contracts_header_heading">
                    <h6>Contracts Table</h6>
                </div>
                <div className="contracts_header_icons">
                    <SearchIcon />
                    <ViewWeekIcon />
                    <OpenInNewIcon />
                </div>
                <div className="contracts_header_button">
                    {toggle &&
                        <Buttonmaterialui
                            onClick={(e) => { settoggle(!toggle) }}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<ArrowDropUpIcon />}
                        >
                            Filter
                         </Buttonmaterialui>
                    }
                    {!toggle &&
                        <Buttonmaterialui
                            onClick={(e) => { settoggle(!toggle) }}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<ArrowDropDownIcon />}
                        >
                            Filter
                       </Buttonmaterialui>
                    }

                </div>
            </div>
            <hr></hr>
            {
                toggle &&
                <div className="constracts_fields">
                    <Form autoComplete="off" onSubmit={(e) => { SubmitForm(e) }}>
                        <Row className="constract_row">
                            <Col>
                                <Form.Group>
                                    <Col>
                                        <Form.Label><b>Contract Number</b></Form.Label>
                                    </Col>
                                    <Col sm={11}>
                                        <Form.Control
                                            type="text"
                                            name="text"
                                            value={contractnumber}
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            onChange={(e) => { setContractNumber(e.target.value) }}
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                             
                                    <Col>
                                        <Form.Label><b>Contract Date</b></Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="date"
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            name="date"
                                            value={contractdata}
                                            onChange={(e) => { setDate(e.target.value) }}
                                            required
                                        >
                                        </Form.Control>
                                    </Col>

                                {/* frmdata */}
                                <Col>
                                        <Form.Label><b>From Date</b></Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="date"
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            name="date"
                                            value={fromdate}
                                            onChange={(e) => { setFromDate(e.target.value) }}
                                            required
                                        >
                                        </Form.Control>
                                    </Col>

                                   

                            </Col>
                            <Col>
                                <Form.Group>
                                    <Col>
                                        <Form.Label><b>Plant</b></Form.Label>
                                    </Col>
                                    <Col sm={11}>
                                        <Form.Control
                                            type="text"
                                            name="text"
                                            value={plant}
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            onChange={(e) => { setPlant(e.target.value) }}
                                            required
                                        >
                                        </Form.Control>
                                    </Col>

                                </Form.Group>

                                <Form.Group>
                                    <Col>
                                        <Form.Label><b>Price Type</b></Form.Label>
                                    </Col>
                                    <Col sm={11}>
                                        <Select
                                            value={pricetype}
                                            onChange={(e) => { setPriceType(e) }}
                                            options={priceoption}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Col>
                                        <Form.Label><b>Commodity Product</b></Form.Label>
                                    </Col>
                                    <Col sm={11}>
                                        <Form.Control
                                            type="text"
                                            name="text"
                                            value={commodityproduct}
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            onChange={(e) => { setCommodityProduct(e.target.value) }}
                                            required
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col>
                                        <Form.Label><b>Vehicle Type</b></Form.Label>
                                    </Col>
                                    <Col sm={11}>
                                        <Select
                                            value={vehicletype}
                                            onChange={(e) => { setVehicleType(e) }}
                                            options={vehicleoption}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Col>
                                        <Form.Label><b>Contract Quality</b></Form.Label>
                                    </Col>

                                    <Col sm={11}>
                                        <Form.Control
                                            type="text"
                                            name="text"
                                            value={contractQuantity}
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            onChange={(e) => { setContractQuantity(e.target.value) }}
                                            required
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                 {/* TODATA */}

                                 <Col>
                                        <Form.Label><b>To Date</b></Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="date"
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            name="date"
                                            value={todate}
                                            onChange={(e) => { setToDate(e.target.value) }}
                                            required
                                        >
                                        </Form.Control>
                                    </Col>




                            </Col>
                        </Row>
                        <div className="buttons">
                            <div>
                                <Button className="applyfilter" onClick={() => { applyFilter(plant, contractnumber, commodityproduct, contractdata) }}>Apply Filter</Button>
                            </div>
                            <div>
                                <Button className="clearallbutton" onClick={() => { setClearAll() }}>Clear All</Button>
                            </div>
                            <div>
                                <Button type="submit" className="signinbutton">Save</Button>
                            </div>
                        </div>

                    </Form>
                    <br></br>
                    <br></br>
                </div>

            }


            <div className="contracts_body">

                <BootstrapTable
                    keyField="name"
                    data={allContracts}
                    columns={columns}
                    pagination={paginationFactory(paginationoptions)}

                />


                {/* <Table>
                    <thead>
                        <tr>
                            <td><b>Contract #</b></td>
                            <td><b>Plant</b></td>
                            <td><b>Contract Date</b></td>
                            <td><b>Commodity Product</b></td>
                            <td><b>Price Type</b></td>
                            <td><b>Contract Qunatity</b></td>
                            <td><b>Vehicle Type</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allContracts.map((item, index) => {
                                return (
                                    <tr>
                                        <td>
                                           {item.contract_number} 
                                        </td>

                                        <td>
                                            {item.contract_date}
                                        </td>

                                        <td>
                                            {item.plant}
                                        </td>

                                        <td>
                                            {item.price_type}
                                        </td>

                                        <td>
                                            {item.commodity_product}
                                        </td>

                                        <td>
                                            {item.contract_quantity}
                                        </td>

                                        <td>
                                            {item.vehicle_type}
                                        </td>
                                    </tr>

                                )
                            })


                        }

                    </tbody>
                </Table> */}


            </div>
            <div className="contracts_footer">

            </div>
        </div>
    )
}

export default Contracts
