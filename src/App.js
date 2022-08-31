import './App.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid, Link, Typography } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {

  return (
   
    <div>
      <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <CottageOutlinedIcon />
      </Avatar>
      <Typography component="hi" variant='h5' >
        Sign in
      </Typography>
      <TextField 
        label='Email Address' 
        margin='normal'
        required
        fullWidth
        name='email'
        autoComplete='email' ></TextField>
      <TextField 
        label='Password' 
        type="password"
        required
        fullWidth
        name='password'
        autoComplete='Current-password'
        auto ></TextField>
      <FormControlLabel 
      control={<Checkbox value="Remember" 
      color='primary' />}
      label='아이디 기억하기'
      />
  
      <Button 
        type='submit'
        variant='contained'
        fullWidth
        sx={{mt : 3, mb:2 }} >로그인</Button>
      <Grid container>
        <Grid item xs  >
          <Link>비밀번호 찾기</Link>
        </Grid>
        <Grid>
          <Link>회원 가입</Link>
        </Grid>
      </Grid>
      </Box>
      </Container>
    </div>
    
  );
}

export default App;
