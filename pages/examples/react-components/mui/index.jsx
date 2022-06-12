/*

mui = Material UI

https://mui.com/material-ui/getting-started/overview/

Note that mui should already be installed in this repl

Component docs:
https://mui.com/material-ui/react-button/

*/

import Button from '@mui/material/Button';

export default function MuiExample() {
  return (
    <div>
      
      <div>
        <p>Buttons</p>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </div>
  )
}



