import { provideHooks } from 'redial'
import { connect } from 'react-redux'

import MobSelectors from '~client/mobrender/redux/selectors'
import { selectMobilization, asyncFetchWidgets, asyncUpdateWidget } from '~client/mobrender/redux/action-creators'
import { asyncWidgetDataExport, dataExportMount } from '~client/mobilizations/widgets/action-creators'

import Page from './page'

const redial = {
  fetch: ({ dispatch, getState, params }) => {
    const selectors = MobSelectors(getState())
    const promises = []

    !selectors.getMobilization() && promises.push(
      dispatch(selectMobilization(params.mobilization_id))
    )
    !selectors.widgetsIsLoaded() && promises.push(
      dispatch(asyncFetchWidgets(params.mobilization_id))
    )
    return Promise.all(promises)
  }
}

const mapStateToProps = (state, props) => {
  const { params: { widget_id } } = props
  const selectors = MobSelectors(state, props)
  return {
    mobilization: selectors.getMobilization(),
    widget: selectors.getWidget(widget_id),
    loading: state.mobilizations.dataExport.loading,
    error: state.mobilizations.dataExport.error,
    success: state.mobilizations.dataExport.success
  }
}

const mapActionsToProps = {
  asyncWidgetUpdate: asyncUpdateWidget,
  asyncWidgetDataExport,
  dataExportMount
}

export default provideHooks(redial)(
  connect(mapStateToProps, mapActionsToProps)(Page)
)
