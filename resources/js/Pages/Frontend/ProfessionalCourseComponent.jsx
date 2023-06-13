import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function ProfessionalCourseComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="Professional Course" />
                <>
                    <div className="sub-hero" style={{backgroundImage: "url( image/subhero/hobby-professional.jpg)" }} >
                        <h2>Professional <br /> Photography Course</h2>
                    </div>
                    <div className="container professional-course">
                        <p>We are fundamentally offering three types of Professional Photography Courses</p>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <h3>1 Year Diploma in Professional Photography</h3>
                                    <span>Full Time Course</span>
                                    <ul>
                                        <li>Basics	of	Photography</li>
                                        <li>Outdoor	Photography</li>
                                        <li>Fine	Art	 &	Abstract	Photography</li>
                                        <li>Documentary	Photography</li>
                                        <li>Photojournalism</li>
                                        <li>Nature	and	Landscape	Photography</li>
                                        <li>Studio and	Outdoor	Lighting</li>
                                        <li>Wedding	and	Pre-wedding	Photography</li>
                                        <li>Flash	Photography	<span>(outdoor and	Indoor)</span>
                                            <span>(using	flash	with	sunlight	,	fill	or	as	a	main	light)</span></li>
                                        <li>Fashion	Photography	<span>(Outdoor	and	Indoor)</span></li>
                                        <li>Photoshop	:
                                            <ul>
                                                <li>Image	Editing</li>
                                                <li>ICC	Profile</li>
                                                <li>File	Format</li>
                                                <li>Raw,Tiff and	Jpeg	Files</li>
                                                <li>Color	correction</li>
                                            </ul>
                                        </li>
                                        <li>Product/Still	Life	or	Table	Top	Photography</li>
                                        <li>Food	Photography</li>
                                        <li>Architectural	Photography</li>
                                    </ul>
                                    <Link href={route('one-year-course')} className="button mt-4 mb-5">Read More</Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <h3>6 Month Course in Professional Photography</h3>
                                    <span>Full Time Course</span>
                                    <ul>
                                        <li>Basics	of	Photography	</li>
                                        <li>Outdoor	Photography</li>
                                        <li>Fine	Art &	Abstract Photography</li>
                                        <li>Nature	and	Landscape	Photography</li>
                                        <li>Documentary	Photography</li>
                                        <li>Photojournalism</li>
                                        <li>Fashion	Photography	(outdoor	and	Indoor)</li>
                                        <li>Wedding	and	Pre-Wedding	Photography</li>
                                        <li>Studio	and	Outdoor	Lighting</li>
                                        <li>Flash	Photography	(outdoor	and	Indoor)</li>
                                        (using	flash	with	sunlight, fill	or	as	a	main	light)
                                        <li>Photoshop	:
                                            <ul>
                                                <li>Image	Editing</li>
                                                <li>ICC	Profile</li>
                                                <li>File	Format</li>
                                                <li>Raw,Tiff and	Jpeg	Files</li>
                                                <li>Color	correction</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <Link href={ route('six-months-course') } className="button mt-4 mb-5">Read More</Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card">
                                    <h3>3 Month Course in Professional Photography</h3>
                                    <ul>
                                        <li>Basics	of	Photography	</li>
                                        <li>Outdoor	Photography</li>
                                        <li>Fine	Art	&	Abstract	Photography</li>
                                        <li>Studio	Lighting	<span>(Indoor	and	outdoor)</span></li>
                                        <li>Fashion	Photography	</li>
                                        <li>Wedding	and	Pre-Wedding	Photography</li>
                                        <li>Flash	Photography	<span>(outdoor	and	Indoor)</span>
                                            <span>(using	flash	with	sunlight,fill	or	as	a	main	light)</span>
                                        </li>
                                        <li>Photoshop	:
                                            <ul>
                                                <li>Image	Editing</li>
                                                <li>ICC	Profile</li>
                                                <li>File	Format</li>
                                                <li>Raw,Tiff and	Jpeg	Files</li>
                                                <li>Color	correction</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <Link href={ route('three-months-course') } className="button mt-4 mb-5">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </UserendLayout>
        </>
    );
}
