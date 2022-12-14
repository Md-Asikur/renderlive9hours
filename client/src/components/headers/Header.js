// import React, { useContext } from 'react'
// import { GlobalState } from '../../GlobaalState'

// import menu from "../headers/icon/menu.svg"
// import Close from "../headers/icon/close.svg";
// import Cart from "../headers/icon/cart.svg";
// import { Link } from 'react-router-dom';
// export default function Header() {
//   const state = useContext(GlobalState)
//   const [isLogged,setIsLogged] = state.userAPI.isLogged;
//   const [isAdmin,setIsAdmin] = state.userAPI.isAdmin;
//   // const [cart] = state.userAPI.cart;
//   // const [menu, setMenu] = useState(false);

//   // const logoutUser = async () => {
//   //   await axios.get("/user/logout");

//   //   localStorage.removeItem("firstLogin");

//   //   window.location.href = "/";
//   // };

//   const adminRouter = () => {
//     return (
//       <>
//         <li>
//           <Link to="/create_product">Create Product</Link>
//         </li>
//         <li>
//           <Link to="/category">Categories</Link>
//         </li>
//       </>
//     );
//   };

//   const loggedRouter = () => {
//     return (
//       <>
//         <li>
//           <Link to="/history">History</Link>
//         </li>
//         <li>
//           <Link to="/">
//             Logout
//           </Link>
//         </li>
//       </>
//     );
//   };

//   // const styleMenu = {
//   //   left: menu ? 0 : "-100%",
//   // };

  
//   return (
//     <header>
//       <div className="menu">
//         <img src={menu} alt="" width="30" />
//       </div>
//       <div className="logo">
//         <h1>
//           <Link to="/">{isAdmin ? "Admin" : "Asik Shoping Mole"}</Link>
//         </h1>
//       </div>
//       <ul>
//         <li>
//           <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
//         </li>

//         {isAdmin && adminRouter()}

//         {isLogged ? (
//           loggedRouter()
//         ) : (
//           <li>
//             <Link to="/login">Login ✥ Register</Link>
//           </li>
//         )}

//         <li>
//           <img src={Close} alt="" width="30" className="menu" />
//         </li>
//       </ul>
//       {isAdmin ? (
//         ""
//       ) : (
//         <div className="cart-icon">
//           <span>0</span>
//           <Link to="/cart">
//             <img src={Cart} alt="" width="30" />
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }
import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobaalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("https://ecommerce9hours-asikur.onrender.com/user/logout");

    localStorage.removeItem("firstLogin");
    localStorage.clear()
    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "ADMIN" : "ASIK SHOP"}</Link>
        </h1>
      </div>

      <ul style={styleMenu}>
        <li>
          <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
        </li>

        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Login ✥ Register</Link>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>

      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30" />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
