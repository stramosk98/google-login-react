import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [profilePic, setProfilePic] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const responseGoogle = (response) => {
		 console.log(response);
        if (response.error && response.error === "popup_closed_by_user") {
            // Tratar o fechamento da janela pop-up de login
            console.log("Usuário fechou a janela de login");
            // Você pode definir um estado ou fazer qualquer outra ação necessária aqui
            return;
          }
		const {
			profileObj: { name, email, imageUrl },
		} = response;
        // response.profileObj.name;
        // response.profileObj.email;
        // response.profileObj.imgUrl;
		setName(name);
		setEmail(email);
		setProfilePic(imageUrl);
		setIsLoggedIn(true);
	};
	return (
		<div className="container">
			<GoogleLogin
				clientId="SEU_ID_AQUI"
				buttonText="Continuar com o Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
			/>,
			{isLoggedIn ? (
				<div style={{ textAlign: "center" }}>
					<h1>User Information</h1>
					<img className="profile" src={profilePic} alt="Profile" />
					<p>Name: {name}</p>
					<p>Email: {email}</p>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default App;