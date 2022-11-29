function Sec_OP(){
    return(
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
                                        
                            console.log('fue pulsado');
                        }}
                        class="btns" >< img src="/img/baseline_menu_black_24dp.png" alt="baseline"/></button>
                        <div id="imgcenternav">
                            <a href="/login/admin"><div id="f23" class="item"><img class="icon1" src="/img/home_FILL0_wght400_GRAD0_opsz48.png" alt="home"/><span>home</span></div></a>
                            <a href="/login/admin/seccion"><div class="item"><img class="icon1" src="/img/person_add_FILL0_wght400_GRAD0_opsz48.png" alt="fav"/><span>favorites</span></div></a>
                            <a href="/login/admin/seccion/database"><div class="item"><img class="icon1" src="/img/database_FILL0_wght400_GRAD0_opsz48.png" alt="time"/><span>Recently</span></div></a>
                        </div>
                        <img class="logo2" src="/img/logooo-02.png" alt="logo"/>
                    </div>
            </div>

        <div id="continfo2">
            <h2> Info of resident </h2>
            <div id="inpcontainer">
                <input class="input2" placeholder=" Name" type="text"/>
                <input class="input2" placeholder=" Telephone number" type="text"/>
                <input class="input2" placeholder=" DUI" type="text"/>
                <input class="input2" placeholder=" Number of house" type="text"/>
                <input class="input2" placeholder=" E-mail" type="text"/>
            </div>
            <button class="btnorigin">
                      Register
                  </button>
        </div>

        <div id="code">
            <h2>
                Your codekey
            </h2>
            <div id="key">
                <label> The key of John Doe </label>
                <div id="linesmall"></div>
                <label> 77dmjkg-87fgbsxkj-kdlsoau0 </label>
            </div>
        </div>
    </section>
    )
}

export default Sec_OP