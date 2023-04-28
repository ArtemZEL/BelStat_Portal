import React,{useState,useRef} from 'react'
import "./PostShare.css"
import imgprofile from "../../img/Profile.png"
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilNotes} from "@iconscout/react-unicons";
import {UilSchedule} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";


const PostShare = () => {
    const[image,setImage]=useState(null)
    const [video,setVideo]=useState(null)
    const imageRef=useRef();
    const videoRef=useRef();
    const onImgChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let img =event.target.files[0];
            setImage({
                image:URL.createObjectURL(img),

            });
        }
    }
    const onVideoChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let video =event.target.files[0];
            setVideo({
                video:URL.createObjectURL(video),
            });
        }
    }
    return (
    <div className="PostShare">
        <img src={imgprofile} alt="" />
        <div>
            <input type="text"
            placeholder='Напишите ваш пост' />
        <div className="postOptions">
            <div className="option"
            style={{color:"var(--photo)"}}
                onClick={()=>imageRef.current.click()}
                // добавление каринки поста
            >
                <UilScenery/>
                Фото
            </div>
            <div className="option"
            style={{color:"var(--video)"}}
            onClick={()=>videoRef.current.click()}
            // добавление видео поста
            >
                <UilPlayCircle/>
                Видео
            </div>
            <div className="option"
            style={{color:"var(--location)"}}>
                <UilNotes/>
                Заметки
            </div>
            <div className="option"
            style={{color:"var(--shedule)"}}>
                <UilSchedule/>
                Расписание
            </div>

            <button className="button ps-button">
                Запостить
            </button>
            <div style={{display:'none'}}>
                <input type="file" 
                name="myImg" 
                ref={imageRef} 
                onChange={onImgChange} 
                />
            </div>
            <div style={{display:'none'}}>
                <input type="file" 
                name="myVideo" 
                ref={videoRef} 
                onChange={onVideoChange} 
                />
            </div>
        </div>
            {image &&(
                <div className="previewImg">
                    <UilTimes onClick={()=>setImage(null)}/>
                    <img src={image.image} alt="" />
                </div>
            )}
            {video &&(
                <div className="previewImg">
                    <UilTimes onClick={()=>setVideo(null)}/>
                    <video src={video.video} alt="" />
                </div>
            )}
        </div>
    </div>
  )
}

export default PostShare