
import React, {useState}from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core"
import db from './firebase';

function TweetBox() {

    const [tweetMessage,setTweetMessage]= useState("");
    const [tweetImage,setTweetImage]= useState("");
    const sendTweet =(e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            displayName:"Shenal sj",
            username: "shenal321",
            verified:true,
            text:tweetMessage,
            image: tweetImage,
            avatar: "https://thumbs.dreamstime.com/b/alphabet-letter-sj-s-j-gold-golden-metal-metallic-logo-icon-design-company-business-147083186.jpg",

        });
        setTweetImage(" ");
        setTweetMessage("");
        
        
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://thumbs.dreamstime.com/b/alphabet-letter-sj-s-j-gold-golden-metal-metallic-logo-icon-design-company-business-147083186.jpg" />
                    <input 
                    onChange={e=> setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text" />
                    

                </div>
                <input 
                onChange={(e)=> setTweetImage(e.target.value)}
                className="tweetBox__imageInput" 
                placeholder="Enter image URl" 
                type="text" />
                <Button 
                onClick={sendTweet} 
                type='submit' 
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
