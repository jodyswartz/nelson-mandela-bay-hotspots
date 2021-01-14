import React from "react";
import "./App.css";
import Covid19 from "./components/Covid19";
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

function App() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
     <Collapse in={open}>
        <Alert variant="filled" severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         Disclaimer: The COVID-19 data is collected from Nelson Mandela Bay Municipality website. I only update the data once there is an official report or statement. For any further infomation please visit https://www.nelsonmandelabay.gov.za/
        </Alert>
      </Collapse>
      <Covid19 />
    </div>
  );
}

export default App;
