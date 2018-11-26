<div className="mainer p-5">
<div className="row container mt-5">
    <div className="bg-light p-5 col-6 rounded">
        {console.log(user.cart)}
        <h3>First Name : {user.first_name}</h3>
        <h3>Last Name : {user.last_name}</h3>
        <h4>Email : {user.email}</h4>
        <h4>Phone : {user.phone}</h4>
        <div>
            <h3> Address </h3>
            <h4> Street {user.address}</h4>
            <h4>city {user.city}</h4>
            <h4>
                state
                {user.state}
            </h4>
            <h4>
                ZipCode
                {user.zipcode}
            </h4>
        </div>
    </div>
</div>
</div>