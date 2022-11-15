import bgImage from './assets/read_news.jpg'
import logo from './assets/logo.svg'
import arrowRight from './assets/arrow-right.svg'
import send from './assets/send.svg'

import { Container } from './styles'

const App = () => {
  return (
    <Container>
      <div className="container-1">
        <img
          src={logo}
          style={{ maxWidth: 400, maxHeight: 100, marginBottom: '5.625rem' }}
        />

        <div className="container">
          <div>
            <h1>atualize ideias e informações em 5 minutos.</h1>
            <strong>
              tudo que você precisa saber para começar seu dia bem e informado
            </strong>
            <p>
              noticias sobre o universo Rocketseat, e tudo o que precisa para
              começar o dia melhor. perfeito para se preparar para codar ☕
            </p>
          </div>
          <form>
            <label htmlFor="">Insira seu e-mail:</label>

            <div className="container-input">
              <input type="text" placeholder="oi@rocketseat.com" />
              <img src={send} alt="send" />
            </div>
          </form>
          <div className="ler-primeiro">
            deixe-me ler primeiro <img src={arrowRight} alt="arrowRight" />
          </div>
        </div>
      </div>
      <img className="container-2" src={bgImage} alt="" style={{ flex: 1 }} />
    </Container>
  )
}

export default App
