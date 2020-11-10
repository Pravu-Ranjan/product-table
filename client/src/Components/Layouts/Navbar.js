import React, { Fragment } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Appbar() {
    return (
        <Fragment>
             <Navbar  color="light" light>
        <NavbarBrand href="/" className="mr-auto mx-auto">Product Table</NavbarBrand>
      </Navbar>
        </Fragment>
    )
}

export default Appbar
