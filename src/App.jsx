

import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import toast, { Toaster } from 'react-hot-toast';


function App() {


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  )
}

export default App
