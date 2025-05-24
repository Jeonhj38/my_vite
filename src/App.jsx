import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 변수 : 값을 재활용하기 위해 담는 공간
// 함수 : 코드를 재활용하기 위해 담는 공간
// 컴포넌트 : 화면을 재활용하기 위해 담는 공간 [첫 글자는 영어대문자]

function Header(){
  return(
    <div>
<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  );
}

function Header(){
  <h1>vite + react</h1>
}


function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count 
      + 1)    // 사용은 첫번째, 변경은
  }

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
