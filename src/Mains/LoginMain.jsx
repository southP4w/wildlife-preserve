import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Login from '../Nons/Login.jsx'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev/index.js";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
			<Login/>
		</DevSupport>
	</React.StrictMode>
)

