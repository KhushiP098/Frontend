import React, { useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import Item from './Item';

const Cards = ({Data,setData}) => {


  const [value, setvalue] = useState("hidden");
  const [author, setAuthor] = useState("");
  const [download_url, setUrl] = useState("");

  const changeName = (event) => {
    console.log(event.target.value);
    setAuthor(event.target.value);

  }

  const changeUrl = (event) => {
    console.log(event.target.value);
    setUrl(event.target.value);

  }

  const clickHandler = () => {

    if (value === "hidden") {
      setvalue("block");
    }
    else {
      setvalue("hidden");

    }
  }

  const updateData=(author,download_url)=>{
    
    const n=Data.length;
    const newData=Data.concat({
      "id":n+1,
      "author":author,
      "download_url":download_url,
    })

    setData(newData);

  }

  const submitHandler=()=>{
    updateData(author,download_url);
    setvalue("hidden");
  }

  return (
    <div className='xl:h-[250px] xl:w-[350px] md:h-[200px] md:w-[250px]  w-[180px] h-[180px]  p-2 flex flex-col m-4 xl:m-8 rounded-md items-center justify-center relative '>

      <div className='bg-[#edc3aa]  xl:w-[300px] xl:h-[200px]  md:h-[180px] md:w-[200px] xs:w-[100px] xs:h-[100px] w-[75px] h-[75px] m-2 rounded-md flex justify-center items-center '>

        <div ><MdAddAPhoto className='xs:h-[53px] xs:w-[53px] h-[30px] w-[30px] text-white' /></div>

      </div>


      <p className='lg:text-lg xs:text-sm text-xs font-semibold font-serif md:leading-7 cursor-pointer  '
      onClick={clickHandler }>Create a new Project</p>
      <p className='lg:text-sm text-xs font-semibold font-serif md:leading-7'>or try a <span className='text-[#FA782F]'>sample project</span></p>


       {/* Modal */}

      <div className={`${value==="hidden"? "hidden":"flex flex-col"} p-5 shadow-md w-[320px] h-[320px] absolute bg-white rounded-lg  justify-center`}>
       
      <p className='font-serif text-center my-5 font-semibold text-lg'>Create Data</p>
        <div>
          <label htmlFor='name' className='font-serif font-semibold text-base'>Author's Name :</label>
          <input placeholder="Enter Author's name" id="name" type="text" value={author} onChange={changeName} 
          className='p-1 m-1 font-serif text-base'/>
        </div>

        <div>
          <label htmlFor='img'  className='font-serif font-semibold  text-base'>Image Url:</label>
          <input placeholder="Enter Url for Image" id="img" type="text" value={download_url} onChange={changeUrl} 
          className='p-1 m-1  font-serif text-base'/>
        </div>

        <button type="submit" className='bg-[#FA782F] text-white mt-6 font-semibold m-2 p-2 font-serif text-lg rounded-lg ' onClick={submitHandler} >Create project</button>

      </div>


    </div>
  )
}

export default Cards;
