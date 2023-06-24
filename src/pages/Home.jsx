import React, { useContext } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { LeftSideBar } from "../components/LeftSideBar/LeftSideBar";
import { RightSideBar } from "../components/RightSideBar/RightSideBar";
import { PostContext } from "../context/PostContext";
import { Post } from "../components/Post/Post";
import "../App.css";

export const Home = () => {
    const { posts } = useContext(PostContext);
    console.log(posts);
    
    return (
        <>
            <NavBar />
            <div className="main-page">
                <div className="left-part">
                    <LeftSideBar />
                </div>
                <div className="center-feed">
                    <h2>Latest Posts</h2>
                    {posts.map((post) => (
                        <Post key={post.postId} {...post} />
                    ))}
                </div>
                <div className="right-part">
                    <RightSideBar />
                </div>
            </div>
        </>
    );
};
