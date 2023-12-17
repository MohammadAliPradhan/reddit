import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./HotelSinglePage.css"

function HotelSinglePage() {
    const location = useLocation();
    // state for storing api data to further use it in jsx
    const[ apialldetails, setApiAllDetails]  = useState();


    async function getHotelDetails(location) {
        const config = {
            headers: {
                projectID: "9sa80czkq1na"
            }
        }
        const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location.state.hotelName.destination}"}`, config)
        if (response.data.results === 0) {
            setFlag(false)
        } else {
            JSON.stringify(sessionStorage.setItem('proxy', JSON.stringify(response.data.data.hotels)))
         

        }
        console.log("response", response)
        setApiAllDetails(response)
    };

    useEffect(()=>{
        getHotelDetails(location)
    },[])

    return (
        <>
        <div>
        <div>
        <div className="searchItem">

<img  alt="" className='siImg' />
<div className="siDesc">
    <h1 className="siTitle"></h1>
    <span className="siDistance"></span>
    <span className="siTaxiOp">Cost Per Night: Rs </span>
    <span className="siSubtitle">Studio Apartment with Air conditioning</span>
    <span className="siFeatures"></span>
    <span className="siCancelOp"></span>
    <span className="siCancelOpSubtitle">You can cancel later</span>
</div>
<div className="siDetails">
    <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
    </div>

    <div className="siDetailTexts">
        <span className='siPrice'>₹ </span>
        <span className='siTaxOp'>Includes taxes and fees</span>
        <button className='siCheckButton'>See Availability</button>
    </div>
</div>
</div>
        </div>
        </div>
        
            
        </>
    )
}

export default HotelSinglePage
