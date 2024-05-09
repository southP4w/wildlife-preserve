import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Animals from '../Nons/Animals.jsx'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev/index.js";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <Animals/>
        </DevSupport>
    </React.StrictMode>
)

