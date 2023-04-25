const path = require('path');
const createApi = require('./createApi');

const providers = [
  require('./lib/providers/1337x.js'),
  require('./lib/providers/eztv.json'),
  require('./lib/providers/kickasstorrents.json'),
  require('./lib/providers/limetorrents.json'),
  require('./lib/providers/rarbg.js'),
  require('./lib/providers/yts.js')
];

module.exports = createApi(...providers);
