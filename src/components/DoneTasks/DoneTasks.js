import React from 'react';
import './DoneTasks.scss';

export default function DoneTasks(props) {
  return (
    <ul>
      <h1 className='done'>DONE</h1>
      {props.done.map((item, index) =>
        <li onClick={(e)=>props.deleteDone(index)} key={index}>{item} <span>✔</span></li>)}
    </ul>
  )
}