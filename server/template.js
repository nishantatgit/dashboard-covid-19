export default (lang,dir,content='test server side rendering',css) => `<!doctype html>
<html lang="${lang}" dir="${dir}">
  <head>
    <link rel="stylesheet" href="simple-grid.css"></link>
    <style>${[...css].join('')}</style>
  </head>
  <body>
    <div id="react-app">${content}</div>
    <script src="client.js"></script>
  </body>
</html>`;