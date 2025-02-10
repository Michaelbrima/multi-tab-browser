import * as React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Link from './components/Link';
import { TabItem } from './types';
import { BrowserRouter } from 'react-router-dom';

interface FormInputValues {
  title: string;
  link: string;
}

type Tab = {
  title: string;
  link: string;
}

const App = () => {
  const [newTab, setNewTab] = React.useState("")
  const [newLink, setNewLink] = React.useState("")
  const [newEntry, setNewEntry] = React.useState([]);


  function handleSubmit(e: { preventDefault: () => void; } | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    e.preventDefault() //prevents page from refreshing

  var formInputs = {
    title: newTab,
    link: newLink,
  };


    // setNewEntry([...newEntry, newTab, newLink]);

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
var regularLists = JSON.parse(localStorage.getItem('formInputs') || '{}')
var arrayList = [];
arrayList.push(regularLists);
const list = [];
for(let i=0; i < regularLists.length; i++){
  list.push(<li>
  <label id="tabTitle">{regularLists[i].title}</label>
  {/* <input type="text" value={regularList.title} id="tabTitle" placeholder='Please enter tab title here.'></input> */}
  <br></br>
  <iframe src={regularLists[i].link}></iframe>
  <br></br>
  <button className="closeButton">CLOSE</button>
</li>)
}
  return (

    <BrowserRouter>

    
    <div className="App">
      <header className="App-header">

          <form className='new-tab-form' onSubmit={handleSubmit}>
            <h1 className="header">Multi Tab Browser</h1>
            <p>Please enter a title and link into the entry fields below,
              <br></br>
            then, press the Add button to add a new tab to the page.</p>
            <div className='tab-form-row'>
              <label id="entryTitle">Enter Title:</label>
              <span> </span>
              <input type="text" value={newTab} onChange={e => setNewTab(e.target.value)} id="entryTitle" placeholder='Please enter tab title here.'></input>
              <span> </span>
              <label id="entryLink" >Enter Link:</label>
              <span> </span>
              <input type="text" value={newLink} onChange={e => setNewLink(e.target.value)} id="entryLink" placeholder='Please enter tab link here.'></input>
            </div>
            <button className='btn'>Add</button>
          </form>


        <ul className="tabList">
          {localStorage.formInputs}
          {arrayList.forEach(() => {
                          
                          return(
                          <li>
                          <label id="tabTitle">{regularLists.title}</label>
                          {/* <input type="text" value={regularList.title} id="tabTitle" placeholder='Please enter tab title here.'></input> */}
                          <br></br>
                          <iframe src={regularLists.link}></iframe>
                          <br></br>
                          <button className="closeButton">CLOSE</button>
                        </li>
         )} )}
            {
            // regularLists.map((regularList: any, index: any) => (
              <li>
                <label id="tabTitle">{regularLists.title}</label>
                {/* <input type="text" value={regularList.title} id="tabTitle" placeholder='Please enter tab title here.'></input> */}
                <br></br>
                <iframe src={regularLists.link}></iframe>
                <br></br>
                <button className="closeButton">CLOSE</button>
              </li>
            // ))
            }
          {/* {           
         localStorage.getItem("formInputs")
 } */}
 {/* {regularLists[1].title}
 {regularLists[1].link} */}
 {list}
        </ul>
        

        {/* <Link href="https://reactjs.org" targetBlank>Learn React</Link> targetBlank is true by default */}
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
