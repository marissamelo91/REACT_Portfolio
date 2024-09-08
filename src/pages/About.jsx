import girl from "../images/girl.jpg";

function About() {
    return (


        <section id="about-me">
            <div className="section-detail">
            <img src={girl} alt="Girl Avator" />
                <h2 className="section-title primary-border">About Me</h2>
                <p>
                <br/>
                <br/>
                    I'm a first generation American, born and raised in the Bay Area.
                    I graduated from San Jose State University with a major in Business Management.
                    Shortly after, I landed a job at NASA Ames Research Center where I quickly started working
                    on Space and Aircraft Missions. 
                    <br/>
                    <br/>
                    
                    My passion for learning continued to florish,
                    so thats when I made the decision to advance my studies and learn Programming and Web
                    Development.
                    <br/>
                    <br/>
                    In my spare time I love to spend time with my dogs, visiting the beach and trying new resturants.
                    Im also huge into Halloween, scary movies, and anything Super Natural.

                </p>

            </div>
        </section>
    )
}

export default About;