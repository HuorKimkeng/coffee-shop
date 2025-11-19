// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// const MENU_ITEMS = ["Home", "Menu", "About", "Contact"];

// function Header() {
//   const [query, setQuery] = useState("");
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const usernameRef = useRef<HTMLInputElement | null>(null);

//   useEffect(() => {
//     if (searchOpen) inputRef.current?.focus();
//   }, [searchOpen]);

//   useEffect(() => {
//     if (showLogin && usernameRef.current) usernameRef.current.focus();
//   }, [showLogin]);

//   const q = query.trim().toLowerCase();

//   const handleSearchToggle = () => {
//     setSearchOpen((prev) => {
//       const next = !prev;
//       if (!next) setQuery("");
//       return next;
//     });
//   };

//   const handleProfileClick = () => {
//     setShowLogin(true);
//   };

//   const handleCloseLogin = () => {
//     setShowLogin(false);
//   };

//   const handleCloseRegister = () => {
//     setShowRegister(false);
//   };

//   const handleLoginSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Login submitted!");
//   };

//   const handleRegisterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Register submitted!");
//   };

//   const renderHighlighted = (item: string) => {
//     if (!q) return item;
//     const idx = item.toLowerCase().indexOf(q);
//     if (idx === -1) return item;
//     const before = item.slice(0, idx);
//     const match = item.slice(idx, idx + q.length);
//     const after = item.slice(idx + q.length);
//     return (
//       <>
//         {before}
//         <span className="highlight">{match}</span>
//         {after}
//       </>
//     );
//   };

//   return (
//     <div className="header-container">
//       <div className="mid-header">
//         <div className="logo-pro">
//           <img src="src/assets/logo.png" alt="logo" />
//         </div>

//         <div className="menu">
//           <nav>
//             <ul className="menu-list">
//               {MENU_ITEMS.map((item) => {
//                 let liClass = "menu-item";
//                 if (q.length > 0) {
//                   if (item.toLowerCase().includes(q)) liClass += " match";
//                   else liClass += " muted";
//                 }
//                 return (
//                   <li key={item} className={liClass}>
//                     <Link
//                       to={item === "Home" ? "/" : "/" + item.toLowerCase()}
//                     >
//                       {renderHighlighted(item)}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>

//         <div className="icon-container">
//           <div
//             className={`search-wrapper ${searchOpen ? "open" : ""}`}
//             role="search"
//           >
//             <input
//               ref={inputRef}
//               className="search-input"
//               type="search"
//               placeholder="Search..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               aria-label="Search site"
//             />

//             <button
//               type="button"
//               className="icon-btn search-btn"
//               aria-label={searchOpen ? "Close search" : "Open search"}
//               onClick={handleSearchToggle}
//             >
//               <svg
//                 width="23"
//                 height="23"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M21 21l-4.35-4.35"
//                   stroke="#111"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <circle
//                   cx="11"
//                   cy="11"
//                   r="6"
//                   stroke="#111"
//                   strokeWidth="2"
//                   fill="none"
//                 />
//               </svg>
//             </button>
//           </div>

//           <button
//             className="icon-btn profile-btn"
//             aria-label="Login"
//             onClick={handleProfileClick}
//           >
//             <span className="profile-icon" aria-hidden="true">
//               👤
//             </span>
//             <span className="profile-text">Login</span>
//           </button>
//         </div>
//       </div>

