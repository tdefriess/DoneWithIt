import client from './client';

const endpoint = '/listings';

const getListings = (a, b, c) => client.get(endpoint);

const postListings = (data) => client.post(endpoint, data);

export default {
    getListings,
    postListings,
};