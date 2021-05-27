import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import  './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
        height ="100vh"
        projectID="80096117-2762-477a-8b7e-6464b73e4f98"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        //userName="sandani"
        // javascriptmastery
        //java123
        //userSecret="java123"
        renderChatFeed={(chatAppProps)=> <ChatFeed { ... chatAppProps} />}
        />
    );
}

export default App;