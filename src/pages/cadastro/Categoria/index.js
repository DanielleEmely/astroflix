import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const valoresIniciais = {
  nome: '',
  descricao: '',
  cor: '',
};
function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('Filmes');

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  /* function handleChange(infosDoEvento) {
    // abre o que ta vindo (depois do igual), e abre ele em uma variável
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  } */

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDiServidor) => {
        const resposta = await respostaDiServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        {/* state */}
        <div>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

        </div>
        <Button>
          Cadastrar
        </Button>
        {/*<div>
          Loading...
        </div>*/}
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