//       {/* ===== LOGIN MODAL ===== */}
//       {showLogin && (
//         <div className="login-overlay">
//           <div className="login-box">
//             <button className="close-btn" onClick={handleCloseLogin}>
//               ✖
//             </button>
//             <h2>Login</h2>
//             <form onSubmit={handleLoginSubmit}>
//               <div className="input-group">
//                 <label>Username</label>
//                 <input
//                   type="text"
//                   ref={usernameRef}
//                   placeholder="Enter username"
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Password</label>
//                 <input type="password" placeholder="Enter password" required />
//               </div>
//               <button type="submit" className="login-btn">
//                 Login
//               </button>
//               <p className="register-text">
//                 Don’t have an account?{" "}
//                 <button
//                   type="button"
//                   className="link-btn"
//                   onClick={() => {
//                     setShowLogin(false);
//                     setShowRegister(true);
//                   }}
//                 >
//                   Register
//                 </button>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ===== REGISTER MODAL ===== */}
//       {showRegister && (
//         <div className="login-overlay">
//           <div className="login-box">
//             <button className="close-btn" onClick={handleCloseRegister}>
//               ✖
//             </button>
//             <h2>Register</h2>
//             <form onSubmit={handleRegisterSubmit}>
//               <div className="input-group">
//                 <label>Full Name</label>
//                 <input type="text" placeholder="Enter full name" required />
//               </div>
//               <div className="input-group">
//                 <label>Email</label>
//                 <input type="email" placeholder="Enter email" required />
//               </div>
//               <div className="input-group">
//                 <label>Password</label>
//                 <input type="password" placeholder="Create password" required />
//               </div>
//               <button type="submit" className="login-btn">
//                 Register
//               </button>
//               <p className="register-text">
//                 Already have an account?{" "}
//                 <button
//                   type="button"
//                   className="link-btn"
//                   onClick={() => {
//                     setShowRegister(false);
//                     setShowLogin(true);
//                   }}
//                 >
//                   Login
//                 </button>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;



import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const MENU_ITEMS = ["Home", "Menu", "About", "Contact"];

function Header() {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (showLogin && usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [showLogin]);

  const q = query.trim().toLowerCase();

  const handleSearchToggle = () => {
    setSearchOpen((prev) => {
      const next = !prev;
      if (!next) setQuery("");
      return next;
    });
  };

  const handleProfileClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

  // ✅ Login Submit
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<{ message: string }>(
        "http://localhost:5000/api/login",
        loginData
      );
      alert(res.data.message || "Login successful!");
      setShowLogin(false);
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed!");
    }
  };

  // ✅ Register Submit
  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<{ message: string }>(
        "http://localhost:5000/api/register",
        registerData
      );
      alert(res.data.message || "Registration successful!");
      setShowRegister(false);
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed!");
    }
  };

  const renderHighlighted = (item: string) => {
    if (!q) return item;
    const idx = item.toLowerCase().indexOf(q);
    if (idx === -1) return item;
    const before = item.slice(0, idx);
    const match = item.slice(idx, idx + q.length);
    const after = item.slice(idx + q.length);
    return (
      <>
        {before}
        <span className="highlight">{match}</span>
        {after}
      </>
    );
  };

  return (
    <div className="header-container">
      <div className="mid-header">
        <div className="logo-pro">
          <img src="src/assets/logo.png" alt="logo" />
        </div>

        <div className="menu">
          <nav>
            <ul className="menu-list">
              {MENU_ITEMS.map((item) => {
                let liClass = "menu-item";
                if (q.length > 0) {
                  if (item.toLowerCase().includes(q)) liClass += " match";
                  else liClass += " muted";
                }
                return (
                  <li key={item} className={liClass}>
                    <Link to={item === "Home" ? "/" : "/" + item.toLowerCase()}>
                      {renderHighlighted(item)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="icon-container">
          <div className={`search-wrapper ${searchOpen ? "open" : ""}`} role="search">
            <input
              ref={inputRef}
              className="search-input"
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search site"
            />

            <button
              type="button"
              className="icon-btn search-btn"
              aria-label={searchOpen ? "Close search" : "Open search"}
              onClick={handleSearchToggle}
            >
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="#111"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="11" cy="11" r="6" stroke="#111" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>

          <button className="icon-btn profile-btn" onClick={handleProfileClick}>
            <span className="profile-icon" aria-hidden="true">
              👤
            </span>
            <span className="profile-text">Login</span>
          </button>
        </div>
      </div>

      {/* ===== LOGIN MODAL ===== */}
      {showLogin && (
        <div className="login-overlay">
          <div className="login-box">
            <button className="close-btn" onClick={handleCloseLogin}>
              ✖
            </button>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label>Username</label>
                <input
                  type="text"
                  ref={usernameRef}
                  value={loginData.username}
                  onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                  }
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
              <p className="register-text">
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                  }}
                >
                  Register
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ===== REGISTER MODAL ===== */}
      {showRegister && (
        <div className="login-overlay">
          <div className="login-box">
            <button className="close-btn" onClick={handleCloseRegister}>
              ✖
            </button>
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={registerData.fullname}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, fullname: e.target.value })
                  }
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, password: e.target.value })
                  }
                  placeholder="Create password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">
                Register
              </button>
              <p className="register-text">
                Already have an account?{" "}
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                  }}
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

