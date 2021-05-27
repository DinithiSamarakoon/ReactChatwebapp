import { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
            e.preventDefault();

            const authObject = { '{Project-ID': "80096117-2762-477a-8b7e-6464b73e4f98", 'User-Name': username, 'User-Secret': password };

        try{ 
            //username password ==> chatengine --> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

             localStorage.setItem('username', username);
             localStorage.setItem('password', password);

             window.location.reload();
             //works out --> logged in
        }catch (error){
            setError('oops, incorrect credentials.');
                //error --> try with new (crediential) username....
        }
            //username / password ==> chatengine --> give messages
            //works out --> logged in
            //error --> try with new (crediential) username....
    }
    return(
           <div className="wrapper">
               <div className="form">
                   <h1 className="title">Chat Application</h1>
                    <form onSubmit={handleSubmit}>
                        <input  type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="UserName" required/>
                        <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
                </form>
               </div>

           </div> 
    );
}

export default LoginForm;