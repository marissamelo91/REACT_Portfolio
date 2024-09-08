import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";



function Projects() {
    return (

        <section id="work">
            <div className="section-detail">
                <h2 className="section-title primary-border">Projects</h2>
                <div className="work-container">
                    <div id="main-image" className="item-detail">
                        <a href="https://github.com/marissamelo91/My-Personal-Blog-"> 
                            <img src={project1} alt="Halloween-Blog" />
                            <div className="bottom-left">Halloween Blog</div>
                        </a> 
                    </div>

                    <div className="small-image item-detail">
                         <a href="https://github.com/marissamelo91/Weather-Dashboard-">
                            <img src={project2} alt="Weather-App" />
                            <div className="bottom-left">Weather App</div>
                         </a> 
                    </div>

                    <div className="small-image item-detail">
                        <a href="https://github.com/marissamelo91/Tuesday-Task-Board"> 
                            <img src={project3} alt="Task-Board" />
                            <div className="bottom-left">Task Board</div>
                        </a> 
                    </div>

                    <div className="small-image item-detail">
                       <a href="https://github.com/urie-w/CribQuests">
                            <img src={project4} alt="Real-Estate-Website" />
                            <div className="bottom-left">Real Estate Listings Webpage</div>
                        </a> 
                    </div>

                    <div className="small-image item-detail">
                        <a href="https://marissamelo91.github.io/Marissa-Refactor-One/">
                            <img src={project5} alt="Horieson-Screenshot" />
                            <div className="bottom-left">Horiseon HTML/CSS</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Projects;