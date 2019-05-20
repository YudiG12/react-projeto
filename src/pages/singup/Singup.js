import React from 'react'
import {Card, Grid, Button, FormControl, withStyles, InputLabel, Input} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './styles.css'
import logo from './txtlogo-deitado.png'
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    cardResponsive: {
        backgroundColor: '#383c42',
        padding: '30px',
        [theme.breakpoints.only('xs')]: {
        backgroundColor: '#2d3035',
        boxShadow: 'none',
        padding: '0',
      },
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssLabel: {
      color: '#96a0a0',
      '&$cssFocused': {
        color: red[500],
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: red[500],
      },
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: red[500],
      },
    },
    notchedOutline: {},
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    input: {
      color: '#96a0a0',
      borderBottom: '1px solid #96a0a0',
    },
  });

function Singup(props) {
    const { classes } = props;
    return (
        <Grid style={{height: '100vh'}} container direction="row" justify="center" alignItems="center">
            <Card className={classes.cardResponsive} style={{ paddingBottom:'0', maxWidth:'400px'}}>
                <Grid  container direction="row" justify="center" alignItems="center">
                    <img alt='' style={{width:'100%', margin:'3%'}}  src={logo}/><br/>
                    <FormControl style={{marginLeft: '11%', marginRight: '11%', marginTop: '-20px'}} fullWidth className={classes.margin}>
                        <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                        CPF ou CNPJ
                        </InputLabel>
                        <Input inputProps={{className: classes.input}} id="user" classes={{ underline: classes.cssUnderline }} />
                    </FormControl>
                    <FormControl style={{marginLeft: '11%', marginRight: '11%', marginTop: 'px'}} fullWidth className={classes.margin}>
                        <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                        Senha
                        </InputLabel>
                        <Input inputProps={{className: classes.input}} type="password" id="pass" classes={{ underline: classes.cssUnderline }} />
                    </FormControl>
                    <FormControl style={{marginLeft: '11%', marginRight: '11%', marginTop: 'px'}} fullWidth className={classes.margin}>
                        <InputLabel classes={{ root: classes.cssLabel, focused: classes.cssFocused }}>
                        Confirme sua Senha
                        </InputLabel>
                        <Input inputProps={{className: classes.input}} type="password" id="passConf" classes={{ underline: classes.cssUnderline }} />
                    </FormControl>                    
                    <Button id='button' component={Link} to='/login' type='submit' style={{fontWeight: '300', a: 'none', margin:'11%',marginTop:'10%', marginBottom:'5%', height:'50px', borderRadius:'0', boxShadow:'none', backgroundColor:'#ff3f3f'}} fullWidth variant="contained" color="secondary">
                        Inscreva-se
                    </Button>
                    </Grid>
            </Card>
        </Grid>
    )
}

Singup.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Singup);