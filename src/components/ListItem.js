import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListItem extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {        
        return <li> {this.props.id} {this.props.name} {this.props.age} </li>
    }
}