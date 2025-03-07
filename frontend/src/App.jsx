import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
const [image,setImage] = useState("");
const[name,setName] = useState("");

  function handleImage(event){
    const img = event.target.files[0];
    console.log(img)
    setImage(img);
  }

 async function handleSubmit(e){
    e.preventDefault();
    try {
    const formData = new FormData();

    formData.append("image",image);
    formData.append("name",name);
    await axios.post("http://localhost:3001/post",formData);


    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Enter your name' onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <input type="file" onChange={handleImage}/>
        <input type="submit" />
      </form>
    </>
  )
}

export default App
