const BackGround = (props) => {
    return (
        <div className="back_ground">
            <img src={props.image} alt="background"></img>
            <div className="landing">
                <h1>Material Kit 2 React</h1>
                <p>Free & Open Source Web UI Kit built over ReactJS & MUI. Join over 1.6 million developers around the world.</p>
            </div>
        </div>
    );
}

export default BackGround;