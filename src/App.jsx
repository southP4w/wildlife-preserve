import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {MainLayout} from "./layouts/MainLayout.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {PassesPage} from "./pages/PassesPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import PassPage, {passLoader} from "./pages/PassPage.jsx";
import {Login} from './pages/Login.jsx';
import {Creation} from './pages/Creation.jsx';
import AnimalsPage from "./pages/AnimalsPage.jsx";
import ContactMain from "./pages/ContactMain.jsx";

const router = createBrowserRouter(
	// List of routes to pages for the site
	createRoutesFromElements(
		<Route path="/" element={<MainLayout/>}>
			<Route index element={<HomePage/>}/>
			<Route path={'/login'} element={<Login/>}/>
			<Route path={'/creation'} element={<Creation/>}/>
			<Route path={'/passes'} element={<PassesPage/>}/>
			<Route path={'/passes/:id'} element={<PassPage/>} loader={passLoader}/>
			<Route path={'/animals'} element={<AnimalsPage/>}/>
			<Route path={'/contact'} element={<ContactMain/>}/>
			<Route path={'*'} element={<NotFoundPage/>}/>	// 404 page
		</Route>
	)
);
const App = () => {
	return <RouterProvider router={router}/>
}
export default App