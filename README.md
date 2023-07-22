# Calendar React Application
The whole point of the App is to create a team calendar webpage with React, where people from the same team can register and log in to create events in a shared calendar for better organization, all the user and events data come through this API and are properly handled. 

We connect to our REST API. With it, we handle authentication and authorization via JWT and provide rights to create, update, or delete events from the calendar stored in our MongoDB database. Additionally, the API incorporates input validation to ensure we only handle valid requests on the server-side. Our database is also closed so only certain IPs are allowed to interact with it. Wanna check the API code?  [To API code](https://github.com/josemontano1996/backend-calendar).


Depending on who created the events different permissions for modifying the events are given as well as different physical appearance.

You can visit our Client side app in the following links: 
- [Calendar Web](https://thriving-moonbeam-22f2bd.netlify.app)

You can also check our code for our API in the following link:
- [Github Calendar API](https://github.com/josemontano1996/backend-calendar)

## Main Technologies Used for Client Side
- React: The main framework used for building the App.
- React Router: For the routing of our App.
- Redux with Redux Toolkit: Employed for efficient state management.
- Axios: Used for handling http requests.

## Main Technologies Used for our API

The REST API is built using the following technologies:

- Node.js with Express for the server logic and routing.
- MongoDB with Mongoose for database CRUD operations.
- JSON Web Tokens (JWT) for authentication and authorization.

1. **Authentication**
   - `POST /api/auth/new`: Register a new user.
   - `POST /api/auth`: Authenticate and get a JWT token.
   - `GET /api/auth/renew`: Renew expired JWT token.

2. **Calendar Events**
   - `GET /api/events`: Get all events.
   - `POST /api/events/new`: Create a new event.
   - `PUT /api/events/:id`: Update an existing event.
   - `DELETE /api/events/:id`: Delete an event.
   -  To get a specific event and modify it we use Redux states and some logic in order to modify them or delete them from the DB.

## Input Validation

The API ensures that incoming requests are properly validated to avoid any potential security risks. It rejects requests with invalid data and returns appropriate error responses.

## CORS Protection

We also implement CORS protection, so only authorized domains can use the API.

## Password Encryption

Passwords are encrypted and safely stored using bycript package.

## Contact

If you would like to contact me you can reach me via [Linkedin](https://www.linkedin.com/in/josemanuelmontanomengual697745171/) or via [email](mailto:josemanuel1996enologia@gmail.com).

Thanks for your attention.
