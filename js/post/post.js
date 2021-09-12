var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var blogBatata = JSON.parse(this.responseText);
    document.getElementById("post").innerHTML = `
        <h3>POSTAGEM DO BLOG</h3>
        <p>Blog: ${blogBatata.blog}</p> 

        <h4>Todos os Post do site</h4>    
        <table>
            <tr>
                <th>id</th>
                <th>Data</th>
                <th>Titulo</th>
                <th>Noticia - Postagem</th>
                <th>Imagem</th>
            </tr>
            ${pegarPosts()}
        </table>
        <br/>    
        <hr/>   
    `
    function pegarPosts() {
      let postArray = blogBatata.postagem;
      let textTable = "";
      for (let i in postArray) {
        textTable += `
                    <tr>  
                        <td>${postArray[i]['id']}</td>
                        <td>${postArray[i]['data']}</td>
                        <td>${postArray[i]['titulo']}</td> 
                        <td>${postArray[i]['texto']}</td> 
                         <td><img src="/imgs/${postArray[i]['imagem']}" alt=""></td> 
                    </tr>
           `
      }
      return textTable;
    }
  }
};

xmlhttp.open("POST", "postagem.json", true);
xmlhttp.send();