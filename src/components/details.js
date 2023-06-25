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

export const Detailsection = () => (
    <>
        <div className="course_details">
            <div className="container-fluid">
                <div className="row justify-content-end">
                    <div className="col-3">
                        <img src="" />
                    </div>
                    <div className="">
                        <Nav>
                            <NavItem>
                                <NavLink active className="text-black" href="#">
                                    Back
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </div>

            <div className="container row justify-content-center mt-5 h-50 align-items-center">
                <div className="col-5 text-center mt-5">
                    <img src="images/banner-9.png" className="robotimg" />
                </div>
                <div className="col-5 mt-5">
                    <h2>Best Man-made Consciousness Lab</h2>
                    <p>
                        Bithlo bring the power of data science and artificial
                        intelligence to every business.
                    </p>
                    <p>
                        <strong>$3000</strong>
                    </p>
                    <div className="">
                        <i class="fa-sharp fa-solid fa-star star"></i>
                        <i class="fa-sharp fa-solid fa-star star"></i>
                        <i class="fa-sharp fa-solid fa-star star"></i>
                        <i class="fa-sharp fa-solid fa-star star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <button className="btn btn-details rounded mt-3">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </>
);
