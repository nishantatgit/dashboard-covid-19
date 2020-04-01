export default (lang, dir, data) => `<!doctype html>
<html lang="${lang}" dir="${dir}">
  <head>
    <link rel="stylesheet" href="simple-grid.css"></link>
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
    <style></style>
  </head>
  <body>
    <div id="react-app"></div>
    <script> window.__NX__ = ${JSON.stringify(data)}</script>
    <script src="client.js"></script>
  </body>
</html>`;
