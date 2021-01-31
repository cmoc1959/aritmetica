function fin_contador () {
    pause(100)
    jugador = game.askForString("Intro tus iniciales (4)", 4)
    if (blockSettings.exists(jugador)) {
        if (blockSettings.readNumber(jugador) > info.score()) {
            blockSettings.writeNumber(jugador, info.score())
            game.splash("Enhorabuena " + jugador, "Nuevo record: " + info.score())
        }
    } else {
        blockSettings.writeNumber(jugador, info.score())
        game.splash("Bienvenido " + jugador, "Tu puntuación: " + info.score())
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    disminuye = 0
    primer_resultado(1)
    segundo_resultado(1)
    tercer_resultado(1)
})
function segundo_resultado (valor: number) {
    verifica_contador()
    if (posicion == 3) {
        contador += valor
        console.logValue("contador3", contador)
        tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundWest)
        sol21 = sprites.create(numeros[contador - 1], SpriteKind.Player)
        tiles.placeOnRandomTile(sol21, sprites.dungeon.darkGroundWest)
        sol3 = (contador - 1) * 10
    }
    if (posicion == 4) {
        contador += valor
        console.logValue("contador2", contador)
        tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundEast)
        sol22 = sprites.create(numeros[contador - 1], SpriteKind.Player)
        tiles.placeOnRandomTile(sol22, sprites.dungeon.darkGroundEast)
        sol4 = contador - 1
    }
    res2 = sol3 + sol4
    console.logValue("res2", res2)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Pone_cuadros()
    if (resultado1 == res1 && verificacion_1 == 0) {
        tiles.placeOnRandomTile(sprites.create(bien, SpriteKind.Player), sprites.builtin.forestTiles7)
        verificacion_1 = 1
        info.changeScoreBy(1)
    }
    if (resultado1 != res1 && verificacion_1 == 0) {
        tiles.placeOnRandomTile(sprites.create(mal, SpriteKind.Player), sprites.builtin.forestTiles7)
        info.changeLifeBy(-1)
    }
    if (resultado2 == res2 && verificacion_2 == 0) {
        tiles.placeOnRandomTile(sprites.create(bien, SpriteKind.Player), sprites.builtin.forestTiles11)
        verificacion_2 = 1
        info.changeScoreBy(1)
    }
    if (resultado2 != res2 && verificacion_2 == 0) {
        tiles.placeOnRandomTile(sprites.create(mal, SpriteKind.Player), sprites.builtin.forestTiles11)
        info.changeLifeBy(-1)
    }
    if (resultado3 == res3 && verificacion_3 == 0) {
        tiles.placeOnRandomTile(sprites.create(bien, SpriteKind.Player), sprites.builtin.forestTiles15)
        verificacion_3 = 1
        info.changeScoreBy(1)
    }
    if (resultado3 != res3 && verificacion_3 == 0) {
        tiles.placeOnRandomTile(sprites.create(mal, SpriteKind.Player), sprites.builtin.forestTiles15)
        info.changeLifeBy(-1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiempo == 0) {
        tiempo = 120
        comenzar = 1
    }
    verificacion_1 = 0
    verificacion_2 = 0
    verificacion_3 = 0
    borrar()
    primera_operacion()
    console.logValue("resultado1", resultado1)
    segunda_operacion()
    console.logValue("resultado2", resultado2)
    tercera_operacion()
    console.logValue("resultado3", resultado3)
    Pone_cuadros()
    borra_interior_cuadros()
    pause(200)
})
function primer_resultado (valor: number) {
    verifica_contador()
    if (posicion == 1) {
        contador += valor
        console.logValue("contador1", contador)
        tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
        sol11 = sprites.create(numeros[contador - 1], SpriteKind.Player)
        tiles.placeOnRandomTile(sol11, sprites.dungeon.darkGroundNorthWest0)
        sol1 = (contador - 1) * 10
    }
    if (posicion == 2) {
        contador += valor
        console.logValue("contador2", contador)
        tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
        sol12 = sprites.create(numeros[contador - 1], SpriteKind.Player)
        tiles.placeOnRandomTile(sol12, sprites.dungeon.darkGroundNorthEast0)
        sol2 = contador - 1
    }
    res1 = sol1 + sol2
    console.logValue("res1", res1)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    posicion += -1
    if (posicion == 0) {
        posicion = 6
    }
    if (posicion == 1) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
    }
    if (posicion == 2) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundWest)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
    }
    if (posicion == 3) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundEast)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundWest)
    }
    if (posicion == 4) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundEast)
    }
    if (posicion == 5) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
    }
    if (posicion == 6) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
    }
})
function borrar () {
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath1)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath2)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath3)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tileDarkGrass3)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath4)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath5)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath6)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tileDarkGrass2)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath7)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath8)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath9)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tileGrass3)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.dungeon.darkGroundWest)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.dungeon.darkGroundEast)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.builtin.forestTiles7)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.builtin.forestTiles11)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.builtin.forestTiles15)
}
function tercera_operacion () {
    opera = randint(0, 2)
    num31 = randint(0, 9)
    num32 = randint(0, 9)
    if (opera == 1) {
        while (num31 < num32) {
            num31 = randint(0, 9)
            num32 = randint(0, 9)
        }
        tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath8)
        ope_s3 = sprites.create(operaciones[opera], SpriteKind.Player)
        tiles.placeOnRandomTile(ope_s3, sprites.castle.tilePath8)
    } else {
        tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath8)
        ope_s3 = sprites.create(operaciones[opera], SpriteKind.Player)
        tiles.placeOnRandomTile(ope_s3, sprites.castle.tilePath8)
    }
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath7)
    ope13 = sprites.create(numeros[num31], SpriteKind.Player)
    tiles.placeOnRandomTile(ope13, sprites.castle.tilePath7)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath9)
    ope23 = sprites.create(numeros[num32], SpriteKind.Player)
    tiles.placeOnRandomTile(ope23, sprites.castle.tilePath9)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tileGrass3)
    ope_i3 = sprites.create(igual, SpriteKind.Player)
    tiles.placeOnRandomTile(ope_i3, sprites.castle.tileGrass3)
    if (opera == 0) {
        resultado3 = num31 + num32
    }
    if (opera == 1) {
        resultado3 = num31 - num32
    }
    if (opera == 2) {
        resultado3 = num31 * num32
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    posicion += 1
    if (posicion == 7) {
        posicion = 1
    }
    if (posicion == 1) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
    }
    if (posicion == 2) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
    }
    if (posicion == 3) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundWest)
    }
    if (posicion == 4) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundWest)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundEast)
    }
    if (posicion == 5) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundEast)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
    }
    if (posicion == 6) {
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .669999999999999966.
            66999..........99966
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            6999............9996
            66999..........99966
            .669999999999999966.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
        tiles.placeOnRandomTile(sprites.create(img`
            ..6666666666666666..
            .662222222222222266.
            66222..........22266
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            6222............2226
            66222..........22266
            .662222222222222266.
            ..6666666666666666..
            `, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
    }
})
function Pone_cuadros () {
    tiles.placeOnRandomTile(sprites.create(img`
        ..6666666666666666..
        .669999999999999966.
        66999..........99966
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        66999..........99966
        .669999999999999966.
        ..6666666666666666..
        `, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
    tiles.placeOnRandomTile(sprites.create(img`
        ..6666666666666666..
        .669999999999999966.
        66999..........99966
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        66999..........99966
        .669999999999999966.
        ..6666666666666666..
        `, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
    tiles.placeOnRandomTile(sprites.create(img`
        ..6666666666666666..
        .669999999999999966.
        66999..........99966
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        66999..........99966
        .669999999999999966.
        ..6666666666666666..
        `, SpriteKind.Player), sprites.dungeon.darkGroundWest)
    tiles.placeOnRandomTile(sprites.create(img`
        ..6666666666666666..
        .669999999999999966.
        66999..........99966
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        66999..........99966
        .669999999999999966.
        ..6666666666666666..
        `, SpriteKind.Player), sprites.dungeon.darkGroundEast)
    tiles.placeOnRandomTile(sprites.create(img`
        ..6666666666666666..
        .669999999999999966.
        66999..........99966
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        66999..........99966
        .669999999999999966.
        ..6666666666666666..
        `, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
    tiles.placeOnRandomTile(sprites.create(img`
        ..6666666666666666..
        .669999999999999966.
        66999..........99966
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        6999............9996
        66999..........99966
        .669999999999999966.
        ..6666666666666666..
        `, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
}
function primera_operacion () {
    opera = randint(0, 2)
    num11 = randint(0, 9)
    num12 = randint(0, 9)
    if (opera == 1) {
        while (num11 < num12) {
            num11 = randint(0, 9)
            num12 = randint(0, 9)
        }
        tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath2)
        ope_s = sprites.create(operaciones[opera], SpriteKind.Player)
        tiles.placeOnRandomTile(ope_s, sprites.castle.tilePath2)
    } else {
        tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath2)
        ope_s = sprites.create(operaciones[opera], SpriteKind.Player)
        tiles.placeOnRandomTile(ope_s, sprites.castle.tilePath2)
    }
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath1)
    ope1 = sprites.create(numeros[num11], SpriteKind.Player)
    tiles.placeOnRandomTile(ope1, sprites.castle.tilePath1)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath3)
    ope2 = sprites.create(numeros[num12], SpriteKind.Player)
    tiles.placeOnRandomTile(ope2, sprites.castle.tilePath3)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tileDarkGrass3)
    ope_i = sprites.create(igual, SpriteKind.Player)
    tiles.placeOnRandomTile(ope_i, sprites.castle.tileDarkGrass3)
    if (opera == 0) {
        resultado1 = num11 + num12
    }
    if (opera == 1) {
        resultado1 = num11 - num12
    }
    if (opera == 2) {
        resultado1 = num11 * num12
    }
}
function tercer_resultado (valor: number) {
    verifica_contador()
    if (posicion == 5) {
        contador += valor
        console.logValue("contador5", contador)
        tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
        sol31 = sprites.create(numeros[contador - 1], SpriteKind.Player)
        tiles.placeOnRandomTile(sol31, sprites.dungeon.darkGroundSouthWest0)
        sol5 = (contador - 1) * 10
    }
    if (posicion == 6) {
        contador += valor
        console.logValue("contador6", contador)
        tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
        sol32 = sprites.create(numeros[contador - 1], SpriteKind.Player)
        tiles.placeOnRandomTile(sol32, sprites.dungeon.darkGroundSouthEast0)
        sol6 = contador - 1
    }
    res3 = sol5 + sol6
    console.logValue("res3", res3)
}
function borra_interior_cuadros () {
    tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundNorthWest0)
    tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundNorthEast0)
    tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundWest)
    tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundEast)
    tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundSouthWest0)
    tiles.placeOnRandomTile(sprites.create(nada, SpriteKind.Player), sprites.dungeon.darkGroundSouthEast0)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    disminuye = 1
    primer_resultado(-1)
    segundo_resultado(-1)
    tercer_resultado(-1)
})
function segunda_operacion () {
    opera = randint(0, 2)
    num21 = randint(0, 9)
    num22 = randint(0, 9)
    if (opera == 1) {
        while (num21 < num22) {
            num21 = randint(0, 9)
            num22 = randint(0, 9)
        }
        tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath5)
        ope_s2 = sprites.create(operaciones[opera], SpriteKind.Player)
        tiles.placeOnRandomTile(ope_s2, sprites.castle.tilePath5)
    } else {
        tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath5)
        ope_s2 = sprites.create(operaciones[opera], SpriteKind.Player)
        tiles.placeOnRandomTile(ope_s2, sprites.castle.tilePath5)
    }
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath4)
    ope12 = sprites.create(numeros[num21], SpriteKind.Player)
    tiles.placeOnRandomTile(ope12, sprites.castle.tilePath4)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tilePath6)
    ope22 = sprites.create(numeros[num22], SpriteKind.Player)
    tiles.placeOnRandomTile(ope22, sprites.castle.tilePath6)
    tiles.placeOnRandomTile(sprites.create(sprites.builtin.forestTiles10, SpriteKind.Player), sprites.castle.tileDarkGrass2)
    ope_i2 = sprites.create(igual, SpriteKind.Player)
    tiles.placeOnRandomTile(ope_i2, sprites.castle.tileDarkGrass2)
    if (opera == 0) {
        resultado2 = num21 + num22
    }
    if (opera == 1) {
        resultado2 = num21 - num22
    }
    if (opera == 2) {
        resultado2 = num21 * num22
    }
}
info.onLifeZero(function () {
    game.over(true, effects.melt)
})
function lista_numeros_decimales () {
    cero = img`
        . 3 3 . 
        3 . . 3 
        3 . . 3 
        3 . . 3 
        3 . . 3 
        3 . . 3 
        . 3 3 . 
        `
    uno = img`
        . . 3 . 
        . 3 3 . 
        3 . 3 . 
        . . 3 . 
        . . 3 . 
        . . 3 . 
        . 3 3 3 
        `
    dos = img`
        . 3 3 . 
        3 . . 3 
        . . . 3 
        . . 3 . 
        . 3 . . 
        3 . . . 
        3 3 3 3 
        `
    tres = img`
        . 3 3 . 
        3 . . 3 
        . . . 3 
        . 3 3 . 
        . . . 3 
        3 . . 3 
        . 3 3 . 
        `
    cuatro = img`
        3 . . 3 
        3 . . 3 
        3 . . 3 
        . 3 3 . 
        . . . 3 
        . . . 3 
        . . . 3 
        `
    cinco = img`
        3 3 3 3 
        3 . . . 
        3 . . . 
        . 3 3 . 
        . . . 3 
        . . . 3 
        3 3 3 . 
        `
    seis = img`
        . 3 3 . 
        3 . . . 
        3 . . . 
        . 3 3 . 
        3 . . 3 
        3 . . 3 
        . 3 3 . 
        `
    siete = img`
        3 3 3 3 
        . . . 3 
        . . . 3 
        3 3 3 3 
        . . . 3 
        . . . 3 
        . . . 3 
        `
    ocho = img`
        . 3 3 . 
        3 . . 3 
        3 . . 3 
        . 3 3 . 
        3 . . 3 
        3 . . 3 
        . 3 3 . 
        `
    nueve = img`
        . 3 3 . 
        3 . . 3 
        3 . . 3 
        . 3 3 3 
        . . . 3 
        . . . 3 
        . . . 3 
        `
    numeros = [
    cero,
    uno,
    dos,
    tres,
    cuatro,
    cinco,
    seis,
    siete,
    ocho,
    nueve
    ]
}
function operacion () {
    signo_mas = img`
        . . . . . 
        . . 3 . . 
        . . 3 . . 
        3 3 3 3 3 
        . . 3 . . 
        . . 3 . . 
        . . . . . 
        `
    signo_menos = img`
        . . . . . 
        . . . . . 
        . . . . . 
        3 3 3 3 3 
        . . . . . 
        . . . . . 
        . . . . . 
        `
    signo_por = img`
        . . . . . 
        3 . . . 3 
        . 3 . 3 . 
        . . 3 . . 
        . 3 . 3 . 
        3 . . . 3 
        . . . . . 
        `
    operaciones = [signo_mas, signo_menos, signo_por]
}
function verifica_contador () {
    pause(100)
    if (contador == 0 && disminuye == 1) {
        contador = 2
    }
    if (contador > 9 && disminuye == 0) {
        contador = 0
    }
    if (contador == 1 && disminuye == 1) {
        contador = 11
    }
}
let signo_por: Image = null
let signo_menos: Image = null
let signo_mas: Image = null
let nueve: Image = null
let ocho: Image = null
let siete: Image = null
let seis: Image = null
let cinco: Image = null
let cuatro: Image = null
let tres: Image = null
let dos: Image = null
let uno: Image = null
let cero: Image = null
let ope_i2: Sprite = null
let ope22: Sprite = null
let ope12: Sprite = null
let ope_s2: Sprite = null
let num22 = 0
let num21 = 0
let sol6 = 0
let sol32: Sprite = null
let sol5 = 0
let sol31: Sprite = null
let ope_i: Sprite = null
let ope2: Sprite = null
let ope1: Sprite = null
let ope_s: Sprite = null
let num12 = 0
let num11 = 0
let ope_i3: Sprite = null
let ope23: Sprite = null
let ope13: Sprite = null
let operaciones: Image[] = []
let ope_s3: Sprite = null
let num32 = 0
let num31 = 0
let opera = 0
let sol2 = 0
let sol12: Sprite = null
let sol1 = 0
let sol11: Sprite = null
let comenzar = 0
let verificacion_3 = 0
let res3 = 0
let resultado3 = 0
let verificacion_2 = 0
let resultado2 = 0
let verificacion_1 = 0
let res1 = 0
let resultado1 = 0
let res2 = 0
let sol4 = 0
let sol22: Sprite = null
let sol3 = 0
let numeros: Image[] = []
let sol21: Sprite = null
let disminuye = 0
let jugador = ""
let tiempo = 0
let contador = 0
let posicion = 0
let mal: Image = null
let bien: Image = null
let nada: Image = null
let igual: Image = null
game.splash("Aprende aritmética", "Autor: Claudio Orts")
game.setDialogTextColor(9)
game.setDialogCursor(sprites.builtin.computer1)
game.setDialogFrame(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `)
let linea1 = "[A]- Nuevas operaciones comienzan los 120 segundos de tiempo     "
let linea2 = "[<-]- Mueve cursor izq.  "
let linea3 = "[->]- Mueve cursor dcha"
let linea4 = "[up]- Aumenta números                 "
let linea5 = "[down]- Disminuye números     "
let linea6 = "[B]- Corrige          "
let linea7 = "Cuando tengas todo bien pulsa [A]"
game.showLongText("" + linea1 + linea2 + linea3 + linea4 + linea5 + linea6 + linea7, DialogLayout.Full)
tiles.setTilemap(tilemap`level1`)
lista_numeros_decimales()
operacion()
info.setLife(3)
info.setScore(0)
igual = img`
    . . . . . 
    . . . . . 
    3 3 3 3 3 
    . . . . . 
    3 3 3 3 3 
    . . . . . 
    . . . . . 
    `
nada = img`
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    `
bien = img`
    . . . . . 
    . . . . . 
    . . . . 7 
    . . . 7 . 
    7 . 7 . . 
    . 7 . . . 
    . . . . . 
    `
mal = img`
    . . . . . 
    2 . . . 2 
    . 2 . 2 . 
    . . 2 . . 
    . 2 . 2 . 
    2 . . . 2 
    . . . . . 
    `
posicion = 0
contador = 0
tiempo = 0
borrar()
forever(function () {
    if (comenzar == 1) {
        tiempo += -1
        pause(1000)
        if (tiempo == 0) {
            fin_contador()
        }
        console.logValue("tiempo", tiempo)
    }
})
