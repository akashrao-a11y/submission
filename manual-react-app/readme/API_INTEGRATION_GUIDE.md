# Basic API Integration Guide

## What You Need to Do

1. **Start the Backend API**
   - Open a terminal and run:
     ```powershell
     cd "D:\React Training\Classwork\BankcoreApi"
     dotnet run
     ```
   - The API runs at: `http://localhost:5079`

2. **Enable CORS in the API**
   - In `Program.cs`, add:
     ```csharp
     builder.Services.AddCors(options =>
     {
         options.AddPolicy("AllowReactApp", policy =>
         {
             policy.WithOrigins("http://localhost:3000", "http://localhost:8080")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
         });
     });
     app.UseCors("AllowReactApp");
     ```

3. **Start the React App**
   - In another terminal, run:
     ```powershell
     cd "D:\React Training\Classwork\manual-react-app"
     npm start
     ```

## How It Works

- **Register:** User signs up with username, name, email, and password. Data is saved in the database.
- **Login:** User logs in with email and password. If correct, gets a JWT token and is redirected to `/home`.

## API Endpoints

- Register: `POST /api/Auth/register`
- Login: `POST /api/Auth/login`

## Where Data Is Stored

- JWT token and user info are saved in `localStorage` in the browser.

## If You Have Issues

- **CORS errors:** Make sure CORS is enabled and both apps are running.
- **Login fails:** Check if the API is running and the user exists.

## Notes

- JWT tokens are in `localStorage`. For production, use httpOnly cookies and HTTPS.
- Update the API URL in `src/services/authService.js` if your API runs on a different port.
- Check browser DevTools → Application → Local Storage to see saved data.
