import '../../reset.css'
import './Header.css'
import { Link, withRouter, useLocation } from 'react-router-dom'
import { logOut } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import axios from 'axios'

const Header = (props) => {
    const { pathname } = useLocation()

    const logout = async () => {
        try {
            const user = await axios.delete('/auth/logout')
            props.logOut(user.data)
            props.history.push('/')
        }
        catch (err) {
            console.log('err')
        }
    }

    return (
        <div className='header-outer'>
            {pathname === '/main' &&
                <div className='header-inner'>
                    <div>
                        {/* <Link to='/graphs'>
                        <h2 className='link'>Graph</h2>
                    </Link> */}
                        <h2 className='link'>&copy; IBWell</h2>
                    </div>
                    <div>
                        <h2 className='link main-word'>Journal</h2>
                    </div>
                    <div>
                        <button onClick={logout} className='logoutbtn'>Logout</button>
                    </div>
                </div>}
            {/* {pathname === '/graphs' &&
            <div className='header-inner'>
                <div>
                    <Link to='/main'>
                        <h2 className='link'>Journal</h2>
                    </Link>
                </div>
                <div>
                    <Link to='/graphs'>
                        <h2 className='link main-word'>Graph</h2>
                    </Link>
                </div>
                <div>
                    <button onClick={logout} className='logoutbtn'>Logout</button>
                </div>
            </div>} */}
        </div>
    )
}

const mapStateToProps = state => state

export default withRouter(connect(mapStateToProps, { logOut })(Header))