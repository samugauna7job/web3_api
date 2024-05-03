export default {
    apiUrl: 'https://api.vottun.tech/core/v1/evm/info/chains',
    headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'x-application-vkn': process.env.APPLICATION_ID
    }
};