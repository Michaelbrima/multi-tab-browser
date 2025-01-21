// import * as React from 'react';

//   const [newTab, setNewTab] = React.useState("")
//   const [newLink, setNewLink] = React.useState("")

// // interface MyTab {
// // id: HTMLInputElement;    
// // title: HTMLInputElement;
// // link: HTMLInputElement;
// // }
// const inputForm = React.useRef<{
//     id: HTMLInputElement;
//     title: HTMLInputElement;
//     link: HTMLInputElement;
//   }>({ id: null, title: null, link: null });

// const Tab: React.FC = () => {
//     // const [myArray, setMyArray] = React.useState<MyTab[]>([]);
//     return(
//         <>
//             // <>
//             //             <label id="tabTitle">Tab Title:</label>
//             //             <input type="text" id="tabTitle" placeholder='Please enter tab title here.'></input>
//             //             <iframe src="https://www.google.com/search?igu=1"></iframe>
//             // </>
//             <form className='new-tab-form' >
//                 {/* <div className='tab-form-row'> */}
//                     <label>id:</label>
//                     <input ref={(ref) => (inputForm.current.id)}/>
//                     <label id="entryTitle">Enter Title:</label>
//                     <input ref={(ref) => (inputForm.current.title = ref)} />
//                     <label id="entryLink">Enter Link:</label>
//                     <input type="text" id="entryLink" value={newLink} onChange={e => setNewLink(e.target.value)} placeholder='Please enter tab link here.'></input>
//                 {/* </div> */}
//                 <button className='btn'>Add</button>
//             </form><div>
//                 {myArray.map(obj => (
//                     <div key={obj.id}>
//                         <input></input>
//                         <p>ID: {obj.id}</p>
//                         <p>Title:{obj.title}</p>
//                         <p>Link:{obj.link}</p>
//                     </div>
//                 ))}
//             </div></>
//     )
// }

// export default Tab;