import { Component } from 'react'
import ReactDOM from 'react-dom'
import videojs from 'video.js'

class CastButton extends Component {
  render() {
    return (
      <button className="bg-transparent w-6 h-6 ml-2">
        <google-cast-launcher class="vjs-cast-button" />
      </button>
    )
  }
}

const vjsComponent = videojs.getComponent('Component')

class vjsCastButton extends vjsComponent {
  constructor(player, options) {
    super(player, options)
    this.options = options
    this.mount = this.mount.bind(this)
    player.ready(() => {
      this.mount()
    })
    this.on('dispose', () => {
      ReactDOM.unmountComponentAtNode(this.el())
    })
  }

  mount() {
    ReactDOM.render(<CastButton vjsComponent={this} />, this.el())
  }
}

vjsComponent.registerComponent('vjsCastButton', vjsCastButton)