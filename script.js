    async function buscaEndereco() { ///Esse async é para melhor chamada das informações
      const msgErro = document.getElementById('erro');
      msgErro.innerHTML = "";
        
        try { ////O TRY precisa ser usado junto com o Catch
        
        const consultaCep = await fetch("https://viacep.com.br/ws/01001000/json/")
        const consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro) {
            throw Error("CEP não encontrado!");
        }
        const cidade = document.getElementById("cidade");
        const logradouro = document.getElementById("endereco");
        const estado = document.getElementById("estado"); 
        const numero = document.getElementById("numero"); 
        const complemento = document.getElementById("complemento"); 
        const bairro = document.getElementById("bairro"); 
        
        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        numero.value = consultaCepConvertida.gia;
        complemento.value = consultaCepConvertida.complemento;
        bairro.value = consultaCepConvertida.bairro;
        
        console.log(consultaCepConvertida)//// O Await facilita muito, não precisando ser usado o then
       
      } catch (erro) {
        msgErro.innerHTML =`<p>CEP Inválido. Tente novamente!</p>`
        console.log(erro);
      }
    }
   

//buscaEndereco();
   ///A Promise retorna ou then quando ela valida, ou catch quando dá ruim
   
const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
///focusout é grande tira o mouse do campo de digitação, e assim, o envio das informações é automático!