
import { SignOutButton } from "@clerk/clerk-react";

function Header() {

  return (
    <div>
      <SignOutButton afterSignOutUrl="/" />
    </div>
  );
}

export default Header;
