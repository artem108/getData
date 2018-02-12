import React, { Component } from 'react';

const MainComponent = (props) => {
  const { data } = props
  console.log('Geted data in component: ', data);
  
  return (
    <ul style={{listStyle: 'none'}}>
      {
        // data.map((key) => {
        //   return <li>{key}</li>
        // })
      }
  </ul>
  )
}

export default MainComponent
