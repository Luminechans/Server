import React from 'react';
import { UserContextProvider } from './src/components/user/UserContext';
import Navigation from './src/components/navigation/Navigation';
import { ProductContextProvider } from './src/components/products/ProductContext'



export default function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Navigation />
      </ProductContextProvider>
    </UserContextProvider>

  );
}


