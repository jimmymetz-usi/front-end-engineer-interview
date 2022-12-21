import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import PageLoading from '../PageLoading';

function UserPostsPage() {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);
	const [user, setUser] = useState({});
	const { userId } = useParams();

	/**
	 * Load post data.
	 * Data URL: https://jsonplaceholder.typicode.com/posts?userId=[userId]
	 * User URL: https://jsonplaceholder.typicode.com/users/[userId]
	 */

	/*const getData = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}*/
	/*const getData = (url) => {
		try {
			const data = fetch(url).then(response => 
				 response.json()
			)
			return data;
		} catch (error) {
			console.log(error);
		}
	}*/

	const getDataURL = async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
		const data = await response.json()
		setPosts(data);
	}
	const getUserURL = async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
		const data = await response.json()
		setUser(data);
	}

	useEffect(() => {
		getDataURL();
		getUserURL();
	}, [userId])
	
	useEffect(() => {
		setLoading(false);
	}, [user, posts]);

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
