import React, {useState} from 'react';
import api from '../services/api';

function CadastroLivro() {

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
            const response = await api.put/*post*/('book', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("Inserido com sucesso!");
            // history.push('/');
        } catch (error) {
            alert("Erro ao Inserir " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Livro</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Id do livro"
                        value={idlivro}
                        onChange={e => setId(e.target.value)}
                    /> 

                    <input 
                        placeholder="Nome do livro"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    /> 

                    <input 
                        placeholder="Editora"
                        value={editora}
                        onChange={e => setEditora(e.target.value)}
                    /> 

                    <input 
                        placeholder="ISBN"
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}
                    /> 

                    <input 
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                    /> 

                    <input 
                        placeholder="Assunto do Livro"
                        value={assunto}
                        onChange={e => setAssunto(e.target.value)}
                    /> 

                    <input 
                        placeholder="Autor do Livro"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                    /> 

                    <button className="button" type="submit">Cadastrar Livro</button>
                </form>
    

            </div>
        </div>

    );
}

export default CadastroLivro;