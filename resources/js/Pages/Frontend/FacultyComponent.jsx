import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function FacultyComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="Faculty" />
                <>
                    <div className="sub-hero" style={{backgroundImage: "url( image/subhero/faculty.jpg)" }} >
                        <div className="container">
                            <h2>Faculty</h2>
                        </div>
                    </div>
                    <div className="container faculty">
                        <p className="pt-5">Every Faculty of Evolution Image has deep knowledge in Professional Photography and experience more than 10yrs. We offer a wide range of Technical Photography knowledge and Experience in depth to our students so that they can deliver remarkable images.</p>
                        <div className="row justify-content-center text-center">
                            <div className="col-md-6 col-sm-12">
                                <div className="cards">
                                    <img src="image/faculty/amruta_karnik.jpg" alt="Vaydehi Khandelwal" />
                                        <div>
                                            <h3>Amruta Karnik</h3>
                                            <p>Amruta Karnik is a Product, food and lifestyle photographer in India and she has experience more than 14 years. She studied Applied Art specialising in Photography and advanced Food photography in Pittsburgh, USA and has explored several photographic fields.</p>
                                            <p>She hails from a background that extends from Graphic arts to Photography which provides her an exceptional eye for graphic detail and impact</p>
                                            <p>Amruta has worked with acclaimed brands like Tata Fabsta, Tata NX, Tata Steel, Parle, Big Bazaar, Bru, Cambay Tiger, Reliance, Alkem Laboratories ...etc <a target="_blank" href="https://amrutakarnik.com">(https://amrutakarnik.com)</a></p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="cards">
                                    <img src="image/faculty/viraj_chavan.jpg" alt="Viraj Chavan" />
                                        <div>
                                            <h3>Viraj Chavan</h3>
                                            <p>Viraj Chavan is a Professional Photographer having experience of 20 year in the field. Having enormous Light manipulation capabilities he is specialised in shooting Products & Real Estate.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="cards">
                                    <img src="image/faculty/chris_rathore.jpg" alt="Chris Rathore " />
                                        <div>
                                            <h3>Chris Rathore</h3>
                                            <p>Chris Rathore is a Professional Editor specialising in Adobe Photoshop and a Photographer for over 6 years, specialises in Portrait, Fashion, Fine Art and Travel/Landscape Photography. <a  target="_blank" href="www.//chrisrathore.com">( www.//chrisrathore.com )</a></p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="cards">
                                    <img src="image/faculty/prerna_mahajan.jpg" alt="Prerna Mahajan" />
                                        <div>
                                            <h3>Prerna Mahajan</h3>
                                            <p>Prerna is a Food, Architecture(Interior), Product and People Photographer with over 15 years of experience.</p>
                                            <p>She has worked on several national and international Projects for various hospitality brands and has handled all aspects of the shoot be it Photography, production or styling.</p>
                                            <p>She worked for brands like Mother Dairy, Vadilal, Pedigree, Hyatt group of Hotels, Nex Gen Publishing Ltd. , Food lovers Magazine, Palladium hotel, ITC Maurya etc. </p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="cards">
                                    <img src="image/faculty/amit_hasija.jpg" alt="Amit Hasija" />
                                        <div>
                                            <h3>Amit Hasija</h3>
                                            <p>Amit Hasija is a Fashion Photographer and has experience more than 15 years. He is doing  fashion photography for many years and still going on.</p>
                                            <p>Extravagant staging and romantic motifs characterize his unique style. Amit has won most prestigious award PIEA 2007 & PGI 2007.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="cards">
                                    <img src="image/faculty/riddhi_parekh.jpeg" alt="Riddhi Parekh" />
                                        <div>
                                            <h3>Riddhi Parekh</h3>
                                            <p>A photographer with an insatiable lust for travel, Riddhi’s passion for photography has won her accolades from none other than National Geographic for her remarkable work. Having begun as a clueless teenager she found her true calling only after having dabbled in the Ad world.  While she is not globetrotting she spends time photographing fashion and lifestyle stories for magazines, luxury labels and advertising brands for living but her true passion lies in her personal work which is an amalgamation of documentary and commercial art.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="cards">
                                    <img src="image/faculty/dhiren_rawat.jpg" alt="Dhiren Rawat" />
                                        <div>
                                            <h3>Dhiren Rawat</h3>
                                            <p>Dhiren Rawat is a Professional Photographer and he is in Professional Photography for last 15yrs.He is more into Architectural Photography,Fashion Photography,Product Photography and Outdoor Photography.</p>
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
