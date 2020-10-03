import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import './App.css';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
           count: 0,
           

        }

    }
    updateState = ()=>{
      this.setState({

        count: this.state.count + 1
      })
    }
      
    render() {


        return (
            <div style={{backgroundColor:"white"}} className="div">
               
        <button color="danger" outline onClick={()=>{this.updateState()}} >Button<Badge  style={{fontSize:20, width:35}}  color="danger">{this.state.count}</Badge>
</button>
                
            </div>
        )
    }
}


// import React from 'react';
// import { Badge, Button } from 'reactstrap';

// const App = (props) => {
//   return (
//     <div>
//       <Button color="primary" outline>
//         Notifications <Badge color="secondary">4</Badge>
//       </Button>
//     </div>
//   );
// }

// export default App;
