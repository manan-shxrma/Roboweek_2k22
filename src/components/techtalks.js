import React from "react";
import "../css/techtalks.css";

function Services() {
  return (
    <> <div id="techtalks">
      <div className="container mainbodyoftimeline">
        <div
          className="section-heading wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <h6>Tech Talks</h6>
          <h4>
            Learn with <em>Roboweek</em>{" "}
          </h4>
          <div className="line-dec"></div>
        </div>
        <div style={{ paddingTop: "10%" }} className="container">
          <section className="light">
            
              <article className="postcard light blue">
                <a className="postcard__img_link" href="#empty">
                  <img
                    className="postcard__img"
                    src={"assets/images/teck-talk.png"}
                    alt="pic Title"
                  />
                </a>
                <div className="postcard__text t-dark">
                  <h1 className="postcard__title blue">
                    <a href="#empty">AI and quantum computing</a>
                  </h1>
                  <div className="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                      2020
                    </time>
                  </div>
                  <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                  Most of us have heard of AI and quantum computing . But, have you heard of quantum machine learning?
                  Quantum machine learning is the intersection between quantum computing and AI that's going to change what the future looks like.
                  Individually, they're amazing. But together, they're unstoppable .
                  Here's a chance for you to discover more about this realm!
                  Robotics society NITH is Happy to announce, that Dr. Santosh Kumar Nanda , Vice President of Artificial Intelligence and Data Science Services at Techversant, as our stunning speaker for ROBOWEEK 2.0 , who will tell us about Quantum ML, and solve your queries too.
                  </div>
                  <ul className="postcard__tagbox">
                  <li className="tag__item play blue">
                      <a href="#empty">
                        <i className="fas fa-tag mr-2"></i>Register
                      </a>
                    </li>
                    <li className="tag__item play blue">
                      <a href="#empty">
                        <i className="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              {/* NEW <article className="postcard light red">
                <a className="postcard__img_link" href="#empty">
                  <img
                    className="postcard__img"
                    src="https://picsum.photos/501/500"
                    alt="pic Title"
                  />
                </a>
                <div className="postcard__text t-dark">
                  <h1 className="postcard__title red">
                    <a href="#empty">Podcast Title</a>
                  </h1> */}
                  {/* <div className="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                      2020
                    </time>
                  </div> */}
                  {/* NEW <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, fugiat asperiores inventore beatae accusamus odit
                    minima enim, commodi quia, doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul className="postcard__tagbox">
                  <li className="tag__item play red">
                      <a href="#empty">
                        <i className="fas fa-tag mr-2"></i>Register
                      </a>
                    </li>
                    <li className="tag__item play red">
                      <a href="#empty">
                        <i className="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article> */}
              {/* NEW <article className="postcard light green">
                <a className="postcard__img_link" href="#empty">
                  <img
                    className="postcard__img"
                    src="https://picsum.photos/500/501"
                    alt="pic Title"
                  />
                </a>
                <div className="postcard__text t-dark">
                  <h1 className="postcard__title green">
                    <a href="#empty">Podcast Title</a>
                  </h1> */}
                  {/* <div className="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                      2020
                    </time>
                  </div> */}
                  {/* NEW <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, fugiat asperiores inventore beatae accusamus odit
                    minima enim, commodi quia, doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul className="postcard__tagbox">
                  <li className="tag__item play green">
                      <a href="#empty">
                        <i className="fas fa-tag mr-2"></i>Register
                      </a>
                    </li>
                    <li className="tag__item play green">
                      <a href="#empty">
                        <i className="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article> */}
             
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default Services;
