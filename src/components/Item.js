import React,{useState} from 'react'
import { MdAutoDelete } from "react-icons/md";
import ConfirmationModal from './ConfirmationModal'

const Item = ({author,download_url,id,setData,Data}) => {

  const [value,setvalue]=useState("hidden");

  const DeleteHandler =(Id)=>{

   const newData= Data.filter((DataItem)=>DataItem.id!==Id);
   setData(newData);
   console.log(Id);
   console.log(Data);

  }

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

  const handleChanges=()=>{
    setvalue("hidden");

  }

  const [Author,setAuthor]=useState(author);
  const [Url,setUrl]=useState(download_url);

  // confirmation
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (id) => {
    DeleteHandler(id);
    handleCloseModal();
  }

  
  return (
    <div className='flex flex-col m-4 p-5 xl:m-8 rounded-md items-center justify-center shadow-md'
     >
        <img src={Url} className=' xl:w-[300px] xl:h-[200px]  md:h-[180px] md:w-[200px] xs:w-[100px] xs:h-[100px] w-[75px] h-[75px] rounded-lg m-2 cursor-pointer' alt="Image"
        />
      
      <p className='lg:text-lg :text-sm  font-semibold font-serif mt-4'>{Author}</p>

      <div className='flex gap-5 mt-4'>
      <button className='text-[#FA782F] font-semibold font-serif text-lg cursor-pointer'
      onClick={clickHandler }
      >Update</button>
      <MdAutoDelete className='h-6 w-6 cursor-pointer' onClick={()=>handleOpenModal()}/>
      </div>

      
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={()=>handleConfirm(id)}
        message="Are you sure you want to delete this Project?"
      />


      {/* update  form */}
      <div className={`${value==="hidden"? "hidden":"flex flex-col"} p-5 absolute bg-white rounded-lg w-[320px] h-[320px] `}>
    
    <p className='font-serif text-center my-5 font-semibold text-lg'>Update Data</p>
<div>
  <label htmlFor='name' className='font-serif font-semibold text-base'>Author's Name:</label>
  <input placeholder="Enter Author's name" id="name" type="text" value={Author} onChange={changeName} 
  className='p-1 m-1 font-serif text-base'/>
</div>

<div>
  <label htmlFor='img'  className='font-serif font-semibold text-base'>Image Url:</label>
  <input placeholder="Enter Url for Image" id="img" type="text" value={Url} onChange={changeUrl} 
  className='p-1 m-1 font-serif text-base'/>
</div>

<button type="submit" className=' mt-6 font-semibold m-2 p-2 font-serif text-lg rounded-lg bg-[#FA782F] text-white' 
onClick={handleChanges}>Update</button>

</div>

    </div>
  )
}

export default Item;
