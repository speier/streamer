import { Component } from 'react'
import videojs from 'video.js'
import { loadCastButton } from './vjsCastButton.js'
import './vjsTitleBar'

class Player extends Component {
  componentDidMount() {
    this.options = {
      ...{
        autoplay: true,
        controls: true,
        preload: 'auto',
        fill: true,
        nativeControlsForTouch: false,
        userActions: {
          hotkeys: true
        },
        sources: this.props.sources
      }, ...this.props.options
    }

    // instantiate video.js
    this.player = videojs(this.videoNode, this.options)

    // titlebar
    this.player.addChild('vjsTitleBar', { title: this.props.title })

    // chromecast button
    loadCastButton(this.player.getChild('controlBar'))

    // focus player
    this.player.focus()
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className="video-js vjs-theme-forest" />
      </div>
    )
  }
}

export default Player
