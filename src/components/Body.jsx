import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Body = () => {

    const[users,setUsers] = useState([])

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data) )
        .catch(err => console.log(err))
    },[])

     return (
        <>
            { users.map( user => 
                <ul key={ user.id }>
                    <li>Name: { user.name }</li>
                    <li>Username: { user.username }</li>
                    <li>Company Name: { user.company.name }</li>
                </ul>    
            )}
        </>
    );
}

export default Body;
