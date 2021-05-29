import React, {useContext} from "react";
import { Context } from "../store/appContext";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const login = (e)=> {
        e.preventDefault();

    }

    return (
        <div className="container">
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}