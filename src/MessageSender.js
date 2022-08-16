import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from './firebase';


function MessageSender() {
    const [{user}]= useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl, 
        })

        // some clever DB stuff 
        setInput("");
        setImageUrl("");
    }


    return (
        <div className='massageSender'>
            <div class='massageSender__top'>
                <Avatar src={user.photoURL} title={user.displayName}/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='messageSnder__input' placeholder={`What's on your mind, ${user.displayName}?`} />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder='image URL(optional)' />
                    <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
                </form>
            </div>
            <div class='massageSender__bottom'>
                <div className='massageSender__option'>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className='massageSender__option'>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='massageSender__option'>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>

        </div>
    )
}

export default MessageSender;
