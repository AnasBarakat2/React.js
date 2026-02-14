import { useState } from "react"

//call props in function and then use props.x to access the list
export default function SubProduct(props){

const[subProductFromMain,setsubProductFromMain]=useState(props.x)

console.log(subProductFromMain)
    return(
        <h1>this is SubProduct</h1>
    )
}