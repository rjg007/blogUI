import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ShowPost = (props) => {

    const [user, setUser] = useState({})
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const {id} = props.match.params


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const result = response.data
                axios.get(`https://jsonplaceholder.typicode.com/users/${result.userId}`)
                .then((response) => {
                    const result = response.data
                    setUser(result)
                })
                .catch((err) => {
                    alert(err.message)
                })
                axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${result.userId}`)
                .then((response) => {
                    const result = response.data
                    setComments(result)
                })
                .catch((err) => {
                    alert(err.message)
                })
            setPost(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])
    
    return (
        <div>
            <h2> User Name : {user.name} </h2>
            <h2> Title : {post.title} </h2>
            <h3> Body : {post.body} </h3>
            <hr/>
            <h2> Comments </h2>
            <ul>
                {
                    comments.map((comment, i) => {
                        return (
                            <li key={comment.id} > {comment.body} </li>
                        )
                    })
                }
            </ul>
            <Link to={ `/users/${user.id}` } > More posts from the author </Link>
        </div>
    )
}

export default ShowPost