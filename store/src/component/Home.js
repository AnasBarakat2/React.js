import { useState } from "react";

function Home (){

    const[ShowImg,SetShowImg]=useState(false) //هون انا عملت متغير اسمه showImg 
                                               //setShow :بعمله عشان اغير حالة المتغير و قيمته
    const handelClick=()=>{
        SetShowImg(!ShowImg) //عملنا متغير على صيغة Function 
                             //و طلبت منه تكون قيمته عكس لقيمة الshowImg و طلبت يخزنها بالSetShow
    }
    return(
        <div> 
            
             <button onClick={handelClick}>{ShowImg?'hide':'show'}</button> 

             {/*الكود بين الاقواس بالاسفل اسمه condition rendering
             (Condition ? True : False)
              */}

             {
                ShowImg && <img width={200} src="https://www.iloveimg.com/storage/blog/80-1638522537-Add-stars-and-clouds-to-sky-photography-online-using-a-free-photo-editor.jpg"></img>
             } {/*هون بشوف قيمة الshow اذا true رح يعرض الصورة */}
        </div>
    )
}

export default Home;