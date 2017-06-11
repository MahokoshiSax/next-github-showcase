import React from 'react'
import {Grid} from 'semantic-ui-react'
import Router from 'next/router'
import styled from 'styled-components'
import IconReposCard from '../molecules/IconRepoCard'
import DescriptionCard from '../molecules/DescriptionCard'

const ResultList = ({reposList}) => {
  const renderListByData = (reposList) => {
    // reposList.map((repos) => {
      return (
        <Grid.Row>
          <Grid.Column width={4}>
            <IconReposCard 
              className="animated FadeInUp"
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <DescriptionCard 
              className="animated FadeInRight"
            />
          </Grid.Column>
        </Grid.Row>
      )
    }
  

  return (
    <Grid padded>
      {renderListByData(reposList)}
    </Grid>
  )
}

export default ResultList
