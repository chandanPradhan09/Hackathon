import React, { useState } from 'react'
import axios from 'axios'
const ContactUs = () => {
    const [query,setquery]=useState();
    const [email,setemail]=useState();
    const handlequery=()=>{
        axios.post('https://localhost:6000/createqueries',{query,email});
        console.log("querycreated");
    }
  return (
    <div className='p-4 w-full bg-slate-50 rounded-2xl'>
        <form className='w-full flex flex-col' >
            <input type="text" name="query" id="query"  placeholder='Query:' className='outline-none p-2 text-xl' onChange={(e)=>{setquery(e.target.value)}}/>
            <input type="email" name="email" id="email"  placeholder='Email:' className='outline-none p-2 text-xl' onChange={(e)=>{setemail(e.target.value)}}/>
            <button type='submit' className="bg-blue-400 p-2 rounded-2xl" onClick={handlequery}>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs
