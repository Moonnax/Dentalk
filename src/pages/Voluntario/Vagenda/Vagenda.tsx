import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/logo.png'
import background from '../../assets/home-background.png'
import "./Vagenda.css";

function Vagenda() {
  return (
<body>
    <header>
        <div className="logo">
            <a href="areaVoluntario.html">
                <h1>🦷 DenTalk</h1>
            </a>
        </div>

        <button id="menuToggle" className="menu-toggle">
            <i id="menuIcon" data-lucide="menu"></i>
        </button>

        <nav id="nav">
            <ul className="menu">
                <li><a className="menu-item" href="../areaVoluntario.html">Início</a></li>
                <li><a className="menu-item" href=".\meuspacientes.html">Meus Pacientes</a></li>
                <li><a className="menu-item active" href=".\agenda.html">Agenda</a> </li>
                <li><a className="menu-item" href=".\atendimentos.html">Atendimentos</a> </li>
                <li><a className="menu-item" href=".\prontuarios.html">Prontuários</a></li>
            </ul>
        </nav>

        <a href=".\pags-voluntario\agenda.html" className="bell-icon"><i data-lucide="bell"></i></a>
        <a href="areaVoluntario.html" className="menu-item" id="area-button-v">Voluntário</a>

        <a href="..\index.html" className="logout-icon"><i data-lucide="log-out"></i></a>
    </header>
    
<main className="dashboard_container">
    <div className="layout_grid_fixo">
        
        <section className="coluna_calendario">
            <div className="card_calendario_full">
                
                <div className="header_calendario">
                    <h2>Março 2026</h2>
                    <div className="setas_nav">
                        <a href="#" className="seta_clicavel"><i data-lucide="chevron-left"></i></a>
                        <a href="#" className="seta_clicavel"><i data-lucide="chevron-right"></i></a>
                    </div>
                </div>
                
                <div className="grade_dias_semana">
                    <span>DOM</span><span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span>
                </div>

                <div className="grade_calendario_corpo">
                    <div className="dia_clicavel ">1</div>
                    <div className="dia_clicavel">2</div>
                    <div className="dia_clicavel">3</div>
                    <div className="dia_clicavel dia_marcado">4 <span className="badge_notificacao">2</span></div>
                    <div className="dia_clicavel">5</div>
                    <div className="dia_clicavel">6</div>
                    <div className="dia_clicavel">7</div>
                    
                    <div className="dia_clicavel">8</div>
                    <div className="dia_clicavel dia_marcado">9 <span className="badge_notificacao">5</span></div>
                    <div className="dia_clicavel">10</div>
                    <div className="dia_clicavel">11</div>
                    <div className="dia_clicavel dia_selecionado">12</div>
                    <div className="dia_clicavel">13</div>
                    <div className="dia_clicavel">14</div>

                    <div className="dia_clicavel">15</div>
                    <div className="dia_clicavel">16</div>
                    <div className="dia_clicavel">
                    17 <span className="badge_notificacao">9</span>
                    </div>
                    <div className="dia_clicavel">18</div>
                    <div className="dia_clicavel">19</div>
                    <div className="dia_clicavel">20</div>
                    <div className="dia_clicavel dia_marcado">21 <span className="badge_notificacao">3</span></div>
                    
                    <div className="dia_clicavel">22</div>
                    <div className="dia_clicavel">23</div>
                    <div className="dia_clicavel">24</div>
                    <div className="dia_clicavel">25</div>
                    <div className="dia_clicavel">26</div>
                    <div className="dia_clicavel">27</div>
                    <div className="dia_clicavel">28</div>

                    <div className="dia_clicavel">29</div>
                    <div className="dia_clicavel">30</div>
                    <div className="dia_clicavel">31</div>
                    <div className="dia_fora">1</div>
                    <div className="dia_fora">2</div>
                    <div className="dia_fora">3</div>
                    <div className="dia_fora">4</div>
                </div>

            </div>
        </section>

        <aside className="coluna_detalhes_agenda">
            
            <div className="card_info_paciente">
                <h3>Informações do Paciente</h3>
                <p className="instrucao_topo">Selecione uma consulta na lista abaixo ou no calendário para ver as informações</p>
                
                <div className="bloco_detalhe">
                    <div className="barra_vertical"></div>
                    <div className="conteudo_texto">
                        <p className="nome_destaque">Carlos Vicente <span className="id_consulta">ID Consulta: 1234</span></p>
                        <p><span className="label_item">CPF:</span> 123.456.789-00</p>
                        <p><span className="label_item">Endereço:</span> Rua das F, 123 - São Paulo SP</p>
                        <p><span className="label_item">Laudo:</span> Cárie e dor no dente</p>
                        <p><span className="label_item">Observações:</span> Necessário tratamento de cáries profundas</p>
                        <p><span className="label_item">Antecedentes:</span> Histórico de problemas dentários</p>
                    </div>
                </div>
                
                <div className="acoes_agenda">
                    <p className="btn_fake_amarelo">Concluir</p>
                    <p className="btn_fake_cinza">Remarcar</p>
                </div>
                <p className="aviso_footer">Remarcações são permitidas somente com 7 dias de antecedência</p>
            </div>

            <div className="card_lista_horarios">
                <h3>Próximas Consultas - Quinta-Feira, 12 de Março</h3>
                <div className="lista_vertical">
                    <div className="slot_hora">09:00 - João Souza</div>
                    <div className="slot_hora">10:30 - Ana Almeida</div>
                    <div className="slot_hora selecionado">14:00 - Carlos Vicente</div>
                    <div className="slot_hora">15:30 - Maria Lima</div>
                </div>
            </div>

        </aside>

    </div>
</main>
    
    <footer className="footer">
        <h2 className="footer-logo">DenTalk</h2>
        <p className="footer-slogan">"Cada sorriso, uma história"</p>
        <p className="footer-info">
            Projeto institucional desenvolvido por alunos do Centro Universitário
            <a className="fiap-color" href="https://www.fiap.com.br/" target="_blank">FIAP</a>
        </p>
    </footer>

    <script src="js/menuToggle.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>lucide.createIcons();</script>
</body>
</html>
  );
}

export default Vagenda;