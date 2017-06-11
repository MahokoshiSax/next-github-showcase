import React from 'react'
import { Card } from 'semantic-ui-react'
import {number, string, func, shape, arrayOf} from 'prop-types'

const DescriptionCard = ({repos, className }) => {
  return (
     <Card className={className} fluid>
        <Card.Content>
          <Card.Header>
            Description
          </Card.Header>
        </Card.Content>
         <Card.Content extra>
            <Card.Description>
              fsdfsdfsadasdasdasfdfasd
            {/*{repos.description}*/}
          </Card.Description>
        </Card.Content>
      </Card>
  )
}

DescriptionCard.propTypes = {
  // repos: shape({
  //     id: number,
  //     name: string,
  //     image: Image,
  // }), 
  className: string, 

}

DescriptionCard.defaultProps = { 
  className: '', 
}

export default DescriptionCard