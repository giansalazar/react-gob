import { useState, useEffect, useContext } from 'react'
import * as PersonalServer from "../services/PersonalServer"
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

function LoginForm() {

    const initialState = { id: 0, username: "", password: "" }
    const [usuario, setUsuario] = useState(initialState)
    const { usuarioSesion, setUsuarioSesion } = useContext(Context)

    let navigate = useNavigate()

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            res = await PersonalServer.Login(usuario)
            const data = await res.json()

            if (data.message === "Success") {
                window.localStorage.setItem(
                    'LoggedGobUser', JSON.stringify({
                        id: data.user.id,
                        username: data.user.username,
                        token: data.token
                    })
                )

                navigate('/react-gob/empleados/')
                alert("Bienvenid@ "+ data.user.username)
                
                window.location.reload()
            }

            else {
                setUsuario(initialState)
                alert("las credenciales son incorrectas")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div id='card-login' class="card">
                <h2>Iniciar Sesión</h2><hr />
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 col-md-12">
                            <label for="username" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="username" name='username' value={usuario.username} onChange={handleInputChange} aria-describedby="usernameHelp" placeholder='Usuario' required />
                        </div>
                        <div className="mb-4 col-md-12">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={usuario.password} onChange={handleInputChange} id="password" placeholder='Password' required />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginForm