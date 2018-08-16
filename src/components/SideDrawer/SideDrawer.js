import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import  './SideDrawer.css';
import Aux from '../../hoc/Auxx'

const sideDrawer=(props) =>{

     // let attachedClasses=[classes.sideDrawer,classes.Close]
     // if(props.open){
     // 	attachedClasses=[classes.sideDrawer,classes.Open]
     // }
	return(
	 <Aux>	
       <Backdrop show={props.open} clicked={props.closed} />
       <div >
         <h3>Content</h3>
       </div>
	 </Aux>
	)
}

export default sideDrawer;