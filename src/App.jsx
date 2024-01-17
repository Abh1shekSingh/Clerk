
import { useUser } from '@clerk/clerk-react';
import './App.css'
import Signin from './components/Signin'

function App() {

  const { user } = useUser();

  return (
    <div className="SigninPage">
      {!user ? <h2>Welcome! Say hello</h2> : null}
      <Signin />
    </div>
  )
}

export default App
