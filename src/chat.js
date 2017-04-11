let clients = [];

export const subscribe = (req, res) => {
  clients.push(res);

  console.log('subscribe', clients.length);

  res.on('close', () => {
    clients.splice(clients.indexOf(res), 1);
  });
};

export const publish = (message) => {
  console.log('publish', message);

  clients.forEach((res) => {
    res.end(message);
  });
  clients = [];
};
