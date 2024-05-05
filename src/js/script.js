document.querySelectorAll("pre").forEach((pre) => {
  // Verifica se a classe 'ignore' está presente para pular esse <pre>
  if (pre.classList.contains("ignore")) {
    return; // Sai sem aplicar a transformação
  }
  const content = pre.innerHTML.trim(); // Remover espaços no início e no final
  const lines = content.split("\n").filter((line) => line.trim() !== ""); // Remove linhas vazias

  let lineNumbersDiv = '<div class="line-numbers">';

  for (let i = 1; i <= lines.length; i++) {
    lineNumbersDiv += `<div>${i}</div>`;
  }

  lineNumbersDiv += '</div>'; // Fechar a div dos números de linha

  // Reposicionar a numeração e o conteúdo do código
  pre.innerHTML = lineNumbersDiv + `<code>${content}</code>`;
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function ajustarAlturaIframe() {
  const iframe = document.getElementById("iframeExample");
  if (iframe.contentWindow && iframe.contentWindow.document.body) {
    const bodyHeight = iframe.contentWindow.document.body.scrollHeight;
    iframe.style.height = bodyHeight + "px"; // Ajusta a altura do iframe conforme o conteúdo
  }
}