import React from 'react'

class Square extends React.Component {
    state = {
        id: this.props.id,
        width: this.props.width,
        height: this.props.height,
        color: this.props.color,
        borderWidth: this.props.borderWidth,
        borderColor: this.props.borderColor
    }
    render() {
        return (
            <div 
                className='square'
                id={this.state.id}
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    backgroundColor: this.state.color,
                    border: `${this.state.borderWidth} solid ${this.state.borderColor}`
                }}>
            </div>
        )
    }
}
export default Square