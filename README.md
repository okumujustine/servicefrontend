### FRONTEND SERVICE

##### 1. Clone the project.

```$ git clone ```

NB: make sure that the backend services are running, the.
- Todo/Item Service
- User Service
- Notification service

##### 2. Create a .env file from the copy .example.env


```$ cp  .example.env .env```
Then edit the variables in the .env file to have real values.

NB: This values should be the same in the backend services as some of them are reused for verification of token generated from the frontend.

##### 3. Install all the required packages
```$ npm install```

##### 4. to start the frontend use the command below
```$ npm start```

####NB: Must RUN on only port 3000 or else you may experience unexpected errors and instabilities.