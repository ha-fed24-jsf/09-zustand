import { useCountStore } from '../data/countStore.js'

const ClickerWorker = () => {
	const increase = useCountStore(state => state.increase)

	return (
		<section>
			<button onClick={increase}> Öka med 1 </button>
		</section>
	)
}

export default ClickerWorker
