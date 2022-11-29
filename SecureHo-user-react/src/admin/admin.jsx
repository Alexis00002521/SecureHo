// import "./admin.css"

function Admin() {
    return (
        <>
            <section id="main1">
                <div class="bas">
                    <img class="basinicio" src="/img/baseline_account_circle_black_24dp.png" alt="" />
                </div>

                <div id="visitor" class="menu-collapsed">

                    <div class="navbar">
                        <button onClick={() => {
                            const menu = document.querySelector('#visitor');
                            menu.classList.toggle("menu-expanded");
                            menu.classList.toggle("menu-collapsed");
                            document.querySelector('body').classList.toggle('body-expanded')

                        }}
                            class="btns" >< img src="/img/baseline_menu_black_24dp.png" alt="baseline" /></button>
                        <div id="imgcenternav">
                            <a href="/login/admin"><div class="item"><img class="icon1" src="/img/home_FILL0_wght400_GRAD0_opsz48.png" alt="home" /><span>home</span></div></a>
                            <a href="/login/admin/seccion"><div class="item"><img class="icon1" src="/img/person_add_FILL0_wght400_GRAD0_opsz48.png" alt="fav" /><span>favorites</span></div></a>
                            <a href="/login/admin/seccion/database"><div class="item" ><img class="icon1" src="/img/database_FILL0_wght400_GRAD0_opsz48.png" alt="time" /><span>Recently</span></div></a>
                        </div>
                        <img class="logo2" src="/img/logooo-02.png" alt="logo" />
                    </div>
                </div>

                <div id="welcontainer">
                </div>
                <h2 class="title"> Welcome to SecureHo </h2>
                <div id="welcome">
                    <p id="pwelcome">
                        You have some tools to add people for your aplication, you need to put the information of some people and atomatically is generated one key, the keys are uniques, and you have to be careful with this information. You have access to the database, information
                        of people, entry and exit to the residential, you can explore the database.
                    </p>

                    <a href="/login/admin/seccion">
                        <button id="btnwel">
                            Let's start
                        </button>
                    </a>
                </div>
            </section>


            
        </>
    )
}
export default Admin