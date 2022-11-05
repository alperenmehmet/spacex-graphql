import * as React from 'react'
import { LaunchListQuery } from '../../generated/graphql'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export interface OwnProps {
  handleIdChange: (newId: number) => void
  isSidebarOpen: boolean
  setIsSidebarOpen: any
}

interface Props extends OwnProps {
  data: LaunchListQuery
}

const LaunchList: React.FC<Props> = ({
  data,
  handleIdChange,
  isSidebarOpen,
  setIsSidebarOpen
}) => (
  <Wrapper>
    <div className={`${isSidebarOpen ? 'sidebar show-sidebar ' : 'sidebar'}`}>
      <div className="sidebar-content">
        <button
          className="btn close-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <AiOutlineClose />
        </button>
        <h3>Launches</h3>
        <ol>
          {!!data.launches &&
            data.launches.map(
              (launch, i) =>
                !!launch && (
                  <li
                    key={i}
                    onClick={() => {
                      handleIdChange(launch.flight_number!)
                      setIsSidebarOpen(!isSidebarOpen)
                    }}
                  >
                    {launch.mission_name} ({launch.launch_year})
                  </li>
                )
            )}
        </ol>
      </div>
    </div>
  </Wrapper>
)

const Wrapper = styled.aside`
  color: white;
  .sidebar {
    position: fixed;
    inset: 0;
    transform: translateX(-100%);
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.3s linear;
    overflow: auto;
  }
  .show-sidebar {
    transform: translateX(0);
  }
  .sidebar-content {
    padding: 3rem 2rem;

    ul,
    ol {
      list-style: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .close-btn {
    color: red;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  @media (min-width: 800px) {
    .sidebar {
      width: 300px;
      overflow: auto;
    }
  }
`
export default LaunchList
