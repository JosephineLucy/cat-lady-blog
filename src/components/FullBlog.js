import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const FullBlog = () => {

    const { id } = useParams();
    const { data : blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)
    return ( <div className="full-blog">
        {error ? <p>{error}</p> : isLoading ? <p>loading...</p> : null}
        {blog && <article>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
            </article>}
    </div> );
}
 
export default FullBlog;