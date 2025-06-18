// User Login Component on the Settings Page

// src/components/UserLogin.jsx
import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';

const UserLogin = () => {
  const { routers, activeIndex, updateCredentials } = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!routers.length) {
      setStatus({ success: false, message: 'No router defined.' });
      return;
    }
    const active = routers[activeIndex];
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/set_router', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          router: active.model,
          router_ip: active.ip,
          username,
          password
        })
      });
      const json = await res.json();
      if (res.ok) {
        updateCredentials({ username, password });
        setStatus({ success: true, message: json.message });
      } else {
        setStatus({ success: false, message: json.error || 'Login failed.' });
      }
    } catch (err) {
      setStatus({ success: false, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mb-2" 
      style={{ 
        maxWidth: '100%', 
        minWidth: '80%', /* Prevents box from collapsing */
        width: '100%',
        height: 'auto',
      }}>

      <div className="card-body"
        style={{ 
          marginLeft: '10px',
          display: 'flex', /* Allows for vertical stack */
          flexDirection: 'column', /* Allows for vertical stack */
          gap: '10px' 
        }}>


        <label><h11>Username:</h11></label>
        <div class="text-box"

          style={{
            height: '50px',
            width: '70%',
          }}>

          <input
            type="text"
            className="custom-input"
            placeholder="e.g. User01"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <label><h11>Password:</h11></label>
        <div 
          style={{

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '30px'

          }}>

          <div class="text-box"
            style={{
              height: '50px',
              weight: '70%',
            }}>

        
            <input
              type="password"
              className="custom-input"
              placeholder="e.g. Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
    
          </div>

          <div
          className="button"
          onClick={handleLogin}
          style={{
            alignSelf: 'flex-start',
            opacity: loading ? 0.6 : 1,
            pointerEvents: loading ? 'none' : 'auto'
          }}
        >
          {loading ? 'Logging in…' : 'Login'}
        </div>

        </div>


        

        {status && (
          <div
            className={`alert mt-2 ${status.success ? 'alert-success' : 'alert-danger'}`}
            role="alert"
          >
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLogin;
