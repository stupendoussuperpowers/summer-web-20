import React, { Component } from 'react'

class Hello extends Component {
    render() {
        return (
            <pre>
                <p>
                    {this.props.sr}               {this.props.title}                                                                {this.props.time}
                    <hr></hr>
                </p>
            </pre>

        )
    }
}
export default Hello