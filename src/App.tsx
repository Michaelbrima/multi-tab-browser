import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './components/Link';
import { TabItem } from './types';

interface FormInputValues {
  title: string;
  link: string;
}

type Tab = {
  title: string;
  link: string;
}

function App() {
  const [newTab, setNewTab] = React.useState("")
  const [newLink, setNewLink] = React.useState("")
  const [newEntry, setNewEntry] = React.useState([]);


  function handleSubmit(e: { preventDefault: () => void; } | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    e.preventDefault() //prevents page from refreshing

  var formInputs = {
    title: newTab,
    link: newLink,
  };


    setNewEntry([...newEntry, newTab, newLink]);

    var arrayLocalstorage = JSON.parse(localStorage.getItem('formInputs') || '[]');
    arrayLocalstorage.push(formInputs)

  localStorage.setItem('formInputs', JSON.stringify(arrayLocalstorage));

  alert('Form values submitted to localstorage.')
  
}



React.useEffect(() => { //update the ;oncancel;storage whenever the newEntry array changes
  localStorage.setItem('newEntry', JSON.stringify(newEntry));
  },
[newEntry]);
var tabList = localStorage.getItem("formInputs");
var regularLists = JSON.parse(tabList);

  return (

    <div className="App">
      <header className="App-header">

        <form className='new-tab-form' onSubmit={handleSubmit}>
          <div className='tab-form-row'>
            <label id="entryTitle">Enter Title:</label>
            <input type="text" value={newTab} onChange={e => setNewTab(e.target.value)} id="entryTitle" placeholder='Please enter tab title here.'></input>
            <label id="entryLink" >Enter Link:</label>
            <input type="text" value={newLink} onChange={e => setNewLink(e.target.value)} id="entryLink" placeholder='Please enter tab link here.'></input>
          </div>
        <button className='btn'>Add</button>
        </form>

        <h1 className="header">Multi Tab Browser</h1>
        <ul className="tabList">
               {regularLists.map((regularList: any) => (
      <li>
   <label id="tabTitle">Tab Title:</label>
   <input type="text" value={regularList.title} id="tabTitle" placeholder='Please enter tab title here.'></input>
   <br></br>
   <iframe src={regularList.link}></iframe>
   <br></br>
   <button className="closeButton">CLOSE</button>
 </li>
))}
          {/* {           
         localStorage.getItem("formInputs")
 } */}
 
 
        </ul>
        

        <Link href="https://reactjs.org" targetBlank>Learn React</Link> {/*targetBlank is true by default*/}
      </header>
    </div>
  );
}

export default App;
