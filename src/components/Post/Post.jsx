import React, { useContext, useState } from "react";
import {
    BiUpvote,
    BiSolidUpvote,
    BiDownvote,
    BiSolidDownvote,
    BiComment,
    BiShareAlt,
} from "react-icons/bi";
import { BsBookmark, BsBookmarksFill } from "react-icons/bs";
import "./Post.css";
import { PostContext } from "../../context/PostContext";
import { Link } from "react-router-dom";
export const Post = ({
    postId,
    username,
    picUrl,
    post,
    postDescription,
    createdAt,
    upvotes,
    downvotes,
    comments,
    tags,
    isBookmarked,
}) => {
    const { upvotePost, downVotePost, removeUpvote, removeDownVote } =
        useContext(PostContext);
    const [upvoted, setUpvoted] = useState(false);
    const [downVoted, setDownVoted] = useState(false);

    function handleUpvote() {
        if (upvoted) removeUpvote(postId);
        else {
            upvotePost(postId);
            if(downVoted) {
                removeDownVote(postId);
                setDownVoted(false);
            }
        }
        setUpvoted((prev) => !prev);
    }

    function handleDownvote() {
        if (downVoted) removeDownVote(postId);
        else {
            downVotePost(postId);
            if(upvoted) {
                removeUpvote(postId);
                setUpvoted(false);
            }

        }
        setDownVoted((prev) => !prev);
    }

    return (
        <div className="post-container">
            <div className="post-left">
                <button onClick={handleUpvote}>
                    {!upvoted ? (
                        <BiUpvote size="20px" />
                    ) : (
                        <BiSolidUpvote size="20px" />
                    )}
                </button>
                <p>{upvotes - downvotes}</p>
                <button onClick={handleDownvote}>
                    {!downVoted ? (
                        <BiDownvote size="20px" />
                    ) : (
                        <BiSolidDownvote size="20px" />
                    )}
                </button>
            </div>
            <div className="post-right">
                <div className="post-right-header">
                    <img src={picUrl} className="profile-image" />
                    <label>Posted by @{username}</label>
                    <p>{createdAt}</p>
                </div>
                <div className="post-right-body">
                    <h3>{post}</h3>
                    <div className="tags">
                        {tags.map((tag, ind) => (
                            <span key={ind} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p>{postDescription}</p>
                </div>
                <div className="post-right-footer">
                    <button>
                        <Link to={`/post/${postId}`}>
                        <BiComment size="20px" />
                        </Link>
                    </button>
                    <button disabled={true}>
                        <BiShareAlt size="20px" />
                    </button>
                    <button>
                        <BsBookmark size="20px" />
                    </button>
                </div>
            </div>
        </div>
    );
};
