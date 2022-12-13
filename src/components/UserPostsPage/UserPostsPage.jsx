import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import PageLoading from '../PageLoading';
import useHttp from '../../app/useHttp'

function UserPostsPage() {
	const [loading, setLoading] = useState(true);
	//const [posts, setPosts] = useState();
	//const [user, setUser] = useState();
	const { userId } = useParams();
	const user = useHttp(`https://jsonplaceholder.typicode.com/users/${userId}`)
	const posts = useHttp(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
	/**
	 * Load post data.
	 * Data URL: https://jsonplaceholder.typicode.com/posts?userId=[userId]
	 * User URL: https://jsonplaceholder.typicode.com/users/[userId]
	 */


	/** **/
	useEffect(() => {
		if(user && posts) {
		setLoading(false);	
		}
	}, [user, posts]);


	useEffect(() => {
		//const getUser = //fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json()).then(res => setUser(res))
		//useHttp(`https://jsonplaceholder.typicode.com/users/${userId}`)

		//const getPost = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json()).then(res => setPosts(res))

}, [])


	if (loading) {
		return <PageLoading />;
	}
	return (
		<>
			<div className="d-flex justify-content-between mb-4">
				<Link to="/">&lt; Home</Link>
				<Link to={`/user/${userId >= 10 ? '1' : +userId + 1}`}>
					Next User &gt;
				</Link>
			</div>
			<h2>{user.name} - Posts</h2>
			{posts.map((post) => (
				<Card key={post.id} className="mb-2">
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text style={{ whiteSpace: 'pre-wrap' }}>
							{post.body}
						</Card.Text>
					</Card.Body>
				</Card>
			))}
		</>
	);
}

export default UserPostsPage;
