import { AiFillGithub } from "react-icons/ai";

const NavBar = ({ setShowPopup, showPopup }) => {
    return (
        <div className="nav">
            <div>
                <h3>Docket</h3>

                <button onClick={() => setShowPopup(!showPopup)}>
                    +
                </button>
            </div>

            <a href="https://github.com/SudhansuuRanjan/docket" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="github-icon"/>
            </a>
        </div>
    )
}

export default NavBar;
