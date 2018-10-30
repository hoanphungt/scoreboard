import React, { Component } from 'react'
import ListItem from './ListItem';
import PropTypes from 'prop-types'

export default class MyList extends Component {
    static propTypes = {
        name: PropTypes.arrayOf(PropTypes.shape(PropTypes.ListItem))
    }
        
    render() {
        const items = this.props.items || []
        return <ol>
            {
                items.map(item => <ListItem {...item} />)
            }
        </ol>
    }
}