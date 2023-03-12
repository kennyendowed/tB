import React, { useEffect, useState, createContext, useMemo } from "react";
import "./UpdateProfile.css";
import LoadingLogo from "../../../Components/LoadingLogo";





const UpdateProfile = (props) => {

    return (

        <>
        <form>
        <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="inputUsername">Username</label>
                        <input type="text" class="form-control" id="inputUsername" placeholder="Username" />
                    </div>
                    <div class="mb-3">
                        <label for="inputUsername"> Phone number </label>
                        <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone number" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <img alt="Chris Wood" src="img/avatars/avatar.jpg" class="rounded-circle img-responsive mt-2"
                            width="128" height="128" />
                        <div class="mt-2">
                            <span class="btn btn-primary"><i class="fas fa-upload"></i> Upload</span>
                        </div>
                        <small>For best results, use an image at least 128px by 128px in .jpg
                            format</small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mb-3 col-md-6">
                    <label for="inputFirstName">First name</label>
                    <input type="text" class="form-control" id="inputFirstName" placeholder="First name" />
                </div>
                <div class="mb-3 col-md-6">
                    <label for="inputLastName">Last name</label>
                    <input type="text" class="form-control" id="inputLastName" placeholder="Last name" />
                </div>
            </div>
            <div class="mb-3">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="mb-3">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="mb-3">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="row">
                <div class="mb-3 col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="mb-3 col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="mb-3 col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Save changes</button>
        </form>



        </>
    );
}


export default UpdateProfile;