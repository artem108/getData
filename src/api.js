import axios from 'axios'

export const getPeople = () => {
  // const  myInint = {
  //     method: 'GET'
  //   }
  // return fetch('https://swapi.co/api/people/', myInint)
  //   .then(respoce => console.log(respoce.body))
  return axios.get('https://swapi.co/api/people/')
  }
