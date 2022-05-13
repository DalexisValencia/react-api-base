import BASE_URL from './constants';

const getAllBikes = fetch(`${BASE_URL}search`).then(res => res.json())

// const getCurrentBike = fetch(BASE_URL+"bikes").then(res => res.json())

export default getAllBikes;