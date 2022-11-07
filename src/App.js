import DokterInfo from './components/DokterInfo'
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState("https://d1k13df5m14swc.cloudfront.net/photos/Eun-Young-Lee-FNP-293710-circle_large__v2__.png");

  return (
    <>
      {/* <h1>Hellooo</h1> */}
      <DokterInfo url={url} nama={"Ratna Sari"} spesialis={"Gigi"} rating={22}/>
    </>
  );
}

export default App;
