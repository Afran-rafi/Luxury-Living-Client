import React from 'react';
import login from '../Images/Login.webp'

const Login = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-x-72 lg:mr-20">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
                <div class="text-center lg:text-left">
                    <div>
                        <img src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;