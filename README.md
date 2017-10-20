## React + Apollo + GraphQL + Redux + React Router + Express SSR Boilerplate

This boilerplate app uses the [Mixcloud API](https://www.mixcloud.com/developers/)
to fetch a profile, shows, and followings from an example user. The username is
[hard-coded here](https://github.com/eschaefer/react-apollo-ssr-boilerplate/blob/0ea956a704ef1473a0c7405e0e70483e3a4864b1/server/graphql/loaders/mixcloud.js#L23) and should be instead passed as an argument from react-router. I didn't
have time to do this before the BerlinJS talk :)


- Includes hot module reloading.
- Includes examples of selective server-side rendering.
- Includes `dataloader` for extra smart batching and caching.
- React aliased by `preact-compat` for smaller bundle size.
- Sass/CSS all run through [CSSNext](http://cssnext.io/) PostCSS plugin.

### Setup

```
yarn
```

### Development

```
yarn build:dev
```

### Production

```
yarn build:all && yarn start:prod
```

### TODO
- Demonstrate [mutations](http://dev.apollodata.com/react/mutations.html)
- Pass username as argument from react-router URL param
- Add tests since I bothered to set up the Jest harness and stuff 🕴
