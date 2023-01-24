import React from 'react';

import Body from './components/Body/body';
import {Routes, Route} from 'react-router-dom'
import Product from './components/Body/Product/product';
import Solution from './components/Body/solution';
import Resource from './components/Body/resource';
import Feature from './components/Body/Product/features';
import NavBar from './components/nav';
import Template from './components/Body/Product/templae';
import {QueryClient, QueryClientProvider} from 'react-query';
import SignIn from './components/Body/signin';
import SignUp from './components/Body/signup';


function App() {
  const queryClient = new QueryClient();
  return (
    <div className=" h-screen">
      <QueryClientProvider client={queryClient} >
      <Routes>
     <Route path='/' element={<Body />} >
      
        <Route path='/'element={<NavBar />}>
        <Route path='products' element={<Product />} >
        <Route path='features' element={<Feature />} /> 
        <Route path='templates' element={<Template />} />
        </Route>
        <Route path='sign up' element={<SignUp />} />
        <Route path='sign in' element={<SignIn />} />
        <Route path='solutions' element={<Solution />} />
        <Route path='resources' element={<Resource />} />
        </Route>
        
        
        <Route path='pricing'  />
        </Route>
      </Routes>
      </QueryClientProvider>  

    </div>
  );
}

export default App;
