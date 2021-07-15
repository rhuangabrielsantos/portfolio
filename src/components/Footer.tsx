import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
        <div className="contacts">
            <a href="https://github.com/rhuangabrielsantos" title="Github" target="_blanked">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rhuangabrielsantos/" title="Linkedin" target="_blanked">
                <FaLinkedin />
            </a>
            <a href="https://twitter.com/rhuangs_" title="Twitter" target="_blanked">
                <FaTwitter />
            </a>
            <a href="https://codepen.io/rhuangabrielsantos" title="Codepen" target="_blanked">
                <FaCodepen />
            </a>
        </div>
    </footer>
  );
}

export default Footer;