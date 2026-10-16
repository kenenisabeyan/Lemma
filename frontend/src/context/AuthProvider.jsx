import React, { createContext, useState, useEffect } from 'react';
import { fetchCurrentUser, loginAdmin } from '../services/authApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('engineering_auth_token');
    if (token) {
      fetchCurrentUser()
        .then((res) => {
          if (res.success) {
            setUser(res.user);
          } else {
            localStorage.removeItem('engineering_auth_token');
          }
        })
        .catch(() => {
          localStorage.removeItem('engineering_auth_token');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const data = await loginAdmin(credentials);
    if (data.success && data.token) {
      localStorage.setItem('engineering_auth_token', data.token);
      setUser(data.user);
    }
    return data;
  };

  const logout = () => {
    localStorage.removeItem('engineering_auth_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
