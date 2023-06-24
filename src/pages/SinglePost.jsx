import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { LeftSideBar } from "../components/LeftSideBar/LeftSideBar";
import { Post } from "../components/Post/Post";
import {
    AiOutlineHeart,
    AiOutlineComment,
    AiOutlineLink,
    AiOutlineArrowLeft,
} from "react-icons/ai";

export const SinglePost = () => {
    const { posts } = useContext(PostContext);
    const { id } = useParams();
    const post = posts.find((post) => post.postId === id);
    return (
        <>
            <NavBar />
            <div>
                <div className="main-page">
                    <div className="left-part">
                        <LeftSideBar />
                    </div>
                    <div className="center-feed">
                        <Link to="/"><AiOutlineArrowLeft size="20px"/>Back to Home</Link>
                        <Post {...post} />
                        <div className="post-comments">
                            {post.comments.map((comment) => (
                                <div
                                    className="comment"
                                    key={comment.commentId}
                                >
                                    <div className="comment-header">
                                        <img
                                            src={comment.picUrl}
                                            className="profile-image"
                                        />
                                        <h4>
                                            <p>Ashwin </p>
                                        </h4>
                                        <p>@{comment.username}</p>
                                    </div>
                                    <div className="comment-body">
                                        <p>{comment.comment}</p>
                                    </div>
                                    <div className="comment-footer">
                                        <button>
                                            <AiOutlineHeart size="20px" />
                                        </button>
                                        <button>
                                            <AiOutlineComment size="20px" />
                                        </button>
                                        <button>
                                            <AiOutlineLink size="20px" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
