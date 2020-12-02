import React from "react";

export default class HotButton extends React.Component{
    constructor(props){
        super(props);
        this.state = ({timesClicked:0});
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({timesClicked:this.state.timesClicked+=1});
    }
    render(){
        switch (true){
            case this.state.timesClicked >=18:
                return <button onClick={this.handleClick}>Hot Button</button>;

            case this.state.timesClicked >= 15:
                return <button onClick={this.handleClick} className={'yellow'}>Hot Button</button>;

            case this.state.timesClicked >=12:
                return <button onClick={this.handleClick} className={'peachpuff'}>Hot Button</button>;

            case this.state.timesClicked >= 9:
                return <button onClick={this.handleClick} className={'magenta'}>Hot Button</button>;

            case this.state.timesClicked >=6:
                return <button onClick={this.handleClick} className={'purple'}>Hot Button</button>;

            case this.state.timesClicked >= 3:
                return <button onClick={this.handleClick} className={'blue'}>Hot Button</button>;

            default:
                return <button onClick={this.handleClick}>Hot Button</button>;

        }
    }
}