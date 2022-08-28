import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Xsedos Blogs</h1>
            <div className="spacer"></div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create-blog">New Blog</Link>
            </div>
        </nav>
    )
}


export default Navbar