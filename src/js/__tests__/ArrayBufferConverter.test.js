import ArrayBufferConverter from '../ArrayBufferConverter';

test('conversion from data buffer to string', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const recived = new ArrayBufferConverter();
  recived.load(data);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(recived.toString()).toBe(expected);
});
