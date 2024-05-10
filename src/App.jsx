import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {MainLayout} from "./layouts/MainLayout.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {PassesPage} from "./pages/PassesPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout/>}>
			<Route index element={<HomePage/>}/>
			<Route path={'/passes'} element={<PassesPage/>}/>
			<Route path={'*'} element={<NotFoundPage/>}/>
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router}/>
}

export default App
