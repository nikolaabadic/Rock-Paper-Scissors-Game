const nameGenerator= () =>{
    const adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
    const nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];

    const number = Math.floor(Math.random()*30)
    return adjectives[number] + ' ' + nouns[number]
}

const init = ()=>{
    document.getElementById('score-l').textContent = '0'
    document.getElementById('score-r').textContent = '0'

    document.getElementById('image-l').src = 'img/image1.png'
    document.getElementById('image-r').src = 'img/image1.png'

    if(sessionStorage.getItem('playerName') === ''){
        document.getElementById('name-r').textContent = nameGenerator() + ' (you)'
    }else{
        document.getElementById('name-r').textContent = sessionStorage.getItem('playerName')
    }
    
    document.getElementById('name-l').textContent = nameGenerator()

    document.getElementById('heading').textContent='First to 3 wins!'
}
init()

const game = (r)=>{
    const l = parseInt(Math.floor(Math.random()*3)+1)

    const scoreL = parseInt(document.getElementById('score-l').textContent)
    const scoreR = parseInt(document.getElementById('score-r').textContent)

    if(scoreL ===3 || scoreR===3) return

    const imgL = document.getElementById('image-l')
    imgL.src='img/image' + l + '.png'

    const imgR = document.getElementById('image-r')
    imgR.src='img/image' + r + '.png'

    if(l===r) return;

    if(l + 1 === r || l === r + 2){
        document.getElementById('score-r').textContent = scoreR + 1
        if(scoreR===2){
            document.getElementById('heading').textContent= document.getElementById('name-r').textContent + ' won!'
            setTimeout(init,5000)
        }
    }else {
        document.getElementById('score-l').textContent = scoreL +1
        if(scoreL===2){
            document.getElementById('heading').textContent= document.getElementById('name-l').textContent + ' won!'
            setTimeout(init,5000)
        }
    }
}

document.getElementById('main-btn-rock').addEventListener('click', ()=> {game(1)})
document.getElementById('main-btn-paper').addEventListener('click', ()=> {game(2)})
document.getElementById('main-btn-scissors').addEventListener('click', ()=> {game(3)})
document.getElementById('main-btn-restart').addEventListener('click',init)