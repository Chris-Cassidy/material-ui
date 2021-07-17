import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []) // We give the second argument an empty array [] to tells the app to run it once at initilization of the components

  return (
    <Container>
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
