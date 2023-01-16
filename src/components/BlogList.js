const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
               {blogs.map((blog)=> (
            <div key={blog.id} className="blog-preview">
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;