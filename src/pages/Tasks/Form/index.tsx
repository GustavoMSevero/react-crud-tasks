import React from 'react';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

import api from '../../../services/api';

import './style.css'

interface ITask {
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}

const Form: React.FC = () => {

  return (
        <div className="container">
            <br />
            <div className="task-header">
                <h3>New Task</h3>
                <Button variant="dark" size="sm">Voltar</Button>
            </div>
            <br />
            <div className="conatiner">
                <Form>
                    <FormGroup className="mb-3">
                        <FormLabel>Title</FormLabel>
                        <FormControl type="text" />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <FormLabel>Descripion</FormLabel>
                        <FormControl as="textarea" rows={3} />
                    </FormGroup>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
  );
}

export default Form;