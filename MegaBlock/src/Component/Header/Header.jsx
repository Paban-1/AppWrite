import React from "react";
import { Container, Logo, LogOutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Sigup", slug: "/sigup", active: !authStatus },
    { name: "Post", slug: "/all-post", active: !authStatus },
    { name: "Addpost", slug: "/add-post", active: !authStatus },
  ];
  return (
    <header className="py-3 shadow bg-gray-500 fixed top-0 w-full">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo Width="70px" />
            </Link>
          </div>
          <ul className="flex text-[20px] ml-auto gap-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="flex gap-4">
                  <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
