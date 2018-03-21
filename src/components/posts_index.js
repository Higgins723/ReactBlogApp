import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    //automatically called by React as soon as component shows up in the DOM
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Posts Index
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex)