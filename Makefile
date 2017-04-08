start:
	DEBUG=*,-babel,-nodemon npm run nodemon -- --watch src --ext '.js,.pug' --exec babel-node -- src/server.js
