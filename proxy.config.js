const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8081',
  }
];
module.exports = proxy;