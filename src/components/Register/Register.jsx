const Register = ({onrouteChange}) => {
    return (
        <article className="br3 ba white-white b--white-90 mv4 w-100 w-90-m w-25-l shadow-5 mw5 center">
         <main className="pa4 white-90">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-200" type="text" name="name"  id="name"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-200" type="text" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input  className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-200" type="password" name="password"  id="password"/>
              </div>
            </fieldset>
            <div className="">
              <input onClick={() => onrouteChange('home')} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib " type="submit" value="Register"/>
            </div>
          </form>
         </main>
        </article>
    )
}
export default Register