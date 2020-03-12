import { Component } from 'react'
import videojs from 'video.js'
import './vjsTitleBar'

let appendCastScript = true
let castAvailable = false

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

    // chromecast
    if (appendCastScript) {
      appendCastScript = false
      window['__onGCastApiAvailable'] = isAvailable => {
        if (isAvailable) {
          cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
          })
          require('./vjsCastButton.js')
          castAvailable = true
          this.player.getChild('controlBar').addChild('vjsCastButton')
        }
      }
      const script = document.createElement('script')
      script.src = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1'
      script.async = true
      document.body.appendChild(script)
    } else if (castAvailable) {
      this.player.getChild('controlBar').addChild('vjsCastButton')
    }

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
