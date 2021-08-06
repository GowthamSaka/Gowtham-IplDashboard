// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {iplTeams} = this.props
    const {id, name, teamImageUrl} = iplTeams
    return (
      <Link className="ipl-team-link" to={`/team-matches/${id}`}>
        <div className="list-items-container">
          <div className="team-name-card">
            <img src={teamImageUrl} alt={name} className="team-logo" />
            <h1 className="team-name">{name}</h1>
          </div>
        </div>
      </Link>
    )
  }
}

export default TeamCard
