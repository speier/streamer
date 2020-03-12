import ReactDOM from 'react-dom'
import Head from 'next/head'
import videojs from 'video.js'

function CastButton() {
  return (
    <div>
      <Head>
        <script src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
      </Head>
      <button className="bg-transparent w-6 h-6 ml-2">
        <google-cast-launcher class="vjs-cast-button" />
      </button>
    </div>
  )
}

const vjsComponent = videojs.getComponent('Component')

class vjsCastButton extends vjsComponent {
  constructor(player, options) {
    super(player, options)
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

export function loadCastButton(controlBar) {
  window['__onGCastApiAvailable'] = isAvailable => {
    if (isAvailable) {
      cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
      })
      controlBar.addChild('vjsCastButton')
    }
  }
}
