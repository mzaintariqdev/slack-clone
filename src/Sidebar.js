import React from 'react'
import styled from "styled-components";
import Channel from "./Channel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import AppsIcon from "@material-ui/icons/Apps";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import "./index.css"
import SidebarElement from './SidebarElement';
import {db} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import {useCollection} from "react-firebase-hooks/firestore";
function Sidebar() {
	const [channels] = useCollection(db.collection("rooms"));
    const [user] =useAuthState(auth);

	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
				<h2>welcome to Slack Clone</h2>
					<h3>
					<FiberManualRecordIcon/>
					{user.displayName}
					</h3>
				</SidebarInfo>
				<CreateIcon  />
			</SidebarHeader>
			<SidebarElement Icon={InsertCommentIcon} title="Threads"/>
			<SidebarElement Icon={InboxIcon} title="Mentions & reactions"/>
			<SidebarElement Icon={DraftsIcon} title="Saved Items"/>
			<SidebarElement Icon={BookmarkBorderIcon} title="Channel browser"/>
			<SidebarElement Icon={PeopleAltIcon} title="People & user groups"/>
			<SidebarElement Icon={AppsIcon} title="Apps"/>
			<SidebarElement Icon={FileCopyIcon} title="File browser"/>
			<SidebarElement Icon={ExpandLessIcon} title="Show Less"/>
		<hr/>
			<SidebarElement Icon={ExpandMoreIcon} title="Channels"/>
		<hr/>
		
			<SidebarElement Icon={AddIcon} addChannelOption title="Add Channel"/>
			
			<Channel/>
		</SidebarContainer>
	);
}

export default Sidebar

const SidebarContainer=styled.div`
overflow-y: scroll;
background-color:var(--slack-color);
color:white;
flex:0.3;
border-top:1px solid #49274b;

margin-top:60px;

>hr{
	margin-top:10px;
	margin-bottom:10px;
	border:1px solid #49274b;
}`;



const SidebarHeader=styled.div`
display:flex;

border-bottom:1px solid #49274b;
padding:13px;
>.MuiSvgIcon-root{
	padding:8px;
	color:#49274b;
	font-size:18px;
	background-color:white;
	border-radius:999px;
}
@media screen and (max-width: 439px) {
 padding:5px;
 >.MuiSvgIcon-root{
 	padding:0;
 	 
 }
}
`;


const SidebarInfo=styled.div`
flex:1;
>h2{
	font-size:15px;
	font-weight:900;
	margin-bottom:5px;
}
>h3{
	display:flex;
	font-size:13px;
	font-weight:400;
	align-items:center;
}
>h3 >.MuiSvgIcon-root{
	font-size:14px;
	margin-top:1px;
	margin-right:2px;
	color:green;
}
@media screen and (max-width: 439px) {
>h2{
	font-size:8px;
	font-weight:450;
}
>h3{
	display:flex;
	font-size:8px;
	font-weight:250;
	margin-top:20px;
}
>h3 >.MuiSvgIcon-root{
	font-size:8px;

}
 
 
}`;