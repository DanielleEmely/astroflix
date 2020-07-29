import React, { useState }from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

const valoresIniciais = {
  nome: '',
  descricao: '',
  cor: ''
}
function CadastroCategoria(){
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('Filmes');
  

  function setValue(chave, valor){
    setValues({
      ...values,
    [chave]: valor
    })

  }

  function handleChange(infosDoEvento){
    // abre o que ta vindo (depois do igual), e abre ele em uma variável
    const {getAttribute, value} = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
    );
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome} </h1>
        
        <form onSubmit={ function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais);
        } }>
          {/*state*/}
          <div>
            
            <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
             />
            
            <div>
              <label>
                Descrição:
                <textarea
                  type="text"
                  value={values.descricao}
                  name="descricao"
                  onChange={handleChange}
                />
              </label>
            </div>
            <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
             />

           {/* <div>
              <label>
                Cor:
                <input
                  type="color"
                  value={values.cor}
                  name="cor"
                  onChange={handleChange}
                />
              </label>
            </div>
            */}
          </div>
          <button>
            Cadastrar
          </button>
        </form>
        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }
  export default CadastroCategoria;