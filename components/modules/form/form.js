import React , {useState} from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [person, setPerson] = useState("");
  
    const reserveHandler = async (event) => {
      event.preventDefault();
  
      const response = await fetch("http://localhost:4000/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          date: date,
          time: time,
          person: person,
        }),
      });
  
      if (response.status === 201) {
        setEmail("");
        setDate("");
        setName("");
        setTime("");
        setPerson("");
        alert("Congratulations, your reservation has been made successfully  :)");
      }
  };


    return (
        <div className="col-lg-6">
        <div
          className="text-center p-5"
          style={{ background: "rgba(51, 33, 29, .8)" }}
        >
          <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
          <form className="mb-5">
            <div className="form-group">
              <input
                type="text"
                className="form-control bg-transparent border-primary p-4"
                placeholder="Name"
                value={name}
                required="required"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control bg-transparent border-primary p-4"
                placeholder="Email"
                value={email}
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="date" id="date" data-target-input="nearest">
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                  placeholder="Date"
                  value={date}
                  data-target="#date"
                  data-toggle="datetimepicker"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="time" id="time" data-target-input="nearest">
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                  placeholder="Time"
                  value={time}
                  data-target="#time"
                  data-toggle="datetimepicker"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <select
                className="custom-select bg-transparent border-primary px-4"
                style={{ height: "49px" }}
                value={person}
                onChange={(e) => setPerson(e.target.value)}
              >
                <option selected>Person</option>
                <option value="1">Person 1</option>
                <option value="2">Person 2</option>
                <option value="3">Person 3</option>
                <option value="3">Person 4</option>
              </select>
            </div>

            <div>
              <button
                className="btn btn-primary btn-block font-weight-bold py-3"
                type="submit"
                onClick={reserveHandler}
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Form;