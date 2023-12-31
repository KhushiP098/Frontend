import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import  Profile from '../Images/Profile.jpg'
import  Arrow from '../Images/Arrow.jpg'
import Item from './Item'

const Dashboard = () => {

  const [Data,setData]=useState([]);

  const API_URl="https://picsum.photos/v2/list?page=1&limit=6";

  const fetchData=async ()=>{
    try{
      const data= await fetch(API_URl);
      const result=await data.json();
      console.log(result);
      setData(result);
    }
    catch(error){
      console.log(error);
      console.log("Error while fetching data");
    }
  }

  useEffect(()=>{
    fetchData();
    
   },[])

   console.log(Data);

  return (
    <div className='flex flex-col  lg:w-[calc(100%-240px)] w-[calc(100%-180px)]  '>
  
      <div className='h-[50px] w-full'>
        <div className='flex  justify-end  lg:mr-6'>
          
          <div className='md:flex flex-col hidden '>

          <div className='flex items-center '>
          <p className='font-serif text-xs font-semibold'>Free Trial</p>
          <div className='h-4 w-[2px] bg-black m-2'></div>
          <p className='font-serif text-xs font-semibold'>2 days left</p>
          </div>

          <p className='font-serif  text-[#FA782F] text-xs font-semibold'> Extend free trial</p>

          </div>

          <div className='flex items-center mr-2'>
          <img src={Profile} height="36px" width="36px" className='rounded-full' />
          <img src={Arrow} height="6px" width="12px" />
          </div>

        </div>

       </div>
      
     <p className='md:text-4xl  text-2xl font-serif font-semibold leading-10 ml-10 '>My Projects</p>

     <div className='flex flex-wrap items-center justify-center '>

      {
        Data.map((DataItem)=>{
          return(
          <Item  {...DataItem} key={DataItem.id} setData={setData} Data={Data}/>
          )
        })
      }

   <Cards setData={setData} Data={Data} />

     </div>

     
      
    </div>
  )
}

export default Dashboard;

