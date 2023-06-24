import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineRocket } from "react-icons/md";
import { CgProfile } from "react-icons/cg"
import { BsBookmark } from "react-icons/bs";

import "./LeftSideBar.css";

export const LeftSideBar = () => {
    return (
        <div className="left-side-bar-container">
            
            <Link>
                <button>
                    <AiOutlineHome size="20px"/>
                </button>
                <label>Home</label>
            </Link>
            <Link>
                <button>
                    <MdOutlineRocket size="20px"/>
                </button>
                <label>Explore</label>
            </Link>
            <Link>
                <button>
                    <BsBookmark size="20px"/>
                </button>
                <label>Bookmarks</label>
            </Link>
            <Link>
                <button>
                    <CgProfile size="20px"/>
                </button>
                <label>
                    Profile
                </label>
            </Link>
        </div>
    );
};
