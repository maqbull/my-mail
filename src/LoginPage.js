import React ,{useState } from 'react';
import login from './api';
import {useUserActions} from './UserContext'


function LoginPage() {
    const [error,setError] = useState(null);
    const [loading , setLoading] = useState(false);
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const {login: onLogin} = useUserActions();

    const submit = event => {
        event.preventDefault();
        setError(null);
        setLoading(true);
        login(username,password)
        .then(user => {
            setLoading(false);
            onLogin({user});
        })
        .catch(error => {
            setError(error)
            setLoading(false)
        });
    }

    return (
        <div className ="LoginPage">
      <form onSubmit = {submit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username"
      value = {username}
      onChange = {e => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"
      value = {password}
      onChange = {e => setPassword(e.target.value)}
      />
    <button
    >Log In</button>
      </form>
        { loading ? ( <div className="loading">Loading..</div>
        ): ( '' )}
        { error ? (
            <div className="error">{error.message}</div>
            ): ''}
        </div>
    )
}
export default LoginPage;