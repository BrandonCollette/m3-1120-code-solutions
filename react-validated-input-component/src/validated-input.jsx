import React from 'react';
import ReactDOM from 'react-dom';

export default class ValidatedInput extends React.Component{
    constructor(props){
        super(props);
        this.state = ({value: 0});

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value.length});
    }

    render(){
        if(this.state.value===0){
            return (
                <form>
                    <label>
                        <div>Password</div>
                        <input type={this.state.value} onChange={this.handleChange}/>
                        <i className={"fas fa-times"} />
                        <div className={'info'}> password is required.</div>
                    </label>
                </form>
            )
        }
        else if(this.state.value>=8) {
            return (
                <form>
                    <label>
                        <div>Password</div>
                        <input type={this.state.value} onChange={this.handleChange}/>
                        <i className={"fas fa-check"} />
                    </label>
                </form>
            )
        }
        else{
            return(
                <form>
                    <label>
                        <div>Password</div>
                        <input type={this.state.value} onChange={this.handleChange}/>
                        <i className={"fas fa-times"} />
                        <div className={'info'}> password is too short.</div>
                    </label>
                </form>

            )
        }
    }
}
