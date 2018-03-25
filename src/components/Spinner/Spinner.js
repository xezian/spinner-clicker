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
    handleClick = event => {
        event.preventDefault();
        this.props.clicked ? this.props.reClick(this.props.id) : this.props.firstClick(this.props.id);
    }
    render() {
        return (
            <button
                onClick={this.handleClick}
                style={this.props.color}
                className={`spinner ${this.whichWay(this.props.id)}`} 
                alt="logo">
                <img src={this.props.logo} alt='logo'/>
            </button>
        );
    }
};
export default Spinner;
