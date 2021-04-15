import React from 'react'
import "./Header.css";
import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase";
function Header() {		<HeaderbarAvatar
					onClick={()=>auth.signOut()}
					alt={user?.displayName}
					src={user?.photoURL}
					/>
    const [user] =useAuthState(auth);

	return (
		<>
			<HeaderbarContainer>
				{/*Header left*/}
				<LeftHeaderbar>
			
					<AccessTimeIcon />
				</LeftHeaderbar>
				{/*Header Search*/}
				<SearchHeaderbar>
					<SearchIcon/>
					<input type="text" placeholder="Search" />
				</SearchHeaderbar>
				{/*header right*/}
				<RightHeaderbar>
					<HelpOutlineIcon/>
				</RightHeaderbar>
			</HeaderbarContainer>
		</>
	)
}

export default Header
const HeaderbarContainer = styled.div`
display:flex;
position:fixed;
width:100%;
align-items:center;
justify-content:space-between;
padding:10px 0;
background-color:var(--slack-color);
color:white;`;
const LeftHeaderbar = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;
> .MuiSvgIcon-root{
	margin-left:auto;
	margin-right:30px;
}
@media screen and (max-width: 439px) {
  width:25%;
};`





const SearchHeaderbar = styled.div`
flex:0.4;
opacity:1;
border-radius:6px;
background-color:#421f44;
display:flex;
padding:0 50px;
color:gray;
border:1px gray solid;
>input{
	background-color:transparent;
	border:none;
	text-align:center;
	min-width:30vw;
	outline:0;
	color:white;
}
@media screen and (max-width: 439px) {
  width:30%;
}

`;




const RightHeaderbar = styled.div`
flex:0.3;
display:flex;
align-items:flex-end;
> .MuiSvgIcon-root{
	margin-left:auto;
	margin-right:20px;
}
@media screen and (max-width: 439px) {
  width:20%;
}
`;




const HeaderbarAvatar = styled(Avatar)`
cursor:pointer;
:hover{
	opacity:0.8;
}
`;