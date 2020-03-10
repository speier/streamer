import { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import videojs from 'video.js'

class TitleBar extends Component {
  render() {
    return (
      <div className="absolute left-0 pt-8 pr-8 flex items-center vjs-title-bar">
        <Link href="/">
          <a>
            <svg className="h-8 w-8 ml-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492">
              <path d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z" />
            </svg>
          </a>
        </Link>
        <p className="ml-8 text-lg text-gray-400">{this.props.title}</p>
      </div>
    )
  }
}

const vjsComponent = videojs.getComponent('Component')

class vjsTitleBar extends vjsComponent {
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
    ReactDOM.render(<TitleBar vjsComponent={this} title={this.options.title} />, this.el())
  }
}

vjsComponent.registerComponent('vjsTitleBar', vjsTitleBar)
