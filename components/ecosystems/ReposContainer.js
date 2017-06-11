import React from 'react'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import {withState, compose} from 'recompose'
import {Container} from 'semantic-ui-react'

//import {STATUS} from '../../constants/status'
import withRepos from '../../hocs/withRepos'
import ResultList from '../organisms/ResultList.js'

const ReposContainerWrapper = styled.div`
  padding: 30px 0;
  min-height: 500px;
`

const ReposContainer = () => {
  
  //     switch (reposFetchStatus) {
  //       case STATUS.REQUEST:
  //         return <div>loading...</div>
  //       case STATUS.SUCCESS:
  //       console.log(reposList)
  //         return <ReposList reposList={reposList}/>
  //       case STATUS.FAILURE:
  //         return <div>{reposErrorMessage}</div>
  //       default:
  //         return null
  //     }
  // }

  return (
    <ReposContainerWrapper>
      <Container>
        <ResultList />
      </Container>
    </ReposContainerWrapper>
  )
}

export default ReposContainer
