import React ,{useState} from 'react'
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {db} from "./firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase";
function ChatInput(props) {
    const [user] =useAuthState(auth);
	const [input, setInput] = useState("");
	const sendMessage =(e)=>{
		e.preventDefault();

		if(!props.channelid){
			return false;
		}
		db.collection("rooms").
		doc(props.channelid).
		collection('messages').add({
			message:input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user:user.displayName,
			userImage:user.photoURL,
	});
		props.chatRef?.current?.scrollIntoView({
			behavior:"smooth",
		});
		setInput("");
	};
	return (
		<ChatInputContainer>
			<form>
				<input onChange={(e)=>setInput(e.target.value)}
				value={input} placeholder={` Message #${props.channelName}`}/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>		
			</form>
		</ChatInputContainer>
	)
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;
>form{
	position: relative;
	display: flex;
	justify-content:center;
}
>form >input{
	position:fixed;
	bottom:30px;
	width:60%;
	border:1px solid gray;
	border-radius: 3px;
	padding:20px;
	outline:none;
}
>form >Button{
	display:none !important;
}

`;