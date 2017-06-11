import React from 'react'
import withPage from '../hocs/withPage'
import ReposContainer from '../components/ecosystems/ReposContainer.js'

class Repos extends React.Component {
  render(){
    return(
      <div>
        <ReposContainer />
      </div>
    )
  }
}

export default withPage('Repos')(Repos)
