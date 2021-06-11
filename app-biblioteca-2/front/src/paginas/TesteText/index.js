import './style.css';
import api from '../services/api';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

/*
 * Constante de estilo dos campos do form
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

/**
 * função principal
 * 
 * @returns 
 */
function LayoutTextFields() {

  // constantes de estilos
  const classes = useStyles();

  // constantes que recebem os estilos
  const [idlivro, setId] = useState('');
  const [nome, setNome] = useState('');
  const [editora, setEditora] = useState('');
  const [isbn, setIsbn] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [assunto, setAssunto] = useState('');
  const [autor, setAutor] = useState('');

  async function handleCadastro(e) {
    e.preventDefault();

    const dados = {
        idlivro,
        nome,
        editora,
        isbn,
        quantidade,
        assunto,
        autor
    };

    try {
        console.log(dados);
        const response = await api.put('book', dados);
        const id = response.data.id;
        console.log(response.data);
        alert("Inserido com sucesso!");
    } catch (error) {
        alert("Erro ao Inserir " + error.message);            
    }
  }

    /*
    */
    return (
      <div className={classes.root}>
        <form onSubmit={handleCadastro}>
          <div class = "form">
            <TextField
              label="Id"
              id="margin-none"
              fullWidth
              className={classes.textField}
              helperText="Id do Livro"
              value={idlivro}
              onChange={e => setId(e.target.value)}
            />
            <TextField
              label="Nome"
              id="margin-none"
              fullWidth
              className={classes.textField}
              helperText="O nome do livro"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <TextField
              label="Editora"
              id="margin-none"
              fullWidth
              className={classes.textField}
              helperText="Editora do livro"
              value={editora}
              onChange={e => setEditora(e.target.value)}
            />
            <TextField
              label="ISBN"
              id="margin-none"
              fullWidth
              className={classes.textField}
              helperText="'Padrão Internacional de Numeração de Livro'"
              value={isbn}
              onChange={e => setIsbn(e.target.value)}
            />
            <TextField
              label="Quantidade"
              id="margin-none"
              fullWidth
              className={classes.textField}
              helperText="Quantidade"
              value={quantidade}
              onChange={e => setQuantidade(e.target.value)}
            />
            <TextField
              label="Assunto"
              id="margin-none"
              fullWidth
              className={classes.textField}
              helperText="Assunto do livro"
              value={assunto}
              onChange={e => setAssunto(e.target.value)}
            />
            <TextField
              label="Autor"
              id="margin-none"
              fullWidth
              className={classes.textField}
              helperText="Autor do livro"
              value={autor}
              onChange={e => setAutor(e.target.value)}
            />
          </div>

          <div>
            <Button color="secondary" className="button" type="submit">Cadastrar livro</Button>
          </div>
        </form>
      </div>
    );
}

export default LayoutTextFields;
