import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active_img : 0,
    }
  }
  componentDidMount() {
    this.autoPlay()
  }
  componentWillUnmount() {
    this.pausePlay()
  }
  handlePlay(offset) {
    const {imgData} = this.props
    let activeIndex = this.state.active_img
    let numberOfImgs = imgData.length
    let i = (activeIndex + numberOfImgs + offset) % numberOfImgs
    this.setState({
      active_img: i
    })
  }
  autoPlay() {
    // console.log('自动轮播')
    this.autoPlayFlag = setInterval(() => this.handlePlayNext(),4000)
  }
  pausePlay() {
    // console.log('暂停轮播')
    clearInterval(this.autoPlayFlag);
  }
  handlePlayNext() {
    this.handlePlay(1)
  }
  handlePlayPrev() {
    this.handlePlay(-1)
  }
  handleSwitch(i) {
    this.setState({
      active_img: i
    })
  }
  render() {
    const {imgData} = this.props
    return (
      <div
        className='contents'
        onMouseEnter={() => this.pausePlay()}
        onMouseLeave={() => this.autoPlay()}
        >
        <div className='slide-container'>
          <div className="slide-images">
            {
              imgData.map((item, i) => (
                <div
                  key={item}
                  className={'img_cont' + (i == this.state.active_img ? ' slide-img-show' :'')}
                  style={{backgroundColor: i == 0 ? '#161616' : '#f6f5f6'}}
                  >
                  <img className='slide-img' src={require('../../assets/' + item)} />
                </div>
              ))
            }
            <button
              onClick={() => this.handlePlayNext()}
              className="slide-button slide-button-left vertical-center">></button>
            <button
              onClick={() => this.handlePlayPrev()}
              className="slide-button slide-button-right vertical-center">></button>
          </div>
          <div className="slide-indicators">
            {
              imgData.map((item, i) => (
                <span key={i} onClick={() => this.handleSwitch(i)}>
                  <div className={"slide-indicator" +(i == this.state.active_img ? " slide-indicator-show" : "")  }></div>
                </span>
              ))
            }
          </div>
        </div>
      </div>

    )
  }
}
Slider.propTypes = {
  imgData: PropTypes.array.isRequired,
}
Slider.defaultProps = {

}
export default Slider
