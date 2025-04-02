import ProntoCounter from "./ProntoCounter"
import { useCountStore } from "../data/countStore.js"

const Pronto = () => {
	const count = useCountStore(state => state.prontoCount)

	return (
		<div className="pronto framed">
			<h2> Passersystemet Pronto </h2>
			<p> Det finns {count} personer i lokalen. </p>
			<ProntoCounter entrance={'Ingång A'} />
			<ProntoCounter entrance={'Ingång B'} />
			<ProntoCounter entrance={'Ingång C'} />
		</div>
	)
}
export default Pronto
