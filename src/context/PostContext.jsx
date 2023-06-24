import { createContext, useState } from "react";
import { forumData } from "../data/db";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const userData = {
        accountId: forumData.accountId,
        username: forumData.username,
        name: forumData.name,
        picUrl: forumData.picUrl,
    };
    const [posts, setPosts] = useState(forumData.posts);
    const [user, setUser] = useState(userData);

    const upvotePost = (id) => {
        const updatedPosts = posts.map((post) => {
            if (post.postId === id) {
                return { ...post, upvotes: post.upvotes + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const removeUpvote = (id) => {
        const updatedPosts = posts.map((post) => {
            if (post.postId === id) {
                return { ...post, upvotes: post.upvotes - 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const downVotePost = (id) => {
        const updatedPosts = posts.map((post) => {
            if (post.postId === id) {
                return { ...post, downvotes: post.downvotes + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const removeDownVote = (id) => {
        const updatedPosts = posts.map((post) => {
            if (post.postId === id) {
                return { ...post, downvotes: post.downvotes - 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const sortPosts = (sortParameter) => {
        let updatedPosts = [];
        if (sortParameter === "Most Upvoted")
            updatedPosts = posts.toSorted((a, b) => {
                const votesA = a.upvotes - a.downvotes;
                const votesB = b.upvotes - b.downvotes;
                return votesB - votesA;
            });
        else {
            updatedPosts = posts.toSorted((a, b) => {
                const createdAtA = a.createdAt.slice(11);
                const createdAtB = b.createdAt.slice(11);
                //console.log(createdAtA)
                if (createdAtA > createdAtB) return -1;
                else if (createdAtB > createdAtA) return 1;
                return 0;
            });
            console.log(updatedPosts);
        }
        setPosts(updatedPosts);
    };

    return (
        <PostContext.Provider
            value={{
                posts,
                user,
                upvotePost,
                downVotePost,
                removeUpvote,
                removeDownVote,
                sortPosts,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};
