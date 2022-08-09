import React, { useState } from 'react'
import Profile from './profile'
import jsonData from './MOCK_DATA.json'
import Chatprofiles from './chatProfiles'
function App() {
  const [searchTerm, setsearchTerm] = useState('')
  return (
    <>
      <div className="all">
        <section className='top'>
          <p id="heading">New Connections &nbsp;<i className="fa-solid fa-circle"></i></p>
          <div className='profiles'>
            {jsonData.map((val, id) => {
              return (
                <Profile key={id} {...val} />
              )
            })}
          </div>
        </section>
        <section className='bottom'>
          <div className="bottom-header">
            <p>Messages&nbsp;<i className="fa-solid fa-circle"></i></p>
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input type="search" placeholder="Search..." onChange={event => {
              setsearchTerm(event.target.value);
            }}
            />
          </div>
          <div className="chat">
            {jsonData.filter((val) => {
              if (searchTerm == "") {
                return val
              }
              else if (val.user_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, id) => {
              return (
                <Chatprofiles key={id} {...val} />
              )
            })}
          </div>
        </section>
      </div >
    </>
  )
}

export default App
