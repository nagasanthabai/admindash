import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserView() {
    const params = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getUser();
    }, [])

    let getUser = async () => {
        try {

            let user = await axios.get(`https://62b6abce42c6473c4b4653d7.mockapi.io/users/${params.id}`)
            setUserData(user.data)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1 className='d-flex justify-content-center'>User- {params.id}</h1>
            <div className="container offset-4 mt-4">
                <h3>Name : {userData.username}</h3>
                <h3>Email : {userData.email}</h3>
                <h3>Country : {userData.country}</h3>
                <h3>State : {userData.state}</h3>
                <h3>City : {userData.city}</h3>
            </div>
        </>

    )
}

export default UserView