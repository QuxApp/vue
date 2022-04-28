import { io } from 'socket.io-client';

class SocketIO {
  socket;
  constructor() {}

  connect() {
    this.socket = io('https://socket.quxapp.repl.co');
  }

  disconnect() {
    if (this.socket) {
      this.scoket.disconnect()
    }
  }
}

export default new SocketIO();