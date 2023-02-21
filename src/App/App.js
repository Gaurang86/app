import GlobalStyle, { AppContainer } from './app.style'
import Router from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <AppContainer>
        <GlobalStyle />
        <Router />
      </AppContainer>
    </div>
  )
}

export default App
