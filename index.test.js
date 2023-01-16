const load128M = require('./index.js');

describe('load128M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load128M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
