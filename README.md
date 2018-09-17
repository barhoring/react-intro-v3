# running on production

To enable server-side rendering for fast precievd load time:
In webpack.config, inside module.exports, replace entry with:
entry: ['webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000', './js/ClientApp.jsx'],

In production add: $Env:NODE_ENV = "server", before npm run start.

# A Complete Intro to React

The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/
