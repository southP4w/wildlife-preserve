import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {PassListings} from "../components/PassListings.jsx";

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path='/PassListings'>
				<PassListings/>
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews