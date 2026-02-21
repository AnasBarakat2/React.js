import { use, useState } from "react";
import SubProduct from "./subProduct";
import {Link} from "react-router-dom"


function Product (){
    //create state to increse the value of counter by click button 

    const[count,SetCount]=useState(0) //we set count=0

    //list

    const subProducts=[
        {id:1,name:'product1',Image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/9667814/1.jpg?2400',price:20,description:'new product1'},
         {id:2,name:'product2',Image:'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',price:30,description:'new product2'},
          {id:3,name:'product3',Image:'https://sunglassic.com/cdn/shop/files/sunglassic-swiftor-gun-black-green-premium-shot-sunglasses.jpg?v=1766060413&width=2000',price:40,description:'new product3'}
    ]
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

            <div>
                <ul>
                    {
                        subProducts.map((item)=><li>
                            <div>
                                <h3>{item.name}</h3>
                                <img width={100} src={item.Image}/>
                                <Link to='/subprod'state={item}>view</Link>
                            </div>
                        </li>)
                    }
                </ul>
            </div>

            {/* <SubProduct x={subProducts}/> */}

        </div>
    )
}

export default Product;