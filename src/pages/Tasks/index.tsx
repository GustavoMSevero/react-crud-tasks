import React, { useState, useEffect} from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import api from '../../services/api';

import moment from 'moment';

import './style.css'

interface ITask {
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}

const Tasks: React.FC = () => {

    const [tasks, setTasks] = useState<ITask[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadTasks();
    }, [])

    async function loadTasks() {

        // const response = await api.get('/tasks')
        // console.log(response)
        // setTasks(response.data)

    }

    function formatDate(date: Date) {
        return moment(date).format("DD/MM/YYYY");
    }

    function newTask() {
        navigate('/tarefas_cadastro');
    }

  return (
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Tasks page</h1>
                <Button variant="dark" size="sm" onClick={newTask}>Nova Tarefa</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Data de Atualização</th>
                    <th>Status</th>
                    <th>Ação</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tasks.map(task => {
                            <tr key={task.id} >
                                <td>{ task.id }</td>
                                <td>{ task.title }</td>
                                <td>{ formatDate(task.updated_at) }</td>
                                <td>
                                    <Badge bg={ task.finished ? "success" : "warning" }>
                                        { task.finished ? "FINALIZADO" : "PENDENTE" }
                                    </Badge>
                                </td>
                                <td>
                                    <Button size="sm">Editar</Button>{' '}
                                    <Button size="sm" variant="success">Finalizar</Button>{' '}
                                    <Button size="sm" variant="info">Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger">Remover</Button>{' '}
                                </td>
                             </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
  );
}

export default Tasks;