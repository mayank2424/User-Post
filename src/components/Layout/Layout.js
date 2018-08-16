import React,{Component} from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/Auxx';
import SideDrawer from '../SideDrawer/SideDrawer'


class layout extends Component{
	state={
	 	showSideDrawer: false
	 }
	sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false});

	}
	render(){
		return(
			 <Aux>
			   <main>{this.props.children}</main>
			 </Aux>
			)
	}
}

export default layout