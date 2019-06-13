import React, { Component } from 'react'
import * as request from 'superagent'

export default class DogsList extends Component {
    state = {
        dogList: null
    }

    componentDidMount(){
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                return Object.keys(response.body.message)
            })
            .then(result => {this.updateBreeds(result)})
            .catch(error => {console.log(error)})
    }

    updateBreeds = (breeds) => {
        this.setState({
            dogList: breeds
        })
    }
    displayData(){
        if(this.state.dogList === null){
          return <h1>Loading</h1>
        }
    
        return this.state.dogList.map(breed => <li key={breed}>{breed}</li>)
      }
    

    render() {
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                <ul>
                    {this.displayData()}
                </ul>
            </div>
        )
    }
}