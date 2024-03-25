import axios from 'axios';

// const url = 'http://localhost:5000/posts'; // use this for running in localhost
const url = 'https://blog-application-memories-9e68ec8a6fe4.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
