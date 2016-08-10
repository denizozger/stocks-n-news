# Stocks'n News

A Node.js app displaying stock prices and news about some companies.

## Running Locally

Create environment variables as:

```sh
DATABASE_URL=mongodb://some_db_url
STOCK_PRICE_API_URL=http://some_stock_price_api
STORY_FEED_API_URL=http://some_story_feed_api
```

```sh
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Development

To automatically have the server restart after changes:

```sh
$ npm run develop
```

## Testing

```sh
$ npm test
```

or individually;

```sh
$ npm run test:unit
$ npm run test:integration
```
