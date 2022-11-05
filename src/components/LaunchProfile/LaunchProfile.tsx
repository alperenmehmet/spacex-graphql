import * as React from 'react'
import styled from 'styled-components'
import { LaunchProfileQuery } from '../../generated/graphql'

interface Props {
  data: LaunchProfileQuery
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>
  }

  return (
    <Wrapper>
      <div className="info">
        <div>
          <span>Flight {data.launch.flight_number}: </span>
          {data.launch.launch_success ? (
            <span>Success</span>
          ) : (
            <span>Failed</span>
          )}
        </div>
        <h1>
          {data.launch.mission_name}
          {data.launch.rocket &&
            ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
        </h1>
        <p>{data.launch.details}</p>
      </div>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className="gallery">
          {data.launch.links.flickr_images.map((image, i) =>
            image ? (
              <img
                src={image}
                key={image}
                alt={`${data.launch?.mission_name} ${i}`}
              />
            ) : null
          )}
        </div>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  .gallery {
    display: grid;
    gap: 1rem;

    img {
      border-radius: 10px;
    }
  }
`

export default LaunchProfile
