import React from "react";
import './styles/Login.css';
import {Redirect} from "react-router-dom";


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : '',
            pass: '',
            redirect: false,
            error: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if(this.state.user === 'eduardoc' && this.state.pass === 'sertresSAd'){
            this.setState({redirect : true, error: false });
        }else{
           this.setState({redirect: false , error: true })
            alert('Contraseña o usuario incorrecto');
        }
    }


    onChange(e){
        this.setState({[e.target.name]: e.target.value});

    }

    render() {
        if(this.state.redirect === true){
            return(<Redirect to="/home" />);
        }
        return (
            <React.Fragment>
                <div>
                </div>
                <form>
                <div className="LoginStyleP">
                    <div className="LoginStyleH">
                        <h2>Login</h2><br /><br />
                        <div>
                            <h3>Usuario</h3><br/>
                            <input
                                type="text"
                                name="user"
                                placeholder="Usuario"
                                autoComplete= "null"
                                onChange={this.onChange}
                            />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <h3>Contraseña</h3><br />
                            <input
                                type="password"
                                name="pass"
                                placeholder="Contraseña"
                                onChange={this.onChange}/>
                        </div>
                        <br /><br />
                        <input className="btn btn-dark" type="submit" value="Ingresar" onClick={this.login}/><br />
                    </div>
                </div>
                </form>
            </React.Fragment>
        );
    }
}
export default Login;
