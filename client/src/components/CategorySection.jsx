import "./CategorySection.css";

export default function CategorySection() {
    return (
        <div className="allCategory">
            <div className="sectionOne">
                <span className="badge bg-secondary rounded-circle">01</span>
                <div className="sectionText">
                    <h4>Demo catelogue</h4>
                    <p>Sample products olny</p>
                </div>
            </div>
            <div className="sectionTwo">
                <span className="badge bg-secondary rounded-circle">02</span>
                <div className="sectionText">
                    <h4>Mock inventory</h4>
                    <p>Stock values are samulated</p>
                </div>
            </div>
            <div className="sectionThree">
                <span className="badge bg-secondary rounded-circle">03</span>
                <div className="sectionText">
                    <h4>Test checkout</h4>
                    <p>No live payments</p>
                </div>
            </div>
            <div className="sectionFour">
                <span className="badge bg-secondary rounded-circle">04</span>
                <div className="sectionText">
                    <h4>Portfolio build</h4>
                    <p>Learning project</p>
                </div>
            </div>
        </div>
    )
}