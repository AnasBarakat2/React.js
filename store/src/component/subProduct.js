import { useState } from "react"
import { useLocation } from "react-router-dom"

//call props in function and then use props.x to access the list
export default function SubProduct(){
    const location =useLocation()
    console.log(location)
    //uselocation : information about path of current page and state

const[subProductFromMain,setsubProductFromMain]=useState()

console.log(subProductFromMain)
    return(
        <h1>this is SubProduct</h1>
    )
}