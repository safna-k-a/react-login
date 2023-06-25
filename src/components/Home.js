import {
    Nav,
    NavItem,
    NavLink,
    Form,
    FormGroup,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Button,
} from "reactstrap";

export const Home = () => (
    <div className="foot body py-5 container-fluid align-items-center row m-0 justify-content-center">
        <div className="container col-11  foot2  row p-5 justify-content-center ">
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

            <div className="container-fluid row pt-5 justify-content-center align-content-center">
                <div className="col-6">
                    <img
                        className="img-fluid"
                        src="images/banner-img-1.png"
                        alt=""
                    />
                    <img src="images/shape-1.svg" alt="" />
                </div>
                <div className="col-6 align-content-center row justify-content-center">
                    <div className=" row justify-content-center">
                        <div className="text-center">
                            <h1>Improve your Learning by</h1>
                            <h1>Orisys Academy</h1>
                        </div>

                        <p className="py-3 text-center">
                            we have so many different courses on various domains
                        </p>

                        <input
                            type="search"
                            placeholder="Search Courses"
                            className="rounded-pill bgsearch col-6 text-center border-0 p-3 px-5  "
                        />
                        <button className="btn btn-info col-2 rounded-pill p-3 mx-2">
                            Search
                        </button>
                    </div>
                    <img
                        src="images/shape-2.svg"
                        className="img-fluid col-2 my-3"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div className="container col-11  foot3  row p-5 my-5 justify-content-center ">
            <h1 className="text-center">
                Expand your career oppurtunity with our courses
            </h1>
            <div className="col-3">
                <Card className="Card">
                    <CardImg
                        className="CardImg"
                        top
                        width="100%"
                        src="images/thumb1.jpg
                        "
                        alt="Card image cap"
                    />
                    <CardBody className="CardBody">
                        <CardTitle className="CardTitle">Developing</CardTitle>
                        <CardText className="CardText">
                            Our institute provide various courses related
                            information Technology.
                        </CardText>
                        <button className=" button_click rounded">
                            Click me
                        </button>
                    </CardBody>
                </Card>
            </div>
            <div className="col-3">
                <Card className="Card">
                    <CardImg
                        className="CardImg"
                        top
                        width="100%"
                        src="images/thumb1.jpg"
                        alt="Card image cap"
                    />
                    <CardBody className="CardBody">
                        <CardTitle className="CardTitle">
                            Digital Marketing
                        </CardTitle>
                        <CardText className="CardText">
                            Our institute provide various courses related
                            information Technology.
                        </CardText>
                        <button className=" button_click rounded">
                            Click me
                        </button>
                    </CardBody>
                </Card>
            </div>
            <div className="col-3">
                <Card className="Card">
                    <CardImg
                        className="CardImg"
                        top
                        width="100%"
                        src="images/thumb1.jpg"
                        alt="Card image cap"
                    />
                    <CardBody className="CardBody">
                        <CardTitle className="CardTitle">
                            Finance And Accounting
                        </CardTitle>
                        <CardText className="CardText">
                            Our institute provide various courses related
                            information Technology.
                        </CardText>
                        <button className=" button_click rounded">
                            Click me
                        </button>
                    </CardBody>
                </Card>
            </div>
            <div className="col-3">
                <Card className="Card">
                    <CardImg
                        className="CardImg"
                        top
                        width="100%"
                        src="images/thumb1.jpg"
                        alt="Card image cap"
                    />
                    <CardBody className="CardBody">
                        <CardTitle className="CardTitle">Economics</CardTitle>
                        <CardText className="CardText">
                            Our institute provide various courses related
                            information Technology.
                        </CardText>
                        <button className=" button_click rounded">
                            Click me
                        </button>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
);
