import { useState } from "react"
import Details from "./common/Details"
import { useEffect } from "react";
import axios from "axios";

function Jumka() {
  
  const[jumka,setJumka]=useState([]);

  useEffect(()=>{
    const fetchJumka = async () => {
      try {
        const res = await axios.get('http://localhost:5000/category/get')
        setJumka(res.data.categories[1].images.urls)
      } catch (error) {
        console.error("Error fetching earrings:", err);
      }
    }
    fetchJumka()
  },[])

  return (
    <>
      <Details heading="Jumka" headingimage="https://images.unsplash.com/photo-1707222611166-f80ded88b677?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGp1bWtoYSUyMGpld2VsZXJ5fGVufDB8MHwwfHx8MA%3D%3D" images={jumka}/>
    </>
  )
}

export default Jumka
