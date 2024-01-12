import React, { useState } from 'react';

export default function Addedpop({AddTheProducts,closePop}) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState();
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    
  const onInputChange=(e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }
    async function handleSubmit(e) {
     
      e.preventDefault();
      const formData=new FormData();
    
      formData.append('title',title);
      formData.append('desc',desc);
      formData.append('image',image);
      formData.append('price',price);
      //formData.append('user',User.id);
   
    try {
      
      const response = await fetch("http://localhost:8000/upload-image",{
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          
        },
        body: formData,
       /* body: JSON.stringify({
          title: title,
          image: image,
          desc: desc,
          price:price,
        }),*/
      });
     
      const json = await response.text();
      console.log(json);
    
     
    } catch (err) {
      console.log(err);
    }
      // Call the parent function with the collected data
      AddTheProducts( title, desc, price,image );
      setTitle("");
    setDesc("");
    setPrice("");
    setImage(null);
    //document.getElementById('image').value = '';       
      closePop();
    }; 
  
  return (
    <div>
      <div className='pop added'>
        <form onSubmit={handleSubmit}>
        <div className='onesidee'>
        <h5>Upload image</h5>
      <input type="file" name='image' onChange={onInputChange} />
        </div>
     
      <div>
     
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title of Product</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Title of Product "value={title}
                onChange={(e) => setTitle(e.target.value)}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" id="desc" placeholder="Description"value={desc}
                onChange={(e) => setDesc(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Price of Product</label>
    <input type="text" className="form-control" id="price" placeholder="Price of Product"value={price}
                onChange={(e) => setPrice(e.target.value)}/>
  </div>
  
  <button type="submit"  className="btn btn-primary btn-sub">Submit</button>

        </div>
        </form>
    </div>
   
    </div>
  );
}
