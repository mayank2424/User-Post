import React from 'react'
import './Footer.css';
import Aux from '../../hoc/Auxx'

const footer=(props)=>(
       <Aux>
          <div className="Footer">
             <div>
              <h4><b>Social Networking</b></h4>
             </div>

             <div> 
                <p>Developed By <a href="https://github.com.mayank2424">Mayank Gupta</a></p>
             </div>
          </div>
       </Aux>
)
export default footer;