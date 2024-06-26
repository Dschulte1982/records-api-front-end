import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import AddItem from "../AddItem";
import "./styles.css";

export const WelcomeJumbotron = () => {
  return (
    <div role="main" className="welcome-container pt-5">
      <Container>
        <h1 id="welcome-header" className="display-4">
          Welcome to APItems
        </h1>
        <p>
          This application is a fully-functional CRUD sandbox for you to{" "}
          <b>create</b>, <b>update</b>, or <b>delete</b> items to your heart's
          content. Based upon an Android application of the same name, you can
          interact with the same Laravel items API built for the mobile app. A
          number of existing items are already present for you to play with, or
          feel free to <b>add some of your own</b>!
        </p>
        <p>
          If you enjoy my work and would like to contact me, click the link
          below to visit my portfolio!
        </p>
        <div className="welcome-action-group">
          <Button
            size="lg"
            role="button"
            id="welcome-button"
            className="welcome-button"
          >
            <AddItem />
          </Button>
          <a
            id="portfolio-link"
            href="https://dschulte1982.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            See additional projects &raquo;
          </a>
        </div>
      </Container>
    </div>
  );
};
