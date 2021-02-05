import React from "react";
import "./details.css";
// import "../../App.css";
import CardItem from "../CardItem";
import Footer from "../Footer";

function Details() {
  return (
    <>
      <div className="details">
        <div class="home-content">
          <div class="home-text">
            <h1>Beautiful Bangladesh</h1>
            <p>
              Bangladesh is a land of mystery and intrigue. The country is
              centuries old and while it has seen many visitors over the years,
              it is only now starting to experience a commercial tourism boom.
              In many respects, Bangladesh is a land of opportunity and
              adventure. All you need do is step out and discover its many
              mysteries for yourself.
            </p>
          </div>
          <div class="home-img">
            <img src="../images/img-2.jpg" />
          </div>
        </div>

        <div class="home-content">
          <div class="home-img">
            <img src="../images/img-4.jpg" />
          </div>
          <div class="home-text">
            <h1>Travel in green</h1>
            <p>
              There are so many things to be enjoyed here. Perhaps one of the
              most popular activities is that of sunning yourself on the
              exquisite white sandy beaches of Cox’s Bazaar and Teknaaf. Both
              beaches are situated on the eastern coast of the Bay of Bengal and
              are relatively unspoilt by tourists making them a great place to
              spend vacation time. Another attraction is the many archaeological
              sites in the country. They are interesting from a cultural and
              architectural point of view and can be fascinating to tour.
              Bangladesh’s other attraction is a bit more lively – the Royal
              Bengal Tigers which have become somewhat of a trademark for the
              country. These stunning big cats are somewhat protected in the
              country and are stunning to behold!
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Details;
