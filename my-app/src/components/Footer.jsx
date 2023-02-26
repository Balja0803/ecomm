import MainLogo from "../subcomponent/MainLogo";
import "../style/footer.css";
import GoogleLogo from "../subcomponent/GoogleLogo";
import FbLogo from "../subcomponent/FbLogo";
import WhatsappLogo from "../subcomponent/WhatsappLogo";
export default function Footer() {
  return (
    <div className="footer">
      <div className="electon-logo">
        <MainLogo />
      </div>

      <div className="social-logos">
        <div className="logos">
          <GoogleLogo />
          <FbLogo />
          <WhatsappLogo />
        </div>
        <p>
          © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and Conditions
        </p>
      </div>
    </div>
  );
}
