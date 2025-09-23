import axios from "axios";
import { useEffect, useState } from "react"

function Getcategory() {
    
    const [category,setCategory]=useState([]);

    useEffect(()=>{
        const fetchCategory = ()=>{
            try {
                const res = axios.get('http://localhost:5000/category/get');
                console.log(res);
            } catch (error) {
                console.log("error",error);
            }
        }
        fetchCategory()
    },[])

  return (
    <>

    </>
  )
}

export default Getcategory
