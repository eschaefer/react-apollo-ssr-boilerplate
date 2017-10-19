export default ({ html, reduxState, jsBundle, cssBundle }) => {
  const { apollo } = reduxState;
  const title = apollo.data['$ROOT_QUERY.profile'].name;
  const description = apollo.data['$ROOT_QUERY.profile'].biog.slice(0, 120);

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>${title}</title>
      <meta name="description" content="${description}">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
      ${process.env.NODE_ENV === 'production'
    ? `<link rel="stylesheet" href="${cssBundle}">`
    : ''}
    </head>
    <body class="sans-serif">
      <div class="root-element">${html}</div>

      <script>
        // Scrub the JSON string of HTML tags and other dangerous characters
        window.__PRELOADED_STATE__ = ${JSON.stringify(reduxState).replace(/</g, '\\u003c')}
      </script>
      <script type="text/javascript" src="${jsBundle}"></script>
    </body>
  </html>
  `;
};
