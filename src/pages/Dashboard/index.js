import React, { Component } from 'react'
import PostList from '../../components/PostList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';



class Dashboard extends Component {	

	render(){
		const { posts } = this.props;
			return (
			<div className="dashboard container">
				<PostList posts={posts} />
			</div>
			)
		}
	}

const mapStateToProps = (state) => {
	return {
		posts: state.firestore.ordered.posts
	}
}

// export default compose(firestoreConnect(['posts']),connect(mapStateToProps))(Dashboard)

export default connect(mapStateToProps)(Dashboard)