# url-shortener

1. Shortens the given long URL.
2. Redirects to original URL if the short url exists.
3. Input the short code to open the original URL in a new tab.

## Installation and Running (non-container approach)

```
npm install
npm start
```
## Installation and Running (container approach)

First of all you need to install [docker] and [docker-compose].
And from the project root directory run the following:

```
docker-compose up
```

## Test
```
npm run test
```

## License

MIT

[docker]: https://docs.docker.com/install/
[docker-compose]: https://docs.docker.com/compose/install/