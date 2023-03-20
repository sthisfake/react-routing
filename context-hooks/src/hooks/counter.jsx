import React, { useEffect, useState } from 'react';

function Counter(props) {

    const [count , setCount] = useState(0)
    const [name , setName]   = useState("")


    ///will be like componentDidMount and other functions like this .... , 
    /// it aslo can return a function that willbe component unmount
    /// and the array at the means that ( read it below)
    useEffect(() => {
        document.title = `${name} has clicked ${count} times`
    } , [count]) // only count will be updated

    return (

        <React.Fragment>

            <div>
                <input type="text" onChange={e => setName(e.target.value)} />

                <div>{name} has clicked {count} times</div>
                <button onClick={() => setCount(count + 1)}>click me !</button>
            
            </div>

        </React.Fragment>

    );
}

export default Counter;