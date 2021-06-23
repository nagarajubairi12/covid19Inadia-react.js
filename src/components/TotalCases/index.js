import {Component} from 'react'

import './index.css'

class TotalCases extends Component {
  state = {
    totalCases: [],
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const response = await fetch(
      'https://api.covid19india.org/v4/min/data.min.json',
    )

    const fetchedData = await response.json()

    this.setState({totalCases: fetchedData.TT.total})
  }

  render() {
    const {totalCases} = this.state
    const {confirmed, recovered, deceased} = totalCases

    const active = confirmed - deceased - recovered

    return (
      <div className="item-container">
        <div className="item-section">
          <div className="total-cards total-cards0">
            <h1 className="total-heading">Confirmed</h1>
            <img
              alt="confirmed"
              className="confirmed-logo"
              src="https://res.cloudinary.com/dqwbjomp0/image/upload/v1624353848/Screenshot_130_ix5mbo.png"
            />
            <p className="total-number">{confirmed}</p>
          </div>
          <div className="total-cards total-cards1 ">
            <h1 className="total-heading">Active</h1>
            <div className="confirmed-logo">
              <img
                alt="confirmed"
                className="confirmed-logo"
                src="https://res.cloudinary.com/dqwbjomp0/image/upload/v1624355828/Screenshot_130_u6hydh.png"
              />
            </div>
            <p className="total-number">{active}</p>
          </div>
          <div className="total-cards total-cards2 ">
            <h1 className="total-heading">Recovered</h1>
            <div className="confirmed-logo">
              <img
                alt="confirmed"
                className="confirmed-logo"
                src="https://res.cloudinary.com/dqwbjomp0/image/upload/v1624356328/Screenshot_130_jng9qf.png"
              />
            </div>
            <p className="total-number">{recovered}</p>
          </div>
          <div className="total-cards total-cards3 ">
            <h1 className="total-heading">deceased</h1>
            <div className="confirmed-logo">
              <img
                alt="confirmed"
                className="confirmed-logo"
                src="https://res.cloudinary.com/dqwbjomp0/image/upload/v1624356569/Screenshot_130_v1u1dg.png"
              />
            </div>
            <p className="total-number">{deceased}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default TotalCases
