import React, {useState} from 'react'
import './Menu.styles.scss'

const Menu = () => {

    const  openNav = () => {
        document.getElementById("myNav").style.width = "100%"
    }

    const  closeNav = () => {
        document.getElementById("myNav").style.width = "0%"
    }

    return (
        <div>
            {/* <h1>Hello, please show something</h1> */}
            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <div class="overlay-content">
                    <a href="#">Home</a>
                    <a href="#">Monitor</a>
                    <a href="#">Admin</a>
                    <a href="#">Setting</a>
                </div>
            </div>
            <div class="hamburger-menu" onClick={openNav}>
                <span></span>
                <span></span>
                <span></span> 
          </div>
        </div>
    )
}

// const Menu = () => {
//     const [showMenu, setShowMenu] = useState(false)
//     // const [closeMenu, setCloseMenu] = useState(false)

//     const menuActive = () => {
//         setShowMenu({showMenu: true}
//         //     , () => {
//         //     document.addEventListener('click', closeMenu)
//         // }
//         )}

//     // const menuInActive = () => {
//     //     if (!dropdownMenu.contains(event.target)){
//     //     setCloseMenu({showMenu: false}, () => {
//     //         document.removeEventListener('click', closeMenu)
//     //         }) 
//     //     }
//     // }

//     return (
//         <div>
//             <div class="hamburger-menu" onClick={menuActive}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//             {showMenu? (
//                 <div 
//                     className="menu"
//                     // ref={(element) => {
//                     //     dropdownMenu = element;
//                     // }}
//                 >
//                     <img class="logo" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572403214/1ff21a300da2c00f0432c0b516f8492a_lzdqay.png" alt="logo" />
//                     <p class="name">WellDone</p>
//                     <p class="email-address">WellDone@WellDone.org</p>
//                     <span></span>
//                     {/* get icons */}
//                     <ul>
//                         <li><a href="/home">Home</a></li>
//                         <li><a href="/monitor">Monitor</a></li>
//                         <li><a href="/admin">Admin</a></li>
//                         <li><a href="/setting">Setting</a></li>
//                     </ul>
//                 </div>
//             ) : (null)
//             }
//         </div>
//     )
// }

export default Menu;

// class Menu extends React.Component {
//     constructor (){
//         super();

//         this.state = {
//             showMenu: false
//         }

//         this.showMenu = this.showMenu.bind(this)
//         // this.closeMenu = this.closeMenu.bind(this)
//     }

//     showMenu(event) {
//         event.preventDefault();

//         this.setState({showMenu: true}, () => {
//             document.addEventListener('click', this.closeMenu)
//         })
//     }

//     // closeMenu() {
//     //     if (!this.dropdownMenu.contains(event.target)) {
//     //         this.setState({showMenu: false}, () => {
//     //             document.removeEventListener('click', this.closeMenu)
//     //         });
//     //     }
       
//     // }


//     render() {
//         return (
//             <div>
//                 <button>Show menu</button>
//                 {this.state.showMenu ? (
//                     <div 
//                     className="menu"
//                     ref={(element) => {
//                         this.dropdownMenu = element
//                     }}
//                     >
//                         <ul>
//                             <li>Home</li>
//                             <li>Monitor</li>
//                             <li>Admin</li>
//                         </ul>
//                     </div>
//                 ): (
//                     null
//                 )}
                
//             </div>
//         )
//     }
// }
