import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function ContactusComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="Contact us" />
                <>
                    <div className="sub-hero" style={{backgroundImage: "url( image/subhero/contactus.jpg)" }} >
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact-us">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-12">
                                    {/* @if (session('success'))
                                    <div className="alert alert-success mb-5" role="alert">
                                        {{ session('success') }}
                                    </div>
                                    @endif */}
                                    <h2>Get in Touch</h2>
                                    <form action="{{ route('send.email') }}" method="POST">
                                        {/* @csrf
                                            @if(session()->has('message'))
                                        <div className="alert alert-success">
                                            {{ session()-> get('message')}}
                                        </div>
                                        @endif */}
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Name" name="name" />
                                                {/* @error('name')
                                                <span className="text-danger"> {{ $message }} </span>
                                                @enderror */}
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Email" name="email" />
                                                {/* @error('email')
                                                <span className="text-danger"> {{ $message }} </span>
                                                @enderror */}
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Contact No" name="contactno" />
                                                {/* @error('contactno')
                                                <span className="text-danger"> {{ $message }} </span>
                                                @enderror */}
                                        </div>
                                        <div className="mb-3">
                                            <textarea cols="10" rows="5" className="form-control" placeholder="Message" name="message"></textarea>
                                            {/* @error('message')
                                            <span className="text-danger"> {{ $message }} </span>
                                            @enderror */}
                                        </div>
                                        <div className="text-center">
                                            <button className="button" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h2>Contact Us:</h2>
                                    <div className="d-flex">
                                        <i className="fas fa-map-marker-alt" />
                                        <address>
                                            Evolution Image <br />
                                                Academy of Professional Photography, <br />
                                                    815/1,Indira Nagar Colony, Seemadwar Road, <br />
                                                        (Near SBI Guest House), <br />
                                                            Dehradun 248001, Uttarakhand, India.
                                                        </address>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fas fa-mobile-alt" />
                                                        <address>
                                                            Phone : 7895660773, 9412054231,<br /> 0135-2767234
                                                        </address>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fas fa-envelope-open" />
                                                        <address>
                                                            evolutionimageworks@gmail.com
                                                        </address>
                                                    </div>
                                                    <div className="d-flex">
                                                        <i className="fas fa-clock" />
                                                        <p>10AM to 5PM (Monday to Saturday)</p>
                                                    </div>
                                                    <div className="d-flex mb-0">
                                                        <i className="fas fa-globe" />
                                                        <address>http://www.evolutionimageworks.com/</address>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="location-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.151480207015!2d77.99907215046862!3d30.318208836683546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a3e348cbed5%3A0x3f35825894ecbd37!2sEvolution%20Image%2C%20Academy%20of%20Professional%20Photography!5e0!3m2!1sen!2sin!4v1621329865999!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>        </div>
                                </div>
                            </>
                        </UserendLayout>
                    </>
                    );
}
