import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Posts({ posts }) {
  const router = useRouter();
  const [status, setStatus] =useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('is_logged_in');
    if (!isLoggedIn) {
       
      router.push('/Login');
      alert("please Login First");
    }else{
        setStatus(true);
    }
    console.log('lll',isLoggedIn);
  }, []);


  return (
    <div>
    {
        status && (
    
    <div className="container">
      <h1 className="mt-4">All Posts</h1>
      <ul className="list-group">
        {posts.map((post, index) => (
          <li className="list-group-item" key={post.id}>
            <Link href={`/post/${post.id}`}>
              <p className="text-decoration-none text-dark" style={{ textDecoration: 'none' }}>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
        
    </div>
   )}
   </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;


