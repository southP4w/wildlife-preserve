import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../../dev/index.js";
import Creation from "./Creation.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
			<Creation/>
		</DevSupport>
	</React.StrictMode>
)
