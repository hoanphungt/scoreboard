import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PlusButton.css'

export default class PlusButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <button className="plus-button" onClick={this.props.onClick}>+</button>
        )
    }
}