# Royal Apparel

> Online e-commerce app built with React, GraphQL, Apollo, Stripe, and Firebase where users can shop, browse, and buy the latest clothes.

## Table of contents

- [General info](#general-info)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)

## General info



## Deployment

This app was deployed using Heroku and can be viewed at:  
[oarnosa-royal-apparel.herokuapp.com](https://oarnosa-royal-apparel.herokuapp.comm/)

## Technologies

- React: v16.8.6
- React-Router: v5.0.0
- Redux: v4.0.1
- Redux-Persist: v5.10.0
- Node: v10.16.0
- Stripe: v2.6.3
- Firebase: v6.0.2
- Sass: v4.12.0
- GraphQl: v14.3.1
- Apollo: v2.5.6
- Apollo-Boost: v0.4.2
- Lodash: v4.17.15
- Reselect: v4.0.0

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
  apiKey: "AIzaSyCqWnh8UT4plvXuL7HnQQtV4OsIjOVQPN4",
  authDomain: "crwn-db-153b4.firebaseapp.com",
  databaseURL: "https://crwn-db-153b4.firebaseio.com",
  projectId: "crwn-db-153b4",
  storageBucket: "crwn-db-153b4.appspot.com",
  messagingSenderId: "675998441084",
  appId: "1:675998441084:web:72a6bd7e8426196d8df3f9",
  measurementId: "G-FHTZ6EP4FY"
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
