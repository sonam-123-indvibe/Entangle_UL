import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserLock } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';

function AdminLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === 'admin' && password === '1234') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid ID or Password');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          <FaUserLock style={{ marginRight: '10px' }} />
          Admin Login
        </h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputBox}>
            <FaUserLock style={styles.icon} />
            <input
              type="text"
              placeholder="Admin ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputBox}>
            <MdPassword style={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    transition: '0.3s ease-in-out',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
  },
  icon: {
    marginRight: '10px',
    color: '#555',
  },
  input: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#2575fc',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: 'red',
    marginTop: '15px',
    textAlign: 'center',
  }
};

export default AdminLogin;
