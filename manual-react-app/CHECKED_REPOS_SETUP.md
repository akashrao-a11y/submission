# ✅ Updated for checked-repos Backend

## Changes Made:

### 1. Updated `authService.js`:
   - Changed API URL to: `http://localhost:56309/api`
   - Updated to use `FullName` instead of `FirstName` and `LastName`
   - Updated to match your backend's response structure (Token, FullName, Role)

### 2. Updated `Login.jsx`:
   - Changed registration form to use single `Full Name` field
   - Removed `FirstName` and `LastName` fields
   - Updated to match your backend API structure

### 3. Enabled CORS in `checked-repos/Program.cs`:
   - Added CORS policy to allow React app to connect
   - Supports ports: 3000, 8080, 5173

## 🚀 How to Start:

### Step 1: Start your Backend API (checked-repos)
Open a new terminal and run:
```powershell
cd "D:\React Training\Classwork\checked-repos"
dotnet run
```
✅ Your API will run at: `http://localhost:56309`

### Step 2: Start your React App
In another terminal:
```powershell
cd "D:\React Training\Classwork\manual-react-app"
npm start
```
✅ Your React app will run at: `http://localhost:3000` (or 8080)

## 📊 Updated API Structure:

### Register Request:
```json
{
  "FullName": "John Doe",
  "Email": "john@example.com",
  "Password": "password123",
  "Role": "Customer"
}
```

### Login Request:
```json
{
  "Email": "john@example.com",
  "Password": "password123"
}
```

### Login Response:
```json
{
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "FullName": "John Doe",
  "Role": "Customer"
}
```

## ✅ What's Stored in localStorage:
- `authToken` - JWT token
- `currentUser` - Full name of user
- `userRole` - User role (Customer, Admin, etc.)

## 🔍 Testing Steps:

1. ✅ Start checked-repos backend (port 56309)
2. ✅ Start React app (port 3000 or 8080)
3. ✅ Go to your React app in browser
4. ✅ Click "Don't have an account? Register here"
5. ✅ Fill in: Full Name, Email, Password, Confirm Password
6. ✅ Click "Register"
7. ✅ Check your SQL database - user should be saved!
8. ✅ Click "Already have an account? Login here"
9. ✅ Enter Email and Password
10. ✅ Click "Login"
11. ✅ You should be redirected to /home!

## 🛠️ Troubleshooting:

**Still getting connection refused?**
- Make sure checked-repos backend is running
- Check that it's running on port 56309
- Look for "Now listening on: http://localhost:56309" in terminal

**CORS errors?**
- Make sure you saved Program.cs with CORS changes
- Restart the backend API after making CORS changes

**Check Backend is Running:**
- Open browser: `http://localhost:56309`
- You should see Swagger documentation

---

**Everything is now configured for your checked-repos backend! 🎉**
