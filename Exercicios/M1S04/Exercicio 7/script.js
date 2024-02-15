const funcaoCumprimentar = (hora) => {
    if (hora >= 0 && hora <= 12) {
        console.log("BOM DIA")
    } else if (hora > 12 && hora <= 18) {
        console.log("BOA TARDE")
    } else {
        console.log("BOA NOITE")
    }
}

funcaoCumprimentar(13)
funcaoCumprimentar(6)
funcaoCumprimentar(22)