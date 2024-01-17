
import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Header from "./Header";
import Home from "./Home";
import "../App.css"

function Signin() {

  const { user } = useUser();
    
  return (
    <div>
      {user && <Header />} 
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Home />
        </SignedIn>
      </div>
    </div>
  );
}

export default Signin;
