const path = require('path');
const projectRoot = (dir = '') => path.join(process.cwd(), dir);

module.exports = {
  projectRoot
};