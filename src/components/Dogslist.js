import React, { Component } from 'react'
import * as request from 'superagent'

export default class DogsList extends Component {
    state = {
        dogBreeds: null
    }

    componentDidMount(){
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(result => {console.log(result.body.message)})
            .catch(error => {console.log(error)})
    }

    render() {
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {this.state.dogBreeds === null && 'Loading...'}
            </div>
        )
    }
}