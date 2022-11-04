//create access token

import { useReducer, useEffect, useRef } from 'react'

const cache: { current: { [key: string]: any } } = { current: {} }

const getAccesToken = async () => {
  const response = await fetch('https://auth.emsicloud.com/connect/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "grant_type=client_credentials&client_id=7by8hmob2j3s2j72&client_secret=BeaP23rQ&scope=emsi_open",
  }).then((res) => res.json())
  .then((res) => {
    return res
  })
  return response;
}

export default getAccesToken
