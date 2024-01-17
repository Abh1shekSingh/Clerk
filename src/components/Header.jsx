
import { SignOutButton, useUser } from "@clerk/clerk-react";
import "../App.css"
function Header() {

  const { user } = useUser();
  console.log(user)

  return (
    <header>
      <h2>Dashboard</h2>
      <div className="header-components">
          <img src={user.imageUrl} alt="Profile" />
        <SignOutButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}

export default Header;
