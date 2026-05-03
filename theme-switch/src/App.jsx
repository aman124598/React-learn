import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(false)

  function onToggleTheme() {
    setDark(prev => !prev)
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: dark ? "#060606" : "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button onClick={onToggleTheme}>
        Toggle Theme 😎
      </button>
    </div>
  )
}

export default App