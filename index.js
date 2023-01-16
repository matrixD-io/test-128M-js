const fs = require('fs').promises;

/**
 * Returns the contents of 128M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('128M.bin', 'binary');
  return Buffer.from(data);
};
