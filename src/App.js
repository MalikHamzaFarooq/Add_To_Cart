import './App.css';
import Header from './Component/Header';
import { ProductsData } from './Component/CardData';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './Component/Products';
import CartComponent from './Component/CartComponent';
import CustomizedTables from './Component/CustomizedTables';
import AddProduct from './Component/AddProduct';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';

export const AppContext =createContext();
function App() {
  const [notification,setNotification]=useState(0);
const [cartDAta,setCArtData]=useState([]); 

  console.log("context--------->",cartDAta)

  return (
    

    
    <>  
   <AppContext.Provider value={{notification,setNotification,cartDAta,setCArtData,ProductsData,cartDAta}}>
   
    <Header/>
    <Routes>    

    <Route path='/' exact element={<Products />} />
    <Route path='/cart'  element={<CartComponent />} />
    <Route path='/cartdata'  element={<CustomizedTables />} />
    <Route path='/new_products'  element={<AddProduct />} />
    <Route path='/sign_up'  element={<SignUp />} />
    <Route path='/log_in'  element={<LogIn />} />
  
    </Routes>
   
   
    </AppContext.Provider>
  
    </>
  );
}

export default App;
