import Header from '../components/Header'
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const handleClick = () => history.push('/login');
    return (
        <div className="box">
            <form>
                <Header title="Sign up" size={75} family={'Thasadith'} />
                <div className="content">
                    <div>
                        {/* <label>First Name</label>
                        <br/> */}
                        <input type='text' className='input' name='firstname' placeholder="First Name" />
                    </div>
                    <br/>
                    <div>
                        {/* <label>Last Name</label>
                        <br/> */}
                        <input type='text' className='input' name='lastname' placeholder="Last Name" />
                    </div>
                    <br/>
                    <div>
                        {/* <label>User Name</label>
                        <br/> */}
                        <input type='text' className='input' name='username' placeholder="User Name" />
                    </div>
                    <br/>
                    <div>
                        {/* <label>Email</label>
                        <br/> */}
                        <input type='email' className='input' name='email' placeholder="Email" />
                    </div>
                    <br/>
                    <div>
                        {/* <label>Password</label>
                        <br/> */}
                        <input type='password' className='input' name='password' placeholder="Password" />
                    </div>
                </div>
                <br/>
                <button className='btn' style={{width:250}} onClick={handleClick}>Sign up</button>
                <hr/>
            </form>
        </div>
        
    )
}

export default Signup
