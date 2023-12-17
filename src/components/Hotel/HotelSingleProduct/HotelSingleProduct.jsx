import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function HotelSingleProduct() {
    const { hotelId } = useParams()
    const [singleInfoPage, setSingleInfoPageOfFlight] = useState();



    async function getSingleHotelDetails(hid) {
        const config = {
            headers: {
                projectID: "9fimo4k8to89"
            }
        }
        const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hid}`, config)
        console.log(response);
    }

    useEffect(() => {
        getSingleHotelDetails(hotelId)
    }, [])
    return (
        <div>
        </div>
    )
}

export default HotelSingleProduct
