import React, { useState } from "react";
import Create from "./Create";

function Home() {
    const [todos,settodos] = useState([])
    return(
        <div className="home">
            <h2> Todo list</h2>
            <Create/>
            {
                todos.length === 0?
                <div><h2>no records</h2></div>
                :
                todos.map(todo =>{
                    <div>
                        {todo}
                    </div>
                })
            }
        </div>
    )
}

export default Home