import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="home">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="/courses">Courses</a>
      <a class="nav-link" href="cart">Cart</a>
    </div>
  </div>
</nav>
    );
};

export default Header;