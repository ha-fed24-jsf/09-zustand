import ClickerWorker from "./ClickerWorker"
import { useCountStore } from "../data/countStore.js"

const ClickerManager = () => {
	const count = useCountStore(state => state.count)

	return (
		<div>
			<p> Du har klickat: {count} gånger. </p>

			<ClickerWorker />
		</div>
	)
}
export default ClickerManager
