import axios from 'axios';

export const getBannerSettings = async () => {
    const response = await axios.get('/api/banner');
    return response.data;
};

export const updateBannerSettings = async (settings) => {
    await axios.post('/api/banner', settings);
};
