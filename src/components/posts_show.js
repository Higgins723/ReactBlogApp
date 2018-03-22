import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        //given to us from react-router
        const { id } = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                Posts show
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);