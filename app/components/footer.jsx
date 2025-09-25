import { Link } from "@remix-run/react";
import style from "./css/footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <ul>
        <li>
          <a href="https://www.x.com">
            <img
              className={style.loga}
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/X-Logo-Round-Color.png"
              alt="x"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <img
              className={style.loga}
              src="https://thumbs.dreamstime.com/b/facebook-icon-logo-white-background-editable-vector-illustration-facebook-icon-logo-141051712.jpg"
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <img
              className={style.loga}
              src="https://pngdownload.io/wp-content/uploads/2024/02/YouTube-logo-social-media-video-sharing-transparent-PNG-image-jpg.webp"
              alt="youtube"
            />
          </a>
        </li>
        <li>
          <a href="https://www.telegram.com">
            <img
              className={style.loga}
              src="https://thumbs.dreamstime.com/b/telegram-logo-d-icon-telegram-logo-d-icon-secure-messaging-communication-high-quality-visual-representation-359290475.jpg"
              alt="telegram"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
