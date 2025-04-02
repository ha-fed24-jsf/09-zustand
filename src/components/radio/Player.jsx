import './Player.css'

const Player = () => {

	return (
		<div className="player framed">
			<h2> Välj radiokanal </h2>
			<div className="row">
				<label>
					<input type="radio" />
					P1
				</label>
				<label>
					<input type="radio" />
					P2
				</label>
			</div>
			<p> Du lyssnar på P?. </p>
		</div>
	)
}
export default Player
