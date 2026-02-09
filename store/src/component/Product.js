import { use, useState } from "react";


function Product (){
    //create state to increse the value of counter by click button 

    const[count,SetCount]=useState(0) //we set count=0
    return(
        <div>
            <p>This Count :{count}</p>
            <button onClick={()=>
                SetCount(count+1)
            }>increse</button>
            <br></br>
            <button onClick={()=>  //this name is : arrow function
                SetCount(count-1)
            }>decrese</button>
            <br></br>
            <button onClick={()=>  //this name is : arrow function
                SetCount(count*2)
            }>Double</button>
            <br></br>
            <button onClick={()=>  //this name is : arrow function
                SetCount(0)
            }>SetZero</button>

        </div>
    )
}

export default Product;