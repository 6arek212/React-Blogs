import { Link } from 'react-router-dom'

const BlogsList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>

            {
                blogs?.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written By {blog.author}</p>
                        </Link>


                    </div>
                ))
            }

            {!blogs && <p>Nothing to show</p>}


        </div>
    );
}


export default BlogsList;