import { Component } from 'react'
import Head from 'next/head'
import videojs from 'video.js'
import './vjsTitleBar'
import './vjsCastButton.js'

class Player extends Component {
  componentDidMount() {
    // instantiate video.js
    this.options = {
      ...{
        autoplay: true,
        controls: true,
        preload: 'auto',
        fill: true,
        userActions: {
          hotkeys: true
        },
        sources: this.props.sources
      }, ...this.props.options
    }
    this.player = videojs(this.videoNode, this.options)
    this.player.addChild('vjsTitleBar', { title: this.props.title })
    this.player.getChild('controlBar').addChild('vjsCastButton')
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
        <Head>
          <script src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
        </Head>
        <video ref={node => (this.videoNode = node)} className="video-js vjs-theme-forest" />
      </div>
    )
  }
}

export default Player
