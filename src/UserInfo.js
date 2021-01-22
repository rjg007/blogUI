import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const UserInfo = (props) => {

    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            const result = response.data
            setUserPosts(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])

    return (
        <div>
            <h1> User Name : {user.name} </h1>
            <h2> Posts written by user </h2>
            <ul>
                {
                    userPosts.map(post => {
                        return (
                            <li key={post.id}> <Link to={`/posts/${post.id}`} > {post.title} </Link> </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default UserInfo