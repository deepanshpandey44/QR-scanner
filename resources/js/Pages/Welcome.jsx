import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';
import React, { useState, useEffect } from 'react';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
  useEffect(() => {
    var intervalId = window.setInterval(function () {
      // call your function here
      [].slice.call(document.querySelectorAll('.cd-slider')).forEach(function (item) {
        var items = item.querySelectorAll('li'),
          current = 0;

        //create nav
        var nav = document.createElement('nav');
        nav.className = 'nav_arrows';

        //create button prev
        var prevbtn = document.createElement('button');
        prevbtn.className = 'prev';
        prevbtn.setAttribute('aria-label', 'Prev');

        //create button next
        var nextbtn = document.createElement('button');
        nextbtn.className = 'next';
        nextbtn.setAttribute('aria-label', 'Next');

        //create counter
        var counter = document.createElement('div');
        counter.className = 'counter';
        counter.innerHTML = "<span>1</span><span>" + items.length + "</span>";

        if (items.length > 1) {
          nav.appendChild(prevbtn);
          nav.appendChild(counter);
          nav.appendChild(nextbtn);
          item.appendChild(nav);
        }

        items[current].className = "current";
        if (items.length > 1) items[items.length - 1].className = "prev_slide";

        var navigate = function (dir) {
          items[current].className = "";

          if (dir === 'right') {
            current = current < items.length - 1 ? current + 1 : 0;
          } else {
            current = current > 0 ? current - 1 : items.length - 1;
          }

          var nextCurrent = current < items.length - 1 ? current + 1 : 0,
            prevCurrent = current > 0 ? current - 1 : items.length - 1;

          items[current].className = "current";
          items[prevCurrent].className = "prev_slide";
          items[nextCurrent].className = "";

          //update counter
          counter.firstChild.textContent = current + 1;
        }

        window.onload = function (e) {
          setInterval(function () {
            navigate('right');
          }, 6000);
        }

        var sliderIntervel;
        prevbtn.addEventListener('click', function () {
          clearInterval(sliderIntervel);
          navigate('left');
          countdown();
        });
        nextbtn.addEventListener('click', function () {
          clearInterval(sliderIntervel);
          navigate('right');
          countdown();
        });

        function countdown() {
          sliderIntervel = setInterval(function () {
            navigate('right');
          }, 6000);
        }

        //keyboard navigation
        document.addEventListener('keydown', function (ev) {
          var keyCode = ev.keyCode || ev.which;
          switch (keyCode) {
            case 37:
              navigate('left');
              break;
            case 39:
              navigate('right');
              break;
          }
        });

        // swipe navigation
        item.addEventListener('touchstart', handleTouchStart, false);
        item.addEventListener('touchmove', handleTouchMove, false);
        var xDown = null;
        var yDown = null;
        function handleTouchStart(evt) {
          xDown = evt.touches[0].clientX;
          yDown = evt.touches[0].clientY;
        };
        function handleTouchMove(evt) {
          if (!xDown || !yDown) {
            return;
          }

          var xUp = evt.touches[0].clientX;
          var yUp = evt.touches[0].clientY;

          var xDiff = xDown - xUp;
          var yDiff = yDown - yUp;

          if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
              /* left swipe */
              navigate('right');
            } else {
              navigate('left');
            }
          }
          /* reset values */
          xDown = null;
          yDown = null;
        };
      });
      navigate('right');
    }, 3000);
    // clearInterval(intervalId) 

  }, []);
  function init(item) {
    var items = item.querySelectorAll('li'),
      current = 0;

    //create nav
    var nav = document.createElement('nav');
    nav.className = 'nav_arrows';

    //create button prev
    var prevbtn = document.createElement('button');
    prevbtn.className = 'prev';
    prevbtn.setAttribute('aria-label', 'Prev');

    //create button next
    var nextbtn = document.createElement('button');
    nextbtn.className = 'next';
    nextbtn.setAttribute('aria-label', 'Next');

    //create counter
    var counter = document.createElement('div');
    counter.className = 'counter';
    counter.innerHTML = "<span>1</span><span>" + items.length + "</span>";

    if (items.length > 1) {
      nav.appendChild(prevbtn);
      nav.appendChild(counter);
      nav.appendChild(nextbtn);
      item.appendChild(nav);
    }

    items[current].className = "current";
    if (items.length > 1) items[items.length - 1].className = "prev_slide";

    var navigate = function (dir) {
      items[current].className = "";

      if (dir === 'right') {
        current = current < items.length - 1 ? current + 1 : 0;
      } else {
        current = current > 0 ? current - 1 : items.length - 1;
      }

      var nextCurrent = current < items.length - 1 ? current + 1 : 0,
        prevCurrent = current > 0 ? current - 1 : items.length - 1;

      items[current].className = "current";
      items[prevCurrent].className = "prev_slide";
      items[nextCurrent].className = "";

      //update counter
      counter.firstChild.textContent = current + 1;
    }

    window.onload = function (e) {
      setInterval(function () {
        navigate('right');
      }, 6000);
    }

    var sliderIntervel;
    prevbtn.addEventListener('click', function () {
      clearInterval(sliderIntervel);
      navigate('left');
      countdown();
    });
    nextbtn.addEventListener('click', function () {
      clearInterval(sliderIntervel);
      navigate('right');
      countdown();
    });

    function countdown() {
      sliderIntervel = setInterval(function () {
        navigate('right');
      }, 6000);
    }



    //keyboard navigation
    document.addEventListener('keydown', function (ev) {
      var keyCode = ev.keyCode || ev.which;
      switch (keyCode) {
        case 37:
          navigate('left');
          break;
        case 39:
          navigate('right');
          break;
      }
    });

    // swipe navigation
    item.addEventListener('touchstart', handleTouchStart, false);
    item.addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;
    var yDown = null;
    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    };
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
          /* left swipe */
          navigate('right');
        } else {
          navigate('left');
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    };


  }
  return (
    <>
      <UserendLayout>

        <Head title="Welcome" />

        {/* <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
        {auth.user ? (
          <Link
            href={route("dashboard")}
            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href={route("login")}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
              Log in
            </Link>

            <Link
              href={route("register")}
              className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
              Register
            </Link>
          </>
        )}
      </div> */}

        <div className="hero">
          <div className="main">
            <div className="cd-slider">
              <ul id="slideshow">
                <li>
                  <div className="image" style={{ backgroundImage: "url(image/hero/1.jpg)" }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/8.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>To push the limits of
                      camera, lens, tripod and yourself to get
                      beautiful Imagery of{" "}
                      <span>
                        'Landscapes, Architectures &
                        Interiors'
                      </span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/12.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>Easily the Art of shooting
                      stunning fashion images of models and
                      the process of handling{" "}
                      <span>'Fashion Photography'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/19.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Understand</i>The colour theory and
                      much more secret techniques that make{" "}
                      <span>'Food Beautiful'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/23.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Understand</i> The emotional aspects
                      & connection between the subject in
                      making of an{" "}
                      <span>'Abstract / FineArt Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/2.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/13.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>Easily the Art of shooting
                      stunning fashion images of models and
                      the process of handling{" "}
                      <span>'Fashion Photography'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/9.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>To push the limits of
                      camera, lens, tripod and yourself to get
                      beautiful Imagery of{" "}
                      <span>
                        'Landscapes, Architectures &
                        Interiors'
                      </span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/18.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Understand</i>The colour theory and
                      much more secret techniques that make{" "}
                      <span>'Food Beautiful'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/3.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/21.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Understand</i>The emotional aspects &
                      connection between the subject in making
                      of an{" "}
                      <span>'Abstract / FineArt Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/5.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/11.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>To push the limits of
                      camera, lens, tripod and yourself to get
                      beautiful Imagery of{" "}
                      <span>
                        'Landscapes, Architectures &
                        Interiors'
                      </span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/16.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>Easily the Art of shooting
                      stunning fashion images of models and
                      the process of handling{" "}
                      <span>'Fashion Photography'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/4.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/20.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/14.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>Easily the Art of shooting
                      stunning fashion images of models and
                      the process of handling{" "}
                      <span>'Fashion Photography'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/10.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>To push the limits of
                      camera, lens, tripod and yourself to get
                      beautiful Imagery of{" "}
                      <span>
                        'Landscapes, Architectures &
                        Interiors'
                      </span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/17.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>Easily the Art of shooting
                      stunning fashion images of models and
                      the process of handling{" "}
                      <span>'Fashion Photography'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/7.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/22.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Understand</i>The emotional aspects &
                      connection between the subject in making
                      of an{" "}
                      <span>'Abstract / FineArt Image'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/15.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>Easily the Art of shooting
                      stunning fashion images of models and
                      the process of handling{" "}
                      <span>'Fashion Photography'</span>
                    </h2>
                  </div>
                </li>
                <li>
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(image/hero/6.jpg)",
                    }}
                  ></div>
                  <div className="content">
                    <h2>
                      <i>Learn</i>The Precise light
                      manipulation and camera controls for
                      best<span>'Product Image'</span>
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container why-to-join-us">
          <div className="row">
            <div className="col-md-6 col-sm-12 why-to-join-us-content">
              <h2>Why to Join Us</h2>
              <p>
                We at “Evolution Image Academy of Professional
                Photography” train our students to master the art of
                real world skills of camera control and lighting
                techniques making themselves, self confident in
                their work.
              </p>
              <p>
                We give them enough knowledge to handle the
                commercial shoots wisely and fulfil the client’s
                requirements up to the mark with responsibility and
                available equipment, giving best desired images.
              </p>
              <p>
                We are based in Dehradun City surrounded by
                beautiful Natural Locations, best for Landscape
                Photography, Fashion Photography, People and Fine
                Art Photography which makes easy to students for
                Practice and get good Images.
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src="image/why-to-join-us.jpg"
                alt="Why to join us"
              />
            </div>
          </div>
        </div>
        <div className="student-life">
          <div className="container">
            <h2 className="text-center">
              Students Life <span>Behind the Scene</span>{" "}
            </h2>
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="image/student-life/1.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/3.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/4.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/5.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/6.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/7.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/8.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/9.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/student-life/10.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    >
                      <i className="fas fa-arrow-left"></i>
                    </span>
                    <span className="visually-hidden">
                      Previous
                    </span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    >
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <h3>
                  STUDENTS MASTERING SKILLS BY ACTUAL PRACTICAL
                  PRACTICE IN STUDIO & AT LOCATIONS
                </h3>
                <p>
                  Photography is an Art & the modern Cameras are
                  the technologically developing & Evolving tools
                  for best Image making. At Evolution Image
                  Academy we too keep Evolving in giving our
                  students the best Old school basic Knowledge
                  with the new evolving technical knowledge by our
                  faculty members, the Students here are taught to
                  observe carefully & learn how to Master & Handle
                  the photo shoots inside Studio & on Location for
                  advertisement campaigns in different
                  environments.
                </p>
                <p>
                  Photography has mainly different fields like
                  People ( Portraits, Fashion, Children, Events,
                  etc. ), Product ( Things of different size,
                  shapes and colours ), Architecture/ Interior /
                  Landscapes, Wild Life, etc., here the
                  Photographer has to handle the Clients, Models,
                  Artists ( Art Directors, Make up, hair, Dress
                  Stylists, Designers, Set Designers) assistants,
                  etc. with different situations and weather
                  conditions. Apart from that Photographer has to
                  handle Camera, lights and other gear depending
                  on type of shoot and above all the
                  responsibility to deliver best satisfactory
                  images to the clients at the end of the day with
                  self-satisfaction and enjoyable photography
                  work.
                </p>
              </div>
            </div>
            <div className="behind-the-scenes mb-5 mt-5 text-center">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <iframe
                    src="https://www.youtube.com/embed/-pu_G_Tv8bo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-md-6 col-sm-12">
                  <iframe
                    src="https://www.youtube.com/embed/A1S_1ehav2M"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Link href={route('behind-the-scene')} className="button" >
                More Videos
              </Link>
            </div>
          </div>
        </div>
        <div className="exhibition">
          <div className="container">
            <div className="row">
              <div className="exhibition-title col-md-3 col-sm-4">
                <h2>Exhibition</h2>
                <p>
                  Every year our <b>"Students Work"</b>is properly
                  exhibited at the famous <b>"Pacific Mall"</b>of
                  Dehradun City helping students for exposure, new
                  contacts, building public relations and self
                  confidence.
                </p>
              </div>
              <div className="col-md-9 col-sm-8">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="image/exhibition/1.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/exhibition/2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/exhibition/3.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/exhibition/4.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/exhibition/5.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/exhibition/6.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image/exhibition/7.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">
                      Previous
                    </span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserendLayout>
    </>
  );
}
