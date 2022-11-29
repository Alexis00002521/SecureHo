import "./login.css"

function Login(){
    return(
    <section id="Signin">
        <img class="imgsignup" src="./src/assets/img/singin.jpg" alt="img"/>
        <div class="datos">
            <h2>
                Sign In
            </h2>
            <div id="inpcontainer">
                <input class= "input" placeholder= "Your name" type="text"/>
                <input class= "input" placeholder= "Password" type="text"/>

            <label>   
                <input type="checkbox" name="Remember me" id="checkbox"/> Remember me
            </label>
            </div>
            <div id="icocontainer">
                <img class="iconos" src="./src/assets/img/baseline_perm_identity_black_24dp.png" alt="person"/>
                <img class="iconos" src="./src/assets/img/baseline_lock_black_24dp.png" alt="candado"/>
            </div>
            <a href="/admin">
            <button class="btnorigin">
                Log In
            </button>
            </a>
        </div>

    <div class="logocontainer">
        <img class="img2" src="./src/assets/img/logooo-02.png" alt="logo"/>
            <h2 id="titulo13">
                SecureHo®            
            </h2>
    </div>
    </section>
    )
}
export default Login