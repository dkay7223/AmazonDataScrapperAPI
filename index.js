import express from 'express';
import request from 'request-promise';

const app = express();
const PORT = process.env.PORT || 5000;

const generateScraperUrl = (api_key) => `http://api.scraperapi.com?api_key=${api_key}&autoparse=true`;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to amazon scraper. Create you own APIs using: RapidAPI")
})



// Get product details
app.get('/product/:productId', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`)
        res.json(JSON.parse(response));
    } catch (error) {

    }
})


// Get product reviews
app.get('/product/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`)
        res.json(JSON.parse(response));
    } catch (error) {

    }
})



// Get product offers
app.get('/product/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        console.log("Inside")
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
        console.log("1st")
        res.json(JSON.parse(response));
        console.log("response got")
    } catch (error) {

    }
})


// Get search results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/s?k/${searchQuery}`)
        res.json(JSON.parse(response));
    } catch (error) {

    }
})



app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`))