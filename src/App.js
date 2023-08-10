
import React from 'react';
import './index.css';
import { Link } from 'react-scroll';
import Contact from './contact';
import Footer from './footer';


function App() {
  return (
    <><div id='header'><nav className="navbar navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src="../wp_logo.png" alt="" width="220" height="50" className="d-inline-block align-text-top" style={{ marginLeft: '50px' }} />
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="home" smooth={true} offset={-70} duration={200}>
              <button type="button" className="btn btn-primary btn-lg btn-transparent" style={{ marginRight: '10px' }}>Home</button>
            </Link>
            <Link to="about" smooth={true} offset={-70} duration={200}>
              <button type="button" className="btn btn-primary btn-lg btn-transparent" style={{ marginRight: '10px' }}>About Me</button>
            </Link>
            <Link to="service" smooth={true} offset={-70} duration={200}>
              <button type="button" className="btn btn-primary btn-lg btn-transparent" style={{ marginRight: '10px' }}>My Service</button>
            </Link>
            <Link to="contact" smooth={true} offset={-70} duration={200}>
              <button type="button" className="btn btn-danger btn-lg" style={{ marginRight: '50px', color: '#F5F5DC' }}>Contact Me</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
      <div id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="../wp-profile.png" alt="" width="400" height="500" className="d-inline-block align-text-top" style={{ marginTop: '50px' }} />
            </div>
            <div className="col-md-6">
              <div className="about-content" style={{ color: '#8B4513' }}>
                <h2 className="sub-title">Theodorus Christian Siringo Ringo</h2>
                <h5>
                  Frontend Developer,
                </h5>
                I have knowledge in web development and web design, I can produce good web development and web design out of my skills.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='about'>
        <div className="container">
          <h1 className="text-center" style={{ marginTop: '120px', color: '#8B4513' }}><b>About Me</b></h1>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="../about.png"
                alt="about"
                width="800"
                height="700"
                className="d-inline-block align-text-top mx-auto my-4 image-with-shadow"
                style={{ maxWidth: '100%' }}
              />
            </div>
            <div class="col-md-6" style={{ color: '#8B4513' }}>
              <p>Graduating from SMA Negeri 85 Jakarta Barat, with a major in Mathematics and Natural Sciences, I am passionate about becoming a programmer. As a student, I have always been enthusiastic about learning various subjects at school. Beyond the classroom, I've extended my knowledge by exploring external topics such as Multi-Platform App Development with Flutter, utilizing the power of Google's programming language. Additionally, I've delved into Machine Learning and even crafted websites using HTML, CSS, and JavaScript programming languages through Dicoding.com.</p>
              <p>I also had the opportunity to gain practical experience as a Content Writer. I worked at harianhaluan.com for 6 months, where I honed my skills in creating engaging and informative articles. In this role, I crafted articles that covered a diverse range of topics, ensuring high-quality content that resonated with readers. This experience allowed me to further refine my writing abilities, tailor content to specific target audiences, and enhance my understanding of effective communication strategies.</p>
              <p>Furthermore, I have proficiency in React.js, Node.js, and Bootstrap, enabling me to develop dynamic and responsive web applications. My skills aren't limited to coding; I possess graphic design abilities that allow me to create compelling visuals, including labels and images. For web design, I'm proficient in using Figma, a versatile tool that aids in creating stunning website designs.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='service'>
        <div className="container">
          <h1 className="text-center" style={{ marginTop: '80px', color: '#8B4513' }}><b>My Service</b></h1>
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="card shadow" style={{ marginTop: '60px' }}>
                <img src="../web.png" className="card-img-top" alt="web" />
                <div className="card-body">
                  <h4 className="text-center" style={{ color: '#8B4513' }}><strong>Web Development</strong></h4>
                  <p className="text-center" style={{ color: '#8B4513' }}>I have specialize in build dynamic and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I can also use ReactJS, NodeJs, and Bootstrap to build the web. Whether it's a personal portfolio, e-commerce site, or corporate website.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow" style={{ marginTop: '60px' }}>
                <img src="../ui.png" className="card-img-top" alt="ui" />
                <div className="card-body">
                  <h4 className="text-center" style={{ color: '#8B4513' }}><strong>UI/UX Design</strong></h4>
                  <p className="text-center" style={{ color: '#8B4513' }}> I can create intuitive user interfaces and engaging user experiences. From wireframing to prototyping, I can bring ideas to life with modern and appealing designs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow" style={{ marginTop: '60px' }}>
                <img src="../writer.png" className="card-img-top" alt="writer" />
                <div className="card-body">
                  <h4 className="text-center" style={{ color: '#8B4513' }}><strong>Content Writer</strong></h4>
                  <p className="text-center" style={{ color: '#8B4513' }}>As a skilled content writer, I can create compelling articles, blog posts, social media content, and more. My writing is tailored to target audience, and I'm proficient in crafting content that informs, entertains, and converts readers into customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
