import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../services/api';

// instalar axios: npm install axios
// criar componente para listar livros

function Livro() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        api.get('books',{}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Livros</h1>
            <ul>
                {
                    livros.map(livro => (
                        <li>
                            <p>Id: {livro.idlivro}</p>
                            <p>Nome: {livro.nome}</p>
                            <p>Editora: {livro.editora}</p>
                            <p>Isbn: {livro.isbn}</p>
                            <p>Quantidade: {livro.quantidade}</p>
                            <p>Assunto: {livro.assunto}</p>
                            <p>Autor: {livro.autor}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Livro;