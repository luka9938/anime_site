import { Outlet } from "react-router";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layoutContainer">
      <header className="header">
        <h1>Anime Library</h1>
      </header>

      <main className="mainContent">
        <Outlet /> {/* This renders the current page's component (e.g., AnimeDetails) */}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Anime Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
