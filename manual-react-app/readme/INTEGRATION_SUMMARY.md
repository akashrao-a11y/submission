# API Integration Summary

## What Was Done

- Created an API service for user registration, login, logout, and authentication.
- Updated the Login component to support both login and registration, with validation and user feedback.
- Enabled CORS in the backend API so the React app can connect.

## How to Run

**Start the backend API:**
```powershell
cd "D:\React Training\Classwork\BankcoreApi"
dotnet run
```
API runs at: `http://localhost:5079`

**Start the React app:**
```powershell
cd "D:\React Training\Classwork\manual-react-app"
npm start
```
React app runs at: `http://localhost:3000`

## User Flow

**Register:**
- Click "Register here"
- Fill in your details
- Submit the form
- User is saved in the database and can now log in

**Login:**
- Enter email and password
- Submit the form
- If correct, you are logged in and redirected to `/home`

## Data Storage

- User info is stored in a SQL database via the API
- JWT token and user info are saved in browser localStorage

## API Endpoints

| Method | Endpoint                  | Purpose         |
|--------|---------------------------|-----------------|
| POST   | `/api/Auth/register`      | Register user   |
| POST   | `/api/Auth/login`         | Login user      |

## Example Requests

**Register:**
```json
{
   "Username": "john_doe",
   "Password": "password123",
   "FirstName": "John",
   "LastName": "Doe",
   "Email": "john@example.com"
}
```

**Login:**
```json
{
   "Email": "john@example.com",
   "Password": "password123"
}
```

## Troubleshooting

- If you get CORS errors, check the API CORS settings.
- If login fails, check your credentials and that the API is running.
- Make sure the API URL in your React app matches the backend.

## Next Steps

- Add logout and route protection
- Show user info when logged in
- Add password reset and other features

---

**Your React app is now connected to your API!**
