import React, { useState } from 'react';

const Navbar = () => {
  const total = 25000;
  const [token, setToken] = useState(false);
  const [active, setActive] = useState('home'); // para manejar navegación activa

  const formatPrice = (num) => num.toLocaleString('es-PE');

  // Simular login/logout cambiando token
  const handleLogin = () => setToken(true);
  const handleLogout = () => {
    setToken(false);
    setActive('home');
  };

  // Cambiar estado activo para botones (sin routing real)
  const handleNavClick = (page) => setActive(page);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Marca */}
        <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

        {/* Botón hamburguesa para collapse mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item">
              <button
                className={`btn btn-outline-light btn-sm ${active === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                🍕 Home
              </button>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <button
                    className={`btn btn-outline-light btn-sm ${active === 'profile' ? 'active' : ''}`}
                    onClick={() => handleNavClick('profile')}
                  >
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className={`btn btn-outline-light btn-sm ${active === 'login' ? 'active' : ''}`}
                    onClick={() => {handleNavClick('login'); handleLogin();}}
                  >
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn btn-outline-light btn-sm ${active === 'register' ? 'active' : ''}`}
                    onClick={() => handleNavClick('register')}
                  >
                    🔐 Register
                  </button>
                </li>
              </>
            )}

            <li className="nav-item">
              <button className="btn btn-outline-info btn-sm" disabled>
                🛒 Total: ${formatPrice(total)}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
