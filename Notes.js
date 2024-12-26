import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  return (
    <div className="notes">
      <h2>Quick Notes</h2>
      <Form.Group controlId="noteInput">
        <Form.Control
          as="textarea"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your note here..."
        />
      </Form.Group>
      <Button className="my-2" onClick={addNote} variant="success">
        Add Note
      </Button>
      <ul>
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
