import Ticket from './Tickets/Ticket';
function Contact(){
    return (
        <>
             <div flex flex-col items-center justify-center text-center gap-6 max-w-3xl mx-auto mt-10 px-4>
                <Ticket/>
                <p className='text-center ' >watervalleywaterpark@gmail.com</p>

                <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-center mb-6">Find Us on the Map</h2>

                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.551930497222!2d85.40350437544323!3d26.08089607715274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11007b42a8e3%3A0xc94cf6507afaf5d8!2sWater%20Valley%20Water%20Park!5e0!3m2!1sen!2sin!4v1748259793474!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>

            </div>
        </>
       
    );

}
export default Contact;