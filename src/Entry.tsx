import React, { useState } from "react";
//import './index.css';

// const [title, setTitle] = useState("")

// const [link, setLink] = useState("")
const Form = () => {
    const [formData, setFormData] = useState({
        title: "",
        link: ""
    })

    return(
        <form>
        <label id="entryTitle">Enter Title:</label>
        <input type="text" onChange={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} id="entryTitle" placeholder='Please enter tab title here.'></input>
        <label id="entryLink">Enter Link:</label>
        <input type="text" id="entryLink" placeholder='Please enter tab link here.'></input>
        <label id="linkIframe">Link Iframe:</label>
        <iframe src={formData.link} id="linkIframe"></iframe>
        <button onClick={handleClick}>Enter Details</button>
        </form>
    )
}
function handleClick(){

    
    alert('Button pressed');
}

function Entry() {
    return (
        <>
            <form>
            <label id="entryTitle">Enter Title:</label>
            <input type="text" id="entryTitle" placeholder='Please enter tab title here.'></input>
            <label id="entryLink">Enter Link:</label>
            <input type="text" id="entryLink" placeholder='Please enter tab link here.'></input>
            <label id="linkIframe">Link Iframe:</label>
            <iframe src=""></iframe>
            <button onClick={handleClick}>Enter Details</button>
            </form>

            {/* <label id="tabTitle">Tab Title:</label>
                    <input type="text" id="tabTitle" placeholder='Please enter tab title here.'></input>
                    <iframe src="https://www.google.com/search?igu=1"></iframe> */}
        </>
    );
}

export default Entry;