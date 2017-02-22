
export default (state, props) => ({

  getMobilization: () => {
    const { list: { currentId, data } } = state.mobilizations
    return data.filter(mob => mob.id === currentId)[0]
  },

  mobilizationsIsLoading: () => {
    return state.mobilizations.list.fetching
  },

  mobilizationsIsLoaded: () => {
    return state.mobilizations.list.isLoaded
  },

  getMobilizationMenuActive: () => {
    return state.mobilizations.list.menuActiveIndex
  },

  getMobilizations: () => {
    const { list: { data } } = state.mobilizations
    return data
  },

  hasMouseOver: (key, id) => {
    const { hover } = state.mobilizations
    if (key in hover) return hover[key] === id
    else return false
  },

  getBlocks: () => {
    const { blocks: { data } } = state.mobilizations
    return data
  },

  blocksIsLoaded: () => {
    return state.mobilizations.blocks.isLoaded
  },

  canMoveUp: () => {
    const { block } = props
    const { blocks: { data } } = state.mobilizations
    return data[0] && data[0].id !== block.id
  },

  canMoveDown: () => {
    const { block } = props
    const { blocks: { data } } = state.mobilizations
    const index = data.length-1
    return data[index] && data[index].id !== block.id
  },

  getUploadProgress: (key) => {
    const { uploader } = state.mobilizations
    return uploader[key]
  },

  getEditing: () => {
    const { edition } = state.mobilizations
    return edition.isEditing ? edition.mode : undefined
  },

  getBlockSaving: () => {
    const { blocks: { saving } } = state.mobilizations
    return saving
  },

  getWidgets: () => {
    const { widgets: { data } } = state.mobilizations
    return data
  },

  widgetsIsLoaded: () => {
    return state.mobilizations.widgets.isLoaded
  },

  widgetsIsLoading: () => {
    return state.mobilizations.widgets.saving
  },

  renderIsLoading: () => {
    const {
      widgets: {
        isLoaded: widgetsIsLoaded,
        fetching: widgetsIsLoading
      },
      blocks: {
        isLoaded: blocksIsLoaded,
        fetching: blocksIsLoading
      }
    } = state.mobilizations

    const isLoaded = blocksIsLoaded && widgetsIsLoaded
    const isntLoading = !blocksIsLoading && !widgetsIsLoading
    return !(isLoaded && isntLoading)
  }
})

export const getTemplate = (state, ownProps) => {
  const { list: { data }, templates: { list: { templateId } } } = state.mobilizations
  return data.filter(mob => mob.id === templateId)[0]
}
