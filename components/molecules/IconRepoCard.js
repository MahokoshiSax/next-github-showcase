import React from 'react'
import { Card ,Icon, Image} from 'semantic-ui-react'
import {number, string, func, shape, arrayOf, date, image} from 'prop-types'

const IconReposCard = ({repos, className }) => {
  return (
     <Card className={className}>
      <Image src='../../asset/image/matthew.png' />
        <Card.Content>
          <Card.Header>
            name
            {/*{`${repos.name}`}*/}
          </Card.Header>
            <Card.Meta>
              id
              {/*<span className='id'>
                {repos.id}
              </span>*/}
            </Card.Meta>
          <Card.Description>
            link
            {/*{repos.description}*/}
          </Card.Description>
        </Card.Content>
         <Card.Content extra>
          <a>
        <Icon name='user' />
        en
          </a>
        </Card.Content>
      </Card>
  )
}

IconReposCard.propTypes = {
  repos: shape({
      id: number,
      name: string,
      Image: image,
  }), 
  className: string, 

}

IconReposCard.defaultProps = { 
  className: '', 
}

export default IconReposCard