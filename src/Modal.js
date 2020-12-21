// import React { useState, useEffect } from 'react'
// import Modal from '@material-ui/core/Modal';
// import getModalStyle, { useStyles } from './getModalStyle.js';

// const [open, setOpen] = useState(false);

// function ModalSignUp() {
//   return (
//     <Modal 
//           open={open}
//           onClose={() => setOpen(false)}>

//          <div style={modalStyle} className={classes.paper}>
//           <form action="" className="app__signup">
//             <center>
//             <img 
//              className="app__headerImage"
//              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
//              alt="signup modal"
//              />
//             <Input
//               placeholder="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Input
//               placeholder="email"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               placeholder="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             /> 
//             <br></br>
//             <Button type="submit" onClick={signUp}>Submit</Button>
//             </center>
//            </form>
//           </div>
//         </Modal>
//   )
// }

// function ModalLogIn() {
//   return (
//     <Modal 
//           open={open}
//           onClose={() => setOpen(false)}>

//          <div style={modalStyle} className={classes.paper}>
//           <form action="" className="app__signup">
//             <center>
//             <img 
//              className="app__headerImage"
//              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
//              alt="signup modal"
//              />
//             <Input
//               placeholder="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Input
//               placeholder="email"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               placeholder="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             /> 
//             <br></br>
//             <Button type="submit" onClick={signUp}>Submit</Button>
//             </center>
//            </form>
//           </div>
//         </Modal>
//   )
// }


// export {ModalSignUp, ModalLogIn}

