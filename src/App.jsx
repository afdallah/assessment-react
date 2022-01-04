import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo-app" element={<TodoApp />} />

        {/* <Route path="/posts/:postId"element={<About />} /> */}
      </Routes>
    </div>
  )
}

export default App
