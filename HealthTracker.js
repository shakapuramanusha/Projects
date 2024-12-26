import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const HealthTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [exerciseMinutes, setExerciseMinutes] = useState(0);

  return (
    <div className="health-tracker">
      <h2>Health Tracker</h2>
      <Form>
        <Form.Group controlId="waterIntake">
          <Form.Label>Water Intake (Liters)</Form.Label>
          <Form.Control
            type="number"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exerciseMinutes" className="my-2">
          <Form.Label>Exercise (Minutes)</Form.Label>
          <Form.Control
            type="number"
            value={exerciseMinutes}
            onChange={(e) => setExerciseMinutes(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" className="mt-2">
        Save Progress
      </Button>
    </div>
  );
};

export default HealthTracker;
