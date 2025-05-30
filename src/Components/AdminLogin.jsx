// Components/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';

function AdminLogin() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials
    if (adminId === 'admin123' && password === 'pass123') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid ID or Password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}><FaUserShield style={{ marginRight: '10px' }} />Admin Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <FiLock style={styles.icon} />
            <input
              type="text"
              placeholder="Enter Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <FiLock style={styles.icon} />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
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
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f4f7fa',
  },
  card: {
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
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
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '10px',
    backgroundColor: '#fafafa',
  },
  icon: {
    marginRight: '10px',
    color: '#888',
    fontSize: '18px',
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '16px',
    background: 'transparent',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
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
