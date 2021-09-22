### Frontend

#### Clone the project.
make sure that the backend services are running.

create a .env file from the copy .example.env

add the variables
REACT_APP_LINKEDIN_LOGIN_CALL_BACK_URL=(get from google)
REACT_APP_LINKEDIN_CLIENT_ID=
REACT_APP_GOOGLE_LOGIN_CLIENT_ID=
REACT_APP_FACEBOOK_APP_ID=

NB:this values should be the same all through the application, frontend and the backend services as some of them are reused for verification of token generated from the frontend.

run npm install to install all the required packages

Use npm start to start the server.