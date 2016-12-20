import React, { PropTypes } from 'react'
import classnames from 'classnames'
import DocumentMeta from 'react-document-meta'

import { Navbar } from './Navbar'
import { Block } from '../../../scripts/components'


const Mobilization = props => {

  const {
    mobilization: {
      name,
      goal,
      facebook_share_title,
      facebook_share_description,
      facebook_share_image,
      color_scheme,
      header_font,
      body_font,
    },
    blocks,
    widgets,
    editable
  } = props

  const themeClassName = `${color_scheme} ${header_font}-header ${body_font}-body`
  const layoutClassName = editable ? 'flex-auto relative' : 'absolute'

  const visibleBlocks = blocks.filter(block => !editable ? !block.hidden : true)

  return (
    <div className={classnames('flex flex-column', themeClassName, layoutClassName)}>
      <Navbar blocks={blocks} editable={editable} />
      {/* render blocks */}
      <div id='blocks-list' className='flex-auto' style={{overflowY: 'scroll'}}>
        {visibleBlocks.map((block, index) => (
          <Block
            key={'block-' + block.id}
            editable={editable}
            block={block}
            canMoveUp={index !== 0}
            canMoveDown={index !== blocks.length - 1}
            {...props}
          />
        ))}
      </div>
      {/* render document met to show mobilzation */}
      {!editable ? (
        <DocumentMeta
          title={name}
          description={goal}
          meta={{
            name: {
              'viewport': 'width=device-width, initial-scale=1',
              'og:title': facebook_share_title,
              'og:description': facebook_share_description,
              'og:image': facebook_share_image
            }
          }}
        />
      ): null}
    </div>
  )
}

Mobilization.propTypes = {
  editable: PropTypes.bool.isRequired,
  mobilization: PropTypes.object.isRequired,
  blocks: PropTypes.array.isRequired,
  widgets: PropTypes.array.isRequired
}

Mobilization.defaultProps = {
  editable: false,
  blocks: [],
  widgets: []
}

export default Mobilization
