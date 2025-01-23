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
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
  //   throw new Error('Function not implemented.');
  // }

  function handleSubmit(e: { preventDefault: () => void; } | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    e.preventDefault() //prevents page from refreshing

    // setNewEntry(currentTabs => {
    //   return [
    //     ...currentTabs,
    //     {id: crypto.randomUUID(), entryTitle: newEntry, completed: false },
    //   ]
    // })
    
    // setNewEntry(newEntry.map(title => newTab))
//     setNewEntry(
//       newEntry.map((tab) => {
//       return {id: crypto.randomUUID(), title: newTab, text: newLink, completed: false};
//       return newEntry; 
//     }
    
//   )
// );
// setNewEntry((previousValues) => ({...newEntry, [event.target.name]: event.target.value, })
//   )

  var formInputs = {
    title: newTab,
    link: newLink,
  };

      // setNewEntry(currentTabs => {
    //   return [
    //     ...currentTabs,
    //     {id: crypto.randomUUID(), entryTitle: newEntry, completed: false },
    //   ]
    // })

    // var arrayLocalstorage = [];
    // arrayLocalstorage.push(formInputs);

    setNewEntry([...newEntry, newTab, newLink]);
    // var arrayLocalstorage = [];
    var arrayLocalstorage = JSON.parse(localStorage.getItem('formInputs') || '[]');
    // arrayLocalstorage.push(newEntry);
    arrayLocalstorage.push(formInputs)
  // localStorage.arrayOnWebpage.push(formInputs);
  //  localStorage.setItem("formValuesSubmitted", JSON.stringify(formInputs)); //where array should be set up
  // localStorage.setItem('arrayOnWebpage', JSON.stringify(arrayLocalstorage));
  localStorage.setItem('formInputs', JSON.stringify(arrayLocalstorage));
  // localStorage.setItem('tab', JSON.stringify(formInputs));
   // const storedFormData = JSON.parse(localStorage.getItem('formInputs'))
  // storedFormData.push(formInputs);
  // localStorage.setItem('formInputs', JSON.stringify(storedFormData));
  alert('Form values submitted to localstorage.')
  // console.log(newEntry)

  
}

// const handleChange = (e: { target: { name: any; value: any; }; }) => {
//   const { name , value } = e.target;
//   setNewEntry((prev) => ({ ...prev, [name]: value}))
// }

React.useEffect(() => { //update the ;oncancel;storage whenever the newEntry array changes
  localStorage.setItem('newEntry', JSON.stringify(newEntry));
  },
[newEntry]);

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
          {/* {newEntry.push({id: crypto.randomUUID(), title: newTab, text: newLink, completed: false})} */}
          <li>
            <label id="tabTitle">Tab Title:</label>
            <input type="text" value={newTab} id="tabTitle" placeholder='Please enter tab title here.'></input>
            <iframe src={newLink}></iframe>
            <button className="closeButton">CLOSE</button>
          </li>
          <li>
            <label id="tabTitle">Tab Title:</label>
            <input type="text" id="tabTitle" placeholder='Please enter tab title here.'></input>
            <iframe src={newLink}></iframe>
            <button className="closeButton">CLOSE</button>
          </li>
        </ul>
        
        {/* <form>
        <label id="tabTitle">Tab Title:</label>
                    <input type="text" id="tabTitle" placeholder='Please enter tab title here.'></input>
                    <br></br>
                    <input type="text" id="tabLink" placeholder='Please enter the link you would like to be featured here.'></input>
                    <br></br>
                    <iframe src=""></iframe>
                    <br></br>
                    <button className="btn btn-danger">Submit</button>
                    </form> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Link href="https://reactjs.org" targetBlank>Learn React</Link> {/*targetBlank is true by default*/}
      </header>
    </div>
  );
}

export default App;
