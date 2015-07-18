import React from 'react'

export default class DashboardMenu extends React.Component {
  render(){
    const { user, mobilization } = this.props
    const style = { minWidth: "300px" }
    return(
      <div style={style} className="bg-gray p2 white">
        <div>
          {user.first_name} {user.last_name}
        </div>
        <div>
          <h4 className="silver caps muted">Mobilização</h4>
          {mobilization.name}
          <h4 className="silver caps muted">Construção da página</h4>
          <a href="#/dashboard/new" className="silver caps">+ Conteúdo</a>
        </div>
      </div>
    )
  }
}
