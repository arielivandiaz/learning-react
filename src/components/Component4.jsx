import React, { useState } from 'react'

export const Component4 = () => {

    const [status, setStatus] = useState('POMELO');

    const changeStatus = (e,newStatus) => {
        setStatus(newStatus);
    };

  return (
    <>
        <div>Component4</div>
        <div>
            <strong>Status: {status}</strong>
            <button onClick={(e) => changeStatus(e, 'ACTIVE')}>Change status</button>
        </div>
        <div className="card">
        <input type="text" placeholder="Type something" onKeyUp={e => changeStatus(e, e.target.value)}></input>
        </div>

        
      </>
  )
}
