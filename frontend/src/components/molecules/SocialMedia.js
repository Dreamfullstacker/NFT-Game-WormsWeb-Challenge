import "assets/css/templates/components/social-media.scss";
function SocialMedia() {
  return (
    <div className="social-media-area">
      <ul>
        <li>
          <a
            href="https://discord.com/invite/spaceworms"
            className="sm-icon discord"
            rel="noreferrer"
          >
            &nbsp;
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/spacewormsnft"
            className="sm-icon twitter"
            rel="noreferrer"
          >
            &nbsp;
          </a>
        </li>
        <li>
          <a
            href="https://t.me/spaceworms"
            className="sm-icon telegram"
            rel="noreferrer"
          >
            &nbsp;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
