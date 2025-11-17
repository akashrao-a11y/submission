// src/services/apiService.js

export async function fetchUserData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!res.ok) {
            return { success: false, message: 'Failed to fetch user data' };
        }
        const data = await res.json();
        return { success: true, data, message: 'User data fetched successfully' };
    } catch (e) {
        return { success: false, message: e.message || 'Network error' };
    }
}

export async function fetchPosts() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!res.ok) {
            return { success: false, message: 'Failed to fetch posts' };
        }
        const data = await res.json();
        return { success: true, data, count: data.length, message: 'Posts fetched successfully' };
    } catch (e) {
        return { success: false, message: e.message || 'Connection timeout' };
    }
}

export async function createPost(post) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...post, userId: 1 }),
        });
        if (!res.ok) {
            return { success: false, message: 'Failed to create post' };
        }
        const data = await res.json();
        return { success: true, data, message: 'Post created successfully' };
    } catch (e) {
        return { success: false, message: e.message || 'Server unavailable' };
    }
}
