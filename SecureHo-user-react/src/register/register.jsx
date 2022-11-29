import "./register.css"

function Register() {

  return (
    <section id="Signup">
        <div class="datos">
            <h2>
                Sign Up
            </h2>
            <div id="inpcontainer">
                <input class="input" placeholder="Your name" type="text"/>
                <input class="input" placeholder="Your Email" type="text"/>
                <input class="input" placeholder="Password" type="password"/>
                <input class="input" placeholder="Repeat your password" type="password"/>
                <input class="input" placeholder="Your token" type="text"/>
            </div>
            <div id="icocontainer">
                <img class="iconos" src="./src/assets/img/baseline_perm_identity_black_24dp.png" alt="person"/>
                <img class="iconos" src="./src/assets/img/mail_FILL0_wght400_GRAD0_opsz48.png" alt="sobre"/>
                <img class="iconos" src="./src/assets/img/baseline_lock_black_24dp.png" alt="candado"/>
                <img class="iconos" src="./src/assets/img/baseline_lock_black_24dp.png" alt="candado"/>
                <img class="iconos" src="./src/assets/img/baseline_key_black_24dp.png" alt="key"/>
            </div>
            <button class="btnorigin">
              Register
          </button>
        </div>
        <img class="imgsignup" src="./src/assets/img/sign up.jpg" alt="img"/>

        <div class="logocontainer">
            <img class="img2" src="./src/assets/img/logooo-02.png" alt="logo"/>
            <h2 id="titulo13">
                SecureHo®
            </h2>
        </div>
    </section>
  )
}

export default Register