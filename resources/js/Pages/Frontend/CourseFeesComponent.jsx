import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function CourseFeesComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="Course Fees" />
                <>
                    <div className="sub-hero" style={{backgroundImage: "url( image/subhero/courses.jpg)" }} >
                        <div>
                            <h2>Courses & fees</h2>
                        </div>
                    </div>
                    <div className="container course">
                        <h2>Photography Courses</h2>
                        <p>At Evolution Image, we are fundamentally offering two types of courses- “Professional Photography Courses” and “Hobby Photography Courses”. Interested students will receive a deep “Technical and Theoretical” knowledge about all sdiveams of Photography in here according to the selection of course.</p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-center">
                                    <div>
                                        <img src="image/professional.jpg" alt="Professional Photography Courses" />
                                    </div>
                                    <h3>Professional Photography Courses</h3>
                                    <div className="mb-5 mt-3">
                                        <Link href={ route('professional-course') } className="button">View Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 hobby">
                                <div className="card text-center">
                                    <div>
                                        <img src="image/hobby.jpg" alt="Hobby Photography Courses" />
                                    </div>
                                    <h3>Hobby Photography Courses</h3>
                                    <div className="mb-5 mt-3">
                                        <Link href={ route('hobby-course') } className="button">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fees">
                        <div className="text-center mb-5">
                            <h2>Admission</h2>
                            <div className="admission-form">
                                <Link href="doc/admission-formx')}}" className="button"><i className="fas fa-file-download"></i>Admission Form Download</Link>
                            </div>
                        </div>
                        <div className="container">
                            <h2 className="text-center">Fee Structure</h2>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 one">
                                    <div className="course-fee">
                                        <h3>1 Year Diploma</h3>
                                        <div>
                                            <span><b>Total Fees :-</b></span>
                                            <span>Rs 88,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>Security :-</b></span>
                                            <span>+ Rs 4,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>1st installment :-</b></span>
                                            <span>Rs 50,000 + Rs 4,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>2nd installment :-</b></span>
                                            <span>Rs 38,500/-</span>
                                        </div>
                                        <p>The security will be refunded at the end of 1 Year Course</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 four">
                                    <div className="course-fee">
                                        <h3> 1 Month Course</h3>
                                        <div>
                                            <span><b>Total Fees :-</b></span>
                                            <span>Rs 19,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>one installment only :-</b></span>
                                            <span>Rs 19,500/-</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 two">
                                    <div className="course-fee">
                                        <h3>6 Month Course</h3>
                                        <div>
                                            <span><b>Total Fees :-</b></span>
                                            <span>Rs 56,800/-</span>
                                        </div>
                                        <div>
                                            <span><b>Security :-</b></span>
                                            <span>+ Rs 4,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>1st installment :-</b></span>
                                            <span>Rs 40,000 + Rs 4,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>2nd installment :-</b></span>
                                            <span>Rs 16,800/-</span>
                                        </div>
                                        <p>The security will be refunded at the end of 6 Month Course</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 five">
                                    <div className="course-fee">
                                        <h3> 15 Days Course</h3>
                                        <div>
                                            <span><b>Total Fees :-</b></span>
                                            <span>Rs 11,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>one installment only :-</b></span>
                                            <span>Rs 11,500/-</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 three">
                                    <div className="course-fee">
                                        <h3> 3 Month Course</h3>
                                        <div>
                                            <span><b>Total Fees :-</b></span>
                                            <span>Rs 40,000/-</span>
                                        </div>
                                        <div>
                                            <span><b>Security :-</b></span>
                                            <span>+ Rs 4,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>1st installment</b></span>
                                            <span>Rs 25,000 + Rs 4,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>2nd installment :-</b></span>
                                            <span>Rs 15,000/-</span>
                                        </div>
                                        <p>The security will be refunded at the end of 3 Month Course</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 six">
                                    <div className="course-fee">
                                        <h3> 4 Days Course</h3>
                                        <div>
                                            <span><b>Total Fees :-</b></span>
                                            <span>Rs 4,500/-</span>
                                        </div>
                                        <div>
                                            <span><b>one installment only :-</b></span>
                                            <span>Rs 4,500/-</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            </UserendLayout>
        </>
    );
}
