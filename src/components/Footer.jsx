import React from "react";

const Footer = () => (
  <footer className="text-center fixed-bottom p-3">
    <small>
      Power by{" "}
      <span className="sr-only"></span>{" "}
      <a
        href="https://github.com/barretobit"
        target="_blank"
        rel="noopener noreferrer"
      >
        RandomBit
      </a>
      {" "} - {" "}
      <a
        href="https://randombit.pt"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.randombit.pt
      </a>
    </small>
  </footer>
);

export default Footer;