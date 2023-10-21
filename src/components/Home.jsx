import React from "react";

function Home() {
  return (
    <div className="container vh-100">
      <div>
        <h2>Welcome to Profile-Page</h2>
        <h5>Additonal Details</h5>
        <div>
          <label>
            <b>Age</b>
          </label>
          <input
            type="number"
            className="form-control mt-2 mb-2 w-50"
            placeholder="Age"
          />
          <label>
            <b>Gender</b>
          </label>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              onchange="handleInput(this)"
            />
            <label class="form-check-label" for="male">
              {" "}
              Male{" "}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              onchange="handleInput(this)"
            />
            <label class="form-check-label" for="female">
              {" "}
              Female{" "}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="transgender"
              onchange="handleInput(this)"
            />
            <label class="form-check-label" for="transgender">
              Trans Gender
            </label>
          </div>
        </div>
        <label>
          <b>DOB</b>
        </label>
        <input
          className="form-control mt-2 mb-2 w-50"
          type="Date"
        />
        <label>
          <b>Phone Number</b>
        </label>
        <input
          className="form-control mt-2 mb-2 w-50"
          placeholder="Enter your Number"
          type="number"
        />
        <button type="submit" className="btn btn-primary">Update User</button>
      </div>
    </div>
  );
}

export default Home;
