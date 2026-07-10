import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import OrderProvider from './context/OrderContext.jsx'
// import EmployeeProvider from './context/EmployeeContext.jsx'

createRoot(document.getElementById('root')).render(
  <OrderProvider>
  {/* <EmployeeProvider> */}
    <App />
  </OrderProvider>,
)
