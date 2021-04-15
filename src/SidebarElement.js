import React,{useState} from 'react'
import styled from "styled-components";
import {db} from "./firebase";
import { useDispatch } from 'react-redux'
import { enterRoom } from "./appSlice";
import "./SidebarElement.css";
import Modal from 'react-modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
function SidebarElement({Icon,title,addChannelOption,id}) {
	
	const [modalIsOpen,setIsOpen] = useState(false); 
	const [N,setN] = useState("");
	function openModal() {
	setIsOpen(true);
	}
	function closeModal(e){	
		 e.preventDefault();
		 setIsOpen(false);
		 if(N.length!=0){
			const channelName= N;
			if (channelName){
				db.collection('rooms').add({
					name:channelName,
				});
			}
			
		}
		setN("");	  	   
	} 
	
	const customStyles = {
	  content : {
	    top                   : '10%',
	    left                  : '50%',
	    right                 : 'auto',
	    bottom                : 'auto',
	    marginRight           : '-50%',
	    transform             : 'translate(-50%, -50%)',
	    background            :'purple',
	    color				  :'white',

	  }
	}; 
	 
	const dispatch = useDispatch()
	const selectChannel=()=>{
		if(id){
			dispatch(enterRoom({
				roomId: id
			}));
		}
	};
	return (
		 <SidebarElementContainer
		 onClick={addChannelOption ?openModal:selectChannel}>
		       <Modal
		          isOpen={modalIsOpen}
		          onRequestClose={closeModal}
		          style={customStyles}
		          shouldCloseOnEsc={true}          
		        >
		 
			        
			     	 <h3>Enter Channel Name</h3>
			        
			          <form onSubmit={closeModal}>
			            <input onChange={(e)=>{setN(e.target.value)}}
			            value={N}/>

			            <button type="submit">
						 	 <CloseIcon/>
					    </button>
			          </form>
		        </Modal>
		 	{Icon && <Icon fontSize="small" style={{padding:10}}/>}
		 	{Icon ? (<h3>{title}</h3>):
		 		(<SidebarElementChannel>
		 			<span>#</span>{title}	
		 		</SidebarElementChannel>
		 		)}
		 </SidebarElementContainer>
	)
}

export default SidebarElement


const SidebarElementContainer=styled.div`
display:flex;
font-size:12px;
align-items:centre;
padding-left:2px;
margin-bottom:5px;
cursor:pointer;
:hover{
	opacity:0.9;
	background-color:#340e36;
}
>h3{
	margin-top:12px;
	font-weight:500;
}
>h3 >span{
	padding:15px;
}
@media screen and (max-width: 439px) {
  font-size:8px;
  padding-right:20px;
};`
const SidebarElementChannel=styled.h3`
padding:10px 0;
font-weight:300;

`;