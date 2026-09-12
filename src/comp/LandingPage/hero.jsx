import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/sample1.jpg"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Elizabeth Ogunsakin</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:lizabethtozab@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://drive.google.com/file/d/1wXjexl7zgi0nvJzqvT2_yDk3PDH2GYFR/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/Elizabeth-Ogunsakin" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/elizabeth-ogunsakin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/tozabeth" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        
          <p>
    I am Elizabeth Ogunsakin, a graduate of Mathematics from Obafemi Awolowo University, Ile-Ife, Nigeria, with a strong interest in machine learning and artificial intelligence.
    I am passionate about leveraging machine learning to address real-world challenges in healthcare, particularly in developing AI solutions that can support medical decision-making in resource-constrained environments.
</p>

<p>
    My research interests include Deep Learning, Computer Vision, and their applications in healthcare. I am particularly interested in exploring AI-driven approaches for medical imaging, disease detection, and developing reliable and interpretable models that can contribute to improved healthcare outcomes and accessibility.
</p>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;