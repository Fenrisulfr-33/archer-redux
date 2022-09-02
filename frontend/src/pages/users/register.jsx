import { useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { register } from '../../redux/users/userActions';
import { bindActionCreators } from "redux";

const style = {
    btn: 'mt-4 h-10 w-fit font-mono font-bold text-stone-800 bg-stone-300 rounded-xl p-2 shadow-xl shadow-stone-200/50 hover:bg-stone-400 hover:translate-y-0.5 hover:translate-x-0.5'
};

const RegisterPage = ({ user, register, loading }) => {
    const router = useRouter(),
    [error, setError] = useState(null),
    initialFormData = {
        username: '',
        password: '',
        password2: '',
    },
    [formData, setFormData] = useState({...initialFormData}),
    {username, password, password2} = formData,
    onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    },onSubmit = async (event) => {
        event.preventDefault();
        if (password !== password2) {
            setError('Passwords do not match')
        } else {
            const userData = {
                username,
                password,
            }
            register(userData);
        }
  
        if (user.username) {
            alert(`${user.username} Welcome to the group! Account created successfully`);
            router.push('/');
        }   
    }

    return (
        <div className='text-center py-40'>
            <section className='font-mono text-stone-200 space-y-4'>
                <h1 className='text-4xl text-extrabold'>Register</h1>
                <p>Create your account</p>
            </section>
            {error ? error : null}
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group mt-4'>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='username'
                            name='username'
                            value={username}
                            placeholder='Enter your name'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            className='form-control rounded-full text-center' 
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter a password'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            className='form-control rounded-full text-center' 
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Enter your password again'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className={style.btn}>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
// Redux Connection
const mapStateToProps = (state) => {
    return {
      user: state.user,
      loading: state.apiCallsInProgress > 0,
    };
  }, mapDispatchToProps = (dispatch) => {
    return {
      register: bindActionCreators(register, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);