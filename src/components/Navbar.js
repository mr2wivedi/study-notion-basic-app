import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/studynotion.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn
  const setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className="flex w-11/12 max-w-[1160px] justify-between items-center mx-auto">
      <Link to={"/"}>
        <img 
          src={logo}
          alt="StudyNotion"
          width={162}
          height={32}
          loading="lazy"
        ></img>
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-zinc-400">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        { !isLoggedIn &&
          <Link to={"/login"}>
            <button className="text-zinc-400 bg-zinc-900 py-[8px] px-[12px] rounded-[8px] border border-zinc-800">Login</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to={"/signup"}>
          <button className="text-zinc-400 bg-zinc-900 py-[8px] px-[12px] rounded-[8px] border border-zinc-800">
            Signup
          </button></Link>
        }
        { isLoggedIn &&
          <Link to={"/"}>
          <button className="text-zinc-400 bg-zinc-900 py-[8px] px-[12px] rounded-[8px] border border-zinc-800" onClick={()=>{setIsLoggedIn(false)
        toast.success("Logged Out") } 
        }
          >
            Logout
          </button></Link>
        }
        { isLoggedIn &&
          <Link to={"/dashboard"}>
          <button className="text-zinc-400 bg-zinc-900 py-[8px] px-[12px] rounded-[8px] border border-zinc-800">
            dashboard
          </button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
