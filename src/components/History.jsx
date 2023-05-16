import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';

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

    const formattedDate = new Date(userInfo.data && userInfo.data.createdAt).toLocaleString();

    // const response = axios.post('http://localhost:8000/braintumor/predict', formDataObj);

    return (
        <div className="container" style={{ marginTop: '20px', marginBottom: '20px' }}>
            {/* <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-evenly", }}>
                <h3>{userInfo.data && userInfo.data.firstname} {userInfo.data && userInfo.data.lastname}</h3>
                <h3>{userInfo.data && userInfo.data.age}</h3>
                {userInfo.data && <img style={{ height: "100px", width: "100px" }} src={userInfo.data.image} alt="User" />}
            </div> */}
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                Name: {userInfo.data && userInfo.data.firstname} {userInfo.data && userInfo.data.lastname}
                            </div>
                            <div style={{ marginLeft: '10px' }}>
                                {formattedDate}
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: 'flex' }}>
                                <h3 style={{ marginRight: "30px" }}></h3>
                            </div>
                            <div>
                                <span>{userInfo.data && <img style={{ height: "80px", width: "80px" }} src={userInfo.data.image} alt="User" />}</span>
                            </div>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default History;
