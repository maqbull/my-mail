import React from 'react';
import Header from './Header'
import MessageList from './MessageList'
import MessageViewer from './MessageViewer'
import { useEmail} from './EmailContext'

const MainPage = () => {
 const {currentEmail} = useEmail()
return (<>
 <Header/>
 <main>
 {currentEmail ? <MessageViewer/> : <MessageList /> }
 </main>
  </>
)
};

export default MainPage;