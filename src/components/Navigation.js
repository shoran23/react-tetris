import React from 'react'

class Navigation extends React.Component {
    render() {
        return (
            <div className='navigation'>
                <button onClick={() => this.props.updatePosition([3,9])}>Up</button>
                <button onClick={() => this.props.updatePosition([3,0])}> Down</button>
                <button onClick={() => this.props.updatePosition([0,5])}>Left</button>
                <button onClick={() => this.props.updatePosition([5,5])}>Right</button>
            </div>
        )
    }
}
export default Navigation