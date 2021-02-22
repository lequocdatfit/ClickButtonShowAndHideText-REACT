import React, { Component } from 'react'
import classnames from 'classnames';
import './Button.css';


class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var isShow = this.state.show;
        this.setState({
            show: !isShow,
        })
    }

    render() {
        return (
            <div className={classnames('Button', {show: this.state.show})}>
                <button onClick={this.handleClick}>{ this.props.title }</button>
                <div id="msg">{ this.props.content }</div>
            </div>
        )
    }
}

export default Button;