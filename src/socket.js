import { io } from 'socket.io-client';
  const Socket= io('https://yesting.herokuapp.com/',{
      autoConnect:false
  });
export default Socket;
