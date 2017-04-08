start:
	DEBUG=*,-babel npm run nodemon -- --watch src --ext '.js,.pug' --exec babel-node -- src/server.js
