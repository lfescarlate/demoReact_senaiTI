import './Cardteste.css'
function Cardteste(){
    return(
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-tittle">Título</h5>
                <h6 className="card-subtittle">Sub ittulo</h6>
                <p className="card-text">Exemplo de texto para estar dentro do card</p>
                <a href="https://www.netflix.com/br/title/70205012" class="btn btn-primary">Assista Naruto!</a>
        </div>
    </div>
    )
}

export default Cardteste;