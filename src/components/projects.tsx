import CodeIt from "../assets/images/code-it.png";
import ContactForm from "../assets/images/contact-form.png";
import EaglesApi from "../assets/images/eagles-api.png";
import ReactColors from "../assets/images/react-colors.png";
import SmartCredential from "../assets/images/smart-credential.png";
import VueNotes from "../assets/images/vue-notes.png";
import ProjectItem from "./projectItem";

const Projects: React.FC = () => {
    return (
        <div className="Projects">
            <div className="container">
                {/* Row 1 */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">Portfolio</span>{" "}
                            Projects
                        </h1>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row text-center">
                    {/* Project 1 */}
                    <ProjectItem
                        imgSrc={CodeIt}
                        imgAlt={"Code It"}
                        projectDescription={`Code It is a custom code and markdown editor that allows a user to run JavaScript in the browser. Users can import npm packages to be used in their code. Users can also create their own React components. Code cells are cumulative and variables that are set in upper cells can be used in cells lower on the page.`}
                        title={"Code It"}
                        viewCode={"https://github.com/ksentak/code-it"}
                        viewSite={"https://code-it-01.netlify.app/"}
                    />

                    {/* Project 2 */}
                    <ProjectItem
                        imgSrc={EaglesApi}
                        imgAlt={"Eagles API"}
                        projectDescription={`Eagles API is a custom built user interface for an API that I created. The project was developed with React and Material UI. Users can make different API calls based on their input, and players from the Philadelphia Eagles roster will be displayed. The API itself was created with NestJS and is deployed to an AWS Lambda using serverless. Use README to access API code.`}
                        title={"Eagles API"}
                        viewCode={"https://github.com/ksentak/eagles-api-ui"}
                        viewSite={"https://eagles-api.netlify.app/"}
                    />

                    {/* Project 3 */}
                    <ProjectItem
                        imgSrc={VueNotes}
                        imgAlt={"Vue Notes Project"}
                        projectDescription={`Vue Notes is based off of Google's note-taking app, Keep. Using Vue, Vuex, Vuetify, & Firebase, a user can jot down notes to serve as reminders for later. The application has total CRUD functionality and notes can be colored coded for optimal organization.`}
                        title={"Vue Notes"}
                        viewCode={"https://github.com/ksentak/vue-notes"}
                        viewSite={"https://vue-notes01.netlify.app/"}
                    />

                    {/* Project 4 */}
                    <ProjectItem
                        imgSrc={SmartCredential}
                        imgAlt={"Smart Credential Project"}
                        projectDescription={`Smart Credential is a random password generator that is built with Vue. Input your desired password length (4-20 characters) and select the specific character types you would like to include. Generate your password and copy it to your clipboard to use.`}
                        title={"Smart Credential"}
                        viewCode={"https://github.com/ksentak/smart-credential"}
                        viewSite={"https://smart-credential.netlify.app/"}
                    />

                    {/* Project 5 */}
                    <ProjectItem
                        imgSrc={ContactForm}
                        imgAlt={"React Contact Form"}
                        projectDescription={`React Contact Form is an application that was built to serve as a template to those who want to create a contact form in react without any back-end code.`}
                        title={"React Contact Form"}
                        viewCode={
                            "https://github.com/ksentak/react-contact-form"
                        }
                        viewSite={
                            "https://react-contact-form-bfug5.ondigitalocean.app/"
                        }
                    />

                    {/* Project 6 */}
                    <ProjectItem
                        imgSrc={ReactColors}
                        imgAlt={"React-Colors Project"}
                        projectDescription={`A react application that allows users to view, create, and delete different color palettes. The user can copy any individual color's HEX, RGB, or RGBA code to their clipboard, as well as adjust the shade of each palette.`}
                        title={"React Colors"}
                        viewCode={"https://github.com/ksentak/react-colors"}
                        viewSite={"https://react-colors-01.netlify.com/"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
