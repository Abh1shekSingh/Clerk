
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./Header";
import Home from "./Home";

function Signin() {
    
  return (
    <div>
      <Header /> {/* Include your header component */}
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
