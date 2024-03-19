import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faMedium, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const AboutPage = () => {
const tattooImages = ["tat-1.jpg", "tat-2.jpg", "tat-3.jpg", "tat-4.jpg", "tat-5.jpg"]
const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simulate a delay for loading
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(delay);
      }, []); 


  return (
    <div className="about-container">
      <header className="about-header">
        <h1>ABOUT SOLISPHERE</h1>
        <section className="about-caption">
        <p>Curated by artist Daniel Nelson. SOLISPHERE is more than a gallery; it's a curated space that transcends artistic boundaries. It's a digital sanctuary and a source of light for individuals seeking a fresh start and meaningful connections through art and technology.</p>
        </section>
      </header>

      <section className="about-row-1">
        <section className="introduction">
        <h2>THE FACE</h2>
        <img src="/images/portrait.JPG" alt="desc"/>
        <p>
          Hey, I'm Daniel Nelson, an artist whose creative journey traverses the realms of fine arts, graphic design, and software engineering. With a foundation nurtured at the Parsons School of Art & Design and honed during the Software Engineering Fellowship at The Marcy Lab School, my approach seamlessly bridges aesthetics and functionality that portrays the beauty found in introspection, navigating the complexities of morality, existence, and the pursuit of personal wholeness.
        </p>
        </section>
        <section className="philosophy-inspiration-container">
            <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <section className="artistic-philosophy">
        <h2>Creative Philosophy</h2>
        <p>
        Embodied in the philosophy of the 'solo,' SOLISPHERE beckons as a beacon of introspection and illumination. Each piece within the collection unravels the intricacies of the human experience, drawing inspiration from luminaries such as Fyodor Dostoevsky, Friedrich Nietzsche, Albert Camus, Arthur Schopenhauer, and Miyamoto Musashi. This artistic exploration transcends philosophical concepts, intertwining with personal experiences and cultural influences. Every creation mirrors a profound journey through the absurd, celebrating individualism, and harnessing the transformative power inherent in personal narratives.
        </p>
        <p>Utilizing a palette of diverse mediums and innovative techniques, my creations range from immersive websites to poignant multimedia paintings and drawings. The fusion of fine arts, graphic design, and technology, exemplified in projects like SAP (FORTHESOUL), 2022, underscores my unwavering commitment to pushing the boundaries of creative expression. SOLISPHERE, in its essence, aspires to resonate with you on a personal level, sparking introspection and inviting exploration along the transformative path through darkness. Your unique interpretation and engagement with my work breathe life and depth into its meaning.        </p> 
        
        
        <section className="skills-container">
  <div className='skills-header'>
  <h2>Skills</h2>
  <p>*Skills extend beyond the showcased</p>
  </div>
  <div className="skills-list">
    <div className="skill-category">
      <p>Project Management</p>
      <p>UI/UX Design</p>
      <p>Agile Development</p>
      <p>Visual Arts</p>
      <p>Full-Stack Development</p>
      <p>Object-Oriented Programming</p>
      <p>Application Programming Interfaces</p>
      <p>Graphic Design</p>
      <p>Wireframing</p>
      <p>Computer-Aided Design</p>
      <p>Client Relations</p>
      <p>Problem Solving</p>
      <p>Attention to Detail</p>
      <p>Collaborative Leadership</p>
    </div>
  </div>
</section>

      </section>
      </section>
      
      </section>
      <section className="about-row-2">
        <section className="beyond-the-canvas-image-container">
        <div className="beyond-column">
        <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <h2>Beyond the Canvas</h2>
        <p>
        My journey extends beyond static canvases and intricate sculptures, propelled by a passion for creating impactful software like Second Wind and CareerSpring's Interest Finder feature. There exists a profound belief that software has the power to peer into the depths of problems, and illuminate these challenges by providing tangible solutions to real-world problems that plague society.
        </p>
        <p>This commitment stems from a deep-seated belief in the potential of technology to strengthen personal journeys and foster growth within each individual. Software, in its essence, becomes a guiding light, offering solutions that navigate the complexities of existence. It is an unwavering pursuit to peer into the darkness, understanding problems at their core, and crafting solutions that resonate with the human experience. In each line of code and every project undertaken, the goal remains clear - to contribute meaningfully to the betterment of society, providing tools that empower individuals to navigate their paths with courage, resilience, and a renewed sense of purpose. This vision, harmonizing with the overarching themes of SOLISPHERE, envisions a future where technology becomes a transformative force, shedding light on the darkest corners of our collective journey.</p>
        </div>
        <div className='image-with-description-container'>
        <div className="image-with-description">
        <a href="https://second-wind-udn3.onrender.com/landing" target="_blank">
        <img src="/images/secondwind.jpg" alt="desc"/>
        <p>
        Second Wind, a full stack online community-based platform that provide resources, support, and employment for those impacted by the criminal justice system. As a project manager and backend engineer for Second Wind, I orchestrated a space that provides resources, support, and employment for those impacted by the criminal justice system. I leveraged Express, Node,js, SQL, Postgres, Postman, Knex.js to develop models, controllers, and routes for all tables in the database to enable seamless CRUD functionality for all requests in the database.        </p>
        </a>
        </div>
        <div className="image-with-description">
        <a href="https://careerassess.mysites.io/?page_id=2" target="_blank">
        <img src="/images/careerspring.jpg" alt="desc"/>
        <p className="image-text-2">As a Developer Contractor, I’ve been instrumental in developing software like CareerSpring’s Career Interest Profiler by leveraging JavaScript, HTML & CSS. This custom career assessment tool seamlessly integrated into WordPress serves as a beacon for individuals exploring their professional paths. Through meticulous design, wireframing, and technical implementation, I created a tool that not only enhances user experience but aligns with long-term organizational goals. This tool, part of CareerSpring, serves as a beacon, guiding individuals towards careers that align with their interests.
        </p>
        </a>
        </div>
        <div className="image-with-description">
        <img src="/images/SAP.JPG" alt="desc"/>
        <p className="image-text-3">  Crafted during my sophomore year at Parsons School of Design, SAP (FORTHESOUL), 2021, represents a convergence of 3D modeling with AutoCAD, incorporating components such as a PIR motion sensor, DFPlayer, SD card, jumper wires, and Arduino Uno. Within the intricate model, the sculpture delivers a spoken narrative drawn from a fusion of written words by Jean-Paul Sartre, Albert Camus, and my own alterations through text-to-speech software.
         It's a deep exploration of the absurd, individualism, and the transformative potential embedded in personal journeys.</p>
        </div>
        </div>
       
        </section>
       
      </section>
    
      <section className="about-row-3">
      <section className="upcoming-projects">
        <div className="upcoming-projects-text-section">
        <h2>Upcoming Projects</h2>
        <p>*Not limited to the showcased</p>
        </div>
        <div className="image-with-description">
      <video autoPlay muted width="auto" loop >
            <source src='/videos/heartinchrome.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      <div className='chrome-text'>
      <p>A cyberpunk odyssey unfolds in "Heart in Chrome," a graphic novel currently in the throes of creation. Set against the backdrop of Neo York 2063, the narrative follows artist Luke Kane's journey for redemption as his acclaimed masterpieces are pilfered by rogue agents under the orchestrations of CEO Viktor Blackwood. In this high-stakes cyberpunk thriller, the lines blur between ally and adversary, exploring the sinister nexus of art, identity, and power.</p>
      </div>
    </div>
    <div className="image-with-description">
    <div className="tattoo-text">
    <p>Beyond the realms of traditional art, I'm venturing into the world of tattooing, specializing in traditional black and grey styles. As my journey unfolds, I aspire to master diverse areas, including color realism and more. This new chapter adds another layer to my creative odyssey, exploring different ways to connect art with personal experiences and cultural influences.</p>
    </div>
    <div className="tattoo-mini-gallery">
      <div className='image-column-1'>
      <img src = {`images/${tattooImages[0]}`} alt= {"tat-0"} />
      </div>
      <div className='image-column-2'>
      <img src = {`images/${tattooImages[4]}`} alt= {"tat-4"} />
      <img src = {`images/${tattooImages[3]}`} alt= {"tat-3"} />
      </div>  
    </div>
    </div>
      </section>
      </section>

      <section className="contact-container">
        <div className='contact-img'>
          <video className="contact-image" autoPlay muted width="auto" loop >
            <source src='/videos/skull.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className='contact-information-container'>
        <section className="rect-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
        <h2>Contact Information</h2>
        <p>
          Connect with me on social media, explore my portfolio, or reach out via email. I'd love to hear your thoughts and insights.
        </p>
        <p>
         <a href="mailto:your.email@example.com">lukannelson@gmail.com</a>
        </p>
        <div className="social-media-row">
                <div className="social-media-links">
                    <a href="https://www.instagram.com/dan.da.solo/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://github.com/danielnelson37" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://medium.com/@lukannelson" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/dnelson777" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
            </div>
           
      </section>
    </div>
  );
};

export default AboutPage;
