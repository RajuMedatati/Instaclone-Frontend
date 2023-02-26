import React from "react"
import Navbar from "../nav"
import './form.css'
function Form(){
    return(
        <>
         <Navbar/>
         <div className="form-container">
                <form className="form">
                    <section>
                        <input id="file" type="file" />
                    </section>
                    <section className="author-location">
                        <input className="author-location-width" required placeholder="author" />
                        <input className="author-location-width" required placeholder="location" />
                    </section>
                    <section className="author-location">
                        <input id="description" required placeholder="description" />
                    </section>
                    <article id="btn-container">
                        <input id="btn" type="submit" value="Post" />
                    </article>
                </form>
            </div>
        </>
    )
}

export default Form
