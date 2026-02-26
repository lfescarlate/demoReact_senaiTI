import Header from './components/Header'
import Card from './components/Card'
import imagemAspectos from './assets/miucha1.jpeg'
import imagemGestao from './assets/dummy.jpeg'
import imageGit from './assets/chayaneKarl.jpeg'
import imageDocker from './assets/miucha2.jpeg'
import Cardteste from './components/Cardteste'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    
    <div className="Header">
      <Header />
      <Cardteste />  
      <main className="card-container">
        <div>
          <Card
            title="ASPECTOSos éticos e legais da comunicação"
            description="
            Incluir a ética no mundo digital, como podemos perceber, é uma prática muito importante para que seja possível utilizar a internet com segurança e responsabilidade, porém a prática não é tão simples quanto parece.
            Os novos softwares inteligentes, algoritmos e outras tecnologias estão revolucionando o mercado e tornando cada vez mais difícil desenhar as linhas que separam o mundo digital do físico."
            buttonText="Aprenda mais sobre" 
            link="https://lfescarlate.github.io/demobootstrap_senaiTI/"
            imageSrc={imagemAspectos}
            // imageSrc="path_to_your_image.jpg" // Optional image prop 
          /> 
        </div>
        <div>
          <Card // CARD DA GESTAO
            title="Gestão de projetos"
            description={
            <>
            Quais são os benefícios desse gerenciamento?
            A gestão de projetos se destaca como uma abordagem estratégica em ambientes comporativos, entregando diversar vantagens que melhoram o sucesso empresarial. A seguir, conheceremos os principais benefícios dessa atuação. <br></br>
            <ul>
              <li>Controle de escopo, custos e prazos;</li>
              <li>Seleção e aquisição de recursos, como sistema de gestão de projetos;</li>
              <li>Definição clara de responsabilidades;</li>
              <li>Aplicação de metodologias ágeis específicas;</li>
            </ul>
            </>
            }
            buttonText="Aprenda mais sobre" 
            link="https://lfescarlate.github.io/demobootstrap_senaiTI/"
            imageSrc={imagemGestao}
            // imageSrc="path_to_your_image.jpg" // Optional image prop 
          />
        </div>
        <div>
          <Card // CARD DO GITHUB
            title="Github"
            description={
              <>
            O que é GitHub?<br></br>
            <strong>Github</strong> é uma plataforma para gerenciar seu código e criar um ambiente de colaboração entre devs, utilizando o Git como sistema de controle.
            Ela vai facilitar o uso do Git, escondendo alguns detalhes mais complicados de setup. É lá que você provavelmente vai ter seu repositório e usar no dia a dia.
            O sistema web que o GitHub possui permite que você altere arquivos lá mesmo, apesar de não ser muito aconselhado, pois você não terá um editor, um ambiente de desenvolvimento e de testes.
            Para se comunicar com o GitHub e mexer nos seus arquivos do repositório, você pode usar o comando do git e suas diretivas de commit, pull e psuh. 
              </>
            }
            buttonText="Aprenda mais sobre" 
            link="https://lfescarlate.github.io/demobootstrap_senaiTI/"
            imageSrc={imageGit}
            // imageSrc="path_to_your_image.jpg" // Optional image prop 
          />
        </div>
        <div>
          <Card // CARD DO DOCKER
            title="Docker"
            description={
              <>
              "Com o <strong>docker</strong> é possível lidar com os containers como se fossem máquinas virtuais modulares e extremamente lightweight. Além disso, os containers oferecem maior flexibilidade para você criar, implantar, copiar e migrar um container de um ambiente para outro. Isso otimiza as apps na nuvem. "
              </>
            }
            buttonText="Aprenda mais sobre" 
            link="https://lfescarlate.github.io/demobootstrap_senaiTI/"
            imageSrc={imageDocker}
            // imageSrc="path_to_your_image.jpg" // Optional image prop 
          />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App;
