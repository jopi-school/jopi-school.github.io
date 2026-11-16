var grupo = 0;
document.getElementById("Devs").innerHTML = `Desenvolvedores: integrantes do gupro ${grupo.value}`;

function Recarregar(){
    document.getElementById("pop_def").innerHTML = "";
    document.getElementById("pop_origem").innerHTML = "";
    document.getElementById("pop_impacto").innerHTML = "";
    document.getElementById("pop_combate").innerHTML = "";
}

function Def() {
    let content = "Uma dimensão do racismo oriunda da estrutura da sociedade, sobretudo das instituições sociais. O racismo estrutural manifesta sua violência de forma institucional por meio da política, da cultura, da atuação do Estado e das decisões e ações de agentes institucionais.";
    let saida = document.getElementById("pop_def");
    saida.innerHTML = content;
}

function Origem() {
    let content = "No cenário brasileiro, o debate sobre o tema ganhou grande projeção popular a partir das contribuições do jurista e filósofo Silvio Almeida. Em sua obra: Racismo Estrutural, o autor argumenta que a raça é uma categoria histórica construída para justificar a exploração econômica e a divisão do poder. Segundo Almeida, o racismo é indissociável do desenvolvimento do capitalismo e da formação do Estado moderno. No caso do Brasil, a transição do regime escravocrata para o trabalho livre no final do século XIX ocorreu sem que fossem criadas políticas de integração social, habitacional ou econômica para a população liberta.";
    let saida = document.getElementById("pop_origem");
    saida.innerHTML = content;
}

function Impactos() {
    let content = "O racismo estrutural acaba por criar um ambiente de intensas desigualdades sociais, políticas e econômicas. Nesse sentido, ao considerar os negros como inferiores socialmente, o racismo estrutural cria condições que impedem a inserção desse grupo social nos espaços sociais. Esse processo encontra respaldo na saúde, na atuação das forças de segurança pública, na educação, entre outras.";
    let saida = document.getElementById("pop_impacto");
    saida.innerHTML = content;
}


function Combate() {
    let content = "O combate ao racismo estrutural deve compreender um esforço conjunto, não somente das instituições sociais como também da sociedade. Em razão disso, pode-se observar, no campo das políticas públicas, a criação de instrumentos que permitam a participação de pessoas negras em espaços como a educação, a saúde e a economia.";
    let saida = document.getElementById("pop_combate");
    saida.innerHTML = content;
}





