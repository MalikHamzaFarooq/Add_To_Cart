import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function ImgMediaCard({item}) {
  const {setNotification,notification,cartDAta,setCArtData}=useContext(AppContext);
  
                                                           //if initial value 0 it doesn't get as notification so we have tp defibe type
  // console.log("item is ",item);                        // setNotification(prevCount => (typeof prevCount === 'number' ? prevCount + 1 : 0)); 
  
  
  const addToCart = () => {
    const checkIndex = cartDAta.findIndex((cartItem) => cartItem._id === item._id);
    console.log('checkIndex', checkIndex)
    if (checkIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const newCart = [...cartDAta];
      newCart[checkIndex].quantity += 1;
      console.log('newCart', newCart)
      setCArtData(newCart);
      setNotification(prev=>prev+1);    

      
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCArtData([...cartDAta, { ...item, quantity: 1 }]);
      setNotification(prev=>prev+1);    
    }
  };                       
  

                   //otherwise this will work initial value is not 0 
  // setCArtData([...cartDAta,item]);

console.log('cart data',cartDAta);

  return (

    <Container>
  
   
    <Card sx={{ maxWidth: 345,mt:'24%' }}>

      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.img}
  
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'space-between'}}>

        <Button size="small" variant='contained' onClick={addToCart}>ADD TO CART</Button>
        <Button size="medium" >{item.price}</Button>
      </CardActions>
    </Card>
 
  
    </Container>
  );
}