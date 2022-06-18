import { Link, useLocation } from 'react-router-dom'

function NoMatch() {
	const location = useLocation()
  
	return (
		<div>
			<h3>
				No match for <b>{ location.pathname }</b>
			</h3>
			<span>
				Return to <Link to={'/'}>Home</Link>
			</span>
		</div>
	)
}

export default NoMatch
