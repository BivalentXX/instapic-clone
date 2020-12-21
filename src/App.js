import React, { useState, useEffect } from  'react';
import './App.css';
import Post from './Post.js';
import { db, auth } from './firebase.js';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import getModalStyle, { useStyles } from './getModalStyle.js';
import {ModalSignUp, ModalLogIn} from './Modal.js';


function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)
  

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);        
      } else {
        setUser(null)
      }
    })
  }, [user, username])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, [])

  const signUp = (event) => {
    event.preventDefault()
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) =>{
      return authUser.user.updateProfile({displayName: username});
    })
    .catch((error) => alert(error.message))
  } 

  const signIn = (event) => {
    event.preventDefault()
    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
    setUser()
  }
  
  return (
    <div className="app">
 
        <Modal 
          open={open}
          onClose={() => setOpen(false)}>

         <div style={modalStyle} className={classes.paper}>
          <form action="" className="app__signup">
            <center>
            <img 
             className="app__headerImage"
             src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
             alt="signup modal"
             />
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> 
            <br></br>
            <Button type="submit" onClick={signUp}>Submit</Button>
            </center>
           </form>
          </div>
        </Modal>

        <Modal 
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}>

         <div style={modalStyle} className={classes.paper}>
          <form action="" className="app__signup">
            <center>
            <img 
             className="app__headerImage"
             src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
             alt="Login modal"
             />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> 
            <br></br>
            <Button type="submit" onClick={signIn}>Submit</Button>
            </center>
           </form>
          </div>
        </Modal>

        
      
        
       <div className="app__header">
        <img 
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt="Instagram" 
        className="app__headerImage"/>
      
        {user? (
          <Button onClick={() => auth.signOut()}>Logout</Button> 
        ): (
          <div className="app__loginContainer">
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
        )}
       </div>
      
       
      <div className="app__posts">
        <div className="app__postsLeft">
          {
            posts.map(({id, post}) => (
              <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            ))
          }    
        </div>
        <div className="app__postsRight">
          <InstagramEmbed
            url='https://www.instagram.com/p/CHrPO__DCf1/'
            clientAccessToken='3399377616806007|Sm6WwSq40Dfo_HTmT0-rbUNhNys'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div> 
       </div>
      

       
      <div className="app__imgUpload">
       {user?.displayName ? (
          <ImageUpload username={user.displayName} />
        ): (
          <h3>Sorry you need to login to upload</h3>
        )}
      </div> 

     </div>
     
  );
}

export default App;
