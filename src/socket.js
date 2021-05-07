import { io } from 'socket.io-client';
  const Socket= io('http://localhost:3013',{
      autoConnect:false
  });
export default Socket;