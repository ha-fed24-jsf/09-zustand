import Channel from './Channel'
import './Player.css'
import { useCountStore } from '../../data/countStore'

const Player = () => {
	const nowPlaying = useCountStore(state => state.channel)
	return (
		<div className="player framed">
			<h2> Välj radiokanal </h2>
			<div className="row">
				<Channel text="P1" />
				<Channel text="P2" />
				<Channel text="P3" />
				<Channel text="P4" />
			</div>
			<p>
				{nowPlaying ?
				`Du lyssnar på ${nowPlaying}.` :
				'Välj en kanal att lyssna på.' }
			</p>
		</div>
	)
}
export default Player
