export default function Hero(){
    return(
        <>
        <h1>Coffee Tracking for Coffee Lovers :)</h1>
        <div className="benefits-list">
            <h3 className="font-bolder">Try <span className="text-gradient">Coffee World</span> and start ...</h3>
            <p>✅ Tracking every Coffee</p>
            <p>✅ Measuring your blood caffiene levels</p>
            <p>✅ Costing and quantifying your addiction</p>
        </div>
        <div className="card info-card">
            <div>
                <i className="fa-solid fa-circle-info"></i>
                <h3>Did you know...</h3>
            </div>
            <h5>That caffiene&apos;s half-life is about 5 hours?</h5>
            <p>This means that after 5 hours, half the caffiene you consumed is still in your system, keeping you alert longer! So if you drink a cup of coffee with 200 mg of caffiene, 5 hours later, you&apos;ll still have about 100 mg of caffiene in your system.</p>
        </div>
        </>
    )
}