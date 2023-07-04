import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AuthContex from './Context/AuthContex.jsx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthContex>
        <App />
      </AuthContex>
    </React.StrictMode>
  </QueryClientProvider>
,
)
