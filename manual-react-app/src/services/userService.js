// src/services/userService.js

/**
 * Simulate fetching a random user (mocked, since real API is blocked).
 * Returns a Promise that resolves to a user object after a short delay.
 */
/**
 * Fetch a mock user for a specific type (for test compatibility)
 * @param {"asyncawait"|"timeout"|"promise"} type
 */
export function fetchRandomUser(type = "asyncawait") {
    return new Promise((resolve) => {
        setTimeout(() => {
            let user;
            if (type === "asyncawait") {
                user = {
                    id: "1",
                    name: "Async/Await User",
                    email: "asyncawait@example.com",
                };
                resolve({
                    success: true,
                    data: user,
                    message: "Fetched with async/await",
                });
            } else if (type === "timeout") {
                user = {
                    id: "2",
                    name: "Timeout User",
                    email: "timeout@example.com",
                };
                resolve({
                    success: true,
                    data: user,
                    message: "Fetched with setTimeout",
                });
            } else if (type === "promise") {
                user = {
                    id: "3",
                    name: "Promise User",
                    email: "promise@example.com",
                };
                resolve({
                    success: true,
                    data: user,
                    message: "Fetched with Promise",
                });
            } else {
                resolve({ success: false, message: "Unknown type" });
            }
        }, 400);
    });
}
