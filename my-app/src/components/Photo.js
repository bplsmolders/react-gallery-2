import React, { Component } from 'react';
import apiKey from '../config.js';
import Axios from 'axios'


class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pictures: [],
          loading: true,
          api: apiKey,
          topic: props.match.params.topic
        } 
    } 
      
    componentDidMount(){
        this.performSearch();
    }

    createUrl = (server, id, secret) => {
        return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
    };

    performSearch = (query = 'flower') => {
        Axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.api}&tags=${this.state.topic}&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            pictures: response.data.photos.photo,
            loading: false
          });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
          });    
    }

    render (){
        console.log(this.state.loading)

        return(
            <ul>
                {   (this.state.loading)
                    ? <p>Loading2...</p>
                    :this.state.pictures.map(picture => 
                    <li>
                        <img src= {this.createUrl(picture.server, picture.id, picture.secret)} alt= "" ></img>
                    </li>
                    ) 
                }
            </ul>
        )
    }
}

export default Photo