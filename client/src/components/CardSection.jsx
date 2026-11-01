import "./CardSection.css";

const categories = [
    {
        id: 1,
        name: "DIWALI LIGHTS",
        description: "String & curtain lights",
        image:
            "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=80",
    },
    {
        id: 2,
        name: "DIYAS & LAMPS",
        description: "Decorative festive lighting",
        image:
            "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=700&q=80",
    },
    {
        id: 3,
        name: "HOME DECOR",
        description: "Hangings & accents",
        image:
            "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=700&q=80",
    },
    {
        id: 4,
        name: "FESTIVE GIFTS",
        description: "Gifts for every celebration",
        image:
            "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80",
    },
];

export default function CategorySection() {
    return (
        <section className="category-section" id="categories">
            <div className="category-heading">
                <p className="category-eyebrow">01 / BROWSE</p>
                <h2>Shop by Category</h2>
                <p>
                    Find everything you need to make your
                    Diwali celebration special.
                </p>
            </div>

            <div className="row g-3">
                {categories.map((category) => (
                    <div className="col-6 col-lg-3" key={category.id}>
                        <article className="category-card">
                            <div className="category-image">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    loading="lazy"/>
                            </div>

                            <div className="category-info">
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                                <a href="#products">
                                    Explore category <span>→</span>
                                </a>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </section>
    );
}
