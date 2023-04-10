export default (lang, dir, scriptName, data) => `<!doctype html>
<html lang="${lang}" dir="${dir}">
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="react-app"></div><script> window.__NX__ = ${JSON.stringify(
      data
    )}</script>
    <script src="vendor.js"></script>
    <script src="${scriptName}.js"></script>
  </body>
</html>`;
