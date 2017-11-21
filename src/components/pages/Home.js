import React from "react"


class Home extends React.Component{
	constructor(){
		super()

		this.state={
			uid:''
		}
	}

	authenticate(provider) {
		console.log("Github")
	}

	renderLogin(){
		return(
			<div>
				<h1>Home page</h1>
			</div>	
		)
	}

	render() {
		let logoutButton = <button>Log Out</button>
		if(!this.state.uid){
			return(
				<div>{this.renderLogin()}</div>
			)
		}else{
			return(
				<div>{logoutButton}</div>
			)
		}
	}

}



export default Home;