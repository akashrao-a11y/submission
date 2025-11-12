# Login.jsx - Basic Version

## What Changed

- Removed extra state variables and checks.
- Now uses simple alerts for messages.
- HTML5 handles required fields and email format.
- Only checks if passwords match and are long enough.
- Navigates right away after login.

## State Variables

Now only uses:
- `email`
- `password`
- `fullName` (for registration)
- `confirmPassword` (for registration)
- `isRegisterMode` (login/register toggle)
- `isLoading` (for API calls)

Removed:
- `username`
- `message`

## How It Works

**Register:**
1. User fills out the form (HTML5 checks required fields and email).
2. JS checks if passwords match and are long enough.
3. If OK, calls API and shows alert.
4. On success, clears form and switches to login.

**Login:**
1. User fills out the form (HTML5 checks required fields).
2. Calls API.
3. On success, shows alert and goes to home.
4. On error, shows alert.

---

**The code is now much simpler and easier to follow.**
