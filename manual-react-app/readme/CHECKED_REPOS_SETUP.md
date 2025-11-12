# ✅ Setup Guide for checked-repos Backend

## What’s Changed

- The backend API URL is now `http://localhost:56309/api`.
- User registration uses a single `Full Name` field (no more separate first/last name).
- The backend returns `Token`, `FullName`, and `Role` after login.
- CORS is enabled so your React app can connect (ports 3000, 8080, 5173).

## How to Run Everything

### 1. Start the Backend

Open a terminal and run:
```powershell
cd "D:\React Training\Classwork\checked-repos"
dotnet run
```
The API will be at: `http://localhost:56309`

### 2. Start the React App

Open another terminal and run:
```powershell
cd "D:\React Training\Classwork\manual-react-app"
npm start
```
The app will be at: `http://localhost:3000` (or 8080)

## API Requests

**Register:**
```json
{
  "FullName": "John Doe",
  "Email": "john@example.com",
  "Password": "password123",
  "Role": "Customer"
}
```

**Login:**
```json
{
  "Email": "john@example.com",
  "Password": "password123"
}
```

**Login Response:**
```json
{
  "Token": "JWT_TOKEN_HERE",
  "FullName": "John Doe",
  "Role": "Customer"
}
```

## What’s Saved in localStorage

- `authToken` — your JWT token
- `currentUser` — your full name
- `userRole` — your role (Customer, Admin, etc.)

## Quick Test Steps

1. Start the backend (port 56309)
2. Start the React app (port 3000 or 8080)
3. Open the React app in your browser
4. Register a new account (Full Name, Email, Password)
5. Check your database — the user should be saved
6. Login with your new account
7. You should be redirected to `/home`

## Troubleshooting

- **Connection refused?** Make sure the backend is running on port 56309.
- **CORS errors?** Double-check your CORS settings in `Program.cs` and restart the backend.
- **Check backend:** Open `http://localhost:56309` in your browser — you should see Swagger docs.

---

**You’re all set! 🎉**
