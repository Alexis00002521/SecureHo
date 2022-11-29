import './home.css';

function Home() {
    return (
        <>

            <div class="Home-container">
                <section id="container">
                    <div class="opacity">

                    </div>
                    <div id="inicio">
                        <img class="img" src="./src/assets/img/logoblanco.png" alt="logo" />
                        <h2 id="titulo1">
                            SecureHo®
                        </h2>
                        <h3 class="iniciopar">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, impedit est maxime reiciendis doloremque facilis voluptate vel nostrum suscipit voluptatem? Ut consequatur mollitia quo quibusdam ea unde quos deserunt explicabo?
                        </h3>
                        <a class="btn" href='#login'>
                            Lets get start
                        </a>
                    </div>
                </section>


                <section id="login">
                    <div class="opacity">
                    </div>
                    <div class="btncont">
                        <a href="/login" target="_blank">
                            <button class="btn">
                                LOG IN
                            </button>
                        </a>
                        <a href="/register" target="_blank">
                            <button class="btn">
                                REGISTER
                            </button>
                        </a>

                    </div>
                    <div id="txt">
                        <p class="iniciopar">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio enim tempora ea unde quo cumque officiis doloremque ut? Quae nulla velit libero repellat, recusandae unde minus aliquam perferendis laboriosam! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Est natus molestiae sapiente optio ea, fugiat tempore accusamus ratione maiores eligendi aliquam quae, numquam dignissimos magnam doloremque. Earum architecto ea assumenda.
                        </p>
                    </div>
                    <div class="logocontainer">
                        <img class="img2" src="./src/assets/img/logoblanco.png" alt="logo" />
                        <h2 id="titulo12">
                            SecureHo®
                        </h2>
                    </div>
                </section>

            </div>

        </>
    )
}

export default Home