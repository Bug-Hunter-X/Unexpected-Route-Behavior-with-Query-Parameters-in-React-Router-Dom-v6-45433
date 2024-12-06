```javascript
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  useEffect(() => {
    // Cleanup on unmount to avoid potential issues with lingering query params
    return () => {
      setSearchParams({}); //Clear search params on unmount
    };
  }, [setSearchParams]);

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Search Params: {searchParams.toString()}</p>
      <button onClick={handleNavigate}>Go to About</button>
    </div>
  );
}

function About() {
  let location = useLocation();
  useEffect(() => {
    console.log('About Location:', location);
  }, [location]);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
// ...rest of your App Component
```