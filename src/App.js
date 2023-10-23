import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  console.log("Current User",user);
  return (
    <div className="App">
      {
        isAuthenticated ? <h2>welcome</h2> : <h2>please login </h2>
      }
      {
        isAuthenticated ? <button onClick={() => logout()}>Log Out</button> : <button onClick={() => loginWithRedirect()}>Login</button>
      }
    </div>
  );
}

export default App;