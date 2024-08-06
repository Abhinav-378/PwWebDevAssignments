import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Cards from './components/Cards';
import SeachBar from './components/SeachBar';
import Card from './components/Card';
import useDebounce from '../hooks/useDebounce';

function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
  const debouncedSearch = useDebounce(search, 2000);

  useEffect(()=>{
    const fetchUser = async ()=> {
      if(debouncedSearch){
        try {
          const response = await axios.get(`https://api.github.com/users/${debouncedSearch}`);
          setUser({
            id : response.data.id,
            user : response.data.login,
            profile : response.data.avatar_url,
          });
        } catch (error) {
          console.log('error: ', error);
          setUser(null)
        }
      }
      else{
        setUser(null)
      }
    }

    fetchUser();
  },[debouncedSearch])
  return (
    <>
      <SeachBar setSearch={setSearch} />
      {user ? <Card user={user} /> : <Cards/> }
    </>
  )
}

export default App
