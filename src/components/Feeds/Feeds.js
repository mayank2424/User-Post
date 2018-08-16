import React,{Component}from 'react';
import  './Feeds.css';
import Aux from '../../hoc/Auxx'
import {Modal,Popover,Tooltip,Button} from 'react-bootstrap'
import ModalContent from '../Modal/ModalContent'

class feeds extends Component{
	
	constructor(props,context){
		super(props,context);

		    this.handleShow = this.handleShow.bind(this);
		    this.handleClose = this.handleClose.bind(this);
	         
	          this.state = {
		      show: false,
		      users:[]
		    };
       }

		  handleClose() {
		    this.setState({ show: false });
		  }

		  handleShow() {
		    this.setState({ show: true });
		  }
	

	componentDidMount(){
		fetch('https://my-json-server.typicode.com/mayank2424/json-data/posts')
		.then(response =>{
			return response.json();
		})
		.then(result =>{
			this.setState({
				users:result
			})
		})
	}


	render() {
		 const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    )
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
		return(
		<Aux>	
			 <div className="user_head">
			   <h1>User Posts</h1>
			 </div>

		    <div className="Feeds_section">
		       <div className="Feeds_content"onClick={this.handleShow}>
		      
			   {   this.state.users.map(function(item,key){
				   	return (
				    <div className="Feeds">
				      <div className="upper"> 
				        <img className="thumb" src={item.thumbnailUrl} />
				   	    <h4>{item.title}</h4>
				   	  </div>
				   	 <img className="image" src={item.url} alt="ghfg" />
                    </div>
				   	)
				 })
			  }
			 </div> 
		  </div>
		  <div>
			  <Modal show={this.state.show} onHide={this.handleClose}>
	          <Modal.Header closeButton>
	            <Modal.Title></Modal.Title>
	          </Modal.Header>
	            <Modal.Body> 
	              <ModalContent />
	            </Modal.Body>
	        </Modal>
		  </div>
		</Aux>	
	  )
	}
}
export default feeds;