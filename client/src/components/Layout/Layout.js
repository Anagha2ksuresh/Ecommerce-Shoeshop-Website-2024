import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
import { Toaster } from 'react-hot-toast';
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
       <meta charSet="utf-8" />
       <meta name="description" content={description} />
       <meta name="keywords" content={keywords} />
       <meta name="author" content={author} />
       <title>{title}</title>
      </Helmet>
       <Header/>
       <main style={{ minHeight:'70vh' }}>
        <Toaster/>
        {children}
        </main>
        <Footer/>
    </div>
  )
}

Layout.defaultProps={
  title:"Shoe World - shop now",
  description:"mern stack projest",
  keywords:'mern,reacr,node,mongodb',
  author:'Anagha Suresh'
}

export default Layout;