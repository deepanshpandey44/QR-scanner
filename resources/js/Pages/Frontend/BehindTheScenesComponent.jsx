import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function BehindTheScenesComponent() {
    return (
        <>
            <UserendLayout>
                <Head title="Behind The Scenes" />
                <>
                    <div className="sub-hero" style={{backgroundImage: "url( image/subhero/hobby-professional.jpg)" }}>
                        <h2>Behind the Scenes</h2>
                    </div>
                    <div className="container behind-the-scenes">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-pu_G_Tv8bo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfoY6H35CM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/A1S_1ehav2M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/b6B3_VkxDEI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/cC1E07v7TIc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/MrPKZyzmwbQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/AHxkH9PBPPE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/lK7TOx8yevg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ArVAPdcSFYY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/lYLYQ8fe_5Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Mm7P3SSjRec" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </>
            </UserendLayout>
        </>
    );
}
