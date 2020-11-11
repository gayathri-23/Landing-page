import React from 'react';

class Hero extends React.Component{
 render(){
  return <div className="mini ma4 dib pa2 bg-blue">
   <img src= {this.props.pic} alt="Hero"/>
 <h4 className="tc"> {this.props.name}</h4>
 <h4 className="tc"> {this.props.works}</h4>
   
   
  
  </div>
 }
}
export default Hero;