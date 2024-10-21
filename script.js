const imagens = [
	"imagens/imagem-slide-1.png",
	"imagens/imagem-slide-2.png",
	"imagens/imagem-slide-3.png"
]

let index = 0

const imagemSlide = document.getElementById('imagem-slide')

function mudarImagem(){
	index = (index + 1) % imagens.length

	imagemSlide.style.opacity = 0

	setTimeout(() =>{
		imagemSlide.src = imagens[index]
		imagemSlide.style.opacity = 1
	}, 500)
}

setInterval (mudarImagem, 5000)


VanillaTilt.init(document.querySelector(".copo"), {
	max: 25,
	speed: 400
});