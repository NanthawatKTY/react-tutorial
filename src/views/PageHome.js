import LayoutPage from "./LayoutPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function PageHome() {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    const postsLists = posts.map(post => {
        return (
            <div key={post.id}>
                <h4>
                   <Link to={`/post/${post.id}`}>{post.title}</Link> 
                </h4>
                <p>{post.body}</p>
                <hr />
            </div>
        );
    })

    return (
        <LayoutPage>
            <h2>Home หน้าแรกของหมู่เฮา</h2>
            {postsLists}
        </LayoutPage>
    );
}

export default PageHome;