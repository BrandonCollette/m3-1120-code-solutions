import React from 'react';

export default class ToggleSwitch extends React.Component{
    constructor(props){
        super(props);
        this.state = ({switchOn:false});
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.switchOn){
            this.setState({switchOn:false});
        }
        else {
            this.setState({switchOn: true});
        }
    }

    render(){
        if(this.state.switchOn){
            return <button onClick={this.handleClick} className={'on'}><button className={'innerOn'}></button><div className={'text'}>ON</div></button>;
        }
        else {
            return <button onClick={this.handleClick}><button className={'innerOff'}></button><div className={'text'}>OFF</div></button>;
        }
    }

}
