import React, {useState} from "react";
import "../ImageUpload/ImageUpload.css"

function ImageUpload(){

    const[image,setImage] = useState("");

    function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ",error);
        };
    }

    function uploadImage(){
        fetch("http://localhost:5000/upload-image",{
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                base64:image
            })
        }).then((res)=>res.json()).then((data)=>console.log(data))
    }

    return(
        <div className="auth-wrapper">
            <div className="auth-inner" style={{width: "auto"}}>
                <label className="image-title" >Image 1: </label> 
                {image=="" || image==null?"": <img width={150} height={100} src={image} className="image-view"/>} 
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={convertToBase64}
                    className="input-img"
                />
                <button onClick={uploadImage}>Upload Images</button>               
            </div>
              
        </div>
    )
}

export default ImageUpload;