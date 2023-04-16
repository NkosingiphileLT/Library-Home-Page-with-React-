import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ul/Highlight";

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="">Libray</span>
                    </h2>
                    <div className="highlighs__wrapper">
                        <Highlight
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title='Easy and quick'
                            para="Get access to the book you purchased online instantly"
                        />
                         <Highlight
                            icon={<FontAwesomeIcon icon="book-open" />}
                            title='10,000+ Booksk'
                            para="Library has books in all your favorate catagories."
                        />
                         <Highlights
                            icon={<FontAwesomeIcon icon="tags" />}
                            title='Affordable'
                            para=" Get your  hands on popular books for as little as $10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;