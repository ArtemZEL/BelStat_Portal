import React, { useState } from 'react'
import './Auth.css'
// import Logo from '../../img/logo.png'
import {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from '../../actions/AuthActions';
const Auth = () => {

    const dispatch=useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true);
    console.log(loading)
    const [data, setData] = useState({ firstname: "", lastname: "", password: "", confirmpassword: "", username: "" })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    // console.log(setData)
    console.log(data);

    const [confirmPass,setConfirmPass]=useState(true);

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(isSignUp)
        {
           data.password===data.confirmpassword
           ?dispatch(signUp(data))
           :setConfirmPass(false)
        }
        else{
            dispatch(logIn(data))
        }
    
    }
    const reseForm=()=>{
        setConfirmPass(true);
        setData({
            firstname: "", 
            lastname: "", 
            password: "", 
            confirmpassword: "", 
            username: "" 



        })
    }
    return (
        <div className='Auth'>
            <div className="a-left">
                {/* Левая панель */}
                {/* <img src={Logo} alt="" /> */}
                <div className="Webname">
                    <h1>
                        БелСтат<span>Портал</span>
                    </h1>
                    <h6>
                        Какой то текст здесь будет
                    </h6>
                </div>
            </div>
            {/* Правая панель */}
            <div className="a-right">
                <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Регистрация" : "Логин"}</h3>

                    {isSignUp &&
                        <div>
                            <input 
                            type="text" 
                            placeholder='Имя' 
                            className='infoInput' 
                            name='firstname' 
                            onChange={handleChange}
                            value={data.firstname}
                            />
                            <input 
                            type="text" 
                            placeholder='Фамилия' 
                            className='infoInput' 
                            name='lastname' 
                            onChange={handleChange}
                            value={data.lastname}
                            />
                        </div>
                    }
                    <div>
                        <input 
                        type="text" 
                        placeholder='Имя пользователя' 
                        className='infoInput' 
                        name='username' 
                        onChange={handleChange}
                        value={data.username}
                        />
                    </div>
                    <div>
                        <input 
                        type="password" 
                        placeholder='Пароль' 
                        className='infoInput' 
                        name='password' 
                        onChange={handleChange}
                        value={data.password}
                        />
                        {isSignUp &&
                            <input 
                             type="password" 
                             placeholder='Повторите Пароль'
                             className='infoInput' 
                             name='confirmpassword'
                             onChange={handleChange}
                             value={data.confirmpassword}
                            />
                        }
                    </div>
                        <span style={{display:confirmPass?"none":"block",color:"red",fontSize:"12px",alignSelf:"flex-end",marginRight:"15px"}}>
                            *Пароль не совпадает
                        </span>
                    <div>
                        <span className='Linked' onClick={() => {setIsSignUp((prev) => !prev);reseForm()}}>
                            {isSignUp ? "Уже есть аккаунт?" : "Нет аккаунта зарегистрируйтесь"}
                        </span>
                    </div>
                    <button className="button infoButton" type='submit' disabled={loading}>
                        {loading? "Загрузка...":isSignUp ? "Зарегистрироваться" : "Войти"}
                    </button>
                </form>
            </div>
        </div>
    )
}


export default Auth