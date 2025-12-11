# MOVIE NIGHT WEBSITE

Project for CSC 437

cd into packages/proto and run 'npm start'
Go to http://localhost:8080 to see the bare content

# Frontend and Backend Access

Frontend: cd into packages/app and run 'npm run dev'; go to http://localhost:5173

Backend: cd into packages/server and run 'npm run start:app'; go to http://localhost:3000

# Deployment Site Access

Deployment Site: https://sapierre.csse.dev/

# New User Setup (powershell terminal)

In one terminal, cd in packages/server and run 'npm run start:app'
In another terminal, cd into packages/server and copy the following template (change with desired info):
$body = @{
userid = ""
password = ""
image = "/images/"
name = ""
hometown = ""
bio = ''
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/auth/register" -Method POST -Body $body -ContentType "application/json"
