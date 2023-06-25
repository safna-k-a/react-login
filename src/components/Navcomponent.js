import {
    Nav,
    NavItem,
    NavLink,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Label,
    Input,
} from "reactstrap";

export const Navsection = () => (
    <>
        <div className="container-fluid">
            <div className="row justify-content-end">
                <div className="col-3">
                    <img src="" />
                </div>
                <div className="col-6">
                    <Nav>
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
                            <NavLink className="text-black" disabled href="#">
                                Contact Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-black" disabled href="#">
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </div>

        <div className="container row ">
            <div className="col-5">
                <Form className="">
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
                            value="Submit"
                            type="submit"
                            className="rounded-pill"
                        />
                    </FormGroup>
                </Form>
            </div>
        </div>
    </>
);
