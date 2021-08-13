# Royal Apparel

> Online e-commerce app built with React, GraphQL, Apollo, Stripe, and Firebase where users can shop, browse, and buy the latest clothes.

## Table of contents

- [General info](#general-info)
- [Deployment](#deployment)
- [Technologies](#technologies)
  - [Front-End](#front-end)
  - [Back-End](#back-end)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)

## General info

Royal Apparel is an online e-commerce store where users can browse, shop, and buy the latest clothes. It is predominantly built with React and Firebase and has gone through several iterations using different technologies. The main version of the application utilizes Redux for state management, the other versions include the use of Hooks and Context API, and another iteration utilizes GraphQL and Apollo. The purpose of this project was to work with different technologies to see how to handle state and passing props through Reacts unidirectional data flow. We utilized Firebase which is a Backend as a Service (BaaS) by Google to handle storing our data alogn with managing user authentication. Firebase makes it easy to implement sign in options with other service providers such as Google, Twitter, and Google to name a few. The integration of Stripe brings the entire site together as the items being browsed can be purchased with a test credit card included on the checkout page. Overall, this project really helped in building my understanding ofto develop a large app from end-to-end.

## Deployment

This app was deployed using Netlify and can be viewed at:  
[oarnosa-royal-apparel.netlify.app](https://oarnosa-royal-apparel.netlify.app)

## Technologies

### Front-End

- React: v16.8.6
- React-Router: v5.0.0
- Redux: v4.0.1
- Redux-Persist: v5.10.0
- Sass: v4.12.0
- Reselect: v4.0.0

### Back-End

- Node: v10.16.0
- Firebase: v6.0.2
- Apollo: v2.5.6
- Apollo-Boost: v0.4.2
- GraphQl: v14.3.1
- Stripe: v2.6.3

## Setup

To setup the project make sure to have [Node.js](https://nodejs.org/en/download/) installed along with [Yarn](https://yarnpkg.com/) unless using npm.

Clone the project into the desired repository and install all required depndencies

```bash
yarn install
```

Run the project using

```bash
yarn start
```

When working with firebase ensure that in the `firebase.utils.js` file, the config is replaced with the information for your database.

```javascript
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
```

## Features

- Browse, view, and shop around multiple collections of clothing and accessories.
- Sign up and Login with an email or your Google account to save your items.
- Add, remove, and update quantities of pieces within the cart.
- View current cart total which updates based on cart items.
- Process your credit card payment through the integration of Stripe.

## Status

Project is: _completed_, as the project was intended to be a playground for learning how to utilize React, Redux, Hooks, GraphQL, Firebase, Stripe and other technologies and has served as purpose.

## Inspiration

This project was inspired by Andrei Neagoie and Yihua Zhang and their project CRWN-Clothing from the Udemy course, the "Complete React Developer in 2020".
