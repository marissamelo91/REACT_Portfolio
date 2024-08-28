import project1 from "../images/project1.jpg";
import project2 from "../images/project2.png";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.png";



function Projects() {
    return (

        <section id="work">
            <div className="section-detail">
                <h2 className="section-title primary-border">Work</h2>
                <div className="work-container">
                    <div id="main-image" className="item-detail">
                        <a href="https://www.nasa.gov/ames/">
                            <img src={project1} alt="NASA-Logo" />
                            <div className="bottom-left">NASA</div>
                        </a>
                    </div>

                    <div className="small-image item-detail">
                        <a href="https://en.wikipedia.org/wiki/Haunted_house">
                            <img src={project2} alt="Haunted House" />
                            <div className="bottom-left">Haunted House</div>
                        </a>
                    </div>

                    <div className="small-image item-detail">
                        <a href="https://en.wikipedia.org/wiki/Mancala">
                            <img src={project3} alt="Mancala-Boardgame" />
                            <div className="bottom-left">Mancala</div>
                        </a>
                    </div>

                    <div className="small-image item-detail">
                        <a href="https://www.oracle.com/erp/what-is-erp/">
                            <img src={project4} alt="ERP Software" />
                            <div className="bottom-left">ERP Software</div>
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