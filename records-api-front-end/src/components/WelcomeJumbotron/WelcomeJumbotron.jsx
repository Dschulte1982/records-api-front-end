import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles.css";

export const WelcomeJumbotron = () => {
  return (
    <div role="main" className="welcome-container pt-5">
      <Container>
        <h1 className="display-3">Welcome to APItems!</h1>
        <p>
          This application is a fully-functional CRUD sandbox for you to{" "}
          <b>create</b>, <b>update</b>, or <b>delete</b> items to your heart's
          content. Based upon an Android application of the same name, you can
          interact with my Laravel items API. Utilizing the Laravel faker
          library, a number of existing items are already present for you to
          play with. Feel free to add some of your own!
        </p>
        <p>
          If you enjoy my work and would like to contact me, click the button
          below to visit my portfolio!
        </p>
        <p>
          <Button
            variant="primary"
            size="lg"
            role="button"
            className="welcome-button"
          >
            See more &raquo;
          </Button>
        </p>
      </Container>
    </div>
  );
};
