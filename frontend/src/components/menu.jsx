function Menu() {
    return(
        <div class="menu-lateral">
            <h1>OLIN</h1>
            <nav>
                <a class="ativo" href="#">Início</a>
                <a href="#">Casos</a>
                <a href="#">Odonto Banco</a>
                <a href="#">Histórico</a>
                <a href="#">Ajustes</a>
                <a href="#">Usuários</a>
            </nav>
            <div class="perfil">
                <p>Fulano de Tal</p>
                <p>Matrícula: 1234567/89</p>
            </div>
        </div>
    )
}

export default Menu;