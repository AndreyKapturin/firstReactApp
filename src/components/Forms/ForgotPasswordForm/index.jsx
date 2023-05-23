import React from 'react';
import './../formStyle.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailOptions } from '../formOptions';
import { api } from '../../../api/api';

const ForgotPasswordForm = () => {
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const resetPassword = (data) => {
        api.getTokenByEmail(data).then(res => {
            if (!!res.err) {
                alert('Аккаунта с данным Email не существует');
            } else {
                alert(`${res.message}`);
                navigate('/password-reset');
                reset();
            }
        })
        reset();
    };

    return (
        <div>
            <h3>Восстановление пароля</h3>
            <form className='form' onSubmit={handleSubmit(resetPassword)}>
                <span className='form__text'>
                    Для получения временного пароля необходимо ввести email, указанный при
                    регистрации.
                </span>
                <input
                    className={errors.email ? 'input error' : 'input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
                />
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
                <button className='form__button' type='submit'>
                    Восстановить пароль
                </button>
                <Link to='/login'>
                    <button className='form__button-link' type='submit'>
                        Я вспомнил пароль
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
