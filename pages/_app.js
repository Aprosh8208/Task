import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();


  // useEffect(()=>{
  //   const isLoggedIn = localStorage.getItem('is_logged_in');
  //   if (!isLoggedIn && router.pathname !== '/Login') {
  //     router.push('/Login');
  //     return null;
  //   }
  // },[])
  // // Redirect to login page if user is not logged in
 

  return <Component {...pageProps} />;
}

export default MyApp;
