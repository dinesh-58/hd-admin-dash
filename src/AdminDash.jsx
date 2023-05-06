import './AdminDash.css'

export default function AdminDash() {
    return (
        <div>
            <h1>Welcome, Admin!</h1>
            <div className="admin-options">
                <div className="add-doctor">
                    <h4>Add a doctor</h4>
                    <form>
                        <label><span>Name: </span><input type="text" /></label>
                        <label><span>Photo URL: </span><input type="text" /></label>
                        <label><span>Education: </span><input type="text" /></label>
                        <label><span>Profession: </span><input type="text" /></label>
                        <label><span>Satisfaction Rate: </span><input type="number" /></label>
                        <label><span>Standard Fee: </span><input type="number" /></label>
                        <label><span>Work Experience: </span><input type="number" /></label>
                        <label><span>Working at: </span><input type="text" /></label>
                        <label><span>Description: </span><textarea cols="22" rows="5"/></label>
                    </form>
                    <button>Submit</button>
                </div>

                <div  className="add-medicine">
                    <h4>Add medicine</h4>
                    <form>
                        <label><span>Name: </span><input type="text" /></label>
                        <label><span>Photo URL: </span><input type="text" /></label>
                        <label><span>Usage: </span><input type="text" /></label>
                        <label><span>Satisfaction Rate: </span><input type="number" /></label>
                        <label><span>Price (Nrs.): </span><input type="number" /></label>
                        <label><span>Side Effects: </span><textarea cols="22" rows="5"/></label>
                    </form>
                    <button>Submit</button>
                </div>

                <div  className="add-pharmacy">
                    <h4>Add Pharmacy</h4>
                    <form>
                        <label><span>Name: </span><input type="text" /></label>
                        <label><span>Location: </span><input type="text" /></label>
                        <label><span>License No.: </span><input type="number" /></label>
                    </form>
                    <button>Submit</button>
                </div>
                <div  className="add-lab-test">
                    <h4>Add Lab test</h4>
                    <form>
                        <label><span>Name: </span><input type="text" /></label>
                        <label><span>Photo URL: </span><input type="text" /></label>
                        <label><span>Education: </span><input type="text" /></label>
                        <label><span>Profession: </span><input type="text" /></label>
                        <label><span>Satisfaction Rate: </span><input type="number" /></label>
                        <label><span>Standard Fee: </span><input type="number" /></label>
                        <label><span>Work Experience: </span><input type="number" /></label>
                        <label><span>Working at: </span><input type="text" /></label>
                        <label><span>Description: </span><textarea cols="22" rows="5"/></label>
                    </form>
                    <button>Submit</button>
                </div>

            </div>
        </div>
    )
}
