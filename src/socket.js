import { io } from 'socket.io-client';
  const Socket= io('https://git.heroku.com/patient-connect-chat-server.git',{
      autoConnect:false
  });
export default Socket;