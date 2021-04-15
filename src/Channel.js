
import SidebarElement from './SidebarElement';
import {useCollection} from "react-firebase-hooks/firestore";
import styled from "styled-components";
import {db} from "./firebase";

import React from 'react'
import "./index.css"

function Channel() {
	const [channels] = useCollection(db.collection("rooms"));
	return (
		<Container>
			{channels?.docs.map((doc)=>(
			    <SidebarElement  
			    title={doc.data().name}
			    key ={doc.id}
			    id={doc.id}
			    />

			))}
		</Container>
	)
}

export default Channel
const Container = styled.div`
flex:0.3;
display:grid;

cursor:pointer;
background-color:var(--slack-color);`;
			