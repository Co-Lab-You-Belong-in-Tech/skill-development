//get Acces Token services with fetch

import { useReducer, useEffect, useRef } from 'react'

const cache: { current: { [key: string]: any } } = { current: {} }

const getTitle = async () => {
  const response = await fetch('https://auth.emsicloud.com/connect/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "grant_type=client_credentials&client_id=7by8hmob2j3s2j72&client_secret=BeaP23rQ&scope=emsi_open",
}).then(ress => ress.json())
.then(ress => { 
  const secondResponsive =  fetch("https://emsiservices.com/titles/versions/latest/titles?q=.NET&limit=5&page=2", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ress.access_token}`,
      },
      
      })
      .then((res) => res.json())
      .then((res) => {
        return res
        })
    return secondResponsive;
})

return response;
}

export default getTitle

