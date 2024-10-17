const valordeinput = () => {
  const inputElement = document.getElementById("tarefa");
  const valor = inputElement.value;
  if (valor) {
    const usuario = !!paragrafo.find((tarefa) => tarefa === valor);
    if (usuario) {
      alert("Essa tarefa ja existe");
    } else {
      paragrafo.push(valor);
      let check = `<input type="checkbox" name="checkbox" id="${paragrafo.length}"></input>`;
      const container = document.getElementById("paragrafos");
      container.innerHTML = ""; // essa linha eu adicionei para quando salvar outro elemento, não repetir oq já estava lá
      paragrafo.forEach((e) => {
        // o probolema estava no document.write()
        //Esse método substitui todo o conteúdo da página quando chamado
        // é melhor usar métodos como innerHTML para adicionar novos elementos à página.
        //document.write(e + check + "<br>");
        container.innerHTML += e + " " + check + "<br>";
      });
    }
  } else alert("Digite a tarefa");
};

const paragrafo = []; // a lista começa vazia

botao = document.getElementById("botao");
botao.addEventListener("click", valordeinput);
