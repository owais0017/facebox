
const Navigation = ({onrouteChange,isSignedin}) => {
    if(isSignedin){
        return (
        <nav  style={{display: 'flex', justifyContent: 'flex-end'} }>
            <p onClick={()=> onrouteChange('signout')} className="f3 line dim white underline pa3 pointer">Sign out</p>
        </nav>  
        )
    } else {
        return (
        <nav  style={{display: 'flex', justifyContent: 'flex-end'} }>
            <p onClick={()=> onrouteChange('signin')} className="f3 line dim white underline pa3 pointer">Sign in</p>
            <p onClick={()=> onrouteChange('register')} className="f3 line dim white underline pa3 pointer">Register</p>
        </nav> 
        ) 
    }
    
}
export default Navigation;