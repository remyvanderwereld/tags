# Readme: Tags
by Remy van der Wereld

## Requirements

- [npm](https://www.npmjs.com/)

## Installation

Install all dependencies:

```
npm install
```

## Development

Start the application:

```
npm start
```

Open the application in your browser at [localhost:3000](http://localhost:3000/).

## Testing

Jest unit test

```
npm test
```

### E2E testing

In order to E2E test the application make sure you have a development server running locally:

```
npm start
```

After starting the application, open a new terminal and run the following command:

```
npm run cypress:open
```

## Techniques used

- React
- MockAPI: https://60868d2da3b9c200173b6396.mockapi.io/api/

## TODO

- Typescript.
- Unit tests.
- Error handling for requests.
- Implement custom group names.
- Loading spinner for API calls.
- More test can be implemented or extended.

## NOTE

A limited number of requests can be made to mockapi.io. This can affect the E2E testing.
