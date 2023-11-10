const NavBar = ({ setShowPopup, showPopup }) => {
    return (
        <div className="nav">
            <h3>Docket</h3>

            <button onClick={() => setShowPopup(!showPopup)}>
                +
            </button>
        </div>
    )
}

export default NavBar;
