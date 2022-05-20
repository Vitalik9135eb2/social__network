import { Field, reduxForm } from "redux-form"
import s from './login.module.css'
import { connect } from "react-redux";
import { loginThunk, logoutThunk } from "./../redux/auth-reduser";
import { Redirect } from "react-router-dom";






const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.input__wrap}>
                <Field className={s.input__name} name={"email"} placeholder="Login" component={"input"} />
                <Field className={s.input__password} name={"password"} placeholder="Password" component={"input"} />
            </div>

            <div className={s.rememberMe__wrap}>
                <Field name={"rememberme"} type={"checkbox"} component={"input"} />
                <span className={s.rememberMe__text}>rememberme</span>
            </div>

            {
                props.error && <p>Error</p>
            }

            <button className={s.form__btn}>Log In</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.remeberme)
    }

    if (props.isAuth) return <Redirect to={"/users"} />

    return (

        <div className={s.login__wrap}>
            <div className={s.login}>
                <h2>Login</h2>

                <ReduxLoginForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { loginThunk, logoutThunk })(Login);