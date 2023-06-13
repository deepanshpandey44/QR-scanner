import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function FourDaysCourseComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="Four Days Course" />
                <>
                    <div className="hobby-course-details">
                        <div className="container">
                            <div className="row">
                                <div className="text-center">
                                    <img src="image/logo-black.png" alt="" />
                                        <span>Website: http://www.evolutionimageworks.com</span>
                                        <span>Phone: 7895660773, 9412054231, 0135-2767234</span>
                                </div>
                                <h2>4 Days Course in Photography</h2>
                                <h3>Course Duration: 4 Days(With Theory and Practical) </h3>
                                <h4>Course Content: (4 Days Course will Cover just the basics like: )</h4>
                                <ul>
                                    <li>What is	Shutter,	Aperture	and	ISO?	How	does	it	work</li>
                                    <li>Types	of	cameras, Lenses</li>
                                    <li>Benefits	of	shooting	Raw	and	Jpeg	format</li>
                                    <li>How	to	control	Exposure and	Depth	of	Field</li>
                                    <li>White	Balance,Focusing	Mode,	Focusing	Point…etc</li>
                                    <li>Camera	Modes	like	Manual,	Av,	Tv…etc	and	its	use.</li>
                                    <li>Main	camera	fuctions,	modes..etc</li>
                                </ul>
                                <div>
                                    <h4>BASICS	OF	PHOTOGRAPHY</h4>
                                    <p>In this fundamental course, students will identify basic photographic tools like:
                                        Camera Handling, Types of Lenses, Different types of Photography, including the
                                        proper use of various camera systems,. Physics of camera i.e. how camera works and
                                        different types of camera, Camera handling, Physics of optics and its nature how
                                        lenses work and different types of Lense. What is shutter and its speed? What is
                                        aperture and how does it work?, What is ISO and metering, How do they work?
                                        White balance, Focusing points, File Format RAW or JPEG, Focusing mode,Depth
                                        of field, What	Is	Exposure?	Understanding	How	Exposure	Affects	Your
                                        Photographs</p>
                                </div>
                                <div>
                                    <h4>BASIC	REQUIREMENT</h4>
                                    <p>	&#9679; D-SLR	Camera or	Mirrorless	Camera</p>
                                    <p>	&#9679; Wide	angle	Lens	and	Zoom	Lens</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </UserendLayout>
        </>
    );
}
