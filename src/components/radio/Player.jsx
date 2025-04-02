import { useState } from 'react'
import Channel from './Channel'
import './Player.css'

const Player = () => {
	const [nowPlaying, setNowPlaying] = useState('')
	return (
		<div className="player framed">
			<h2> Välj radiokanal </h2>
			<div className="row">
				<Channel text="P1" setChannel={setNowPlaying} />
				<Channel text="P2" setChannel={setNowPlaying} />
				<Channel text="P3" setChannel={setNowPlaying} />
				<Channel text="P4" setChannel={setNowPlaying} />
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
