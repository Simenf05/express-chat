import React, { useState } from 'react';


function App() {
    const [name, setName] = useState("")
    const [dmName, setDmName] = useState("")

    
    

    return (
        <>
            <input onChange={e => setName(e.target.value)}></input>
            <input onChange={e => setDmName(e.target.value)}></input>

            <p className=''>{name} : {dmName}</p>
            

        </> 
    );
}

export default App;
