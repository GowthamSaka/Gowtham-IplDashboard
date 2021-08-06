// Write your code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getSelectedIplTeam()
  }

  getSelectedIplTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const updateLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
    }
    const updateRecentMatches = recentMatches.map(recentMatch => ({
      id: recentMatch.id,
      competingTeam: recentMatch.competing_team,
      competingTeamLogo: recentMatch.competing_team_logo,
      result: recentMatch.result,
      matchStatus: recentMatch.match_status,
    }))
    this.setState({
      bannerUrl: teamBannerUrl,
      latestMatchDetails: updateLatestMatchDetails,
      recentMatches: updateRecentMatches,
      isLoading: false,
    })
  }

  getTeamBgColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  spinLoader = () => {
    ;<div testid="loader">
      <Loader type="Oval" color="#fff" height={80} width={80} />
    </div>
  }

  getSelectedTeam = () => {
    const {bannerUrl, latestMatchDetails, recentMatches} = this.state
    return (
      <div className="team-head-container">
        <img src={bannerUrl} className="selected-image" alt="team banner" />
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <div className="match-card-container">
          {recentMatches.map(eachRecentMatch => (
            <MatchCard
              eachRecentMatch={eachRecentMatch}
              key={eachRecentMatch.id}
            />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const teamBgColor = this.getTeamBgColor()
    return (
      <div className={`match-bg-container ${teamBgColor}`}>
        {isLoading ? this.spinLoader() : this.getSelectedTeam()}
      </div>
    )
  }
}

export default TeamMatches
