import React from 'react';
import ReactDOM from 'react-dom/client';
import ViewProduct from './components/product/ViewProducts';
import { Provider } from 'react-redux';
import mystore from './store/mystorer';
import mystorer from './store/mystorer';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewEmployee from './components/employee/ViewEmployee';
import AddProduct from './components/AddProdut';
import AddEmployee from './components/AddEmployee';
import EditProduct from './components/product/EditProduct';
import EditEmployee from './components/employee/EditEmployee';
import Login from './Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={mystorer}>
    
   <BrowserRouter>
     <Header/> 
     <Routes>
         <Route path="/viewproduct" element={<ViewProduct/>}>ViewProduct</Route>
         <Route path="/viewemployee" element={<ViewEmployee/>}>ViewEmployee</Route>
         <Route path="/addproduct" element={<AddProduct/>}>AddProduct</Route>
         <Route path="/addemployee" element={<AddEmployee/>}>AddEmployee</Route>
         <Route path="/editproduct" element={<EditProduct/>}>EditProduct</Route>
         <Route path="/editemployee" element={<EditEmployee/>}>EditEmployee</Route>
         <Route path="/login" element={<Login/>}>EditEmployee</Route>

     </Routes>
   </BrowserRouter>
  </Provider>
);

