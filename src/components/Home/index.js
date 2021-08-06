// Write your code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({blogsData: updateData, isLoading: false})
  }

  getHomePage = () => {
    const {blogsData} = this.state
    return (
      <div className="home-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="team-container">
          {blogsData.map(eachTeam => (
            <TeamCard iplTeams={eachTeam} key={eachTeam.id} />
          ))}
        </div>
      </div>
    )
  }

  spinLoader = () => {
    ;<div testid="loader">
      <Loader type="Oval" color="#00bfff" height={80} width={80} />
    </div>
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-bg-container">
        {isLoading ? this.spinLoader() : this.getHomePage()}
      </div>
    )
  }
}

export default Home
