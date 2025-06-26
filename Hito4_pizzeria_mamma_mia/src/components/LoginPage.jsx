import React, { useState } from "react";
import "../App.css";  // Importa el CSS

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsError(false);
        if (!email || !password) {
            setMessage("Todos los campos son obligatorios.");
            setIsError(true);
        } else if (password.length < 6) {
            setMessage("La contraseña debe tener al menos 6 caracteres.");
            setIsError(true);
        } else {
            setMessage("Autenticación exitosa.");
            setIsError(false);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            {message && (
                <div className={isError ? "error-message" : "success-message"}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default LoginPage;
