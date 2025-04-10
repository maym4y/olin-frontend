function MeusLaudos() {
    return(
        <div class="meus-laudos">
        <div class="header-tabela">
          <div>
            <h2>Meus Laudos</h2>
            <p>Fulano de Tal</p>
          </div>
          <div class="filtros">
            <input type="text" placeholder="Pesquisar" />
            <select>
              <option>Recentes</option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Data de abertura</th>
              <th>Última atualização</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CÓD: 202310003</td>
              <td>24-02-2017</td>
              <td>24-02-2017</td>
              <td>Foi aberto de um caso</td>
            </tr>
            <tr>
              <td>CÓD: 202310033</td>
              <td>24-02-2017</td>
              <td>24-02-2017</td>
              <td>Foi transferido de outra unidade.</td>
            </tr>
          </tbody>
        </table>
        <button class="ver-mais">Mais...</button>
      </div>
    )
}

export default MeusLaudos;