import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/headers/Header';
import Pages from './components/mainpages/Pages';
import { DataProvider } from './GlobaalState'
export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Pages/>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}
