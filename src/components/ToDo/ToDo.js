import React from 'react';
import './ToDo.scss';

export default function ToDo(props) {
  return (
    <ul>
      <h1 className='todo'>TO DO</h1>
      {props.items.map((item, index) =>
        <li onClick={(e)=>props.delete(index)} key={index}>
          <p>{item}</p>
          <button className='left' onClick={(e)=>props.addToDone(item)}>DONE</button>
        </li>
      )}
    </ul>
  )
}