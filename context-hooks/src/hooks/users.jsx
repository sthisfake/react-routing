import React, { useEffect, useState } from 'react';
import axios from 'axios';




function Users(props) {

    const [users, setUsers] = useState([])

    useEffect(()=>{

        async function something(){

            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(result.data)
        }

        something()

    })

    return (
        <div>
            <ul>
                {users.map(user=> <li>{user.name}</li>)}
            </ul>
        </div>
    );

    
}

export default Users;