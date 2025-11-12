# API Integration Setup Guide

## ✅ Integration Complete!

Your React Login component is now integrated with your SQL database API.

## 📋 What Was Done:

1. **Created `authService.js`** - API service file that handles:
   - User registration
   - User login
   - JWT token storage
   - User session management

2. **Updated `Login.jsx`** - Now uses real API calls:
   - Connects to your BankCoreApi
   - Stores JWT tokens in localStorage
   - Validates against SQL database
   - Handles registration with all required fields

## 🚀 How to Use:

### Step 1: Start Your Backend API
```powershell
cd "D:\React Training\Classwork\BankcoreApi"
dotnet run
```
Your API should start at: `http://localhost:5079`

### Step 2: Enable CORS in Your API

Add this to your `Program.cs` file (if not already there):

```csharp
// Add before builder.Build()
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:8080")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add after app.UseAuthorization()
app.UseCors("AllowReactApp");
```

### Step 3: Start Your React App
```powershell
cd "D:\React Training\Classwork\manual-react-app"
npm start
```

## 📊 API Endpoints Being Used:

- **Register**: `POST http://localhost:5079/api/Auth/register`
- **Login**: `POST http://localhost:5079/api/Auth/login`

## 🔐 Authentication Flow:

1. **Register**:
   - User fills: Username, First Name, Last Name, Email, Password
   - Data sent to API → Saved in SQL database
   - Success message shown

2. **Login**:
   - User enters: Email & Password
   - API validates credentials against database
   - Returns JWT token + user info
   - Token stored in localStorage
   - User redirected to `/home`

## 📝 Data Storage:

**localStorage items:**
- `authToken` - JWT token for authenticated requests
- `currentUser` - Username of logged-in user
- `userEmail` - Email of logged-in user
- `userRoles` - Array of user roles

## 🔧 Updating API URL:

If your API runs on a different port, update the URL in:
`src/services/authService.js` - Line 2:
```javascript
const API_BASE_URL = 'http://localhost:5079/api';
```

## ⚡ Testing:

1. Register a new user with all fields
2. Check SQL database - new user should be there
3. Login with registered email and password
4. On success, you'll be redirected to home page
5. Check browser DevTools → Application → Local Storage to see the token

## 🛠️ Troubleshooting:

**If you get CORS errors:**
- Make sure CORS is enabled in your API
- Check that both apps are running
- Verify the API URL is correct

**If login fails:**
- Check that the API is running
- Verify user exists in database
- Check browser console for error messages
- Ensure API returns data in expected format

## 🔒 Security Notes:

- JWT tokens are stored in localStorage
- For production, consider using httpOnly cookies
- Add token expiration handling
- Implement refresh token mechanism
- Add HTTPS in production
