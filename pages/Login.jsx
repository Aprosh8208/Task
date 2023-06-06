
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication with username and password
    // Here, you can use any logic to authenticate the user
    // For simplicity, let's use a hardcoded username and password
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('is_logged_in', true);
      router.push('/User');
    } else {
      alert('Invalid credentials');
    }
  };

    useEffect(()=>{
            localStorage.removeItem('is_logged_in');
    },[])
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;