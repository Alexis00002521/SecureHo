function Resident(){
    return(
        <>
        <section id="main1">
        <div class="bas">
            <img class="basinicio" src="/img/baseline_account_circle_black_24dp.png" alt=""/>
        </div>

        <div id="visitor" class="menu-collapsed">

                    <div class="navbar">
                        <button onClick={()=>{
                            const menu =  document.querySelector('#visitor');
                            menu.classList.toggle("menu-expanded");
                            menu.classList.toggle("menu-collapsed");
                            document.querySelector('body').classList.toggle('body-expanded')
                                    
                        }}
                        class="btns" >< img src="/img/baseline_menu_black_24dp.png" alt="baseline"/></button>
                        <div id="imgcenternav">
                            <a href="/login/resident"><div id="f23" class="item"><img class="icon1" src="/img/home_FILL0_wght400_GRAD0_opsz48.png" alt="home"/><span>home</span></div></a>
                            <a href="/favorites/resident"><div class="item"><img class="icon1" src="/img/favorite_FILL0_wght400_GRAD0_opsz48.png" alt="fav"/><span>favorites</span></div></a>
                            <a href="/recently/resident"><div class="item" ><img class="icon1" src="/img/timelapse_FILL0_wght400_GRAD0_opsz48.png" alt="time"/><span>Recently</span></div></a>
                        </div>
                        <img class="logo2" src="/img/logooo-02.png" alt="logo"/>
                    </div>
            </div>

        <div id="continfo">
            <h2> Info of your visitor </h2>
            <div id="inpcontainer">
                <input class="input2" placeholder=" Name" type="text"/>
                <input class="input2" placeholder=" Telephone number" type="text"/>
                <input class="input2" placeholder=" DUI" type="text"/>
                <input class="input2" placeholder="Number of house" type="text"/>
                <input class="input2" placeholder="Placa" type="text"/>
            </div>
            <button class="btnorigin">
                      Register
                  </button>
        </div>
    </section>

    <section id="mainqr">
        <div class="bas">
            <img class="basinicio" src="/img/baseline_account_circle_black_24dp.png" alt=""/>
        </div>

        <div id="visitor" class="menu-collapsed">

                    <div class="navbar">
                        <button onClick={()=>{
                            const menu =  document.querySelector('#visitor');
                            menu.classList.toggle("menu-expanded");
                            menu.classList.toggle("menu-collapsed");
                            document.querySelector('body').classList.toggle('body-expanded')
                                    
                        }}
                        class="btns" >< img src="/img/baseline_menu_black_24dp.png" alt="baseline"/></button>
                        <div id="imgcenternav">
                            <div id="f23" class="item"><img class="icon1" src="/img/home_FILL0_wght400_GRAD0_opsz48.png" alt="home"/><span>home</span></div>
                            <div class="item"><img class="icon1" src="/img/favorite_FILL0_wght400_GRAD0_opsz48.png" alt="fav"/><span>favorites</span></div>
                            <div class="item"><img class="icon1" src="/img/timelapse_FILL0_wght400_GRAD0_opsz48.png" alt="time"/><span>Recently</span></div>
                        </div>
                        <img class="logo2" src="/img/logooo-02.png" alt="logo"/>
                    </div>
            </div>

        <div id="qrcontainer">
            <h2 class="titleqr">
                Share your QR
            </h2>
            <img src="/img/qr.png" alt="qr"/>
            <p id="pqr">
                You have to be careful when sharing this QR code, since it is generated with the information of your visitor and it is the only way with which he will be able to enter
            </p>
            <button class="btnqr">
              Share
          </button>
        </div>
    </section>

        </>
    )
}
export default Resident