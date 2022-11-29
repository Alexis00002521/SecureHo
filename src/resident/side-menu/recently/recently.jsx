function RecentlyResident(){
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

        <div id="favcontainer">
        </div>
        <h2 class="title"> Recently </h2>
        <div id="inpcontainerfav">
            <div id="cardfav">
                <img class="face" src="/img/face_FILL0_wght400_GRAD0_opsz48.png" alt=""/>
                <button class="btnfav">
                          Report
                      </button>
            </div>
            <div class="line">

            </div>
            <div id="txtcont">
                <label name="txtarea" id="label"> John Doe </label>
                <label name="txtarea" id="label"> 123456789 </label>
                <label name="txtarea" id="label"> 057894-9 </label>
            </div>
        </div>

        <div id="inpcontainerfav1">
            <div id="cardfav">
                <img class="face" src="/img/face_FILL0_wght400_GRAD0_opsz48.png" alt=""/>
                <button class="btnfav">
                          Report
                      </button>
            </div>
            <div class="line">

            </div>
            <div id="txtcont">
                <label name="txtarea" id="label"> John Doe </label>
                <label name="txtarea" id="label"> 123456789 </label>
                <label name="txtarea" id="label"> 057894-9 </label>
            </div>
        </div>

    </section>

    )
}

export default RecentlyResident