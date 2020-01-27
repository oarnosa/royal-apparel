import { gql } from 'apollo-boost';

export const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

export const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

export const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

export const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

export const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

export const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

export const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

export const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
