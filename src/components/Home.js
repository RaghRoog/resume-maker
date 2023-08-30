
export default function Home() {

    return(
        <div className="home container">
            <div>
                <h1>Make your Resume</h1>
                <p>
                    With this app you can easily make your resume for free! 
                    Choose your preferred layout, enter your details
                    and download your Resume in pdf format.
                </p>
                <a href="#styleSelection"><button className="btn-primary">Start now!</button></a>
            </div>
            <div className="resume-mockup">
                <div className="top">
                    <div className="img"></div>
                    <div className="info">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="right">
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}