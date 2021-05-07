import { useEffect, useRef, useState } from 'react';
import './App.css';
import soc from './socket';

const App=()=>{
  const lastmessageref=useRef();
  const [list,setList]=useState([]);
  const [Activeuser,setActiveuser]=useState({name:"",index:-1,isSet:false});
  const [au,setau]=useState("");
  const [username,setUsername]=useState({name:"",isSet:false});

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    soc.on("connect_error",(er)=>{
      console.log("err:",er);
      setUsername({name:"",isSet:false});
    });
    soc.on('users',(data)=>{
      if(data.length==0){
      }else{
        setUsers((prevState)=>{
          let k=prevState.slice();
          data.forEach(dat => {
            k.push({name:dat.name,message:[],online:dat.online})
          });
          console.log(k);
          return k;
        });
        setList(prevState=>{
          let k=prevState.slice();
              data.forEach(dat => {
                  k.push(<div key={dat.name} onClick={activeusersetter.bind(this,dat.name)} className={dat.online?"username--active":"username"}>{dat.name}</div>);
              });
          return k;
      })
      }
    });

    soc.on('new-user',dat=>{
      setUsers((prevState)=>{
        let k;
        console.log("prevstate:",prevState);
        if(!prevState){
          // console.log("PrevStatE:",prevState);
          k=[]
        }
        else{k=prevState.slice();}
        k.push({name:dat.name,message:[],online:dat.online});
        return k;
      });
      setList(prevState=>{
        let k=prevState.slice();
            k.push(<div key={dat.name} onClick={activeusersetter.bind(this,dat.name)} className={dat.online?"username--active className = ":"username"}>{dat.name}</div>);
        return k;
    });
    });

    //for online /offline
    soc.on('offline',(dat)=>{
      setList(prevState=>{
        let k=prevState.slice();
        for(let i=0;i<k.length;i++){
          if(k[i].key==dat){
            k[i]=(<div key={dat} onClick={activeusersetter.bind(this,dat)} className="username">{dat}</div>)
            console.log(k[i]);
          }
        }
        return k;
      })
    })

    //for online
    soc.on('online',(dat)=>{
      setList(prevState=>{
        let k=prevState.slice();
        for(let i=0;i<k.length;i++){
          if(k[i].key==dat){
            k[i]=(<div key={dat} onClick={activeusersetter.bind(this,dat)} className="username--active">{dat}</div>)
            console.log(k[i]);
          }
        }
        return k;
      })
    })

    //recevice user message.
    soc.on('private-message',(dat,from)=>{
      setUsers(prevState=>{
        let k=prevState.slice();
        let i;
        for(let y=0;y<k.length;y++){
          if(from==k[y].name){
            i=y;
          }
        }
        let p=k[i].message;
        p.push({mes:dat,ismine:false});
        k[i].message=p;
        return k;
      });
    });


  }
  ,[]);
  useEffect(()=>{
    if(au!=""){
      setActiveuser(propState=>{
        let k={...propState};
        
        if(users){
        k.name=au;
        k.isSet=true;
        for(let i=0;i<users.length;i++){
          if(au==users[i].name){
            k.index=i;
            break;
          }
        }}
        return k;
      })
    }
  },[au]);
  useEffect(()=>{
    if(lastmessageref.current){
      lastmessageref.current.scrollIntoView({smooth:true});
    }
  },[lastmessageref.current]);
//  make connecntion with server.
  const userNameDone=(e)=>{
    console.log("[userNameDone]: Called");
    e.preventDefault(); 
    setUsername({name:username.name,isSet:true});
    soc.auth = {'username': username.name };
    soc.connect();
  }
  //taking user input on for username

  const userNameSetter=(e)=>{
    setUsername({name:e.target.value,isSet:false});
  }

  //active user setter .
  const activeusersetter=(dat)=>{
    console.log("[Activeusersetter]",dat);
    setau(dat);  
  }
  const mesSend=(e)=>{
    e.preventDefault();
    let mes=e.target.mes.value;
    console.log(mes);
    soc.emit('private-message',mes,Activeuser.name);
    setUsers(prevState=>{
      let k=prevState.slice();
      let p=k[Activeuser.index].message.slice();
      p.push({mes:mes,ismine:true});
      k[Activeuser.index].message=p;
      return k;
    })
  }

  if(!username.isSet){
    return (
      <div className="Username--main">
        {/* <div  className="Username--heading">
        <h1>Login to enter Chat Room</h1>
        </div> */}
        <form className="container" onSubmit={userNameDone}>
          <div className="col-75">
          <label htmlFor="em" >Username :</label>
          </div>
          <div className="col-25">
          <input className="text--area" placeholder="Enter your Email address" type="email" id="em" onChange={userNameSetter} name="mes" required />
          </div>
          <button className="sub">Submit</button>
        </form>
      </div>
    );
  }
  let meslist;
  if(Activeuser.isSet&&users){
     meslist=users[Activeuser.index].message.map((dat,index)=>{
      let last= (index==(users[Activeuser.index].message.length-1))
      return(
        <div ref={last?lastmessageref:null} className={dat.ismine?"Message--main": "Message--oth"}>
                  <div className="Message--main--content">
                      {dat.mes}</div>
                  <div className="Message--main--time">12:00 pm</div>
            </div>
      )
    })
  }
  return (
    <div className="App">
      <div className="title">
        Welcome To The Chat Room!!
      </div>
      <div className="Main--box">
        <div className="Main--box--users">
          <div className="Active-agents">Active Doctors</div>
          {list}
        </div>
        <div className={Activeuser.isSet?"Main--box--chat":"Main--box--chat1"}>
          <div className="title">
            Messages {Activeuser.isSet?Activeuser.name:null}
          </div>
          <div className="Main--box--chat--messagearea">
          {Activeuser.isSet?meslist:
          <div  className="Message--main ">
            <div className="Message--main--content">
                      Select an Active Doctor to begin the conversation </div>
                  <div className="Message--main--time">12:00 am</div>
            </div>}

             {/* <div  className="Message--main Message--oth">
                   <div className="Message--main--content">
                       Talking</div>
                   <div className="Message--main--time">12:00 pm</div>
            </div> */}
          </div>
          {Activeuser.isSet? 
          <div className="c">
          <form className="cb--bind" onSubmit={mesSend}>
                          <input className="type" type="text" id="mes" name="mes" placeholder="Type Message..." required/>
                          <button className="enter">Send</button>
          </form>
          </div>
          :null}
          

        </div>
      </div>
    </div>
  );
}

export default App;
