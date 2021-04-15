import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AddIcon from "@material-ui/icons/Add";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const customStyles = {
  content : {
    top                   : '10%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            :'gray',
    color				  :'blue',

  }
};
 

 
function Modals(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [N,setN] = React.useState("");
  function openModal() {
    setIsOpen(true);

  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }
 
  function closeModal(e){
  	e.preventDefault();
  	    setIsOpen(false);
  }
 
    return (
      <div>
         <IconButton onClick={openModal}>
			 	 <AddIcon />
			</IconButton>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
         <IconButton  onClick={closeModal}>
			 	 <CloseIcon/>
			</IconButton>
      <h3>Enter Channel Name</h3>
        
          <form onSubmit={closeModal}>
            <input onChange={(e)=>{setN(e.target.value)}}
            value={N}/>
          </form>
        </Modal>
      </div>
    );
}
 export  default Modals