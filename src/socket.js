import { io } from 'socket.io-client';
 // const Socket= io('https://git.heroku.com/patient-connect-chat-server.git',{
  const Socket= io('https://patient-connect-chat-server.herokuapp.com/',{
      autoConnect:false
  });
export default Socket;
