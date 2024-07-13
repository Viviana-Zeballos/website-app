function WelcomeSection() {
    let date = new Date()

// here I've created an object with the current date stored as a string
    let singleUser = {
        time: date.toDateString(),
    }

    return(
        <div className="welcomeSection">
            <h1>Welcome!</h1>
            <p>Today's date is: {singleUser.time}</p>
            <p>Please log in  with your credentials below.</p>
        </div>
    )
}

export default WelcomeSection;