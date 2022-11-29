function Favorites(){
    return(
        <section id="main1">
        <div class="bas">
            <img class="basinicio" src="/img/baseline_account_circle_black_24dp.png" alt=""/>
        </div>

        <div id="visitor">
            <div class="navbar">
                <img class="icon0" src="/img/baseline_menu_black_24dp.png" alt="baseline"/>
                <div id="imgcenternav">
                    <img class="icon1" src="/img/home_FILL0_wght400_GRAD0_opsz48.png" alt="home"/>
                    <img class="icon1" src="/img/favorite_FILL0_wght400_GRAD0_opsz48.png" alt="fav"/>
                    <img class="icon1" src="/img/timelapse_FILL0_wght400_GRAD0_opsz48.png" alt="time"/>
                </div>
                <img class="logo2" src="/img/logooo-02.png" alt="logo"/>
            </div>
        </div>

        <div id="favcontainer">
        </div>
        <h2 class="title"> Favorites </h2>
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

export default Favorites