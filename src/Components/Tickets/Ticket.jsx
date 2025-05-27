function Ticket(){
    return(
        <>
        <div className="flex flex-col items-center justify-center text-center gap-6 max-w-3xl mx-auto mt-10 px-4">
            <h1 className="text-4xl font-bold text-green-600">Booking Open</h1>

            <p className="text-gray-700 text-lg">
            <strong>Water Valley Water Park</strong> (A unit of Ananda Resorts) is the crown jewel of Bihar’s recreational
            attractions! Spanning acres of lush greenery and crystal-clear waters, our park offers more than just fun—it’s a
            complete experience. Whether you're seeking thrill, relaxation, or family time, Water Valley is the ultimate
            destination for all age groups.
            </p>

            <p className="text-base text-gray-800 font-medium">
            🎟️ Book Your Ticket Through Counter Only
            </p>

            <p className="text-red-600 font-semibold text-base">
            Tickets Available Only at the Counter.
            </p>

            <div className="text-center">
            <p className="font-medium text-gray-700">📞 Telephone Booking Enquiry</p>
            <p className="text-lg font-semibold text-gray-900">6202584955</p>
            </div>
        </div>
        </>

    );
}

export default Ticket;