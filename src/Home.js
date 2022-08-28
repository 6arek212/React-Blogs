import BlogsList from './components/BlogsList';
import useFetch from './use_case/useFetch';

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')



    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <BlogsList blogs={blogs} title="All Blogs"  />
        </div>

    );
}

export default Home;
