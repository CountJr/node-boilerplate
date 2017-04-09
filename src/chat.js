let clients = [];

export const subscribe = (req, res) => {
  console.log('subscribe');
  
  clients.push(res);
};

export const publish = (message) => {
  console.log('publish', message);
  
  clients.forEach((res) => {
    res.end(message);
  });
   clients = [];
};
