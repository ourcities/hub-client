import React, { Component } from 'react'

import * as paths from '~client/paths'
import { BrowsableList, BrowsableListItem } from '~client/components/navigation/browsable-list'
import { Loading } from '~client/components/await'
import { PageTabLayout } from '~client/mobilizations/components'

class TemplatesChoosePage extends Component {

  render () {
    const {
      mobilization,
      loading,
      customTemplatesLength,
      globalTemplates,
      createMobilizationFromTemplate,
      location
    } = this.props

    if (loading) return <Loading />
    
    return (
      <PageTabLayout {...{ location }}>
        <div className='choose-menu-page col-12'>
          <h3 className='h1 mt0 mb3 center'>Como você deseja começar?</h3>
          <BrowsableList>
            {globalTemplates && globalTemplates.map(template => (
              <BrowsableListItem
                key={`index-${template.id}`}
                leftIcon={template.goal}
                title={template.name}
                onClick={() => {
                  createMobilizationFromTemplate({ mobilization, template })
                }}
              />
            ))}
            <BrowsableListItem
              leftIcon='columns'
              title='Meus templates'
              subtitle={customTemplatesLength}
              path={paths.mobilizationTemplatesChooseCustomList(mobilization)}
            />
          </BrowsableList>
        </div>
      </PageTabLayout>
    )
  }
}

export default TemplatesChoosePage
