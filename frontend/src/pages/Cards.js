function Cards() {
    return (
        <div className="cards-section">
            <div className="card">
                <div className="card-image">
                    <img src="/surgeries.png" alt="Card 1" height="100%" width="100%" />
                </div>
                <div className="card-text">
                    <h3>Card Title 1</h3>
                    <p>Card content goes here.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src="/video_consulation.png" alt="Card 2" height="100%" width="100%" />
                </div>
                <div className="card-text">
                    <h3>Card Title 2</h3>
                    <p>Card content goes here.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src="/find_doctors.png" alt="Card 3" height="100%" width="100%" />
                </div>
                <div className="card-text">
                    <h3>Card Title 3</h3>
                    <p>Card content goes here.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;