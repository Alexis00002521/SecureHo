function Database(){
    return(
<section id="adminn">
                <div id="admin-main">
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
                                <a href="/login/admin"><div id="f23" class="item"><img class="icon1" src="/img/home_FILL0_wght400_GRAD0_opsz48.png" alt="home" /><span>home</span></div></a>
                                <a href="/login/admin/seccion"><div class="item"><img class="icon1" src="/img/person_add_FILL0_wght400_GRAD0_opsz48.png" alt="fav" /><span>favorites</span></div></a>
                                <a href="/login/admin/seccion/database"><div class="item" ><img class="icon1" src="/img/database_FILL0_wght400_GRAD0_opsz48.png" alt="time" /><span>Recently</span></div></a>
                            </div>
                            <img class="logo2" src="/img/logooo-02.png" alt="logo" />
                        </div>
                        <div>
                        <div class="Search">
                            <h1>Database</h1>
                            <div>
                                <input class="inp-search" type="text" />
                                <button class="btn-search">Reload</button>
                                <button class="btn-search">Edit</button>
                            </div>
                        </div>
                        <div class="database">
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    </div>
                    </div>

                </div>

            </section>
    )
}

export default Database