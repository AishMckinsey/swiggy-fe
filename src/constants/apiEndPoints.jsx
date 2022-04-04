export const BACKEND_URL = 'http://localhost:3001/swiggy';

export const getAllRestaurants = {
  method: 'get',
  url: '/seeOptions',
};

export const getRestaurantMenu = (restId) => ({
  method: 'get',
  url: `/seeOptions/${restId}`,
});

export const getResturantByDish = (dish) =>({
  method: 'get',
  url: `/searchOption/${dish}/`,
})