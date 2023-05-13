import React, { useState, useEffect } from 'react'

const History = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        getUserInfo();
    }, [])

    async function getUserInfo() {
        const data = await fetch("http://localhost:3000/user/alanmathew1857");
        const json = await data.json();
        setUserInfo(json);
        console.log(json)
    };
    return (
        <div>
            <h1>{userInfo.data && userInfo.data.firstname} {userInfo.data && userInfo.data.lastname}</h1>
            <h1>{userInfo.data && userInfo.data.email}</h1>
            <h1>{userInfo.data && userInfo.data.age}</h1>
            {userInfo.data && <img src={userInfo.data.image} alt="User" />}
        </div>
    )
}

export default History; 