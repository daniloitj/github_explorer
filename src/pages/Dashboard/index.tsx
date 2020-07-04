import React from 'react';

import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github explorer" />
      <Title>Explore respositórios no Github</Title>

      <Form hasError={false}>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <Link to={`repository/repository.full_name`}>
          <img
            alt="https://avatars3.githubusercontent.com/u/715825?s=460&u=6f8bc138ea5d5f2de5e92093ca828bf962c5543a&v=4"
            src="https://avatars3.githubusercontent.com/u/715825?s=460&u=6f8bc138ea5d5f2de5e92093ca828bf962c5543a&v=4"
          />
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Repositories>
    </>
  );
};

export default Dashboard;
