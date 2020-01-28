const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/xSNsZhq/hats.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'watches',
      imageUrl: 'https://i.ibb.co/Hx8rhFh/watches.jpg',
      id: 2,
      linkUrl: 'shop/watches'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/2SK6X62/sneakers.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/Wt0Mgkz/womens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/6m1B7v6/mens.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
