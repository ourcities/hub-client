import React, { PropTypes } from 'react'
import AnalyticsEvents from '../../app/modules/widgets/utils/analytics-events'

export default class TwitterShareButton extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  handleClick() {
    // Optional Query params
    // via: twitter user to associate with the tweet
    // related: additional users related to the tweet comma-separated
    // hashtags: comma-separated list without #

    const { href, text } = this.props

    AnalyticsEvents.socialShared('Twitter', text)

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${href}`,
      'Compartilhar no Twitter',
      'width=800,height=600'
    )
  }

  render() {
    return(
      <button
        ref="button"
        className="btn white h3 p3 col-12 caps h5 rounded"
        onClick={::this.handleClick}
        style={{backgroundColor: '#3DD1F4'}}
      >
        Compartilhar no Twitter
      </button>
    )
  }
}
