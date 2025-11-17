import {
    fetchUserData,
    fetchPosts,
    createPost,
} from '../apiService';

// Mock fetch globally
global.fetch = jest.fn();

describe('API Service Tests', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        fetch.mockClear();
    });

    describe('fetchUserData', () => {
        test('should fetch user data successfully', async () => {
            const mockUserData = {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                username: 'johndoe',
            };

            fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockUserData,
            });

            const result = await fetchUserData();

            expect(fetch).toHaveBeenCalledWith(
                'https://jsonplaceholder.typicode.com/users/1'
            );

            expect(result.success).toBe(true);
            expect(result.data).toEqual(mockUserData);
            expect(result.message).toBe('User data fetched successfully');
        });

        test('should handle fetch user data failure', async () => {
            fetch.mockResolvedValueOnce({
                ok: false,
            });

            const result = await fetchUserData();

            expect(result.success).toBe(false);
            expect(result.message).toBe('Failed to fetch user data');
        });

        test('should handle network error for user data', async () => {
            fetch.mockRejectedValueOnce(new Error('Network error'));

            const result = await fetchUserData();

            expect(result.success).toBe(false);
            expect(result.message).toBe('Network error');
        });
    });

    describe('fetchPosts', () => {
        test('should fetch posts successfully', async () => {
            const mockPosts = [
                { id: 1, title: 'Post 1', body: 'Body 1' },
                { id: 2, title: 'Post 2', body: 'Body 2' },
                { id: 3, title: 'Post 3', body: 'Body 3' },
            ];

            fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockPosts,
            });

            const result = await fetchPosts();

            expect(fetch).toHaveBeenCalledWith(
                'https://jsonplaceholder.typicode.com/posts?_limit=5'
            );

            expect(result.success).toBe(true);
            expect(result.data).toEqual(mockPosts);
            expect(result.count).toBe(3);
            expect(result.message).toBe('Posts fetched successfully');
        });

        test('should handle fetch posts failure', async () => {
            fetch.mockResolvedValueOnce({
                ok: false,
            });

            const result = await fetchPosts();

            expect(result.success).toBe(false);
            expect(result.message).toBe('Failed to fetch posts');
        });

        test('should handle network error for posts', async () => {
            fetch.mockRejectedValueOnce(new Error('Connection timeout'));

            const result = await fetchPosts();

            expect(result.success).toBe(false);
            expect(result.message).toBe('Connection timeout');
        });
    });

    describe('createPost', () => {
        test('should create post successfully', async () => {
            const mockCreatedPost = {
                id: 101,
                title: 'New Post',
                body: 'New post body',
                userId: 1,
            };

            fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockCreatedPost,
            });

            const postData = {
                title: 'New Post',
                body: 'New post body',
            };

            const result = await createPost(postData);

            expect(fetch).toHaveBeenCalledWith(
                'https://jsonplaceholder.typicode.com/posts',
                expect.objectContaining({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: postData.title,
                        body: postData.body,
                        userId: 1,
                    }),
                })
            );

            expect(result.success).toBe(true);
            expect(result.data).toEqual(mockCreatedPost);
            expect(result.message).toBe('Post created successfully');
        });

        test('should handle create post failure', async () => {
            fetch.mockResolvedValueOnce({
                ok: false,
            });

            const postData = {
                title: 'Failed Post',
                body: 'This will fail',
            };

            const result = await createPost(postData);

            expect(result.success).toBe(false);
            expect(result.message).toBe('Failed to create post');
        });

        test('should handle network error for create post', async () => {
            fetch.mockRejectedValueOnce(new Error('Server unavailable'));

            const postData = {
                title: 'Test Post',
                body: 'Test body',
            };

            const result = await createPost(postData);

            expect(result.success).toBe(false);
            expect(result.message).toBe('Server unavailable');
        });

        test('should send correct data structure when creating post', async () => {
            const mockCreatedPost = {
                id: 101,
                title: 'My Title',
                body: 'My Body',
                userId: 1,
            };

            fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockCreatedPost,
            });

            await createPost({
                title: 'My Title',
                body: 'My Body',
            });

            const callArgs = JSON.parse(fetch.mock.calls[0][1].body);
            expect(callArgs).toEqual({
                title: 'My Title',
                body: 'My Body',
                userId: 1,
            });
        });
    });
});
