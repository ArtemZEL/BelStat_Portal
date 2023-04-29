import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className='Auth'>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>
                    БелСтат<span>Портал</span>
                </h1>
                <h6>
                    Какой то текст здесь будет
                </h6>
            </div>
        </div>
        <SignUp/>
    </div>
  )
}

function SignUp(){

    return(
        <div className="a-right">
            <form action="" className="infoForm authForm">
                <h3>Регистрация</h3>
                <div>
                    <input type="text" placeholder='Имя' className='infoInput' name='firstname' />
                    <input type="text" placeholder='Фамилия' className='infoInput' name='lastname' />
                </div>
                <div>
                    <input type="text" placeholder='Имя пользователя' className='infoInput' name='username' />
                </div>
                <div>
                    <input type="text" placeholder='Пароль' className='infoInput' name='password' />
                </div>
                <div>
                    <input type="text" placeholder='Повторите Пароль' className='infoInput' name='confirmpassword' />
                </div>
                <div>
                    <span>Уже есть аккаунт. Логин</span>
                </div>
                <button className="button infoButton" type='submit'>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )

}

export default Auth