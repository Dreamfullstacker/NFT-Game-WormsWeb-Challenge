import "./../../../assets/css/templates/footer-game.scss";
function GameFooter() {
  return (
    <div className="game-footer flex-wrapper">
      <div className="game-footer-left">
        <span className="desktop-only">
          Copyright Ⓒ POLICE or thief Todos los derechos reservados.
        </span>
        <span className="mobile-only">Ⓒ POLICE or thief</span>
      </div>
      <div className="game-footer-right">
        <ul>
          <li>
            <a href="/aviso-legal">Aviso legal</a>
          </li>
          <li>
            <a href="/politica-de-cookies">Política de cookies</a>
          </li>
          <li>
            <a href="/politica-de-privacidad">Política de privacidad</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default GameFooter;
