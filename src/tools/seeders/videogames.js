const Games = require('../../models/videogames.models')

Games.bulkCreate([
    {
        name: "The Lost Wild",
        description: "Recogiendo la idea de Alien: Isolation y trasladándola al mundo de los dinosaurios, The Lost Wild nos introduce en una aventura de terror y supervivencia en la que el sigilo y los objetos que vayamos recogiendo resultarán claves para sobrevivir a los dinos.",
        relaseDate: "2001/10/01",
        urlImg: "https://i.playground.ru/e/EsJ7XovfsDEz80cZlWFANA.png",
        companyId: "1"
    },
    {
        name: "Ashen",
        description: "El juego se desarrolla en un mundo sin sol y cuenta la historia de un personaje que busca un hogar. El juego se describe como que incluye exploración de mundo abierto, cooperación o competencia con otros jugadores y combate con monstruos en el mundo. El juego se presenta en una vista en tercera persona, con una presentación de gráficos sombreados en celdas silenciados.",
        relaseDate: "2018/12/07",
        urlImg: "https://media.vandal.net/m/32704/ashen-201812711272231_7.jpg",
        companyId: "1"
    },
    {
        name: "Condemned 2: Bloodshot",
        description: "El juego inicia 11 meses después de la primera entrega, en la cual Ethan Thomas supuestamente había matado al asesino SKX (Serial Killer X o Asesino en serie X).Para ese entonces Ethan Thomas abandona la policía y se convierte en un vagabundo alcohólico.",
        relaseDate: "2008/03/18",
        urlImg: "https://segaretro.org/images/b/b8/Prima%27sOfficialGameGuideCondemned2BloodshotFront.png",
        companyId: "2"
    },
    {
        name: "Yakuza 6: The Song of Life",
        description: "Yakuza 6 es un videojuego de acción y aventura con elementos de rol, ambientado en un mundo abierto y jugado desde una perspectiva en tercera persona. Similar a anteriores títulos de la saga, el juego mezcla secciones de combate y exploración en un entorno con múltiples actividades para realizar. La historia se ambienta en las ciudades ficticias de Kamurocho y Onomichi, y está protagonizada por Kazuma Kiryu, personaje principal de la saga.",
        relaseDate: "2018/04/17",
        urlImg: "https://ramenparados.com/wp-content/uploads/2021/11/game-steam-yakuza-6-the-song-of-life-cover.jpeg",
        companyId: "2"
    },
    {
        name: "Diablo III: Reaper of Souls",
        description: "Después de que Diablo es derrotado por Nephalem (el personaje del jugador), Tyrael recupera la Black Soulstone que contiene la esencia de los siete Great Evils. Sabiendo que es demasiado peligroso dejarlo en manos de mortales o ángeles, él y seis Horadrim llevan la piedra de alma negra al Santuario e intentan sellarla donde nunca se podrá encontrar: en lo profundo de la tumba de Rakkis, el primer rey de Westmarch, el reino establecido al oeste de Khanduras.",
        relaseDate: "2014/03/25",
        urlImg: "https://gameranx.com/wp-content/uploads/2016/11/Diablo-3-1024x640.jpg",
        companyId: "3"
    },
    {
        name: "World of Warcraft: Shadowlands",
        description: "Shadowlands presenta cinco zonas principales: Bastión, Ardenweald, Revendreth, Maldraxxus y las Fauces. En el centro está la ciudad de Oribos, que funciona como el principal centro de jugadores de forma similar a Shattrath City en Terrallende en The Burning Crusade o Dalaran en Wrath of the Lich King y Legion . Hay cuatro mazmorras nuevas para subir de nivel, cuatro más en el nivel máximo y una nueva incursión. Además, se introdujo una nueva mazmorra sin fin llamada Torghast, Tower of the Damned, tanto para jugar en solitario como en grupo.",
        relaseDate: "2020/11/23",
        urlImg: "https://static.wikia.nocookie.net/doblaje/images/f/f5/Shadowlands_box_cover.jpg/revision/latest?cb=20210822021737&path-prefix=es",
        companyId: "3"
    },
    {
        name: "Halo: Combat Evolved",
        description: "Halo: Combat Evolved, comúnmente conocido como Halo, Halo CE o Halo 1, es un videojuego de disparos en primera persona desarrollado por Bungie Studios y publicado por Microsoft Game Studios el 15 de noviembre de 2001, a manera de título debut de la videoconsola Xbox y de la cual es considerado como su aplicación asesina. Es el primer juego de la franquicia Halo.",
        relaseDate: "2001/11/15",
        urlImg: "https://static.wikia.nocookie.net/halo/images/2/2b/Portada_Halo_CE.jpeg/revision/latest?cb=20150822195719&path-prefix=es",
        companyId: "4"
    },
    {
        name: "Saints Row IV",
        description: "La naturaleza de mundo abierto del videojuego permite a los jugadores explorar libremente una simulación de la ciudad ficticia de Steelport mientras completan misiones principales y secundarias en su tiempo libre. También incorpora elementos de ciencia ficción y continúa la reputación de la serie de parodia exagerada. La historia para un jugador sigue al mismo personaje creado por jugadores de los juegos anteriores, que se convierte en presidente de los Estados Unidos después de frustrar una amenaza terrorista. Cinco años después de su gobierno, se encuentran atrapados en la simulación de Steelport junto con miembros de su pandilla, los 3rd Street Saints, después de que un imperio alienígena conocido como los Zin atacara la Tierra y los capturara. Con la ayuda de algunos santos que lograron escapar y piratearon la simulación para darles superpoderes, el jugador intenta rescatar a sus amigos capturados, escapar de la simulación y derrotar a los Zin.",
        relaseDate: "2013/18/20",
        urlImg: "https://cdn1.epicgames.com/offer/151e56468b5049628653dedab7c88007/EGS_SaintsRowIVReElected_DeepSilverVolition_S2_1200x1600-7607305fd444a7dab171d4404dbe7ff0",
        companyId: "4"
    },
    {
        name: "The Legend of Zelda: Ocarina of Time",
        description: "La historia del juego se enfoca en el joven héroe Link, quien emprende una aventura en el reino de Hyrule para detener a Ganondorf, rey de la tribu Gerudo, antes de que encuentre la Trifuerza, una reliquia sagrada capaz de concederle cualquier deseo a su poseedor. Para ello, debe viajar a través del tiempo y explorar varios templos con el fin de despertar a algunos sabios que tienen el poder para aprisionar de forma definitiva a Ganondorf. Se ha de mencionar que la música juega un papel muy importante en la trama del juego, puesto que el jugador tiene que aprender a tocar varias canciones con una ocarina.",
        relaseDate: "1998/11/21",
        urlImg: "https://www.nintenderos.com/wp-content/uploads/2022/08/Ocarina-of-time.jpg",
        companyId: "5"
    },
    {
        name: "Super Smash Bros",
        description: "En el modo multijugador, hasta cuatro personas pueden jugar juntas, siendo las reglas específicas de cada encuentro predeterminadas por los jugadores. Hay dos tipos distintos que pueden ser escogidos: tiempo, donde la persona con menos KOs al final del tiempo predeterminado gana, y vidas, donde cada persona tiene un número predeterminado de vidas, y una vez que las pierde todas es eliminada. El modo de un jugador incluye un modo arcade que siempre sigue la misma serie de oponentes, aunque el jugador puede cambiar el nivel de dificultad del juego. Otros modos de un jugador existen, como el modo de práctica y diversos minijuegos, incluyendo Break the Targets (Rompe los objetivos) y Board the Platforms (Sube a las plataformas). Todos estos modos fueron incluidos en la secuela Super Smash Bros. Melee, excepto por la primera.",
        relaseDate: "1999/01/21",
        urlImg: "https://assets-prd.ignimgs.com/2022/02/28/ssb-ignedit-dontsteal-1646008911034.jpg",
        companyId: "5"
    }
])