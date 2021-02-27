import React from 'react'
import  {UserProvider } from './UserContext';
import {EmailProvider} from './EmailContext'
import {NotifyProvider} from './NotifyContext'

function Providers({children}) {
 
    return (  
    <NotifyProvider>
    <UserProvider>
    
    <EmailProvider> {children} </EmailProvider>
    </UserProvider> 
    </NotifyProvider>
    
 )
  }
  export default Providers;