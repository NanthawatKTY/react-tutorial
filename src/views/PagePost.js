import { useParams } from "react-router-dom";
import { useState,  useEffect } from "react";
import LayoutPage from "./LayoutPage";

function PagePost() {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const { postId } = useParams();
    
    async function getPost(thePostId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${thePostId}`);
        const data = await response.json();

        setPost(data);
    }

    async function getComments(thePostId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${thePostId}/comments`);
        const data = await response.json();

        setComments(data);
    }

    useEffect(() => {
        getPost(postId);
        getComments(postId)
    }, [postId])

    const commentsLists = comments.map(comment => {
        return (
            <div key={comment.id}>
                <h4>{comment.email}</h4>
                <p>{comment.body}</p>
                <hr />
            </div>    
        )        
    })

    return (
        <LayoutPage>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
            <h4>This post has {comments.length} comments</h4>
            <hr/>
            {commentsLists}
        </LayoutPage>
       
    );
}

export default PagePost;

//https://jsonplaceholder.typicode.com/posts/1