import Post from "../Posts";

const Article = () => {
  // fazer uma requisição pra uma API, onde ela vai me passar
  // estas informações, aí ao invés de escrever aqui, eu crio variáveis
  // que serão passadas para o código por meio de atributos.

  return (
    <section className="container">
      <h1>Artigos</h1>
      <div className="mt-5 container-posts">
        <Post subtitle="tecnologia" title="O guia definitivo do Blog.">
          Lorem Ipsum1 is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Post>
        <Post subtitle="fotografia" title="Quais as melhores câmeras em 2021">
          Lorem Ipsum2 is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Post>
        <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria.">
          Lorem Ipsum3 is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Post>
      </div>
    </section>
  );
};

export default Article;
