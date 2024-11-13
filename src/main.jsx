import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './root/Root'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ResProvider } from './componets/Context/useContext'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResProvider>
      <QueryClientProvider client={queryClient}>
        <Root />
        <Toaster />
      </QueryClientProvider>
    </ResProvider>
  </StrictMode>
)
