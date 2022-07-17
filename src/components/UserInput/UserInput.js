import React from 'react';
import './UserInput.scss';

export default function UserInput(props) {
  return (
    <div className='userinput'>
      <input onKeyPress={props.handleKeyPress} placeholder='ENTER TASK'
              onChange={(e)=>props.changingInput(e.target.value)} value={props.userinput} type='text' />
      <div className='addbutton' data-testid="addbutton" onClick={()=>props.addToList(props.userinput)}>ADD</div>
    </div>
  )
}