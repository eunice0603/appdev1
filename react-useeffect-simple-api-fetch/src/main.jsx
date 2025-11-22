import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import UsersFetch from './UsersFetch.jsx'
import PostsFetchAsync from './PostsFetchAsync.jsx'
import TodosFetchAxios from './TodosFetchAxios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersFetch />
    <PostsFetchAsync />
    <TodosFetchAxios />
  </StrictMode>,
)
