import Button from '../components/Button'
import Header from '../components/Header'
const Login = () => {

    return (
        <form>
        <div className="box">
            
                <Header title=" Log in" size={75} family={'Thasadith'} />
                <div>
                    {/* <label>Username</label>
                    <br/> */}
                    <input type='text' className='input' placeholder="Username"/>
                </div>
                <br/>
                <div>
                    {/* <label>Password</label>
                    <br/> */}
                    <input type='password' className='input' placeholder="Password"/>
                </div>
                <br/>
                <Button text='Log in' width={253} nav='/homepage' />
            
        </div>
        </form>
    )
}

export default Login