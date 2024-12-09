import react from "react";


function Header() {
  return (
    <>
      <header class="header">
        <div class="container">
          <h1 class="logo">Ticketi Sasa</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Create Events</a>
              </li>
              <li>
                <a href="#">Sell</a>
              </li>
              <li>
                <a href="#">Favorites</a>
              </li>
              <li>
                <a href="#">My Tickets</a>
              </li>
              <li>
                <a href="#" class="sign-in">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
