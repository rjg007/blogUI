import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Posts = (props) => {

    const {id} = props.match.params
    const [posts, setPosts] = useState([])
    const [newPosts, setNewPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            const result = response.data
            setPosts(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])

    let tenPosts = []

    // for (let i = 0; i < 10; i++) {
    //     tenPosts.push(posts[i])
    // }

    const handleNext = () => {
        for ( let i = 0,j = posts.length; i < j ; i+= 10) {
            tenPosts = posts.slice(i, i + 10)
            setNewPosts(tenPosts)
        }
    }

    return (
        <div>
            <h1>Total Posts : {posts.length} </h1>
            <ul>
                {
                    newPosts.map(post => {
                        return (
                            <li key={post.id} > <Link to={`/posts/${post.id}`} > {post.title} </Link> </li>
                        )
                    })
                }
            </ul>

            <button onClick={handleNext} > Next </button>
        </div>
    )
}

export default Posts