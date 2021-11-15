import React, { Component } from 'react'

export default class ItemListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            greeting: "Hi! im a message."
          }
    }
    render() {
        return (
            <div className="flex justify-center">
                <h2>{this.state.greeting}</h2>
            </div>
        )
    }
}
