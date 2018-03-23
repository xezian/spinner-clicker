import React from "react";
import './Spinner.css';

class Spinner extends React.Component {
    whichWay = key => {
        if(key%2===0){
            return 'leftSpinner';
        }else{
            return 'rightSpinner';
        } 
    }
    render() {
        return (
            <img src={this.props.logo} style={this.props.color} className={`spinner ${this.whichWay(this.props.id)}`} alt="logo" />
        );
    }
};
export default Spinner;
