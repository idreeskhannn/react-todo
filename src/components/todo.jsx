import {Button, button} from "react-bootstrap"
import React from "react";
import { useState } from "react"; 

const Todo=_=>{
    let [inpt , setInpt]=useState('')
    let [items , setItems]=useState([])

    const add=_=>{
setItems([...items ,inpt])
setInpt("")
    }
    // console.log(items)


    const dlt =id=>{
const updated = items.filter((elem , idx)=>{
    return idx !==id
})
setItems(updated)
    }

    const remov=_=>{
        setItems([])
    }
    return(
<>

<h1>Todo</h1>
<input type="text" 
value={inpt}
onChange={(e)=>setInpt(e.target.value)}

/>
<button className="btn btn-info" onClick={add}>Add</button>
<button className="btn btn-info" onClick={remov}>Delete</button>


<div >
    <p>{inpt}</p>
    {
        items.map((elemnt ,indx) => {
            return(
                <>
                <div style={{display : "flex" , margin :"20px" ,width : "87%" ,justifyContent:"space-between"}}>
                <p key={indx}>{elemnt}</p>
                   <button className="bt" onClick={()=>dlt(indx)}>Delete</button> 
                </div>
                
                </>
            )
        }

        )
    }
</div>
</>
    )
}
export default Todo