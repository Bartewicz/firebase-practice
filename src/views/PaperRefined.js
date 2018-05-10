import React from 'react'

import Paper from 'material-ui/Paper'

const styles = {
  paper: {
    margin: '1rem',
    padding: '1rem'
  }
}

const PaperRefined = (props) => (
  <Paper style={styles.paper}>
    {props.children}
  </Paper>
)

export default PaperRefined