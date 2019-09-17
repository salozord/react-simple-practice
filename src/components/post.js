import React, { Component } from 'react';

class Post extends Component {
    state = { 
        title: this.props.content.title,
        description: this.props.content.description,
        image: this.props.content.image,
        likes: this.props.content.likes
    }
    handleLike = () => {
        this.setState({likes: this.state.likes + 1})
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-12 col-sm-9 col-md-6 mx-auto">
                    <div className="card my-3">
                        <h3 className="card-header">{ this.state.title }</h3>
                        <img className="w-100" src={ this.state.image } alt="Imagen tarjeta" />
                        <p className=" card-body card-text my-3">{ this.state.description }</p>
                        <hr />
                        <div className="text-center">
                            Likes: { this.state.likes }
                        </div>
                        <hr />
                        <button className="btn btn-primary" onClick={ this.handleLike }><i className="fas fa-heart"></i> Like</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Post;