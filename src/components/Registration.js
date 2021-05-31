import React, { useState, useEffect } from 'react'
import Account from './RegistrationComponent/Account'
import NameAndAddress from './RegistrationComponent/NameAndAddress'
import PasswordStrengthMeter from './PasswordStrengthMeter'
import validator from 'validator'
import { REGISTRATION_API,GET_COUNTRY_PRIMARYLOCATION_NEW, GET_COUNTRY_ARRAY, PRIMARY_LOCATIONS } from '../api/api'
import Delete from '@material-ui/icons/Delete';
import './Registration.css'
import {useHistory} from 'react-router-dom'
import {
    Form,
    Jumbotron,
    Row,
    Col,
    Button,
    Container,
    Spinner,
    NavItem
} from "react-bootstrap";
import Select from 'react-select'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import Communication from './RegistrationComponent/Communication'

// import { applyMiddleware, createStore } from 'redux'

// // Logger with default options
// import logger from 'redux-logger'

// const store = createStore(
//     reducer,
//     applyMiddleware(logger)
//   )

function Registration() {
    const history = useHistory()
    const options = [
        { value: 'Mr', label: 'Mr' },
        { value: 'Miss', label: 'Miss' },
        { value: 'Messrs', label: 'Messrs' },
        { value: 'Mr and Mrs', label: 'Mr and Mrs' }
    ];

    // const countryoptions = [
    //     { value: 'UK', label: 'UK' },
    //     { value: 'USA', label: 'USA' },
    //     { value: 'IN', label: 'IN' }
    // ];

    const stateoptions = [
        { value: 'maha', label: 'maha' },
        { value: 'raj', label: 'raj' },
        { value: 'up', label: 'up' }
    ];

    const zipoptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
    ];

    const [loading, setLoading] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [formofaddress, setFormOfAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [lname, setLname] = useState('');
    const [fname, setFname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [company, setCompany] = useState('');
    const [conemailaddress, setConemailaddress] = useState('');
    const [signupalert, setSignupalert] = useState('alertsbyemail');
    const [location, setLocation] = useState(false);
    const [market, setMarket] = useState(false);
    const [cashbidnotification, setCashBidNotification] = useState(false);
    const [mobileno, setMobileNo] = useState('');
    const [streetadress, setStreetAddress] = useState('');
    const [streetadress2, setStreetAddress2] = useState('');
    const [primarylocation, setPrimaryLocation] = useState('');
    const [alternatelocation, setAlternateLocation] = useState('');
    const [message, setMessage] = useState('');
    const [account, setAccount] = useState('');
    const [accountname, setAccountName] = useState('');
    //crops grown
    const [wheat, setWheat] = useState(false);
    const [canola, setCanola] = useState(false);
    const [rice, setRice] = useState(false);
    const [oats, setOats] = useState(false);
    const [peas, setPeas] = useState(false);
    const [soyabean, setSoyabean] = useState(false);
    const [barley, setBarley] = useState(false);
    const [other, setOther] = useState(false);
    const [corn, setCorn] = useState(false)
    const [primarycrop, setPrimaycrop] = useState('')
    const [newcropgrown, setNewcropgrown] = useState({})
    //crops new 

    const [setallcropsArray, setAllCropsArray] = useState([])
    const [isPasswordShown, setisPasswordShown] = useState(false)

    const togglePasswordVisiblity = () => {
        const toggle = !isPasswordShown
        setisPasswordShown(toggle)
    };




    // console.log(setallcrops)

    // var newArrayDataOfOjbect = Object.values(setallcrops)

    // const arrayOfObj = Object.entries(setallcrops).map((e) => ({ [e[0]]: e[1] }));
    // const arrayOfObj_truevalues =  arrayOfObj.map(item,index=>{
    //     alert(JSON.stringify(item))
    // })


    // setallcropsArray()

    console.log("new data array")
    // console.log(arrayOfObj)

    const [age, setAge] = useState('')
    // const [dob, setDOB_Age] = useState('')


    const [isError, setIsError] = useState(false);
    const [newCropGrowns, setnewCropGrowns] = useState([])
    const [newArray, setNewArray] = useState([])

    const [newformdata, setNewfromdata] = useState({
        "account": {
            "username": "e-Zest",
            "password": "Password",
            "dayeOfBirth": ""
        },
        "name": {
            "formOfAddress": "Mr",
            "firstName": "e-Zest",
            "lastName": "Solutions Ltd",
            "company": "Bunge",
            "streetAddress": "xyz",
            "streetAddress2": "xyz",
            "city": "Pune",
            "country": "India",
            "state": "Maharashtra",
            "zip": "123456"
        },
        "communication": {
            "phone": "123456789",
            "emailAddress": "xyz@gmail.com",
            "alerts": {
                "locationAlert": true,
                "marketAlerts": false,
                "cashBidNotifications": false,

                "alertsByEmail": false,
                "alertsByPhone": false,
                "bothEmailAndPhone": false,

                "mobile": "mlmg",
                "message": "hi there"
            },
            "location": {
                "primaryLocation": "Pune",
                "alternateLocation": "Mumbai",
                "additonalAccessArea": "bfkeb",
                "account": "efEKF",
                "accountName": "fnlegn"
            }
        },
        "CropsGrown": []
    })
    const [countryInfo, setCountryInfo] = useState([]);
    const [countryoptions, setCountries] = useState([]);
    const [cropsgrowns, setCropGrowns] = useState([]);
    const [newprimaryLocation, setNewprimaryLocation] = useState([]);
    const [accountlist, setAccountList] = useState([{ Account: "", AccountName: "" }]);

    const [setallcrops, setAllCrops] = useState([])

    const handleChange = (value, key) => {

        // setAllCrops({ ...setallcrops, ...{ [key]: value } })
        setAllCrops([...setallcrops, { Crop: key, Primary: false }]);
    }
    console.log(setallcrops)


    const arrangeDate = (inStr) => {
        if ((typeof inStr == 'undefined') || (inStr == null) ||
            (inStr.length <= 0)) {
            return '';
        }
        var year = inStr.substring(0, 4);
        var month = inStr.substring(5, 7);
        var day = inStr.substring(8, 10);
        return month + '-' + day + '-' + year;
    }

    const setDOB = (value) => {
        console.log(value)
        var selecteddata = new Date(value);
        var diff_ms = Date.now();
        var age_dt = new Date(diff_ms);
        var age = Math.abs(age_dt.getUTCFullYear() - selecteddata.getUTCFullYear());
        var finaldate = arrangeDate(value)
        setAge(finaldate)
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...accountlist];
        list[index][name] = value;
        setAccountList(list);
    };


    const handleRemoveClick = index => {
        const list = [...accountlist];
        list.splice(index, 1);
        setAccountList(list);
    };


    const handleAddClick = () => {
        setAccountList([...accountlist, { Account: "", AccountName: "" }]);
    };

    const pushArray = (value) => {
        value.map(item => {
            newArray.push(item)
        })
    }
    // useEffect(() => {
    //     fetch(PRIMARY_LOCATIONS)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("data below");
    //             console.log(data)
    //             Object.entries(data.PrimaryLocation).map(([key, value]) => {
    //                 newArray.push(<b>{key}</b>)
    //                 pushArray(value)
    //             })
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             alert(err)
    //         })
    // }, [])

    useEffect(() => {
        fetch(GET_COUNTRY_PRIMARYLOCATION_NEW)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                const countryoptions = data.country.map((item) => ({
                    value: item,
                    label: item
                }))
                const cropsgrowns = data.cropsGrown.map((item) => ({
                    key: item,
                    label: item,
                    Primary: false
                }))
                setNewArray(newArray)
                Object.entries(data.primaryLocation).map(([key, value]) => {
                    newArray.push(<b>{key}</b>)
                    pushArray(value)
                })

                const newprimaryLocation = newArray.map((item) => ({
                    value: item,
                    label: item
                }))
                setNewprimaryLocation(newprimaryLocation)
                setCropGrowns(cropsgrowns)
                setCountries(countryoptions)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);



    const vaidation = () => {

        var regexnames = /^[a-zA-Z\_]+$/
        if (fname.length > 2 && fname.length < 50) {
            if (!regexnames.test(fname)) {

                const Error = true
                setIsError(Error)
                toast.error("Please Enter Valid First Name", { position: "top-center" })
                return true
            }

        }
        else {
            const Error = true
            setIsError(Error)
            toast.error("First Name Must be greater than 2 letter and less than 50", { position: "top-center" })
            return true
        }

        if (city.length > 2 && city.length < 50) {
            if (!regexnames.test(city)) {

                const Error = true
                setIsError(Error)
                toast.error("Please Enter Valid City Name", { position: "top-center" })
                return true
            }

        }
        else {
            const Error = true
            setIsError(Error)
            toast.error("City Name Must be greater than 2 letter and less than 50", { position: "top-center" })
            return true
        }


        if (lname.length > 2 && lname.length < 50) {
            if (!regexnames.test(lname)) {
                const Error = true
                setIsError(Error)
                toast.error("Please Enter Valid Last Name", { position: "top-center" })
                return true
            }

        }
        else {
            const Error = true
            setIsError(Error)
            toast.error("Last  Name Must be greater than 2 letter and less than 50", { position: "top-center" })
            return true
        }
        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
        } else {
            const Error = true
            setIsError(Error)
            toast.error("Invalid Password (minLength: 8 minLowercase: 1  minUppercase: 1  minNumbers: 1  minSymbols: 1)", {
                position: "top-center"
            })
            return true
        }
        if (username.length > 2 && username.length < 50) {
        }
        else {
            const Error = true
            setIsError(Error)
            toast.error("User Name Must be more than 2 letter and small than 50", { position: "top-center" })
            return true

        }
        // if (age < 18) {
        //     const Error = true
        //     setIsError(Error)
        //     toast.warn("User must be above 18+", { position: "top-center" })
        //     return true
        // }

        if (validator.isEmail(emailaddress)) {

        } else {
            const Error = true
            setIsError(Error)
            toast.error("Please Enter Valid Email", { position: "top-center" })
            return true
        }
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(phone)) {
            const Error = true
            setIsError(Error)
            toast.error("please give valid phone number", { position: "top-center" })
            return true
        } else if (phone.length > 10 || phone.length < 5) {
            var Error = true
            setIsError(Error)
            toast.error("please give valid phone number", { position: "top-center" })
            return true
        }
        if (!country) {
            var Error = true
            setIsError(Error)
            toast.error("Please Select Country", { position: "top-center" });
            return true
        }
        if (!primarylocation) {
            var Error = true
            setIsError(Error)
            toast.error("Please Select Primary Location", { position: "top-center" });
            return true
        }
        if (!state) {
            var Error = true
            setIsError(Error)
            toast.error("Please Select State", { position: "top-center" });
            return true
        }
        if (mobileno.length > 2) {
            if (!pattern.test(mobileno)) {
                const Error = true
                setIsError(Error)
                toast.error("please give valid Mobile number", { position: "top-center" })
                return true
            }
        }
        if (emailaddress != conemailaddress) {
            var Error = true
            setIsError(Error)
            toast.error("Email Doesn't matches", { position: "top-center" });
            return true
        }
        return false
    }
    const SubmitForm = async (e) => {
        if (e.which === 13) {
            e.preventDefault();
        }
        if (e.target.keyCode === 13) {
            e.preventDefault();
        }
        e.preventDefault();
        const Error = await vaidation()
        //accounts
        newformdata.account.username = username
        newformdata.account.password = password
        newformdata.account.dayeOfBirth = age
        //name
        newformdata.name.formOfAddress = formofaddress.value
        newformdata.name.firstName = fname
        newformdata.name.lastName = lname
        newformdata.name.company = company
        newformdata.name.streetAddress = streetadress
        newformdata.name.streetAddress2 = streetadress2
        newformdata.name.city = city
        newformdata.name.state = state.value
        newformdata.name.zip = zipcode
        newformdata.name.country = country.value
        //communation 
        newformdata.communication.emailAddress = emailaddress
        newformdata.communication.phone = phone
        //communication alerts
        newformdata.communication.alerts.locationAlert = location
        newformdata.communication.alerts.cashBidNotifications = cashbidnotification
        newformdata.communication.alerts.marketAlerts = market
        { signupalert == "alertsbyemail" && (newformdata.communication.alerts.alertsByEmail = true) }

        { signupalert == "alertsbyphone" && (newformdata.communication.alerts.alertsByPhone = true) }

        { signupalert == "bothemailandphone" && (newformdata.communication.alerts.bothEmailAndPhone = true) }

        newformdata.communication.alerts.mobile = mobileno
        //communication locations

        newformdata.communication.location.primaryLocation = primarylocation.value
        newformdata.communication.location.alternateLocation = alternatelocation.value
        newformdata.communication.location.additonalAccessArea = message
        newformdata.communication.location.account = account
        newformdata.communication.location.accountName = accountname


        // { wheat && (primarycrop == "wheatcrop" ? newformdata.CropsGrown[0] = { crop: "Wheat", primary: "true" } : newformdata.CropsGrown[0] = { crop: "Wheat", primary: "false" }) }
        // { canola && (primarycrop == "canolacrop" ? newformdata.CropsGrown[1] = { crop: "Canola", primary: "true" } : newformdata.CropsGrown[1] = { crop: "Canola", primary: "false" }) }
        // { rice && (primarycrop == "ricecrop" ? newformdata.CropsGrown[2] = { crop: "Rice", primary: "true" } : newformdata.CropsGrown[2] = { crop: "Rice", primary: "false" }) }
        // { oats && (primarycrop == "oatscrop" ? newformdata.CropsGrown[3] = { crop: "Oats", primary: "true" } : newformdata.CropsGrown[3] = { crop: "Oats", primary: "false" }) }
        // { corn && (primarycrop == "corncrop" ? newformdata.CropsGrown[4] = { crop: "Corn", primary: "true" } : newformdata.CropsGrown[4] = { crop: "Corn", primary: "false" }) }
        // { soyabean && (primarycrop == "soyabeancrop" ? newformdata.CropsGrown[5] = { crop: "Soyabean", primary: "true" } : newformdata.CropsGrown[5] = { crop: "Soyabean", primary: "false" }) }
        // { barley && (primarycrop == "barleycrop" ? newformdata.CropsGrown[6] = { crop: "Barley", primary: "true" } : newformdata.CropsGrown[6] = { crop: "Barley", primary: "false" }) }
        // { peas && (primarycrop == "peascrop" ? newformdata.CropsGrown[7] = { crop: "Peas", primary: "true" } : newformdata.CropsGrown[7] = { crop: "Peas", primary: "false" }) }
        // { other && (primarycrop == "othercrop" ? newformdata.CropsGrown[8] = { crop: "Other", primary: "true" } : newformdata.CropsGrown[8] = { crop: "Other", primary: "false" }) }

        // if (newformdata.CropsGrown.length > 0) {
        //     { !wheat && (newformdata.CropsGrown[0] = null) }
        //     { !canola && (newformdata.CropsGrown[1] = null) }
        //     { !rice && (newformdata.CropsGrown[2] = null) }
        //     { !oats && (newformdata.CropsGrown[3] = null) }
        //     { !corn && (newformdata.CropsGrown[4] = null) }
        //     { !soyabean && (newformdata.CropsGrown[5] = null) }
        //     { !barley && (newformdata.CropsGrown[6] = null) }
        //     { !peas && (newformdata.CropsGrown[7] = null) }
        //     { !other && (newformdata.CropsGrown[8] = null) }
        // }

        // if (newformdata.CropsGrown.length > 0) {
        //     const newCropGrowns = newformdata.CropsGrown.filter(item => {
        //         if (item != null) {
        //             return item
        //         }
        //     })
        //     setnewCropGrowns(newCropGrowns)
        newformdata.CropsGrown = setallcrops
        // }
        setNewfromdata(newformdata)
        console.log("object below")
        console.log(newformdata)
        if (!Error) {
            setLoading(true)
            fetch(REGISTRATION_API, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newformdata)
            }).then(res => res.text())
                .then(result => {
                    setLoading(false)
                   
                    if (result == 'SUCCESS') {
                        toast.success("User registered successfully", { position: "top-center" });
                        history.push('/Bunge/login')
                    }
                    else {
                        toast.error(result, { position: "top-center" });
                    }
                })
                .catch(err => {
                    setLoading(false)
                    alert(err)
                    toast.error("catch block", { position: "top-center" });
                })
        }
    }

    return (
        <>
            {
                loading ?
                    <div>
                        {<Spinner className="spinner" animation="border" variant="success" />}
                    </div>
                    :
                    <Jumbotron className="registration">
                        {/* <Container>
                            <Row>
                                <Link to="/Bunge/login" ><Button className="signinbutton">Signin</Button></Link>
                            </Row>
                        </Container> */}
                        <Container>
                            <Row>
                                <Col className="text-center registationpage">
                                    <h4>Registration</h4>
                                </Col>
                            </Row>
                        </Container>
                        <br></br>
                        <Form autoComplete="off" onSubmit={(e) => { SubmitForm(e) }}>
                            <Account setUserName={setUserName}
                                setPassword={setPassword}
                                password={password}
                                username={username}
                                isPasswordShown={isPasswordShown}
                                setDOB={setDOB}
                                togglePasswordVisiblity={togglePasswordVisiblity} />
                            <NameAndAddress
                                formofaddress={formofaddress}
                                setFormOfAddress={setFormOfAddress}
                                options={options}
                                fname={fname}
                                setFname={setFname}
                                streetadress={streetadress}
                                setStreetAddress={setStreetAddress}
                                country={country}
                                setCountry={setCountry}
                                countryoptions={countryoptions}
                                lname={lname}
                                setLname={setLname}
                                streetadress2={streetadress2}
                                setStreetAddress2={setStreetAddress2}
                                state={state}
                                setState={setState}
                                stateoptions={stateoptions}
                                company={company}
                                setCompany={setCompany}
                                city={city}
                                setCity={setCity}
                                zipcode={zipcode}
                                setZipcode={setZipcode}
                            />
                            <Communication
                                phone={phone}
                                setPhone={setPhone}
                                emailaddress={emailaddress}
                                setEmailaddress={setEmailaddress}
                                conemailaddress={conemailaddress}
                                setLocation={setLocation}
                                location={location}
                                market={market}
                                setMarket={setMarket}
                                setCashBidNotification={setCashBidNotification}
                                cashbidnotification={cashbidnotification}
                                setSignupalert={setSignupalert}
                                mobileno={mobileno}
                                setMobileNo={setMobileNo}
                                signupalert={signupalert}
                                setConemailaddress={setConemailaddress}
                                conemailaddress={conemailaddress}
                            />
                            <Button variant="info" block>
                                Location/Account Information
        </Button>
                            <br></br>
                            <h6>Select up to two locations.</h6>
                            <Row>
                                <Col>
                                    <Form.Group as={Row}>
                                        <Form.Label className="required-field" column sm={4}>
                                            Primary Location
                   </Form.Label>
                                        <Col sm={6}>
                                            <Select
                                                value={primarylocation}
                                                onChange={(e) => { setPrimaryLocation(e) }}
                                                options={newprimaryLocation}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>

                                        <Form.Label column sm={4}>
                                            Alternate Location
          </Form.Label>
                                        <Col sm={6}>
                                            <Select
                                                value={alternatelocation}
                                                onChange={(e) => { setAlternateLocation(e) }}
                                                options={countryoptions}

                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>You can request any additional access in this area.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                            name="messagetext"
                                            value={message}
                                            onChange={(e) => { setMessage(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <p>Please list the Bunge account(s) information, if you would like on-line access to</p>
                                    <Row>

                                        {/* <Col>
                                            <Form.Group>
                                                <Form.Label style={{ marginLeft: "15px" }}><b>Account</b></Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="account"
                                                        value={account}
                                                        onChange={(e) => { setAccount(e.target.value) }}

                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label style={{ marginLeft: "15px" }} ><b>Account Name</b></Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="accountname"
                                                        value={accountname}
                                                        onChange={(e) => { setAccountName(e.target.value) }}

                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col> */}
                                        <div className="accounts">
                                            <h4>Account</h4>
                                            <h4 className="accountname">AccountName</h4>
                                        </div>
                                        {accountlist.map((data, index) => {
                                            return (
                                                <>
                                                <div className="accountdiv">
                                                    <input
                                                        name="Account"
                                                        placeholder=""
                                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                                        value={data.Account}
                                                        onChange={e => handleInputChange(e, index)}
                                                    />
                                                    </div>
                                                    <div className="AccountName">
                                                    <input
                                                        name="AccountName"
                                                        placeholder=""
                                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                                        value={data.AccountName}
                                                        onChange={e => handleInputChange(e, index)}
                                                    />
                                                    </div>

                                                    {accountlist.length !== 1 &&
                                                        <Delete className="accountdiv"
                                                            onClick={() => handleRemoveClick(index)}
                                                        ></Delete>
                                                    }
                                                    <div className="accountAddbutton">
                                                        {accountlist.length - 1 === index && <Button onClick={handleAddClick}>Add Another Account</Button>}
                                                    </div>
                                                </>
                                            );
                                        })
                                        }

                                    </Row>
                                    <Col>
                                        {/* {accountlist.length - 1 === index && <Button onClick={handleAddClick}>Add Another Account</Button>} */}
                                        {/* <Button>Add Another Account</Button> */}
                                    </Col>
                                </Col>
                            </Row>
                            <br></br>

                            <Button variant="info" block>
                                Crops Grown
                      </Button>
                            <br></br>

                            <div className="primarycrops">
                                <h4>Crops</h4>
                                <h4 className="primary">Primary</h4>
                            </div>

                            <Row>
                                <Col sm={3}>
                                    {
                                        cropsgrowns.map((item) => (
                                            <Form.Check style={{ marginTop: "10px" }}
                                                type="checkbox"
                                                label={item.label}
                                                name={item.label}
                                                onChange={(e) => { handleChange(e.target.checked, item.key) }}
                                            />
                                        ))}
                                </Col>

                                <Col sm={3}>
                                    {
                                        cropsgrowns.map((item) => (
                                            <Form.Check style={{ marginTop: "10px" }}
                                                type="radio"
                                                name="primarycrops"
                                                value={item.label}
                                                onChange={(e) => { setPrimaycrop(e.target.value) }}
                                            />
                                        ))
                                    }
                                </Col>
                            </Row>

                            {/* 
                                    <Form.Group id="Wheat">
                                        <Form.Check
                                            type="checkbox"
                                            label="Wheat"
                                            name="wheat"
                                            onChange={(e) => { setWheat(e.target.checked) }}
                                            checked={wheat}
                                        />
                                    </Form.Group>
                                    <Form.Group id="Canola">
                                        <Form.Check
                                            type="checkbox"
                                            label="Canola"
                                            name="canola"
                                            onChange={(e) => { setCanola(e.target.checked) }}
                                            checked={canola}
                                        />
                                    </Form.Group>
                                    <Form.Group id="Corn">
                                        <Form.Check
                                            type="checkbox"
                                            label="Corn"
                                            name="corn"
                                            onChange={(e) => { setCorn(e.target.checked) }}
                                            checked={corn} />
                                    </Form.Group>
                                    <Form.Group id="Rice">
                                        <Form.Check
                                            type="checkbox"
                                            label="Rice"
                                            name="rice"
                                            onChange={(e) => { setRice(e.target.checked) }}
                                            checked={rice} />
                                    </Form.Group>
                                    <Form.Group id="Soybean">
                                        <Form.Check
                                            type="checkbox"
                                            label="Soybean"
                                            name="soyabean"
                                            onChange={(e) => { setSoyabean(e.target.checked) }}
                                            checked={soyabean} />
                                    </Form.Group>
                                    <Form.Group id="Oats">
                                        <Form.Check
                                            type="checkbox"
                                            label="Oats"
                                            name="oats"
                                            onChange={(e) => { setOats(e.target.checked) }}
                                            checked={oats} />
                                    </Form.Group>
                                    <Form.Group id="Barley">
                                        <Form.Check
                                            type="checkbox"
                                            label="Barley"
                                            name="barley"
                                            onChange={(e) => { setBarley(e.target.checked) }}
                                            checked={barley} />
                                    </Form.Group>
                                    <Form.Group id="Peas">
                                        <Form.Check
                                            type="checkbox"
                                            label="Peas"
                                            name="peas"
                                            onChange={(e) => { setPeas(e.target.checked) }}
                                            checked={peas} />
                                    </Form.Group>
                                    <Form.Group id="Other">
                                        <Form.Check
                                            type="checkbox"
                                            label="Other"
                                            name="other"
                                            onChange={(e) => { setOther(e.target.checked) }}
                                            checked={other} />
                                    </Form.Group> */}



                            {/* <Col sm={9}>
                                    <h4>Primary</h4>
                                    <Form.Check
                                        type="radio"
                                        name="primarycrop"
                                        id="wheatcrop"
                                        value="wheatcrop"
                                        disabled={!wheat}
                                        checked={primarycrop == "wheatcrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}

                                    />

                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="canolacrop"
                                        value="canolacrop"
                                        disabled={!canola}
                                        checked={primarycrop == "canolacrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="corncrop"
                                        value="corncrop"
                                        disabled={!corn}
                                        checked={primarycrop == "corncrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="ricecrop"
                                        value="ricecrop"
                                        disabled={!rice}
                                        checked={primarycrop == "ricecrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="soyabeancrop"
                                        disabled={!soyabean}
                                        value="soyabeancrop"
                                        checked={primarycrop == "soyabeancrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="oatscrop"
                                        value="oatscrop"
                                        disabled={!oats}
                                        checked={primarycrop == "oatscrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="barleycrop"
                                        value="barleycrop"
                                        disabled={!barley}
                                        checked={primarycrop == "barleycrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="peascrop"
                                        value="peascrop"
                                        disabled={!peas}
                                        checked={primarycrop == "peascrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                    <Form.Check style={{ marginTop: "15px" }}
                                        type="radio"
                                        name="primarycrop"
                                        id="othercrop"
                                        value="othercrop"
                                        disabled={!other}
                                        checked={primarycrop == "othercrop"}
                                        onChange={(e) => { setPrimaycrop(e.target.value) }}
                                    />
                                </Col> */}
                            <hr></hr>
                            <Button type="submit" className="submit_button">Submit</Button>
                        </Form>
                    </Jumbotron>
            }
        </>
    )
}

export default Registration
