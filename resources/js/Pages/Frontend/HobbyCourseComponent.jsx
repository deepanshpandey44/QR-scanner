import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function HobbyCourseComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="Hobby Course" />
                <>
                    <div className="sub-hero" style={{backgroundImage: "url( image/subhero/hobby-professional.jpg)" }} >
                        <h2>Hobby<br />Photography Course</h2>
                    </div>
                    <div className="container hobby-course">
                        <p>We are fundamentally offering two types of Hobby Photography Courses</p>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <h3>1 Month Photography Course</h3>
                                    <ul>
                                        <li>Learn	basics	of	Photography</li>
                                        <li>Understand	your	camera	in	detail</li>
                                        <li>Understand	the	Lens	you	use	and	operation	of different	types	of Lenses</li>
                                        <li>What	is	Shutter,	Aperture	and	ISO?	How	does	it	work</li>
                                        <li>How	to	control Exposure	and		Play	with	different	Exposure</li>
                                        <li>How	to	control	Depth	of	Field and	its	uses</li>
                                        <li>Rules	of	Composition suitable	for	different	frames</li>
                                        <li>Use	of	Filters	to	create	effects</li>
                                        <li>Color	control	in	White	Balance</li>
                                        <li>Benefits	of	shooting	Raw	and	Jpeg format</li>
                                        <li>Know	all	the	Camera	Modes like Manual, Av, Tv…etc and	its	use.</li>
                                        <li>Off	Camera	and	On	Camera Flash for beautiful	Portraits</li>
                                        <li>Use	of	Tripod</li>
                                        <li>Some	 Effects to	create	Aristic	Images</li>
                                        <li>Photoshop	<span>(Image	Editing/	Retouching)</span></li>
                                    </ul>
                                    <Link href= { route('one-month-course') } className="button mt-4 mb-5">Read More</Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <h3>15 days Photography Course</h3>
                                    <ul>
                                        <li> Learn	basics	of	Photography</li>
                                        <li> Understand	your	camera	in	detail</li>
                                        <li> Understand	the	Lens	you	use	and	operation	of	different	types	of Lenses	</li>
                                        <li> What	is	Shutter,	Aperture	and	ISO?	How	does	it	work</li>
                                        <li> How	to	control	Exposure	and		Play	with	different	Exposure</li>
                                        <li> How	to	control	Depth	of	Field	and	its	uses</li>
                                        <li> Rules	of	Composition	suitable	for	different	frames</li>
                                        <li> Color	control	in	White	Balance</li>
                                        <li> Benefits	of	shooting	Raw	and	Jpeg	format</li>
                                        <li> Know	all	the	Camera	Modes	like	Manual,	Av,	Tv…etc	and	its	use.</li>
                                    </ul>
                                    <Link href={ route('fifteen-days-course') } className="button mt-4 mb-5">Read More</Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <h3>4 days Photography Course</h3>
                                    <ul>
                                        <li>What	is	Shutter,	Aperture	and	ISO?	How	does	it	work</li>
                                        <li>Types	of	cameras, Lenses</li>
                                        <li>Benefits	of	shooting	Raw	and	Jpeg	format</li>
                                        <li>How	to	control	Exposure and	Depth	of	Field	</li>
                                        <li>White	Balance,Focusing	Mode,	Focusing	Point…etc</li>
                                        <li>Camera	Modes	like	Manual,	Av,	Tv…etc	and	its	use.</li>
                                        <li>Main	camera	fuctions,	modes..etc</li>
                                    </ul>
                                    <Link href={ route('four-days-course') } className="button mt-4 mb-5">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </UserendLayout>
        </>
    );
}
