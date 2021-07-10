import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashBoardSVG from '../assets/dashboard.svg';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {BLOOD_BANK_ADDRESS,BLOOD_BANK_ABI, CONTRACT_OWNER} from '../SmartContractConfig.js'
import {getBlooodGroup} from '../util/Util';

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        padding: 30,
        alignItems: 'end',
        flex: 2
    },
    left : {
        flex : 1,
        padding: 50
    },
    right : {
        flex : 1
    },
    imgSVG : {
        width: 600,
        height: 600
    },
    card : {
        minWidth: 500,
        marginTop: 30
    }
  }));

const Dashboard = ({account}) => {
    const classes = useStyles();

    const [stats,setStats] = React.useState({})

    React.useEffect(() => {
        loadStats(account)
    },[account])

    const loadStats =async (acc) => {
        console.log('Acc : '+acc)
        if(acc){
            try{
                const bloodBankContract = new window.web3.eth.Contract(BLOOD_BANK_ABI, BLOOD_BANK_ADDRESS)
                bloodBankContract.defaultAccount = acc;
                const bloods = []
                for(let i = 0; i < 8; i++){
                        const count = await bloodBankContract.methods.bloodGroup(
                            i
                         )
                         .call()
                        // console.log('Type : '+ i + ' Count : '+count)
                         bloods.push(count)
                }
                const totalSupply = await bloodBankContract.methods.totalSupply().call()

                const totalAgency = await bloodBankContract.methods.TotalNoOfAgencies().call()
                
                setStats({ bloods, totalSupply, totalAgency})
              
                
            }catch(error){
                console.log(error)
            }
            
        }
    }

    return (
        <div
        className={classes.root}
        >
           <div className={classes.left}>
           <Card className={classes.card}>
                    <CardContent>  
                                        <Typography variant="h5" component="h2">
                                         Total Agency Registered
                                        </Typography>
                                        <Typography variant="h3" component="h2">
                                         {stats.totalAgency}
                                        </Typography>
                                    </CardContent>       
                </Card>
           <Card className={classes.card}>
                    <CardContent>  
                                        <Typography variant="h5" component="h2">
                                         Total Blood Supply
                                        </Typography>
                                        <Typography variant="h3" component="h2">
                                        {stats.totalSupply}
                                        </Typography>
                                    </CardContent>       
                </Card>
           {stats.bloods && <Card className={classes.card}>
                    <CardContent>  
                                        <Typography variant="h5" component="h2">
                                         Verified Bloods
                                        </Typography> 
                                        <Typography variant="h7" component="h5">
                                         {stats.bloods.map((item,index) => {
                                             return ''+ getBlooodGroup(index) + " : " + item + ' '
                                         })}
                                        </Typography>
                                    </CardContent>       
                </Card>}
           </div>
           <div className={classes.right}>
                    <img src={DashBoardSVG} className={classes.imgSVG} />
           </div>
        </div>
    );
}

export default Dashboard;
