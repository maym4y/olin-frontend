function Grafico() {
    return(
        <div class="grafico-casos">
            <div class="header">
                <h2>Casos Periciais</h2>
                <select>
                <option>Mensal</option>
                </select>
            </div>
            <div class="grafico-pizza">
                
                <div class="circulo"></div>
                <ul class="legenda">
                <li><span class="cor vermelho"></span>Em andamento - 10</li>
                <li><span class="cor amarelo"></span>Finalizado - 16</li>
                <li><span class="cor verde"></span>Arquivado - 8</li>
                </ul>
            </div>
        </div>
    )
}

export default Grafico;