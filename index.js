const OCClient = require('oc').Client;
const express = require('express');
const app = express();
const compression = require('compression')

app.use(compression());

const ocClient = new OCClient({
  registries: {
    clientRendering: 'http://localhost:3100/',
    serverRendering: 'http://localhost:3100/'
  },
  timeout: 10 * 1000
});

app.get('/:component', (req, res) => {
  const components = [
    { name: 'oc-client', container: false },
    { name: req.params.component, container: true, parameters: req.query }
  ];
  ocClient.renderComponents(components, {}, (errs, htmls) => {
    if (errs) {
      return res.status(500).send('');
    }
    const [
            ocClient,
            ...otherComponents
          ] = htmls;
    const components = otherComponents.join('');

    const body = `<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ${ocClient}
    </head>
    <body>
      ${components}
    </body>
</html>`;

    return res.status(200).send(body);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running`));