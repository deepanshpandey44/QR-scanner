import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function AboutUsComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="About Us" />
                <>
                    <div className="sub-hero" style={{backgroundImage: "url( image/subhero/aboutus.jpg)" }}>
                        <h2>About Us</h2>
                    </div>
                    <div className="container about-us">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 about-us-content">
                                <p>The First Professional Photography Academy” in Dehradun, Uttarakhand, with the impulse to avail knowledge of Professional Photography to all those aspirants who have a dream to be a Professional Photographer. </p>
                                <p>We at ‘Evolution Image Academy’ will accord deep “Technical and Theoretical” Photography knowledge with which Students can successfully shoot in various field of Photography and can deliver remarkable images of the highest technical quality to their future clients.</p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="image/aboutus-1.jpg" alt="about-us" />
                            </div>
                        </div>
                    </div>
                    <div className="container about-us">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 order-change">
                                <img src="image/aboutus-2.jpg" alt="about-us" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <p>At Evolution Image, we are fundamentally offering two types of courses- “Professional Photography Courses” and “Hobby Photography Courses”. Interested students will get the deep “Technical and Theoretical” knowledge about all sorts of Photography here. </p>
                            </div>
                        </div>
                    </div>
                </>
            </UserendLayout>
        </>
    );
}
