import { useState } from "react";
import { useNavigate  } from 'react-router-dom'


const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('tarik')
    const [isLoading, setLoading] = useState(false)
    const navigate  = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        setLoading(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(res => {
                console.log('new blog added');
                setLoading(false)
                navigate('/')
            })
            .catch(e => {
                setLoading(false)
            })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={onSubmit}>

                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                ></textarea>


                <label>Blog author:</label>
                <select value={author} onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="mario">mario</option>
                    <option value="tarik">tarik</option>
                </select>
                {
                    !isLoading &&
                    <button>Add Blog</button>
                }

                {
                    isLoading &&
                    <button disabled>Adding Blog...</button>
                }
            </form>

        </div>
    );
}

export default CreateBlog;