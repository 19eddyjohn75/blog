import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import Logo from './logo.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={Logo}
          alt={`Moinho Digital`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>Luandro</strong> and <strong>Diego</strong> who lives and works in Moinho, quilombola community at the heart of Chapada dos Veadeiros National Park, central Brazil.{' '}
        <a href="https://github.com/moinhodigital">
          Check our projects on Github
        </a>
      </p>
    )
  }
}

export default Bio
