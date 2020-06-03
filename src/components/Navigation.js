import React from 'react'

class Navigation extends React.Component {
    render() {
        return (
            <div className='navigation'>
                <button onClick={this.props.movePosition}>Up</button>
                <button>Down</button>
                <button>Left</button>
                <button>Right</button>
            </div>
        )
    }
}
export default Navigation