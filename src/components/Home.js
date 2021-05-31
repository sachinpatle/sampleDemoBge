import React, { useEffect, useState } from 'react'
import HomeIntro from './HomeComponent/HomeIntro'
import Alerts from './HomeComponent/Alerts'
import MapData from './HomeComponent/MapData'
import WeatherCashBid from './HomeComponent/WeatherCashBid'
import Announcement from './HomeComponent/Announcement'
import FutureStories from './HomeComponent/FutureStories'
import AgricultureNews from './HomeComponent/AgricultureNews'
import ContactPage from './HomeComponent/ContactPage'
import './Home.css'
import { HOME_PAGE_GUR } from '../api/api'

import { useSelector, useDispatch } from 'react-redux'
import Dexie from "dexie";
export default function Home() {
    const [agriculturalNewsnew, setagriculturalNewsnew] = useState({});
    const [postalerts, setpostalerts] = useState([]);
    const [headerImages, setheaderImages] = useState([]);
    const [officeAddress, setofficeAddress] = useState([]);

    //set the database 
    const db = new Dexie("ReactDexie");
    //create the database store
    db.version(1).stores({
        homepage: "++id,name,age"
    });
    // db.open().catch((err) => {
    //     console.log(err.stack || err)
    // })


    const mystate = useSelector(getstate => getstate.changeState)
    console.log("below state")
    console.log(mystate)
    const dispatch = useDispatch()
    const number = 900

    const [alerts, setalerts] = useState([])
    const [headerimages, setHeaderimages] = useState([])
    const [officeaddress, setOfficeaddress] = useState([])
    const [cashbid, setCashbid] = useState([])
    const [accouncement, setAccouncement] = useState([])
    const [futures, setFutures] = useState([])
    const [topStories, setTopStories] = useState([])
    const [agriculturalNews, setAgriculturalNews] = useState([])
    const [heading, setHeading] = useState("Alerts")
    const [loading, setLoading] = useState(false);

    const [getposts, setgetposts] = useState()

    const setIndexDB = (value) => {
        setagriculturalNewsnew(value)
        indexedDB.deleteDatabase("ReactDexie")
        db.homepage.add({ name: value }).then(async () => {
            let allPosts = await db.homepage.toArray();
            setgetposts(allPosts)
        })
            .catch(function (e) {
                alert("Error: " + (e.stack || e));
            })
    }
    console.log("get data below")
    console.log(getposts)
    // const fetchdata = async () => {
    //     setLoading(true)
    //     await fetch('http://localhost:3333/homepagedata')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // dispatch({ type: "USER", payload: { number: data } })
    //             setLoading(false)
    //             console.log("data below")
    //             console.log(data.agriculturalNews)
    //             setIndexDB(data.agriculturalNews)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
    // useEffect(() => {
    //     fetchdata();
    // }, [])

    useEffect(() => {
        fetch(HOME_PAGE_GUR)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch({ type: "USER", payload: { number: data } })
                const arrayalertdata = data.alert.map((item) => ({
                    story_title: item,
                    timestamp: Date.now
                }))
                setalerts(arrayalertdata)
                setHeaderimages(data.headerImages)
                setOfficeaddress(data.officeAddress)
                setCashbid(data.cash_bids)
                setAccouncement(data.announcements)
                setFutures(data.futures)
                setTopStories(data.top_Stories)
                setAgriculturalNews(data.agriculturalNews)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
 
    return (
        <div className="home">
            {/* {loading ? <h2>Loading...</h2> : <div>Done</div>} */}
            <div className="home_top">
                <HomeIntro />
                <Alerts alerts={alerts} heading={heading} />
            </div>

            <div className="home_map">
                <MapData officeaddress={officeaddress} />
            </div>

            <div className="home_weather_cashbid">
                <WeatherCashBid cashbid={cashbid} />
            </div>

            <div className="home_announments">
                <Announcement data={accouncement} />
            </div>

            <div className="home_future_topstories">
                <FutureStories futures={futures} topStories={topStories} />

            </div>

            <div className="home_agriculture_news">
                <AgricultureNews agrinews={agriculturalNews} />
            </div>

            <div className="home_contact_page">
                <ContactPage />
            </div>

        </div>
    )
}
