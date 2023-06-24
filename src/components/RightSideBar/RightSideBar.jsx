import React, { useContext, useState } from "react";
import "./RightSideBar.css";
import { PostContext } from "../../context/PostContext";

export const RightSideBar = () => {
    const { sortPosts } = useContext(PostContext);
    const [sortBy, setSortBy] = useState("");
    function handleChange(event) {
        setSortBy(event.target.value);
        sortPosts(event.target.value);
    }

    return (
        <div className="right-sidebar-container">
            <h2>Posts</h2>
            <select value={sortBy} onChange={handleChange}>
                <option value="" disabled>
                    Default
                </option>
                <option>Latest Post</option>
                <option>Most Upvoted</option>
            </select>
        </div>
    );
};
