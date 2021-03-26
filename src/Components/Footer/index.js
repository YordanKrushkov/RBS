import { FaRegCopyright, FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import './index.scss';

const Footer = () => {
    return (
        <div id="footer">
            <div>
                <h6> Yordan Krushkov <FaRegCopyright />2021</h6>
            </div>
            <a href="https://github.com/YordanKrushkov/RBS">
                <FaGithub />
                <h6>https://github.com/YordanKrushkov/RBS</h6>
            </a>
            <a href="mailto: rbs.properties21@gmail.com">
                <ImMail4 />
                <h6>rbs.properties21@gmail.com</h6>
            </a>
        </div>
    );
}

export default Footer;