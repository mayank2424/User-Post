import React,{Component} from 'react';
import  './ModalContent.css';
import Aux from '../../hoc/Auxx'

class modalContent extends Component{
	constructor(props){
		super(props);
		this.state={
			users:[],
			data:[],
			data2:[]
		}
	}

	componentDidMount(){
		fetch('https://my-json-server.typicode.com/mayank2424/json-data/posts/1/')
		.then(response =>{
			return response.json();
		})
		.then(result =>{
			this.setState({
				users:result
			})
		})

	    fetch('https://jsonplaceholder.typicode.com/posts/1/')
	    .then(response=>{
	    	return response.json();
	    })
	    .then(result =>{
	    	this.setState({data:result})
	    })

	    fetch('https://jsonplaceholder.typicode.com/users/1/')
	    .then(response=>{
	    	return response.json();
	    })
	    .then(result=>{
	    	this.setState({data2:result})
	    })
	}

	render(){
		return (
            <Aux>
               <div>
                  {
                  	    <div className="m-section">

	                  	      <div className="m-upper">
	                  		    <img className="m-thumb" src={this.state.users.thumbnailUrl} alt="Loading.." />
	                  		    <h5>{this.state.data2.name}<span> (@{this.state.data2.username})</span></h5>
	                  		    
	                  		  </div> 

	                  		   <div className="m-post">
	                  		     <img src={this.state.users.url} alt="Loading" />
	                  		     <h4>{this.state.users.title}</h4>
	                  		  </div>
	                  		  
	                  		   <div className="comment"> 
	                  		      <h6>Liked By <strong> {this.state.data2.name}</strong></h6>
	                  		     <p><span><a href={this.state.data2.email}><strong>{this.state.data2.name}:</strong></a></span>{this.state.data.body}</p>
	                  		   </div>


                  		</div>
                  }
               </div>
            </Aux>
		)
	}
}

export default modalContent;