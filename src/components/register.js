import { Nav, NavItem, NavLink, Form, FormGroup, Input } from "reactstrap";

export const Navsection = () => (
    <div className="foot body py-5 container-fluid align-items-center row m-0 justify-content-center">
        <div className="container col-11  bodyback rounded-3 row p-5 justify-content-center">
            <div className="row justify-content-spacebetween col-12">
                <div className="col-3">
                    <img src="images/Group.png" alt="" />
                </div>

                <Nav className="col-9 justify-content-end">
                    <NavItem>
                        <NavLink active className="text-black" href="#">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#">
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#">
                            Contact Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#">
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

            <div className="container-fluid row pt-5 justify-content-center">
                <div className="col-6 row pt-5 justify-content-start">
                    <div className="col-8">
                        <Form>
                            <FormGroup>
                                <Input
                                    id="exampleEmail"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    type="text"
                                    className="rounded-pill"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Enter your Email"
                                    type="email"
                                    className="rounded-pill"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="exampleEmail"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    className="rounded-pill"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="exampleEmail"
                                    name="password"
                                    placeholder="Enter Your Number"
                                    type="password"
                                    className="rounded-pill"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="exampleEmail"
                                    name="submit"
                                    value="Signup"
                                    type="submit"
                                    className="rounded-pill btn btn-success"
                                />
                            </FormGroup>
                        </Form>
                        <p className="ps-5">
                            Already have one ?{" "}
                            <strong>
                                <a href="">Sign In</a>
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="div1"></div>
                    <img
                        className="imageforregister"
                        src="images/business-img.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
);
