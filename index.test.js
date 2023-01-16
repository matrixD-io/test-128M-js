// A test function using jest that tests the function in index.js and expects the result to be a promise that resolves to a Buffer

const load128M = require('./index.js');

describe('load128M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load128M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
