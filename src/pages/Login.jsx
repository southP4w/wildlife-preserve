import {Password} from "../components/Account/Login/Password.jsx";
import {AutoText} from "../components/Account/Login/AutoText.jsx";
import backgroundImage from '../assets/images/ZooBack.jpg'; // Ensure the path is correctly imported

export const Login = () => {
	return (
		<div style={{
			width: '100vw',
			height: '100vh',
			position: 'relative', // Ensures the image and content are correctly layered
		}}>
			<img src={backgroundImage} alt="Background" style={{
				width: '100%',
				height: '100%',
				objectFit: 'cover', // Ensures the image covers the entire viewport without stretching
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: -1 // Places the image behind the content
			}}/>
			<div style={{
				backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adds a white overlay for readability
				padding: '40px',
				borderRadius: '10px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
				width: '400px', // Manage the width as per content
				position: 'absolute', // Centers the box
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				textAlign: 'center',
				zIndex: 2 // Ensures the form is above the background
			}}>
				<AutoText/>
				<Password/>
			</div>
		</div>
	);
}
