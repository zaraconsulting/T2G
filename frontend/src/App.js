import React, { useEffect, useState } from "react";
import { Main } from './views/Main';

export const App = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    // var email = 'derekhawkins.tech@gmail.com';
    // var password = 'abc123';

    // function getToken() {
    //   fetch('/tokens', {
    //     method: 'POST',
    //     cors: 'no-cors',
    //     headers: {
    //       'Authorization': `Basic ${email}:${password}`,
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(r => r.json)
    //     .then(token => console.log(token))
    // }

    // getToken();

    function getCoaches() {
      fetch("/coaches", {
        method: 'GET',
        cors: 'no-cors',
        headers: {
          'Authorization': 'Bearer lYXcnIEFyq1awbgmJ5FHHdrpyGo5gjEw',
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then((r) => r.json)
        .then((data) => {
          console.log(data)
          // console.log('It works')
          // setCoaches(data);
        });
    }
    getCoaches();
  }, []);

  return (
    <Main />
  )
}
