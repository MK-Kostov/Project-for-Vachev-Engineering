export const Main = () => {
  return (
    <div className="agency">
      <div className="main-section">
        <section className="first">
          <img src="./images/video.png" alt="pic" />
        </section>
        <div className="second">
          <section className="first-info">
            <div className="info">
              <img className="info-img" src="./images/brief.png" alt="pic" />
            </div>
            <div className="first-info-brief">
              <h3>Brief</h3>
              <p>
                Complete <span>brief writing or simple guidance</span> on what
                to include,we've got you covered.
              </p>
            </div>
          </section>
          <section className="second-info">
            <div className="info">
              <img className="info-img-2" src="./images/search.jpg" alt="pic" />
            </div>
            <div className="second-info-search">
              <h3>Search</h3>
              <p>
                In-depth agency search covering; <span>criteria matching</span>, door knocking and due-diligence
                vetting.
              </p>
            </div>
          </section>
          <section className="third-info">
            <div className="info">
              <img className="info-img-3" src="./images/pitch.png" alt="pic" />
            </div>
            <div className="third-info-pitch">
              <h3> Pitch</h3>
              <p>
                Comprehensive <span>pitch management</span>, including comms,
                diary management and pitch hosting
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
