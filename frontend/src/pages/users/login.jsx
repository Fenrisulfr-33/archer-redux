import { useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { login } from '../../redux/users/userActions';
import { bindActionCreators } from "redux";

const style = {
    btn: 'mt-4 h-10 w-fit font-mono font-bold text-stone-800 bg-stone-300 rounded-xl p-2 shadow-xl shadow-stone-200/50 hover:bg-stone-400 hover:translate-y-0.5 hover:translate-x-0.5',
    navbarIcon: 'items-center justify-center h-10 w-20 mt-4 text-purple-300 bg-gray-600 hover:bg-purple-600 hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer',
};

const LoginPage = ({ user, login, loading }) => {
    const router = useRouter(),
    [error, setError] = useState(null),
    [formData, setFormData] = useState({
        username: '',
        password: ''
    }),
    { username, password } = formData;

    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const userData = {
            username,
            password,
        }
        login(userData);
        router.push('/');
    }

    return (
        <div className='text-center py-40'>
            <section className='font-mono text-gray-200 space-y-4'>
                <h1 className='text-4xl text-extrabold'>Login</h1>
                <p>Create your comp Pokemon teams today!</p>
            </section>
            {error ? error : null}
            {loading ? (<>Loading...</>)
             : (
                <section className='form flex flex-col'>
                <form onSubmit={handleLogin}>
                    <div className='form-group mt-4'>
                        <input 
                            type='text' 
                            className='form-control rounded-md text-center' 
                            id='username'
                            name='username'
                            value={username}
                            placeholder='Enter your username'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            className='form-control rounded-md text-center mt-4' 
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className={style.navbarIcon}>Login</button>
                    </div>
                </form>
            </section>)}
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
      login: bindActionCreators(login, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);