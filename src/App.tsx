import * as React from 'react'
import LaunchList from './components/LaunchList'
import LaunchProfile from './components/LaunchProfile'
import styled from 'styled-components'
import { FaHamburger } from 'react-icons/fa'

const App = () => {
  const [id, setId] = React.useState(42)
  const handleIdChange = React.useCallback((newId) => {
    setId(newId)
  }, [])
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false)

  return (
    <Wrapper>
      <button
        className="btn hamburger"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaHamburger />
      </button>
      <div className="section-title">
        <h1>
          Space <span>X</span>
        </h1>
        <div className="underline"></div>
      </div>
      <LaunchList
        handleIdChange={handleIdChange}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <LaunchProfile id={id} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 4rem;
  padding: 2rem;
  .hamburger {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  .section-title {
    text-align: center;
    span {
      color: purple;
    }
    .underline {
      width: 8rem;
      height: 0.3rem;
      background: red;
      margin: 1rem auto;
    }
  }
`

export default App
