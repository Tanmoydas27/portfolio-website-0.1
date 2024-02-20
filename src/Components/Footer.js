import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div style={{backgroundColor:'   #ccffff'}}>
      <footer > 
        <p>Website created with ♥ by 
          Tanmoy Das    © {year}
        </p>
      </footer>
    </div>
  );
}

export default Footer;