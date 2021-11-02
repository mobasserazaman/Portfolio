import React from "react";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //what's happening
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  //what's happening
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, msg }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));

    setName("");
    setEmail("");
    setMsg("");
  }

  return (
    <section id="contact">
      <h4>Contact</h4>
      <div className="row">
        <div className="col-lg-7">
          <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <iframe
              width="100%"
              height="400px"
              title="map"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{
                filter: "opacity(0.7)",
                position: "absolute",
                top: "0",
                left: "0",
              }}
              src="https://www.google.com/maps/embed/v1/place?q=3433+rue+durocher&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div
              style={{
                width: "100%",
                height: "400px",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "9",
              }}
            >
              <p
                style={{
                  marginTop: "280px",
                  marginLeft: "10%",
                  width: "50%",
                  maxWidth: "250px",
                  fontSize: "12px",
                  color: "gray",
                  backgroundColor: "white",
                  boxSizing: "border-box",
                  padding: "10px",
                  textAlign: "center",
                  boxShadow: "1px 1px 3px #e9e9e9",
                }}
              >
                3433 Rue Durocher <br />
                Montreal, QC, H2X 2C8 <br />{" "}
                <a href="">mobassera.zaman@mail.mcgill.ca</a>
                <br /> +1 438 924 1770
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            style={{ boxSizing: "border-box", padding: "25px" }}
          >
            <label
              htmlFor="name"
              style={{
                width: "100%",
                marginTop: "10px",
                marginBottom: "5px",
                fontSize: "13px",
              }}
            >
              Name:
            </label>
            {/* The value property contains either the default value that is present
        upon loading the element, the value entered by the user, or the value
        assigned by the script. */}
            <input
              style={{ width: "100%" }}
              type="text"
              id="name"
              name="name"
              value={name}
              // Thus e. target. value is the value property of some DOM element,
              // in this case that means the text entered in the search input.
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label
              style={{
                width: "100%",
                marginTop: "10px",
                marginBottom: "5px",
                fontSize: "13px",
              }}
              htmlFor="email"
            >
              Email:
            </label>
            <input
              style={{ width: "100%" }}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label
              style={{
                width: "100%",
                marginTop: "10px",
                marginBottom: "5px",
                fontSize: "13px",
              }}
              htmlFor="msg"
            >
              Message:
            </label>
            <textarea
              style={{ width: "100%", height: "100px" }}
              id="msg"
              name="msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            {/* button type=submit is imp to submit form-data */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "10px", fontSize: "13px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
