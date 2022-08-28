
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './use_case/useFetch';

const BolgDetails = () => {
    const { id } = useParams()
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const onDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
            .then(res => {
                navigate('/')
            })
            .catch(e => {
            })

    }



    return (
        <div className="blog-details">

            {isLoading && <div>Loading...</div>}
            {error && <div> {error} </div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>

                    <button onClick={onDelete}>delete</button>
                </article>
            )}

        </div>
    );
}

export default BolgDetails;