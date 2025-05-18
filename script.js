const dicas = [
  {
    texto: "Plante árvores sempre que possível.",
    imagem: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Reduza o consumo de energia elétrica.",
    imagem: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Utilize transporte público, bicicleta ou caminhe.",
    imagem: "https://images.unsplash.com/photo-1543872084-c7bd3822856b?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Reduza, reutilize e recicle.",
    imagem: "https://images.unsplash.com/photo-1581578017421-1950aa46ecb0?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Apoie energias renováveis e limpas.",
    imagem: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Evite o desperdício de água.",
    imagem: "https://images.unsplash.com/photo-1612182062134-278e4f85c2f6?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Consuma menos carne e mais alimentos vegetais.",
    imagem: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Compre de marcas sustentáveis e locais.",
    imagem: "https://images.unsplash.com/photo-1602810315879-c2c67b7ad47d?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Desligue os aparelhos eletrônicos quando não estiver usando.",
    imagem: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60"
  },
  {
    texto: "Conscientize outras pessoas sobre o aquecimento global.",
    imagem: "https://images.unsplash.com/photo-1578496781985-971dd3f1e3f6?auto=format&fit=crop&w=800&q=60"
  }
];

const container = document.getElementById("lista-dicas");

dicas.forEach(dica => {
  const div = document.createElement("div");
  div.className = "dica";

  const img = document.createElement("img");
  img.src = dica.imagem;
  img.alt = dica.texto;

  const p = document.createElement("p");
  p.textContent = dica.texto;

  div.appendChild(img);
  div.appendChild(p);
  container.appendChild(div);
});
