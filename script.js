const App = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Nagendra Baishle</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <header className="jumbotron text-center">
                <img src="1702751899590 (2).jpg" alt="Nagendra Baishle" className="profile-pic" />
                <h1 className="display-4">Nagendra Baishle</h1>
                <p className="lead">Software Developer</p>
                <a href="#contact" className="btn btn-primary btn-lg">Get in Touch</a>
            </header>

            <section id="about" className="container my-5">
                <h2>About Me</h2>
                <p>Highly motivated and dedicated software developer with a strong foundation in programming and a passion for learning and applying new technologies. Seeking a challenging position as a software developer to contribute to the growth and success of a dynamic organization.</p>
            </section>

            <section id="skills" className="container my-5">
                <h2>Skills</h2>
                <ul>
                    <li>Programming Languages: C++, C</li>
                    <li>Web Development: HTML, CSS, JavaScript, React</li>
                    <li>Strong problem-solving and analytical skills</li>
                    <li>Excellent teamwork and communication abilities</li>
                </ul>
            </section>

            <section id="experience" className="container my-5">
                <h2>Experience</h2>
                <h3>Full Stack Development PGDFE Intern - Delhi (07/2023 - 07/2024)</h3>
                <ul>
                    <li>Collaborated with a team of developers to design and implement new features for a web-based CRM system.</li>
                    <li>Assisted in debugging and resolving software issues to improve system performance.</li>
                    <li>Conducted code reviews and provided feedback to enhance code quality and maintainability.</li>
                    <li>Participated in daily stand-up meetings and contributed to agile development processes.</li>
                    <li>Developed a web application using Django framework to facilitate E-Inspection.</li>
                    <li>Implemented user authentication and authorization functionalities.</li>
                    <li>Integrated Dashboard using Ajax for all the data visible at once.</li>
                    <li>Designed responsive front-end using HTML, CSS, and Bootstrap framework.</li>
                </ul>
            </section>

            <section id="contact" className="container my-5">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:nagendrabaishle@gmail.com">nagendrabaishle@gmail.com</a></p>
                <p>Phone: 7610138342</p>
            </section>

            <footer className="text-center py-4">
                &copy; 2024 Nagendra Baishle
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
