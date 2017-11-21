import React from 'react';
import GitHubLogin from '../connect/GitHubLogin';


const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

class LoginForm extends React.Component {
	
	render () {
	  return (

			
	             <GitHubLogin clientId="f49137725fc5870b0104"
				    redirectUri="http://localhost:3000/users/auth/github/callback"
				    onSuccess={onSuccess}
				onFailure={onFailure}/>
	  );
	}


}
export default LoginForm;