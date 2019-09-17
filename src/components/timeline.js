import React, { Component } from 'react';
import Post from './post';

class Timeline extends Component {
    state = { 
        posts: [] 
    }
    componentDidMount() {
        fetch("https://api.myjson.com/bins/u55s5")
        .then(res => res.json())
        .then(body => {
            this.setState({posts: body});
        });
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <h1>SALINSTAGRAM</h1>
                <hr />
                <div className="container">
                    { this.state.posts.map( (e, i) => <Post key={i} content={e} />) }
                </div>
            </div>
         );
    }
}
 
export default Timeline;