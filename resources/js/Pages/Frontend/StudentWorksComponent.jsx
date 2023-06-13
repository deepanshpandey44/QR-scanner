import { Link, Head } from "@inertiajs/react";
import UserendLayout from '@/Layouts/UserendLayout';

export default function StudentWorksComponent() {
    useEffect(() => {
        fetch('/api/data')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.log(error));
    }, []);
    return (
        <>
            <UserendLayout>
                <Head title="Student Works" />
                <>
                    <div class="sub-hero" style={{backgroundImage: "url( image/subhero/studentwork.jpg)" }}>
                        <div class="container">
                        <h2>Students Work</h2>      
                        </div>
                    </div>
                    
                    <section class="container">
                        <div class="gallery">
                            {/* @foreach($studentworks as $key => $studentwork) 
                            <div class="grid-image"> 
                                <a href="/storage/images/studentwork/{{ $studentwork->pic }}" class="fancybox" data-fancybox="gallery1">
                                    <div>
                                        <h3>{{ $studentwork->studentname }}</h3>
                                        <address>{{ $studentwork->city }}</address>
                                        <address>{{ $studentwork->state }}</address>
                                    </div>
                                    <img src="/storage/images/studentwork/{{ $studentwork->pic }}" width="100%" height="100%">				
                                </a>
                            </div>	
                            @endforeach	 */}
                            {studentworks.map((studentwork, key) => (
                                <a href="/storage/images/studentwork/{{ $studentwork->pic }}" class="fancybox" data-fancybox="gallery1">
                                    <div>
                                        <h3>{ studentwork->studentname }</h3>
                                        <address>{ studentwork->city }</address>
                                        <address>{ studentwork->state }</address>
                                    </div>
                                    <img src="/storage/images/studentwork/{{ $studentwork->pic }}" width="100%" height="100%" />				
                                </a>
                            ))}
                        </div>
                    </section>
                </>
            </UserendLayout>
        </>
    );
}
