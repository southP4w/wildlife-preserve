import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {MainLayout} from "./layouts/MainLayout.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {PassesPage} from "./pages/PassesPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import PassPage, {passLoader} from "./pages/PassPage.jsx";
import {Login} from './pages/Login.jsx';
import {Creation} from './pages/Creation.jsx'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout/>}>
			<Route index element={<HomePage/>}/>
			<Route path={'/login'} element={<Login/>}/>
			<Route path={'/creation'} element={<Creation/>}/>
			<Route path={'/passes'} element={<PassesPage/>}/>
			<Route path={'/passes/:id'} element={<PassPage/>} loader={passLoader} />
			<Route path={'*'} element={<NotFoundPage/>}/>
		</Route>
	)
);
const App = () => {
	return <RouterProvider router={router}/>
}
export default App