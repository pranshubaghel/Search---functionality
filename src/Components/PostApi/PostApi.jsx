import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
function PostApi() {
  const data = { fname: "", lname: "" };
  const [inputData, setInputData] = useState(data);
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response)
        setData(response.data)
      })
  }, [])

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response)
      })
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
    .then((response) => {
      console.log(response)
    })
  }
  const  handleDelete = (e) => {
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      {userData.map((data) =>
        <div>{data.name}</div>
      )}
      <label>First Name:</label>
      <input type='text' name='fname' value={inputData.fname} onChange={handleData}></input>
      <label>Last Name:</label>
      <input type='text' name='lname' value={inputData.lname} onChange={handleData}></input>
      <button onClick={handleSubmit}>Submit</button><br></br>
      <button onClick={handleUpdate}>Update</button><br></br>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default PostApi;
